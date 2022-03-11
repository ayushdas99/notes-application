const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')
const User = require('../model/userModel')

const getGoals = (req, res) => {
    const goals = Goal.find()
    res.status(200).json({ message: 'gaolsls' })
}

const setGoals = asyncHandler(async(req,res) => {
    if(req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }

    const goal = await Goal.create({
        text: req. body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
  
    if (!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (goal.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedGoal)
  })

  const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
  
    if (!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (goal.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
    await goal.remove()
  
    res.status(200).json({ id: req.params.id })
  })

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}