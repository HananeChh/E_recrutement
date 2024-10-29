import React from "react";
import images from "../images/Frame 25.png"
import image from "../images/Frame 26.png"

import icon4 from "../images/Timesheet.png"

import { Link } from 'react-router-dom';
import { useState } from 'react';



const Role = () => {
    const [pieceJointe, setpieceJointe] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            pieceJointe: pieceJointe,
        };

        fetch("http://localhost:8986/diplome/1", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log("creation effectuée avec succès !");
            })
            .catch((error) => {
                console.error("Erreur lors de la creation :", error);
            });
    };
    const handleChangepieceJointe = (event) => {
        setpieceJointe(event.target.value);
    };


    return (
        <div class="container py-4" style={{ maxWidth: '1200px', textAlign: "center" }}>
            <div className="col c" >
                <h3 className="mt-4" style={{  fontFamily: "robbin" }} >What are you looking for ?</h3>


                <div className=" py-3 px-5  d-flex  justify-content-center">
                    <div className="col px-5 d-flex justify-content  align-items h-100">
                        <div className="col ">
                            {/* <div className="card mb-3" style={{ borderRadius: "15px", borderColor: "#4E31AA" }}> */}
                                <div className="card-body mt-4">
                                    <div className="d-flex text-black">

                                        <div className="flex-grow-1 ms-3">

                                            <form class="row  needs-validation" novalidate  >
                                                <div className="row mb-3">
                                                    <div className="col">
                                                    <img src={images} alt="My Image" className="img-fluid " style={{ width: "350px" }} />
                                                    </div>
                                                    <div className="col">
                                                    <img src={image} alt="My Image" className="img-fluid " style={{ width: "350px" }} />

                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div class="col-md-6 col-sm-12 ">
                                                        <Link to="/signup/demandeur" style={{ color: "#3795BD" }} >
                                                            <button class="btn btn-primary btnv px-5 py-2 " type="submit">join as jobseeker</button>
                                                        </Link>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12  ">
                                                        <Link to="/signup/employeur" style={{ color: "#3795BD" }} >
                                                            <button class="btn btn-primary btnv px-5 py-2 " type="submit">join as employer</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                            <h5 className="py-4 mt-1" style={{  fontFamily: "robbin" }} >Already have an account ? <Link to="/login" style={{ color: "#3795BD" }} >Log in </Link></h5>


                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default Role
