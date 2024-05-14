import { useState } from "react";



function LudoBoard()
{
    let [moves, setmoves] = useState({blue: 0, red: 0, yellow: 0, green:0})
    let updateBlue = ()=>{
        setmoves({...moves, blue: moves.blue+1});
    }
    let updateYellow = ()=>{
        setmoves({...moves, yellow: moves.yellow+1});
    }
    let updateGreen = ()=>{
        setmoves({...moves, green: moves.green+1});
    }
    let updateRed = ()=>{
        setmoves({...moves, red: moves.red+1});
    }
    return (
        <>
        <p>Game Begins</p>
        <div>
            <p>Blue = {moves.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
            <p>Green = {moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
            <p>Red {moves.red}</p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
        </div>
        </>
    )
}

export default LudoBoard;