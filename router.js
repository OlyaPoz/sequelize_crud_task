const { Router } = require('express');
const UserController = require('./controller/user.controller');
const TaskController = require('./controller/task.controller');
const { checkUser } = require('./middlewares/user.mw');
const router = Router();

router.get('/users', UserController.getAllUsers);
router.get('/users', UserController.getOneUser);
router.post('/user', UserController.createUser);
router.patch('/user/:id', UserController.updateUser);
router.patch('/user-v2/:id', checkUser, UserController.updateUserInstance);
router.delete('/user/:id', UserController.deleteUser);

router.get('/tasks', TaskController.getAllTasks);
router.get('/user/:id/task', checkUser, TaskController.getUserTasks);
router.post('/task', TaskController.createTask);
router.patch('/task/:id', TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);

module.exports = router;
