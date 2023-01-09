// specify what is required for the TodoList to be called upon.
const TodoList = require('../src/todolist.js')
// create a new todo list item and test to see if it
// if it is in the array. If it is not, then add it to the
// array and return the updated array.
describe('TodoList', () => {
  it('creates a todo item', () => {
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      isComplete: false
    }
    // execute to get expected result
    const result = todoList.createTodo('turn the heating on!')
    // verify the result the result
    expect(result).toEqual(expected)
  })

  // retrieve the items from the todo list
  it('gets Todo List', () => {
    // construct and show expected outcome
    const todoList = new TodoList()

    todoList.createTodo('turn the heating on!')
    todoList.createTodo('grab a blanket')
    // return specified items, with their id number, the corresponding text,
    // and their completion status
    const expected = [
      {
        id: 1,
        text: 'turn the heating on!',
        isComplete: false
      },
      {
        id: 2,
        text: 'grab a blanket',
        isComplete: false
      }
    ]
    // execute to get expected result
    const result = todoList.getTodoList()
    // verify the result
    expect(result).toEqual(expected)
  })
  // set a task to have its completion status updated.
  it('sets task to Complete via ID', () => {
    // construct and show expected outcome
    const todoList = new TodoList()

    todoList.createTodo('turn the heating on!')

    const expected = {
      id: 1,
      text: 'turn the heating on!',
      isComplete: true
    }
    // execute to get expected result
    const result = todoList.setItemComplete(1)
    // verify the result
    expect(result).toEqual(expected)
  })
  // retrieve all completed items from the todo array
  it('gets all complete items', () => {
    // construct and show expected outcome
    const todoList = new TodoList()

    todoList.createTodo('turn the heating on!')
    todoList.createTodo('grab a blanket')
    todoList.createTodo('grab some socks')
    todoList.setItemComplete(1)
    todoList.setItemComplete(3)
    // expect return to be the 2 specified array items.
    const expected = [
      {
        id: 1,
        text: 'turn the heating on!',
        isComplete: true
      },
      {
        id: 3,
        text: 'grab some socks',
        isComplete: true
      }
    ]
    // execute to get expected result
    const result = todoList.getCompleteItems()
    // verify the result
    expect(result).toEqual(expected)
  })

  it('gets all incomplete items', () => {
    // construct and show expected outcome
    const todoList = new TodoList()

    todoList.createTodo('turn the heating on!')
    todoList.createTodo('grab a blanket')
    todoList.createTodo('grab some socks')
    todoList.setItemComplete(1)

    const expected = [
      {
        id: 2,
        text: 'grab a blanket',
        isComplete: false
      },
      {
        id: 3,
        text: 'grab some socks',
        isComplete: false
      }
    ]
    // execute to get expected result
    const result = todoList.getIncompleteItems()
    // verify the result
    expect(result).toEqual(expected)
  })

  it('search for Item via ID', () => {
    // construct and show expected outcome
    const todoList = new TodoList()

    todoList.createTodo('turn the heating on!')
    todoList.createTodo('grab a blanket')
    todoList.createTodo('grab some socks')

    const expected = {
      id: 2,
      text: 'grab a blanket',
      isComplete: false
    }
    // execute to get expected result
    const result = todoList.searchTodoList(2)
    // verify the result
    expect(result).toEqual(expected)
  })

  it('invalid search for Item with that ID', () => {
    // construct and show expected outcome
    const todoList = new TodoList()

    todoList.createTodo('turn the heating on!')
    todoList.createTodo('grab a blanket')
    todoList.createTodo('grab some socks')

    const expected = 'Sorry, this item cannot be found'
    // execute to get expected result
    const result = todoList.searchTodoList(5)
    // verify the result
    expect(result).toEqual(expected)
  })

  it('remove an Item via ID', () => {
    // construct and show expected outcome
    const todoList = new TodoList()

    todoList.createTodo('turn the heating on!')
    todoList.createTodo('grab a blanket')
    todoList.createTodo('grab some socks')

    const expected = [
      {
        id: 1,
        text: 'turn the heating on!',
        isComplete: false
      },
      {
        id: 2,
        text: 'grab a blanket',
        isComplete: false
      }
    ]
    // execute to get expected result
    const result = todoList.removeItem(3)
    // verify the result
    expect(result).toEqual(expected)
  })
})
