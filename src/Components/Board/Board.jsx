import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './Board.css'

const Board = () => {
    const [turn, setTurn] = useState(1);
    const board = useSelector((state) => state.board)
    const players = useSelector((state) => state.play)
    const dispatch = useDispatch();
    const data = board;

    const onClickHandler = (e) => {
        switch (e.target.id) {
            case "1":
                dealingWithCases(e, turn)
                gameCheck()
                break;

            case "2":
                dealingWithCases(e, turn)
                gameCheck()
                break;

            case "3":
                dealingWithCases(e, turn)
                gameCheck()
                break;

            case "4":
                dealingWithCases(e, turn)
                gameCheck()
                break;

            case "5":
                dealingWithCases(e, turn)
                gameCheck()
                break;

            case "6":
                dealingWithCases(e, turn)
                gameCheck()
                break;

            case "7":
                dealingWithCases(e, turn)
                gameCheck()
                break;

            case "8":
                dealingWithCases(e, turn)
                gameCheck()
                break;

            case "9":
                dealingWithCases(e, turn)
                gameCheck()
                break;
        }
    }

    const showResult = () => {
        
    }

    const gameCheck = () => {
        
    }

    const dealingWithCases = (e, turn) => {
        if (turnBy(turn)) {
            selectedByFirstPlayer(e, turn)
        }
        else {
            selectedBySecondPlayer(e, turn)
        }
    }

    const selectedByFirstPlayer = (e, turn) => {
        if (data["index" + e.target.id] === 0) {
            data["index" + e.target.id] = turn;
        }
        dispatch({ type: "SELECTED_BY_FIRST", payload: data })
        setTurn(2);
    }

    const selectedBySecondPlayer = (e, turn) => {
        if (data["index" + e.target.id] === 0) {
            data["index" + e.target.id] = turn;
        }
        dispatch({ type: "SELECTED_BY_SECOND", payload: data })
        setTurn(1);
    }

    const turnBy = (turn) => {
        if (turn % 2 === 1)
            return true
        else
            return false
    }

    return (
        <div className="rowGap">
            <center>
                <div className="m-5">
                    <div className="d-flex individualRow w-100">
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="1" style={data.index1 === 1 ? {backgroundColor : "green"} : data.index1 === 2? {backgroundColor: "blue"} : {backgroundColor: "white"}}></div>
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="2" style={data.index2 === 1 ? {backgroundColor : "green"} : data.index2 === 2? {backgroundColor: "blue"} : {backgroundColor: "white"}}></div>
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="3" style={data.index3 === 1 ? {backgroundColor : "green"} : data.index3 === 2? {backgroundColor: "blue"} : {backgroundColor: "white"}}></div>
                    </div>
                    <div className="d-flex individualRow w-100">
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="4" style={data.index4 === 1 ? {backgroundColor : "green"} : data.index4 === 2? {backgroundColor: "blue"} : {backgroundColor: "white"}}></div>
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="5" style={data.index5 === 1 ? {backgroundColor : "green"} : data.index5 === 2? {backgroundColor: "blue"} : {backgroundColor: "white"}}></div>
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="6" style={data.index6 === 1 ? {backgroundColor : "green"} : data.index6 === 2? {backgroundColor: "blue"} : {backgroundColor: "white"}}></div>
                    </div>
                    <div className="d-flex individualRow w-100">
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="7" style={data.index7 === 1 ? {backgroundColor : "green"} : data.index7 === 2? {backgroundColor: "blue"} : {backgroundColor: "white"}}></div>
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="8" style={data.index8 === 1 ? {backgroundColor : "green"} : data.index8 === 2? {backgroundColor: "blue"} : {backgroundColor: "white"}}></div>
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="9" style={data.index9 === 1 ? {backgroundColor : "green"} : data.index9 === 2? {backgroundColor: "blue"} : {backgroundColor: "white"}}></div>
                    </div>
                </div>

                {/* Displaying Turn */}
                <div className="displayTurn">
                    {turn % 2 === 1 ?
                        <div>
                            <h1>Current Turn: {players.fPlayerName}</h1>
                        </div> :
                        <div>
                            <h1>Current Turn: {players.sPlayerName}</h1>
                        </div>
                    }
                </div>
                
                {/* Show Result */}
                <div className="displayTurn mt-4">
                    <button className="btn btn-dark" onClick={showResult}>Show Result</button>
                </div>
            </center>
        </div>
    )
}

export default Board
