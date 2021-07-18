export default () => {
    const projectContent = document.createElement('div');
    projectContent.classList.add('modal', 'fade');
    projectContent.id = 'projectContent';
    projectContent.setAttribute('tabindex', '-1');
    projectContent.setAttribute('role', 'dialog');
    projectContent.setAttribute('aria-labelledby', 'dialog');
    projectContent.setAttribute('role', 'exampleModalLabel');
    projectContent.setAttribute('aria-hidden', 'true');
    projectContent.innerHTML = `<!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Launch demo modal
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <form id='project-form'>
            <div class="form-group">
              <input data-project-name-input id='name' name='name' type="text" class="form-control" placeholder="Project name" required>
            </div>
            
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button id='createProject' type="submit" data-project-form-submit class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        
        </div>
      </div>
    </div>
      `;
    return projectContent;
  };
