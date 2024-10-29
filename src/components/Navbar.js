import React from "react";
import logo from "../images/Group 381.png"
import { Link } from 'react-router-dom';
import Profile from "../images/Account.png"
import notification from "../images/Alarm.png"
import line from "../images/Line 3.png"
import { NavLink } from 'react-router-dom';
import style from '../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {

  return (
    <div className={style.navbar}  >
      <NavLink to={'/home'} className={style.link} class="col-lg-4 ">
        <div className={style.all_logo}>
          <p className={style.logo_text}><span>Staff</span><span>er</span></p>
        </div>
      </NavLink>
      <div className={style.nav_links} class="col-lg-5 ">
        <NavLink to={'/'} className={style.nav_link}>Home</NavLink>
        <NavLink to={'/addjob'} className={style.nav_link}>Add Job</NavLink>
        <NavLink to={`/demande d'emploie/0`} className={style.nav_link}>Add Job Application</NavLink>
        <NavLink to={'/Stat'} className={style.nav_link}>Statistique</NavLink>

      </div>
      <div className={style.nav_buttons} class="col-lg-1">
        <NavLink to={'/home'} className={style.nav_button}>
          <img src={notification} alt="My Image" className="img-fluid " style={{ width: "30px" }} />
        </NavLink>
        <NavLink to={'/profile'} className={style.nav_button}>
          <img src={Profile} alt="My Image" className="img-fluid " style={{ width: "30px" }} />
        </NavLink>
      </div>

    </div>

  )
}
export default Navbar
/*
<div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

        </ul>

      </div>

 */