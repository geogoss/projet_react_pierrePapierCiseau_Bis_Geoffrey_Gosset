import React from 'react';
import "./Titre.css"

export default function Titre() {
  return <div className='titre'>
            <div className='titreElement'>
                <p>PIERRE</p>
                <p>PAPIER</p>
                <p>CISEAU</p>
            </div>
            <div className='titreScore'>
                <p>SCORE</p>
                <p>35</p>
            </div>
        </div>;
}
