// const listsContainer = document.querySelector("[data-lists]");
// const newListForm = document.querySelector("[data-new-list-form]");
// const newListInput = document.querySelector("[data-new-list-input]");
// const deleteListBtn = document.querySelector("[data-delete-list-btn]");
// const listDisplayContainer = document.querySelector(
//   "[data-list-display-container]"
// );
// const listTitle = document.querySelector("[data-list-title]");
// const listCount = document.querySelector("[data-list-count]");
// const tasksContainer = document.querySelector("[data-tasks]");
// const taskTemplate = document.getElementById('task-template')
// const newTaskForm = document.querySelector("[data-new-task-form]")
// const newTaskInput = document.querySelector("[data-new-task-input]")
// const clearCompleteTaskBtn = document.querySelector("[data-clear-complete-task-btn]")

// const LOCAL_STORAGE_LIST_KEY = "task.lists";
// const LOCAL_STORAGE_LIST_ID_KEY = "task.selectedListId";
// let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
// let selectedListId = localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY);
// console.log(listsContainer, "listsContainer")
// // listsContainer.addEventListener("click", (e) => {
// //   console.log(e.target);
// //   if (e.target.tagName.toLowerCase() === "li") {
// //     selectedListId = e.target.dataset.listId;
// //     saveAndRender();
// //   }
// // });

// tasksContainer.addEventListener('click', e => {
//     if (e.target.tagName.toLowerCase() === 'input') {
//         const selectedList = lists.find(list => list.id === selectedListId)
//         const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
//         selectedTask.complete = e.target.checked
//         save()
//         renderTaskCount(selectedList)
//     }
// })

// clearCompleteTaskBtn.addEventListener('click', e => {
//     const selectedList = lists.find(list => list.id === selectedListId)
//     selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
//     saveAndRender()
// })

// deleteListBtn.addEventListener("click", (e) => {
//   lists = lists.filter((list) => list.id !== selectedListId);
//   selectedListId = null;
//   saveAndRender();
// });

// newListForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const listName = newListInput.value;
//   if (listName == null || listName === "") return;

//   const list = createList(listName);
//   newListInput.value = null;
//   lists.push(list);
//   saveAndRender();
// });

// newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const taskName = newTaskInput.value;
//     if (taskName == null || taskName === "") return;
  
//     const task = createTask(taskName);
//     newTaskInput.value = null;
//     const selectedList = lists.find(list => list.id === selectedListId)
//     selectedList.tasks.push(task)
//     saveAndRender();
//   });

// const createList = (name) => {
//   return { id: Date.now().toString(), name: name, tasks: [] };
// };

// const createTask = (name) => {
//     return { id: Date.now().toString(), name: name, complete: false };
//   };

// const saveAndRender = () => {
//   save();
//   render();
// };

// const save = () => {
//   localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
//   localStorage.setItem(LOCAL_STORAGE_LIST_ID_KEY, selectedListId);
// };

// const render = () => {
//   clearElement(listsContainer);
//   renderList()

//   const selectedList = lists.find(list => list.id === selectedListId)

//   if (selectedListId == null) {
//       listDisplayContainer.style.display = 'none'
//   } else {
//         listDisplayContainer.style.display = ''
//         listTitle.innerText = selectedList.name
//         renderTaskCount(selectedList)
//         clearElement(tasksContainer)
//         renderTasks(selectedList)
//   }
// };



// const renderTasks = (selectedList) => {
//     selectedList.tasks.forEach(task => {
//         const taskElement = document.importNode(taskTemplate.content, true)
//         const checkbox = taskElement.querySelector('input')
//         checkbox.id = task.id
//         checkbox.checked = task.complete
//         const label = taskElement.querySelector('label')
//         label.htmlFor = task.id
//         label.append(task.name)
//         tasksContainer.appendChild(taskElement)

//     })
// }

// const renderTaskCount = (selectedList) => {
//     const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
//     const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks'
//     listCount.innerText = `${incompleteTaskCount} ${taskString} remaining`
// }

// const renderList = () => {
//   lists.forEach((list) => {
//     const listElem = document.createElement("li");
//     listElem.dataset.listId = list.id;
//     listElem.classList.add("list-name");
//     listElem.innerText = list.name;
//     if (list.id == selectedListId) {
//       listElem.classList.add("active-list");
//     }
//     listsContainer.appendChild(listElem);
//   });
// };

// const clearElement = (element) => {
//   while (element.firstChild) {
//     element.removeChild(element.firstChild);
//   }
// };

// render();
