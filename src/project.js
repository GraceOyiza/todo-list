export default () => {
    const nav = document.createElement('nav');
  
    const navLeft = document.createElement('ul');
    navLeft.classList.add('nav-list');
  

  
    const navProject = document.createElement('li');
    const project = document.createElement('a');
    project.innerText = 'PROJECT';
    navProject.classList.add('nav-items');
    project.id = 'project';
    navProject.appendChild(project);
  
    const navTask = document.createElement('li');
    const task = document.createElement('a');
    task.innerText = 'CREATE TASK';
    navTask.classList.add('nav-items');
    task.id = 'task';
    navTask.appendChild(task);

    navLeft.appendChild(navProject);
    navLeft.appendChild(navTask);
  
  
    nav.appendChild(navLeft);
  
    return nav;
  };
