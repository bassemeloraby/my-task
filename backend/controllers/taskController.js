const asyncHandler = require('express-async-handler')
const Task = require('../models/taskModel')

// @desc    Get tasks
// @route   GET /api/goals
// @access  public
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
    
    res.status(200).json(tasks)
  })

  // @desc    Set task
// @route   POST /api/goals
// @access  public

const setTask = asyncHandler(async(req, res) => {
  if(!req.body.text){
    res.status(400).json({message:"please add a text"})
  }
  const task = await Task.create({
    text: req.body.text,
  })
  res.status(200).json(task)
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    res.status(400).json({message:"Task not found"})
    
  }
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedTask)
})

// @desc    Delete Task
// @route   DELETE /api/tasks/:id
// @access  public
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    res.status(400).json({message:"Task not found"})
  }
  await task.remove()

  res.status(200).json({ id: req.params.id })
})

  module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
  } 