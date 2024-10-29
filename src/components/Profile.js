import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lestyle from '../styles/Lestyle.css';
import { useParams } from 'react-router-dom';


function Profile() {

    const [data, setData] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8082/demandeur/${id}`);
            const json = await response.json();
            setData(json);
        };
        fetchData();
    }, []);

    const birthDate = new Date(data.dateDeNaissance);
    const today = new Date();

    const timeDifference = today - birthDate;

    const age = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));



    return (
    

        <div class="container py-4 " style={{ maxWidth: '1200px', textAlign: "center" }}>
            <div className=" row  mt-5">
                <h3 className="py-4" style={{ color: "#3795BD" ,fontFamily:"robbin" }} >Consultez Votre personnel Informations</h3>
                <div className=" py-3 px-4 h-100  col-md-6 col-lg-5 ">
                    <div className="row d-flex justify-content-right align-items-right h-100">
                        <div className="col ">
                            <div className="card" style={{ borderRadius: "15px",borderColor:"#4E31AA" }}>
                                <div className="card-body p-4">
                                    <div className="d-flex text-black">
                                        <div className="flex">
                                            <img src=""
                                                alt="Profile image" className="img-fluid"
                                                style={{ width: "180px", borderRadius: "10px" }} />
                                        </div>
                                        <div className="flex-grow-1 ms-3  px-2 ">
                                            <h5 className="mb-1 " style={{ color: "#4E31AA" }}>{data.nom}&nbsp;{data.prenom}</h5>
                                            <p className="mb-2 pb-1 " style={{ color: "#2b2a2a" }}>Senior Developer</p>
                                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2 row"
                                                style={{ backgroundColor: "rgba(78, 49, 170, 0.1)" ,borderColor:"#4E31AA" }}>
                                                <div className="col-6">
                                                    <p className="small text-muted mb-1">Projects</p>
                                                    <p className="mb-0">41</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="small text-muted mb-1">Rating</p>
                                                    <p className="mb-0">8.5</p>
                                                </div>

                                            </div>
                                            <div>
                                                <Link to="/modification profile" className="d-flex pt-1 lien" >
                                                    <button type="button" className="btn btn-primary flex-grow-1">Modifier</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" py-3 px-4 col-md-6 col-lg-7 ">
                    <div className="row d-flex justify-content  align-items h-100">
                        <div className="col ">
                            <div className="card " style={{ borderRadius: "15px" ,borderColor:"#4E31AA"}}>
                                <div className="card-body p-4 ">
                                    <div className="d-flex text-black">

                                        <div className="flex-grow-1 ms-3">

                                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2 champs ">
                                                <div className="px-4">
                                                    <h5 className="mb-1 "style={{ color: "#4E31AA" }}>Nom complet </h5>
                                                </div>
                                                <div className="px-4">
                                                    <p className="mb-2 pb-1 " style={{ color: "#2b2a2a" }}>{data.nom}&nbsp;{data.prenom}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2 champs ">

                                                <div className="px-4">
                                                    <h5 className="mb-1 " style={{ color: "#4E31AA" }}>Date De Naissance</h5>
                                                </div>
                                                <div className="px-4">
                                                    <p className="mb-2 pb-1 " style={{ color: "#2b2a2a" }}>{data.dateDeNaissance}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2 champs ">
                                                <div className="px-4">
                                                    <h5 className="mb-1 " style={{ color: "#4E31AA" }}>Lieu De Naissance</h5>
                                                </div>
                                                <div className="px-4">
                                                    <p className="mb-2 pb-1 " style={{ color: "#2b2a2a" }}>{data.adresse && data.adresse.pays}&nbsp;&nbsp;{data.adresse && data.adresse.ville}</p>
                                                    
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2 champs ">

                                                <div className="px-4">
                                                    <h5 className="mb-1 " style={{ color: "#4E31AA" }}>Numero De Telephone</h5>
                                                </div>
                                                <div className="px-4">
                                                    <p className="mb-2 pb-1 " style={{ color: "#2b2a2a" }}>{data.numeroTel}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container py-4 px-4'>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                            <div class="card mb-3">
                                <img src="" class="card-img-top" alt="CV..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="" class="card-img-top" alt="CV..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="" class="card-img-top" alt="CV..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="" class="card-img-top" alt="CV..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Profile;
/*  <div>
      {data.map(item => (
        <p key={item.id}>
            <p>{item.nom} ,{item.prenom} </p>
            <p>{item.sexe} </p>
            <p>{item.dateDeNaissance} </p>



        </p>
      ))}
    </div> 
    **************
     <div className="d-flex pt-1">
        <button type="button" className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
         <button type="button" className="btn btn-primary flex-grow-1">Hire Telent</button>
    </div>
    */
   