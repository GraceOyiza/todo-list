/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
import {
    saveAndRender, createTask, createProject, renderTaskCount,
    renderProjects, editTask, deleteProject, clearCompletedTasks,
  } from './helper/common';
  import store, { LOCAL_STORAGE_PROJECT_ID_KEY, save } from './helper/data';
  
  export const editTaskEventHandler = (e) => {
    e.preventDefault();
    const selectedProjectId = LOCAL_STORAGE_PROJECT_ID_KEY();
    const editTaskElement = document.querySelector('#editTaskModal');
    const projects = store();
  
    const taskName = e.target.elements[0].value;
    const taskDesc = e.target.elements[1].value;
    const taskDate = e.target.elements[2].value;
    const taskPriority = e.target.elements[3].value;
    const taskNote = e.target.elements[4].value;
    const taskId = e.target.elements[5].value;
  
    const currentProject = projects.find(
      (project) => project.id === selectedProjectId,
    );
    const taskInfo = {
      taskName,
      taskDesc,
      taskDate,
      taskPriority,
      taskNote,
    };
  
    editTask(currentProject, taskId, taskInfo);
  
    saveAndRender(projects, selectedProjectId);
    editTaskElement.querySelector('[data-dismiss="modal"]').click();
  };
  
  export const projectCardEventHandler = (e) => {
    const selectedProjectId = LOCAL_STORAGE_PROJECT_ID_KEY();
  
    const projects = store();
    const editTaskElement = document.querySelector('#editTaskModal');
    renderProjects();
    if (e.target.classList.contains('task-edit')) {
      const taskId = e.target.parentNode.firstElementChild.id;
      const currentProject = projects.find(
        (project) => project.id === selectedProjectId,
      );
      const currentTask = currentProject.tasks.find((task) => task.id === taskId);
      editTaskElement.querySelector('#taskName').value = currentTask.name;
      editTaskElement.querySelector('#taskDesc').value = currentTask.description;
      editTaskElement.querySelector('#taskDate').value = currentTask.date;
      editTaskElement.querySelector('#taskPriority').value = currentTask.priority;
      editTaskElement.querySelector('#taskNote').value = currentTask.note;
      editTaskElement.querySelector('#taskId').value = taskId;
  
      editTaskElement.addEventListener('submit', editTaskEventHandler);
    }
  };
  
  export const projectModalEventHandler = () => {
    const selectedProjectId = LOCAL_STORAGE_PROJECT_ID_KEY();
  
    const projects = store();
    const projectModal = document.querySelector('#projectModal');
  
    projectModal.addEventListener('submit', (e) => {
      e.preventDefault();
      const projectName = e.target.children[0].children[0].value;
      if (projectName == null || projectName === '') return;
      const project = createProject(projectName);
      e.target.children[0].children[0].value = null;
      projects.push(project);
      saveAndRender(projects, selectedProjectId);
      projectModal.querySelector('[data-dismiss="modal"]').click();
    });
  };
  
  export const projectAddEventHandler = () => {
    const projectModalButton = document.querySelector('.plus');
  
    projectModalButton.addEventListener('click', (e) => {
      e.preventDefault();
      projectModalEventHandler();
    });
  };
  
  export const deleteProjectEventHandler = () => {
    let projects = store();
    let selectedProjectId = LOCAL_STORAGE_PROJECT_ID_KEY();
    const createTaskBtn = document.querySelector('#createNewTaskBtn');
  
    projects = deleteProject(projects, selectedProjectId);
    selectedProjectId = projects[0].id;
    createTaskBtn.dataset.target = '';
    saveAndRender(projects, selectedProjectId);
  };
  
  export const createTaskEventHandler = (e) => {
    let selectedProjectId = LOCAL_STORAGE_PROJECT_ID_KEY();
    const projects = store();
    e.preventDefault();
    const taskModal = document.querySelector('#task-form');
    if (!selectedProjectId) {
      document.querySelector('[data-dismiss="modal"]').click();
      return alert('select a project first');
    }
    const taskName = e.target.elements[0].value;
    const taskDesc = e.target.elements[1].value;
    const taskDate = e.target.elements[2].value;
    const taskPriority = e.target.elements[3].value;
    const taskNote = e.target.elements[4].value;
    if (
      taskName == null
        || taskName === ''
        || taskDate == null
        || taskDate === ''
        || taskDesc == null
        || taskDesc === ''
        || taskPriority == null
        || taskPriority === ''
    ) return null;
  
    const task = createTask(taskName, taskDate, taskDesc, taskPriority, taskNote);
    e.target.reset();
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId,
    );
    selectedProjectId = selectedProject.id;
    selectedProject.tasks.push(task);
    saveAndRender(projects, selectedProjectId);
    taskModal.querySelector('[data-dismiss="modal"]').click();
    return null;
  };
  
  export const createTaskBtnEventHandler = () => {
    const selectedProjectId = LOCAL_STORAGE_PROJECT_ID_KEY;
  
    const createTaskBtn = document.querySelector('#createNewTaskBtn');
  
    createTaskBtn.addEventListener('click', () => {
      if (selectedProjectId === null) {
        alert('Select a project first');
      }
    });
  };
  
  export const clearCompletedTaskEventHandler = () => {
    const selectedProjectId = LOCAL_STORAGE_PROJECT_ID_KEY();
    const projects = store();
  
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId,
    );
    selectedProject.tasks = clearCompletedTasks(selectedProject);
    saveAndRender(projects, selectedProjectId);
  };
  
  export const completedTaskEventhandler = (e) => {
    const projects = store();
    const selectedProjectId = LOCAL_STORAGE_PROJECT_ID_KEY();
    if (e.target.tagName.toLowerCase() === 'input') {
      const selectedProject = projects.find(
        (project) => project.id === selectedProjectId,
      );
      const selectedTask = selectedProject.tasks.find(
        (task) => task.id === e.target.id,
      );
      selectedTask.complete = e.target.checked;
      save(projects, selectedProjectId);
      renderTaskCount(selectedProject);
    }
  };