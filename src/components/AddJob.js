import logo from "../images/stafferLogo.png";
import style from "../styles/AddJob.module.css";
import { NavLink } from 'react-router-dom';




export default function AddJob() {
    return (
        <>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <NavLink to={'/home'} className={style.link}>
            <div className={style.all_logo}>
            <img src={logo} alt="Logo" className={style.logo} />
            <h1 className={style.logo_text}><span>Staff</span><span>er</span></h1>
            </div>
        </NavLink>
        
        
        <div className={style.title_card}>
            <h1 className={style.title}>Ajouter un emploi</h1>
        </div>

        <div className={style.form_card}>
            <form className="form_">
            <div className="form-group">
                <label for="jobTitle">Titre d'emploi</label>
                <input type="text" className="form-control" id="jobTitle" placeholder="Titre d'emploi"/>
            </div>
            <div className="form-group">
                <label for="jobDescription">Description de l'emploi</label>
                <textarea className="form-control" id="jobdesc" rows="3"></textarea>
            </div>
            <div className="form-group">
                <label for="location">Emplacement</label>
                <input type="text" className="form-control" id="location" placeholder="Emplacement"/>
            </div>
            <div className="row">
                <div className="form-group col col-md-6 col-offset-2">
                    <label for="minAge">Âge minimum</label>
                    <input type="number" className="form-control" id="minAge" placeholder="Âge minimum" min="10"/>
                </div>
                <div className="form-group col col-md-6 ">
                    <label for="maxAge">Âge maximal</label>
                    <input type="number" className="form-control" id="MaxAge" placeholder="Âge maximal" max="100"/>
                </div>
            </div>
            <div className="form-group">
                <label for="sex">Sexe</label> 
                <div class="input-group mb-3">
                    <select class="custom-select form-control" id="sex">
                        <option selected>Choisir...</option>
                        <option value="1">mâle</option>
                        <option value="2">femelle</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label for="expringDate">Date d'expiration</label>
                <input type="date" className="form-control" id="expringDate" placeholder="Date d'expiration"/>
            </div>
            <div className="form-group">
                <label for="educationLevel">niveau d'éducation</label>
                <div class="input-group mb-3">
                    <select class="custom-select form-control" id="educationLevel">
                        <option selected>Choisir...</option>
                        <option value="1">Niveau Secondaire</option>
                        <option value="2">Niveau Terminal</option>
                        <option value="3">Baccalauréat</option>
                        <option value="4">TS Bac +2</option>
                        <option value="5">Licence (LMD), Bac + 3</option>
                        <option value="6">Master 2, Ingéniorat, Bac + 5</option>
                        <option value="7">Magistère Bac + 7</option>
                        <option value="8">Doctorat</option>                     
                        <option value="9">Autre</option>
                    </select>
                </div>            </div>
            <div className="form-group">
                <label for="teamWork">Travail en équipe</label> 
                <div class="input-group mb-3">
                    <select class="custom-select form-control" id="teamWork">
                        <option selected>Choisir...</option>
                        <option value="1">oui</option>
                        <option value="2">non</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label for="langs">Langues</label>
                <input type="text" className="form-control" id="langs" placeholder="Langues"/>
            </div>
            <div className="form-group">
                <label for="salary">Salaire</label>
                <input type="number" step="0.01" className="form-control" id="salary" placeholder="Salaire"/>
            </div>
            <div className="form-group">
                <label for="duration">Durée</label>
                <input type="text" className="form-control" id="dur" placeholder="Durée"/>
            </div>
            <div className="form-group">
                <label for="company">Nom de l'entreprise</label>
                <input type="text" className="form-control" id="company" placeholder="Nom de l'entreprise"/>
            </div>
            <div className="form-group">
                <label for="companySize">Taille de l'entreprise</label>
                <input type="text" className="form-control" id="companySize" placeholder="Taille de l'entreprise"/>
            </div>
            <div className="form-group">
                <label for="jobSkills">Compétences professionnelles</label>
                <textarea className="form-control" id="jobSkills" rows="5"></textarea>
            </div>





   

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    );
}