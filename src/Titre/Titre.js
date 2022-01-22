import React from 'react';
import "./Titre.css"

export default function Titre(props) {
  return <div onClick={props.reset} className='titre'>
            <div className='titreElement'>
                <p>PIERRE</p>
                <p>PAPIER</p>
                <p>CISEAU</p>
            </div>
            <div className='titreScore'>
                <p>SCORE</p>
                <p>{props.point}</p>
            </div>
        </div>;
}
