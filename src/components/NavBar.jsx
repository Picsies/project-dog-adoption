import { Link } from 'react-router-dom';

export const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <Link to="/" className="navbar-brand">Dog Adopt </Link>
        <button 
          className="navbar-toggler" 
          data-bs-toggle="collapse"
          data-bs-target="#nav" 
          aria-controls="nav"
          aria-label="Expand Navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/dogs">Dogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/registration">Register Dog</Link>
          </li> 
        </ul>
        </div> 
      </div>
    </nav>
  );
};
