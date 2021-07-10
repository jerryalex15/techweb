import React from 'react';
import img_profil from './../assets/img-profil.jpg';
import './../styles/Profil.css';

const Profil = () => {

    const nom="razafindraibe";
    const prenom="Nandraina Jerry Alex";
    return (
        <div>
            <div className="div-content">
                <img src= {img_profil}  alt= "Mon profil" className="img-profil"/>
                <h3>Nom</h3>
                <p>{nom.toUpperCase()} {prenom}</p>
                <h3>Contact</h3>
                <p>jerryRazafindraibe@gmail.com</p>
                <h3>Adresse</h3>
                <p>84ATER IKIANJA AMBOHIMANGAKELY ANTANANARIVO</p>
                <h3>Classe</h3>
                <p>3ème année en Informatique de gestion, Genie Logiciel et Intelligence artificielle </p>
                <h3>Etablissement</h3>
                <p>ISPM</p>
            </div>
        </div>
        
    );
};

export default Profil;