import { useState } from 'react';
import { Square } from './square.jsx';
import { phraseBank } from './phraseBank.js';
import { hashString, getConferenceDateString, mulberry32, shuffler } from './logic.js';

 export function Board() {
    const [name, setName] = useState('');
    const [squares, setSquares] = useState([]);
    function handleSubmit() {
        const date = getConferenceDateString();
        let strings = name+date;
        let seed = hashString(strings);
        let rng = mulberry32(seed);
        let board = shuffler(rng, phraseBank).slice(0,25);
        const squareObjects = board.map(function(phrase){
            return {text: phrase, marked: false};
        }
    );
    setSquares(squareObjects);
    }
    function handleSquareClick(index) {
        const newSquares = squares.map(function(square,i) {
            if (i === index) {
                return { text: square.text, marked: !square.marked };
            } else {
                return square;
            }
        });
        setSquares(newSquares);
    }
    return(
        <div>
            <input value={name} onChange={function(event) { setName(event.target.value);}} />
            <button onClick={handleSubmit}>Submit</button>
            {squares.map(function(square,index) {
                return <Square key={index} text={square.text} marked={square.marked} onSquareClick={function() {handleSquareClick(index);}}/>
            })}
        </div>
    );
}




