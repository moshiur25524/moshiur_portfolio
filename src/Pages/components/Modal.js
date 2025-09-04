const Modal = ({ project }) => {
  if (!project) return null // don't render if no project is passed
  return (
    <div
      className="modal fade"
      id={`exampleModalCenter${project.id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`exampleModalCenterTitle${project.id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id={`exampleModalCenterTitle${project.id}`}
            >
              {project.title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <img
              src={project.img_URL}
              alt={project.title}
              className="img-fluid mb-3"
            />
            <p>{project.description}</p>
            <p>
              <a href={project.live_link} target="_blank" rel="noreferrer">
                Live Site
              </a>{' '}
              {project.github_link && (
                <>
                  {' | '}
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </>
              )}
            </p>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
