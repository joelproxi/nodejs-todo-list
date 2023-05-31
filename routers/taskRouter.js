const router = require('express').Router();
const { addTask, getTasks, getTask } = require('../controllers/taskController');


router.post('', addTask);
router.get("", getTasks);
router.get("/:id", getTask);

module.exports = router;