const asyncHandler = require('express-async-handler')

const Todos = require('../models/todoModel')

const getTodos = asyncHandler(async (req, res) => {
  const todo = await Todos.find()

  res.status(200).json(todo)
})

const createTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: 'Please add a todo' })
    throw new Error('Please add a text field')
  }

  const todo = await Todos.create({
    text: req.body.text,
    completed: false,
  })

  res.status(200).json(todo)
})

const updateTodo = asyncHandler(async (req, res) => {
  const todo = Todos.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error('Todo not found')
  }

  const updatedTodo = await Todos.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedTodo)
})

const markTodo = asyncHandler(async (req, res) => {
  const todo = Todos.findById(req.params.id)

  console.log(req.body.completed)

  if ((req.body.completed != true) & (req.body.completed != false)) {
    res.status(400).json({ message: 'Please mark complete or not' })
    throw new Error('Please add a text field')
  }

  const updatedTodo = await Todos.findByIdAndUpdate(
    req.params.id,
    {
      completed: req.body.completed,
    },
    { new: true }
  )

  res.status(200).json(updatedTodo)
})

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todos.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error('Todo not found')
  }

  todo.remove()

  res.status(200).json(req.params.id)
})

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  markTodo,
  deleteTodo,
}
