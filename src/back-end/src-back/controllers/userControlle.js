const userModel = require("../models/userModels");
function updateHistoric(his, body) {
  let updateHistoric = his.push(body);
}

function dataAtualFormatada() {
  var data = new Date(),
    dia = data.getDate().toString(),
    diaF = dia.length == 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = mes.length == 1 ? "0" + mes : mes,
    anoF = data.getFullYear();
  return diaF + "/" + mesF + "/" + anoF;
}

const hoursAndMinutes = () => {
  var data = new Date(),
    hour = data.getHours();
  let hourF = hour.length == 1 ? "0" + hour : hour;
  let minutes = data.getMinutes();
  let minutesF = minutes.length == 1 ? "0" + minutes : minutes;
  return hourF + ": " + minutesF;
};

class UserController {
  async signUp({ body }, res) {
    const { name, password, email } = body;

    const verifyIfIsSameEmail = await userModel.findOne({ email: email });

    if (!name || !password || !email) {
      return res
        .status(400)
        .json({ message: "E necessario preencher os campos" });
    }

    if (verifyIfIsSameEmail) {
      return res.status(400).json({ message: "Por favor digite outro e-mail" });
    }

    try {
      const createdSignUp = await userModel.create(body);
      return res.status(200).json(createdSignUp);
    } catch (error) {
      return res.status(400).json({ message: `Error ${error}` });
    }
  }

  async getUsers(req, res) {
    const getUsers = await userModel.find();

    return res.status(200).json(getUsers);
  }

  async signIn({ body }, res) {
    const { email, password } = body;

    const user = await userModel.findOne({ email: email });

    const verifyPassword = () => {
      if (password !== user.password) {
        return true;
      } else {
        return false;
      }
    };

    if (!user) {
      return res.status(404).json({ message: "Usuario não encontrado" });
    }

    if (verifyPassword()) {
      return res.status(404).json({ message: "Senha incorreta" });
    }

    return res.status(200).json({ token: user.id });
  }

  async validateToken(req, res) {
    try {
      const { id } = req.params;
      const getUser = await userModel.findById(id);

      if (!getUser) {
        return res.status(404).json({ message: "Usuario não encontrado" });
      }
      return res.status(200).json(getUser);
    } catch (error) {
      return res.status(404).json({ message: "verifique se é uma URL valida" });
    }
  }

  async destroyUser(req, res) {
    const { id } = req.params;
    const destroyUser = await userModel.findByIdAndDelete(id);

    if (!destroyUser) {
      return res
        .status(404)
        .json({ message: " Nao foi possivel excluir o usuario" });
    }
    return res.status(200).json({ message: "Deletado com sucesso" });
  }

  async cashout({ body }, res) {
    const { value, email, type, sendEmail } = body;

    const userData = {
      email,
      value,
      type,
      date: dataAtualFormatada(),
      hours: hoursAndMinutes(),
    };

    const getUser = await userModel.findOne({ email: sendEmail });

    const { balance, historic } = getUser;

    if (type === "cash-out") {
      let newValue = balance - value;
      console.log("newbalance", newValue, "value", value);
      var newbalance = { $set: { balance: newValue } };

      let newHistoric = [];

      for (let i = 0; i < historic.length; i++) {
        newHistoric.push(historic[i]);
      }

      newHistoric.push(userData);

      await userModel.updateOne({ balance }, newbalance);

      await userModel.updateOne(
        { historic },
        {
          $set: { historic: newHistoric },
        }
      );

      return res.status(200).json({ message: "Enviado com sucesso" });
    }
    return res.status(404).json({ message: "nao foi" });
  }

  async cashin({ body }, res) {
    const { value, email, type, sendEmail } = body;

    const userData = {
      email: sendEmail,
      value,
      type,
      date: dataAtualFormatada(),
      hours: hoursAndMinutes(),
    };

    const getUser = await userModel.findOne({ email: email });

    const { balance, historic } = getUser;

    if (type === "cash-in") {
      let newValue = parseInt(balance) + parseInt(value);

      var newbalance = { $set: { balance: newValue } };

      let newHistoric = [];

      for (let i = 0; i < historic.length; i++) {
        newHistoric.push(historic[i]);
      }

      newHistoric.push(userData);

      await userModel.updateOne({ balance }, newbalance);

      await userModel.updateOne(
        { historic },
        {
          $set: { historic: newHistoric },
        }
      );

      return res.status(200).json({ message: "Enviado com sucesso" });
    }
    return res.status(404).json({ message: "nao foi" });
  }
}

module.exports = new UserController();
