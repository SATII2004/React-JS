const Navbar = ({ setCategory }) => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            <span className="badge bg-light text-dark fs-4">NewsMag</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {["technology", "business", "health", "sports", "entertainment"].map((category) => (
                <li key={category} className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => setCategory && setCategory(category)} // ✅ Safe check
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar; // ✅ Default export
  