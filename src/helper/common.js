// export const saveToStorage = (data, key) => localStorage.setItem(key, JSON.stringify(data));


// export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));


/* eslint-disable import/no-cycle */
import projectCards from '../projectcard';
import store, { LOCAL_STORAGE_PROJECT_ID_KEY, save } from './data';

export const createProject = (name) => ({ id: Date.now().toString(), name, tasks: [] });

export const createTask = (name, date, description, priority, note) => ({
  id: Date.now().toString(),
  name,
  date,
  description,
  priority,
  note,
  complete: false,
});

export const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

export const taskCount = (selectedProject) => {
  const incompleteTaskCount = selectedProject.tasks.filter(
    (task) => !task.complete,
  ).length;
  return incompleteTaskCount;
};

export const renderTaskCount = (selectedProject) => {
  const incompleteTaskCount = taskCount(selectedProject);
  const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';
  document.querySelector(
    '.project-task-count',
  ).innerText = `${incompleteTaskCount} ${taskString} remaining`;
};

export const renderTasks = (selectedProject, card) => {
  selectedProject.tasks.forEach((task) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add(
      'form-check',
      'border-bottom',
      'pb-2',
      'pt-2',
      'ml-2',
    );
    taskElement.innerHTML = `
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
      <label class="form-check-label" for="defaultCheck1">
        
      </label>
      <small class="due-date"></small>
      <i class="fas fa-edit task-edit float-right pr-3 text-primary" data-task-edit data-toggle="modal" data-target="#editTaskModal" ></i>
      `;

    const checkbox = taskElement.querySelector('input');
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.querySelector('label');
    label.htmlFor = task.id;
    label.append(task.name);
    const dueDate = taskElement.querySelector('small');
    dueDate.innerText = ` | ${task.date}`;
    taskElement.addEventListener('mouseover', () => {
      dueDate.innerHTML = `
      <br>
      Description: ${task.description} <br>
      Due Date: ${task.date} <br>
      Priority: ${task.priority} <br>
      Note: ${task.note}
      `;
    });

    taskElement.addEventListener('mouseout', () => {
      dueDate.innerHTML = `| ${task.date}`;
    });
    card.querySelector('.project-task').appendChild(taskElement);
  });
};

export const renderProjects = () => {
  const projectId = LOCAL_STORAGE_PROJECT_ID_KEY();
  const projects = store();
  const navLinks = document.querySelector('.nav-items');
  navLinks.innerHTML = '';
  projects.forEach((project) => {
    const projectElem = document.createElement('a');
    projectElem.dataset.projectId = project.id;
    projectElem.classList.add('project-name', 'nav-link');
    projectElem.innerText = project.name;
    if (project.id === projectId) {
      projectElem.classList.add('active-project');
    }

    projectElem.addEventListener('click', (e) => {
      const selectedProjectId = e.target.getAttribute('data-project-id');
      // eslint-disable-next-line no-use-before-define
      saveAndRender(projects, selectedProjectId);
    });

    navLinks.appendChild(projectElem);
  });
};

export const render = () => {
  const projects = store();
  const selectedProjectId = LOCAL_STORAGE_PROJECT_ID_KEY();
  const card = projectCards();
  clearElement(document.querySelector('.nav-items'));
  renderProjects();

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );
  if (selectedProjectId === null) {
    card.style.display = 'none';
  } else {
    card.style.display = '';
    card.querySelector('.card-header').innerText = selectedProject.name;
    renderTaskCount(selectedProject);
    clearElement(card.querySelector('.project-task'));
    renderTasks(selectedProject, card);
    clearElement(document.querySelector('.main'));
    document.querySelector('.main').appendChild(card);
  }
};

export const saveAndRender = (projects, selectedProjectId) => {
  save(projects, selectedProjectId);
  render();
};

export const editTask = (currentProject, taskId, taskInfo) => {
  const {
    taskName, taskDate, taskDesc, taskPriority, taskNote, taskComplete,
  } = taskInfo;
  const currentTask = currentProject.tasks.find((task) => task.id === taskId);
  currentTask.name = taskName || currentTask.name;
  currentTask.description = taskDesc || currentTask.description;
  currentTask.date = taskDate || currentTask.date;
  currentTask.priority = taskPriority || currentTask.priority;
  currentTask.note = taskNote || currentTask.note;
  currentTask.complete = taskComplete || currentTask.complete;

  return currentTask;
};

export const deleteProject = (projects, selectedProjectId) => (
  projects.filter((project) => project.id !== selectedProjectId)
);

export const clearCompletedTasks = (selectedProject) => (selectedProject.tasks.filter(
  (task) => !task.complete,
));