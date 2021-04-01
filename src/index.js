import 'bootstrap';
import './app.scss';
import renderProject from './project';
import renderTodos from './todos';

document.querySelector('#content').appendChild(renderProject());
document.querySelector('#content').appendChild(renderTodos());