import React from 'react';
import "./Jeu.css"

export default function Jeu(props) {
  return ( 
    <div onClick={ () => {

        props.lancer() 
        props.fonctionRandom()

        setTimeout(() => {
            props.choixOrdi()  
        }, 1000);
        }} 
        
        className={props.choix}>
        {props.img}
        
    </div>
    
    
    );
}

