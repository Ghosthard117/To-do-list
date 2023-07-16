// wrap DOM necesary elements
const inputBox = document.getElementById('input-box'),
tasksContainer = document.getElementById('tasksContainer')

// add tasks
function addTask() {
  if (inputBox.value === '') {
    alert('You have to write a task!')
  } else {
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    tasksContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }
  inputBox.value = ''
  saveData()
}

// mark as completed
tasksContainer.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
    saveData()
  } 
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove()
    saveData()
  }
}, false)

// save data in localStorage
function saveData() {
  localStorage.setItem('data', tasksContainer.innerHTML)
}

// show saved list of tasks
function showList() {
  tasksContainer.innerHTML = localStorage.getItem('data')
}

// run
showList()