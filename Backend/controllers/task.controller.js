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

async function createTask(req, res) {
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

module.exports = { getAllTask, createTask, updateTask, deletetask };
