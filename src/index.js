import { addTask, removeTask } from './services/task.service.js'
import { addButton, taskList, logoImg } from './services/dom.service.js'

import './styles/styles.scss'

import logo from './assets/todo.svg'

// Create logo
logoImg.src = logo

// Event listeners
addButton.addEventListener('click', addTask)
taskList.addEventListener('click', removeTask)
