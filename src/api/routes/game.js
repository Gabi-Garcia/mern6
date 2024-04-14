// const { isAuth } = require("../../middlewares/auth");
// const upload = require("../../middlewares/file");
const { getAllGames, getGameById, createGame, updateGame, deleteGame } = require("../controller/game")

const gamesRoutes = require("express").Router();

gamesRoutes.get("/", getAllGames);
gamesRoutes.get("/:id", getGameById);
gamesRoutes.post("/",createGame);//  [isAuth] // upload.single("cover")
gamesRoutes.put("/:id",updateGame);// [isAuth]// upload.single("cover") 
gamesRoutes.delete("/:id", deleteGame);// [isAuth]

module.exports = gamesRoutes;