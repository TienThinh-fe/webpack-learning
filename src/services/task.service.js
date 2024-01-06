// taskHandler.js

import { taskInput, addButton, taskList } from './dom.service.js'

// Function to remove a task
export function removeTask(e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove()
  }
}

// Function to add a task
export function addTask(e) {
  e.preventDefault()

  // Check if input is empty or does not contain any letters
  if (!taskInput.value.trim() || !/[a-zA-Z]/.test(taskInput.value)) {
    alert('Please enter a valid task.')
    return
  }

  // Create new task
  const newTask = document.createElement('li')
  const taskName = document.createElement('span')
  const removeButton = document.createElement('button')

  // Set task name and remove button
  taskName.textContent = taskInput.value
  removeButton.textContent = 'Remove'

  // Append task name and remove button to the new task
  newTask.appendChild(taskName)
  newTask.appendChild(removeButton)

  // Append new task to the task list
  taskList.appendChild(newTask)

  // Clear the input field
  taskInput.value = ''
}
