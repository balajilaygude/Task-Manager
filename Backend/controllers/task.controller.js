const mongoose = require("mongoose");
const taskModel = require("../models/task.model");

async function getAllTask(req, res) {
  try {
    const tasks = await taskModel.find();
    return res.status(200).json({
      tasks,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
}

async function createTask(req, res) {ackenf
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        error: "Plase fill all Fields",
      });
    }
    const newtask = await taskModel.create({ title, description });

    res.status(200).json({
      message: "Task created Successfully",
    });
  } catch (error) {
    res.status(400).json({ error });
  }
}

async function updateTask(req,res) {
  try {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;
    const upTask = await taskModel.findByIdAndUpdate(
      id,
      { title, description, isComplete },
      { new: true },
    );
    if (!upTask) {
      return res.status(400).json({
        error: "Task Not Found",
      });
    }
    res.status(200).json({
      upTask,
      message: "Task Update successfully",
    });
  } catch (error) {
    res.status(400).json({error});
  }
}

async function deletetask(req, res) {
  try {
    const { id } = req.params;
    const delTask = await taskModel.findByIdAndDelete(id);
    if (!delTask) {
      return res.status(400).json({
        error: "Task Not Found",
      });
    }
    res.status(200).json({
      message: "Task Deleted Succussfully",
    });
  } catch (error) {
    res.status(400).json({ error });
  }
}

module.exports = { getAllTask, createTask, updateTask, deletetask };
