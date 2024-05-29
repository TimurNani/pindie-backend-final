const gamesRouter = require("express").Router();

const {
createGame,
findGameById,
updateGame,
findAllGames,
deleteGame,
checkEmptyFields,
checkIfUsersAreSafe,
checkIfCategoriesAvaliable,
checkIsGameExists,
checkIsVoteRequest
} = require("../middlewares/games");

const {
sendGameUpdated,
sendGameCreated,
sendGameDeleted,
sendAllGames,
sendGameById
} = require("../controllers/games");

const { checkAuth } = require("../middlewares/auth");


gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendGameCreated);
gamesRouter.put("/games:id", findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, updateGame, sendGameUpdated);
gamesRouter.delete("/games:id", checkAuth, deleteGame, sendGameDeleted);
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games:id", findGameById, sendGameById);

module.exports = gamesRouter; 