const { isValidObjectId } = require("mongoose")
const ObjectID = require("mongoose").Types.ObjectId
const { addTask, getTasks, getTask } = require("../services/taskService")

module.exports.addTask = async (req, res, next) => {
    let response = {}
    try {
        const task = await addTask(req.body)
        response = {
            status: 200,
            message: "Task added successfully",
            body: task 
        }
    } catch (error) {
        response = {
          status: 400,
          message: error.message,
          body: error,
        };
    }
    return res.status(response.status).send(response); 
}

module.exports.getTasks = async (req, res, next) => {
    let response = {};
    try {
        const tasks = await getTasks();
        response = {
            status: 200,
            message: "Tasks were successfully retrieved",
            body: tasks
        }
    } catch (error) {
         response = {
           status: 400,
           message: error.message,
           body: error,
         };
         console.error("Error in file taskController", error.message);
    }
    return res.status(response.status).send(response);
}

module.exports.getTask = async (req, res) => {
    if(!isValidObjectId(req.params.id)){
        return res.status(400).send({message: "Invalid id"});
    }
    let response = {};
    try {
        const task = await getTask(req);
        response = {
            status: 200,
            message: "Task is successfully retrieved",
            body: task
        }
    } catch (error) {
         response = {
           status: 500,
           message: error.message,
         };
    }
    return res.status(response.status).send(response);
};