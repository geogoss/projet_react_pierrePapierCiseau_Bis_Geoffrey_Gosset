import React from 'react';
import Jeu from '../Jeu/Jeu';
import "./Step.css"

export default function Step(props) {

  

  return (
    <div className='cadreJeu'>
        
        <div className='chaqueJoueur stepJoueur'>
            <p>YOU PICKED</p>
            <Jeu choix={props.choix} img={props.img} />
        </div>


        {props.verif && 
        <div className='resultat'>
            <p>{props.resultat}</p>
            <button onClick={props.rejouer}>PLAY AGAIN</button>
        </div>
        }


        <div className='chaqueJoueur stepMachine'>
            <p>THE IA PICKED</p>
            {props.verif ? 
            <Jeu choix={props.classOrdi} img={props.imgOrdi} />
            :
            <div className="rondNoir">

            </div>
            }
        </div>
    </div>
    );
}
