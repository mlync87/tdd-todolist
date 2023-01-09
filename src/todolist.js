class TodoList {
  constructor() {
    this.idCounter = 1
    this.itemsArray = []
  }

  // add a new item to the array by entering necessary parameters.

  createTodo(description) {
    const newItem = {
      idCounter: this.idCounter++,
      text: description,
      isComplete: false
    }
    // use .push to enter this item into the array
    this.itemsArray.push(newItem)

    return newItem
  }
  // to set an item as completed, comb through data for item matching specifications and
  // label them as complete

  setItemComplete(idCounter) {
    for (let i = 0; i < this.itemsArray.length; i++) {
      if (this.itemsArray[i].idCounter === idCounter) {
        this.itemsArray[i].isComplete = true

        // when necessary parameters for completion are met, return
        // it as completed
        return this.itemsArray[i]
      }
    }
  }
  // to retrieve completed task items in an array, comb through data, and
  // if they meet criteria for completion, return in an array

  returnCompleteItemArray() {
    const completeitemsArray = []

    for (let i = 0; i < this.itemsArray.length; i++) {
      if (this.itemsArray[i].isComplete) {
        completeitemsArray.push(this.itemsArray[i])
      }
    }

    return completeitemsArray
  }

  // to retrieve incomplete items return items that do not meet completion criteria.
  returnIncomplateItemArray() {
    const incompleteitemsArray = []

    for (let i = 0; i < this.itemsArray.length; i++) {
      if (!this.itemsArray[i].isComplete) {
        incompleteitemsArray.push(this.itemsArray[i])
      }
    }

    return incompleteitemsArray
  }

  // To search the Todo list, and return an error message, comb through the data
  // and if no item matching specs is found, return a message stating that it
  // does not exist.

  searchTodoList(idCounter) {
    for (let i = 0; i < this.itemsArray.length; i++) {
      if (this.itemsArray[i].idCounter === idCounter) {
        return this.itemsArray[i]
      }
    }

    return 'Sorry, this item cannot be found'
  }

  // To remove an item, comb through data to find item that matches secified criteria,
  // and use splice to remove item that matches those specifications.
  removeItem(idCounter) {
    for (let i = 0; i < this.itemsArray.length; i++) {
      if (this.itemsArray[i].idCounter === idCounter) {
        this.itemsArray.splice(i, 1)
        return this.itemsArray
      }
    }
  }
  // retrieve toDo list in the form of an array when called upon

  getTodoList() {
    return this.itemsArray
  }
}

// export the TodoList to be called upon in spec

module.exports = TodoList
