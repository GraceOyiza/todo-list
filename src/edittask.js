export default () => {
    const editTaskElement = document.createElement('div');
    editTaskElement.classList.add('modal', 'fade');
    editTaskElement.id = 'editTaskModal';
    editTaskElement.setAttribute('tabindex', '-1');
    editTaskElement.setAttribute('role', 'dialog');
    editTaskElement.setAttribute('aria-labelledby', 'dialog');
    editTaskElement.setAttribute('role', 'exampleModalLabel');
    editTaskElement.setAttribute('aria-hidden', 'true');
    editTaskElement.innerHTML = `<div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Task</h5>
          <button id='newTaskFormClose' type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          
          <form id='taskForm'>
            <div class="form-group">
              <input name='name' type="text" class="form-control" id="taskName" placeholder="Task name" required>
            </div>
  
            <div class="form-group">
              <input name='description' type="text" class="form-control" id="taskDesc" placeholder="Task decription" required>
            </div>
  
            <div class="form-group">
              <input name='date' type="date" class="form-control" id="taskDate" required>
            </div>
  
            <div class="form-group">
            <select name='priority' class="form-control" id="taskPriority" required>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
            </select>
          </div>
  
          <div class="form-group">
            <textarea name='note' class="form-control" id="taskNote" rows="3" placeholder="Add Note" required></textarea>
          </div>
  
          <input name='task-id' type="hidden" id="taskId">
  
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button id='UpdateTask' type="submit" class="btn btn-primary">Submit</button>
          </div>
          </form>
      </div>
      </div>
    </div>
    `;
  
    return editTaskElement;
  };
  