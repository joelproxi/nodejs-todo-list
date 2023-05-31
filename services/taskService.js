const TaskModel = require("../models/taskModel")

module.exports.addTask = async function(data) {
    try {
        const task = await TaskModel({
            title: data.title,
            content: data.content,
        });
        let res = await task.save();
        return res;
    } catch (error) {
        console.error("error in task service");
        throw new Error(error);
    }
}

module.exports.getTasks = async () => {
    try {
        const tasks = await TaskModel.find().select();
        return tasks;
    } catch (error) {
        console.error("Error in file taskService: " + error.message);
        throw new Error(error);
    }
}

module.exports.getTask = async (data) => {
    try {
        const task = await TaskModel.findById(data.params.id).select();
        return task.toObject();
    } catch (error) {
        console.error("Error file taskservice.js", error.message);
        throw new Error(error);
    }
};

