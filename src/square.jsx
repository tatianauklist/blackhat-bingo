
export function Square(props){
    return(
    <button onClick={props.onSquareClick} className={`square ${props.marked ? 'marked' :'' }`}>{props.text}</button>
);
}