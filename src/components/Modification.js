import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lestyle from '../styles/Lestyle.css'
import { countries } from './paysOptions';



function Modification() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [numeroTel, setnumeroTel] = useState("");
  const [nombreEnfants, setnombreEnfants] = useState("");
  const [situationFamiliale, setsituationFamiliale] = useState("");
  const [codePostal, setcodePostal] = useState("");
  const [competences, setcompetences] = useState("");
  const [pays, setpays] = useState("");
  const [ville, setville] = useState("");
  const [rue, setrue] = useState("");

  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8987/demandeurs-emploi/1');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nom: nom,
      prenom: prenom,
      numeroTel: numeroTel,
      nombreEnfants: nombreEnfants,
      situationFamiliale: situationFamiliale,
      codePostal: codePostal,
      competences: competences,
      adresse: {
        pays: pays,
        ville: ville,
        rue: rue,
      },
    };

    fetch("http://localhost:8987/demandeurs-emploi/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Mise à jour effectuée avec succès !");
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour :", error);
      });
  };


  const handleChangeNom = (event) => {
    setNom(event.target.value);
  };
  const handleChangepays = (event) => {
    setpays(event.target.value);
    setville('');
};
const handleChangeville = (event) => {
    setville(event.target.value);
};

  const handleChangePrenom = (event) => {
    setPrenom(event.target.value);
  };
  const handleChangenumeroTel = (event) => {
    setnumeroTel(event.target.value);
  };
  const handleChangenombreEnfants = (event) => {
    setnombreEnfants(event.target.value);
  };
  const handleChangesituationFamiliale = (event) => {
    setsituationFamiliale(event.target.value);
  };
  const handleChangecodePostal = (event) => {
    setcodePostal(event.target.value);
  };
  const handleChangecompetences = (event) => {
    setcompetences(event.target.value);
  };




  return (
    <div class="container py-4 pt-5" style={{ maxWidth: '1200px', textAlign: "center" }}>
      <div className="row mt-5 c" >
        <h3 className="py-4" style={{ color: "#3795BD", fontFamily: "robbin" }} >Modifier Votre personnel Informations</h3>
        <div className=" py-3 px-4 h-100  col-md-6 col-lg-5 ">
          <div className="row d-flex justify-content-right align-items-right h-100">
            <div className="col ">
              <div className="card" style={{ borderRadius: "15px", borderColor: "#4E31AA" }}>
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <div className="flex">
                      <img src=""
                        alt="Profile image" className="img-fluid"
                        style={{ width: "180px", borderRadius: "10px" }} />
                    </div>
                    <div className="flex-grow-1 ms-3  px-2 ">
                      <h5 className="mb-1 " style={{ color: "#4E31AA" }}>{Data.nom}&nbsp;{Data.prenom}</h5>
                      <p className="mb-2 pb-1 " style={{ color: "#2b2a2a" }}>Senior Developer</p>
                      <div className="d-flex justify-content-start rounded-3 p-2 mb-2 row"
                        style={{ backgroundColor: "rgba(78, 49, 170, 0.1)", borderColor: "#4E31AA" }}>
                        <div className="col-6">
                          <p className="small text-muted mb-1">Projects</p>
                          <p className="mb-0">41</p>
                        </div>
                        <div className="col-6">
                          <p className="small text-muted mb-1">Rating</p>
                          <p className="mb-0">8.5</p>
                        </div>

                      </div>
                      <div className="d-flex pt-1">
                        <button type="button" className="btn btn-primary flex-grow-1 btn">Changer photo</button>
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
              <div className="card champs mb-4" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <div className="px-4 py-2">
                  </div>
                  <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                    <div class="col-md-6 ">
                      <label for="validationCustom01" class="form-label txt" >Nom</label>
                      <input type="text" class="form-control bordure" maxLength={20} id="validationCustom01" required value={nom} onChange={handleChangeNom} placeholder={Data.nom} />
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="validationCustom02" class="form-label txt " >Prenom</label>
                      <input type="text" class="form-control bordure" maxLength={20} id="validationCustom02" required value={prenom} onChange={handleChangePrenom} placeholder={Data.prenom} />
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-5">
                      <label for="validationCustomUsername" class="form-label txt">Numero Telephone</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text champs" style={{ color: "#4E31AA" }} id="inputGroupPrepend">+213</span>
                        <input type="tel" class="form-control bordure" pattern="[0]{1}[0-9]{2}[0-9]{3}[0-9]{4}" maxLength={10} id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={numeroTel} onChange={handleChangenumeroTel} placeholder={Data.numeroTel} />
                        <div class="invalid-feedback">
                          Please choose a phone number.
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <label for="validationCustom04" class="form-label txt">Statut</label>
                      <select class="form-select bordure" id="validationCustom04" required value={situationFamiliale} onChange={handleChangesituationFamiliale} >
                        <option selected disabled value="">Choose...</option>
                        <option>maried</option>
                        <option>divorced</option>
                        <option>single</option>
                        <option>widower</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid Statut.
                      </div>
                    </div>
                    <div class="col-md-3">
                      <label for="validationCustom02" class="form-label txt">Nombre d'enfant</label>
                      <input type="number" class="form-control bordure" id="validationCustom02" value={nombreEnfants} onChange={handleChangenombreEnfants} placeholder={Data.nombreEnfants} />
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="validationCustom03" class="form-label txt">Pays</label>
                      <select class="form-select bordure select-dropdown " id="validationCustom04" required value={pays} onChange={handleChangepays}>
                        <option value="">Sélectionner un pays</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      <div class="invalid-feedback">
                        Please provide a valid Pays.
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="validationCustom03" class="form-label txt">Ville</label>
                      <select class="form-select bordure select-dropdown" id="validationCustom02" required value={ville} onChange={handleChangeville} disabled={!pays}>
                        <option value="">Sélectionner une ville</option>
                        {pays &&
                          countries
                            .find((country) => country.name === pays)
                            .cities.map((city, index) => (
                              <option key={index} value={city}>
                                {city}
                              </option>
                            ))}
                      </select>
                      <div class="invalid-feedback">
                        Please provide a valid Ville.
                      </div>
                    </div>
                    <div class="col-md-9">
                      <label for="validationCustom03" class="form-label txt">Rue</label>
                      <input type="text" class="form-control bordure" id="validationCustom03" required value={rue}
                        onChange={(e) => setrue(e.target.value)} placeholder="entrez votre votre rue" />
                      <div class="invalid-feedback">
                        Please provide a valid Rue.
                      </div>
                    </div>
                    <div class="col-md-3">
                      <label for="validationCustom05" class="form-label txt">Zip</label>
                      <input type="number" class="form-control bordure" id="validationCustom05" required value={codePostal} onChange={handleChangecodePostal} placeholder={Data.codePostal} />
                      <div class="invalid-feedback">
                        Please provide a valid zip.
                      </div>
                    </div>
                    {/* <div class="col-12">
                      <label for="validationCustom03" class="form-label txt">Competences</label>
                      <input type="text" class="form-control bordure" id="validationCustom03" required value={competences} onChange={handleChangecompetences} placeholder={Data.competences} />
                      <div class="invalid-feedback">
                        Please provide a valid Competences.
                      </div>
                    </div> */}
                    <div class="col-12">
                      <button class="btn btn-primary" type="submit">Enregister</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modification;
