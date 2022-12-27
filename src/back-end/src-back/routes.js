const { Router } = require("express");
const validateRegister = require("./middleware/validadeRegisterSignUp");

const HistoricController = require("./controllers/historicControlle");

const UserController = require("./controllers/userControlle");

const routes = Router();

routes.get("/health", (req, res) => {
  return res.status(200).json({ message: " Rota funcionando" });
});

routes.post("/historic", HistoricController.store);
routes.get("/historic", HistoricController.index);
routes.get("/historic/:id", HistoricController.show);
routes.put("/historic/:id", HistoricController.update);
routes.delete("/historic/:id", HistoricController.destroy);
// signIN & signUP
routes.post("/signUp", UserController.signUp);
routes.post("/signIn", UserController.signIn);
routes.get("/getUsers", UserController.getUsers);
routes.get("/validate/:id", UserController.validateToken);
routes.delete("/deleteUser/:id", UserController.destroyUser);
routes.post("/teste", UserController.teste);

module.exports = routes;
