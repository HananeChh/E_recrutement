import React from "react";
import logo from "../images/Group 381.png"


const Navbarv = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-lg-2 col-md-2 py-2">
        <img src={logo} alt="My Image" className="img-fluid " style={{ width: "150px" }} />
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

     
    </nav>
  )
}
export default Navbarv
