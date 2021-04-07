
export default () => {
    const createTask = document.createElement('div');
    createTask.classList.add('modal', 'fade');
    createTask.id = 'createTask';
    createTask.setAttribute('tabindex', '-1');
    createTask.setAttribute('role', 'dialog');
    createTask.setAttribute('aria-labelledby', 'dialog');
    createTask.setAttribute('role', 'exampleModalLabel');
    createTask.setAttribute('aria-hidden', 'true');
    createTask.innerHTML = `<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
        <button id='newTaskFormClose' type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
        <form id='task-form'>
          <div class="form-group">
            <input name='name' type="text" class="form-control" id="task-name" placeholder="Task name" required>
          </div>

          <div class="form-group">
            <input id='description' name='description' type="text" class="form-control" id="task-desc" placeholder="Task decription" required>
          </div>

          <div class="form-group">
            <input id='date' name='date' type="date" class="form-control" id="task-date" required>
          </div>

          <div class="form-group">
          <select name='priority' class="form-control" id="priority" required>
            <option value='Low' class="bg-sucess">Low</option>
            <option value='Medium' class="bg-info">Medium</option>
            <option value='High' class="bg-danger">High</option>
          </select>
        </div>

        <div class="form-group">
          <textarea name='note' class="form-control" id="task-note" rows="3" placeholder="Add Note" required></textarea>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button id='createTask' type="submit" class="btn btn-primary">Submit</button>
        </div>
        </form>
    </div>
    </div>
  </div>
      `;
    return createTask;
  };
