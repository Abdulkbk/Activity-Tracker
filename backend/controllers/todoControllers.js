const getTodos = (req, res) => {
  res.status(200).json({ message: 'Get Todos' })
}

const createTodo = (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: 'Please add a todo' })
    throw new Error('Please add a text field')
  }
  res.send('Creating Todos')
}

const updateTodo = (req, res) => {
  res.status(200).json({ message: 'Get Todos' })
}

const markTodo = (req, res) => {
  res.status(200).json({ message: 'Get Todos' })
}

const deleteTodo = (req, res) => {
  res.status(200).json({ message: 'Get Todos' })
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  markTodo,
  deleteTodo,
}
