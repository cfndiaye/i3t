import './App.css';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Filieres from './Filieres';
import PreInscription from './PreInscription';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <main role="main">
        <Router>
          <header className="">
            <nav className="navbar navbar-expand-sm navbar-dark bg-success ">
              <Link className="navbar-brand" to="/">
                <img
                  src="logo192.png"
                  alt="logo"
                  className="logo-nav"
                  height="32"
                  width="32"
                />
                I3T
              </Link>
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Accueil <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Filieres">
                      Filières
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/PreInscription">
                      Préinscription
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Recherche"
                  />
                  <button
                    className="btn btn-outline-light my-2 my-sm-0"
                    type="submit"
                  >
                    Recherche
                  </button>
                </form>
              </div>
            </nav>
          </header>
          <div className="container-fluid">
            <Switch>
              <Route path="/Filieres">
                <Filieres />
              </Route>
              <Route path="/PreInscription">
                <PreInscription Title="Test" />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <hr />
          <h4>Message</h4>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;
