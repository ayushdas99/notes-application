const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')
const User = require('../model/userModel')

const getGoals = (req, res) => {
    const goals = Goal.find()
    res.status(200).json({ message: 'gaolsls' })
}

const setGoal = asyncHandler(async(req,res) => {
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

module.exports = {
    getGoals,
}