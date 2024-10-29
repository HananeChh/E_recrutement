import React from "react";
import Navbar from "../components/Navbar";
import Stat from "../components/Stat";
import style from '../styles/Statistique.module.css'

import logo from "../images/stafferLogo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "../images/Account.png";
import { NavLink } from 'react-router-dom';
import notification from "../images/Alarm.png"
function Statpemp() {
  return (
    <div className="Stat">
 <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            {/* ======================================================================== */}
            <div className={style.navbar} >
                <NavLink to={'/home/employeur'} className={style.link} class="col-lg-4 ">
                    <div className={style.all_logo}>
                        <img src={logo} alt="Logo" className={style.logo} />
                        <p className={style.logo_text}><span>Staff</span><span>er</span></p>
                    </div>
                </NavLink>
                <div className={style.nav_links} class="col-lg-6 ">
                    <NavLink to={'/home/employeur'} className={style.nav_link}>Home</NavLink>
                    <NavLink to={'/HireTalent'} className={style.nav_link}>Hire Talent</NavLink>
                    <NavLink to={'/stat/employeur'} className={style.nav_link}>Statistique</NavLink>
                    <NavLink to={'/home/employeur'} className={style.nav_link}>About Us</NavLink>
                </div>
                <div className={style.nav_buttons} class="col-lg-1">
                    <NavLink to={'/home/employeur'} className={style.nav_button}>
                        <img src={notification} alt="My Image" className="img-fluid " style={{ width: "30px" }} />
                    </NavLink>
                    <NavLink to={'/profile'} className={style.nav_button}>
                        <img src={Profile} alt="My Image" className="img-fluid " style={{ width: "30px" }} />
                    </NavLink>
                </div>

            </div>
            {/* =============================================================================== */}
          <Stat/>
    </div>
  );
}

export default Statpemp;
