import 'bootstrap';
import './app.scss';
import renderTodos from './todos';
import renderProject from './project';
import renderProjectContent from './projectcontent';
import renderCreateTask from './createtask';
import {
    saveAndRender, createProject, createTask, render,
  } from './helper/common';

document.querySelector('#content').appendChild(renderProject());
document.querySelector('#content').appendChild(renderTodos());

document.querySelector('#content').appendChild(renderProjectContent());

document.querySelector('#content').appendChild(renderCreateTask());

const createDefaultProject = () => {
    const project = createProject('Default Project');
    if (!projects.length) {
      const todaysDate = new Date().toISOString().slice(0, 10);
      const task = createTask(
        'Default Task',
        todaysDate,
        'A brief description',
        'Low',
        'Default task note',
      );
      project.tasks.push(task);
      projects.push(project);
  
      saveAndRender(projects, project.id);
    }
    
  };

  window.addEventListener('load', () => {
    // displayPage();
    createDefaultProject();
    render();
    createTaskBtnEventHandler();
    projectModalEventHandler();
  });