const router = require('express').Router();
const { addTask, getTasks, getTask, updateTask } = require('../controllers/taskController');


router.post('', addTask);
router.get("", getTasks);
router.get("/:id", getTask);
router.put("/:id", updateTask);

module.exports = router;