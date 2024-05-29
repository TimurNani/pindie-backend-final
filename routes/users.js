const usersRouter = require('express').Router();

const {
createUser,
findAllUsers,
updateUser,
deleteUser,
checkIsUserExists,
findUserById,
checkEmptyNameAndEmailAndPassword,
hashPassword
} = require('../middlewares/users');

const {
sendUserById,
sendUserUpdated,
sendUserCreated,
sendUserDeleted,
sendAllUsers,
sendMe
} = require('../controllers/users');

const { checkAuth }  = require('../middlewares/auth');


// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendUserCreated);
usersRouter.put('/users/:id', checkEmptyNameAndEmailAndPassword, checkAuth, updateUser, sendUserUpdated);
usersRouter.delete('/users/:id', deleteUser, sendUserDeleted);
usersRouter.get("/users/:id", checkAuth, findUserById, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;