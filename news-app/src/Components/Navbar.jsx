import PropTypes from 'prop-types';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#!">
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
                  onClick={() => setCategory(category)} // ✅ Directly call setCategory
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

// PropTypes for type checking
Navbar.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Navbar; // ✅ Default export
