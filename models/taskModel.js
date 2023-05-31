const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
            trim: true,
        },
        content: {
            type: String,
            required: true,
            maxLength: 500,
        }

    },
    {
        timestamps: true,
        toOject: {
            transform: (doc, ret, oprions) => {
                ret.id = ret.id,
                delete ret._id,
                delete ret.__v,
                delete ret
            }
        }
    }
);

module.exports = mongoose.model('TaskModel', tasksSchema)