import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (<>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand me-2">Informer sur les métiers</Link>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Recherche</button>
          </form>
        </div>
      </nav>
    </header>
  </>)
}

export default Navigation