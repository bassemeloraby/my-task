const asyncHandler = require('express-async-handler')
const Task = require('../models/taskModel')

// @desc    Get tasks
// @route   GET /api/goals
// @access  public
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
    
    res.status(200).json(tasks)
    // res.json("loooool")
  })


  module.exports = {
    getTasks,
  } 