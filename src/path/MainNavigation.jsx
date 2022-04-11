import React from 'react'
import './MainNavigation.css'
import {Link} from 'react-router-dom'



export const MainNavigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#"> <h2><span >Anvi's</span> Favouritezzz</h2> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                           <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                           <Link to="/song"></Link>
                        </li>

                    </ul>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <form className="form-inline my-2 my-lg-0 " >
                        <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0 searchdiv" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}
