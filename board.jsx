import { useState } from 'react';
import { Square } from './square.jsx';
import { phraseBank } from './phraseBank.js';
import { hashString, getConferenceDateString, mulberry32, shuffler } from './logic.js';

function Board() {
    const [name, setName] = useState('');
    const [squares, setSquares] = useState([]);

    return(
        <input value={name} onChange={function(event) { setName(event.target.value);}} />
    );
}




