export const LOCAL_STORAGE_PROJECT_ID_KEY = () => localStorage.getItem('todo.selectedProjectId');
export default () => JSON.parse(localStorage.getItem('todo-projects')) || [];

export const save = (projects, selectedProjectId) => {
  localStorage.setItem('todo-projects', JSON.stringify(projects));
  localStorage.setItem('todo.selectedProjectId', selectedProjectId);
};