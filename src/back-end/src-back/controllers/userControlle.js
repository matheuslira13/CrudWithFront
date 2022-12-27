const userModel = require("../models/userModels");

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
  async teste({ body }, res) {
    const { value, email, id } = body;

    // const verifyIfIsSameEmail = await userModel.findOne({ email: email });

    const getUser = await userModel.findById(id);

    try {
      const updateData = await userModel.insertMany([getUser, body]);
      return res.status(200).json(updateData);
    } catch (error) {
      return res.status(400).json({ message: `Error ${error}` });
    }
  }
}

module.exports = new UserController();
