const router = require('express').Router();
const { addTask, getTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');


router.post('', addTask);
router.get("", getTasks);
router.get("/:id", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;