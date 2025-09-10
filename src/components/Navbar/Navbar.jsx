import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom px-4">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
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
          <ul className="navbar-nav mx-auto fs-5">
            <li className="nav-item">
              <a className="nav-link" href="#tattoos">Tattoos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Über mich</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#studio">Studio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}