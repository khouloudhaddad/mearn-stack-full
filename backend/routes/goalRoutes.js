const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

router.get('/').get(getGoals).post(setGoal)

router.get('/:id').delete(deleteGoal).put(updateGoal)


module.exports = router