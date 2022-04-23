const express = require('express')
const router = express.Router()
const {
  getTodos,
  createTodo,
  updateTodo,
  markTodo,
  deleteTodo,
} = require('../controllers/todoControllers')

router.get('/', getTodos)

router.post('/', createTodo)

router.put('/:id', updateTodo)

router.put('/done/:id', markTodo)

router.delete('/:id', deleteTodo)

module.exports = router
