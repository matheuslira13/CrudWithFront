const HistoricModel = require("../models/historicModels");

class HistoricController {
  async store(req, res) {
    const { type, date, hours, value } = req.body;

    const createdHistoric = await HistoricModel.create(req.body);

    if (!type || !date || !hours || !value) {
      return res
        .status(400)
        .json({ message: "E necessario preencher os campos" });
    }

    return res.status(200).json(createdHistoric);
  }

  async index(req, res) {
    const historic = await HistoricModel.find();

    return res.status(200).json(historic);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const historicFiltred = await HistoricModel.findById(id);

      if (!historicFiltred) {
        return res.status(404).json({ message: "Lamento deu ruim" });
      }
      return res.status(200).json(historicFiltred);
    } catch (error) {
      return res.status(404).json({ message: "verifique se é uma URL valida" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const historicFiltredAndUpdate = await HistoricModel.findByIdAndUpdate(
        id,
        req.body
      );

      if (!historicFiltredAndUpdate) {
        return res.status(404).json({ message: "nao foi encontrado" });
      }
      return res.status(200).json({ message: "historico atualizado" });
    } catch (error) {
      return res.status(404).json({ message: "Lamento deu ruim" });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const historicFiltredAndDeleted = await HistoricModel.findByIdAndDelete(
        id
      );

      if (!historicFiltredAndDeleted) {
        return res.status(404).json({ message: "Lamento deu ruim" });
      }
      return res.status(200).json({ message: "Excluido com sucesso" });
    } catch (error) {}
  }
}

module.exports = new HistoricController();
