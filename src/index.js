import 'bootstrap';
import './app.scss';
import renderTodos from './todos';
import renderProject from './project';
import renderProjectContent from './projectcontent';
import renderCreateTask from './createtask';

document.querySelector('#content').appendChild(renderProject());
document.querySelector('#content').appendChild(renderTodos());

document.querySelector('#content').appendChild(renderProjectContent());

document.querySelector('#content').appendChild(renderCreateTask());