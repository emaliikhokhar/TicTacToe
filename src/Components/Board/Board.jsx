import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Circle from '../../CIRCLE.png'
import Cross from '../../CROSS.png'
import White from '../../WHITE.png'
import './Board.css'

const Board = () => {
    const [turn, setTurn] = useState(1);
    const board = useSelector((state) => state.board)
    const players = useSelector((state) => state.play)
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const data = board;
    const [winner, setWinner] = useState(0);

    const onClickHandler = (e) => {
        switch (e.target.id) {
            case "1":
                dealingWithCases(e, turn)
                gameCheck(turn)
                break;

            case "2":
                dealingWithCases(e, turn)
                gameCheck(turn)
                break;

            case "3":
                dealingWithCases(e, turn)
                gameCheck(turn)
                break;

            case "4":
                dealingWithCases(e, turn)
                gameCheck(turn)
                break;

            case "5":
                dealingWithCases(e, turn)
                gameCheck(turn)
                break;

            case "6":
                dealingWithCases(e, turn)
                gameCheck(turn)
                break;

            case "7":
                dealingWithCases(e, turn)
                gameCheck(turn)
                break;

            case "8":
                dealingWithCases(e, turn)
                gameCheck(turn)
                break;

            case "9":
                dealingWithCases(e, turn)
                gameCheck(turn)
                break;

            default:
                return 0;
        }
    }

    const gameCheck = (turn) => {
        if (((data.index1 === data.index2 && data.index2 === data.index3) && data.index1 !== 0) || 
        ((data.index4 === data.index5 && data.index5 === data.index6) && data.index6 !== 0) || 
        ((data.index7 === data.index8 && data.index8 === data.index9) && data.index9 !== 0) || 
        ((data.index1 === data.index3 && data.index3 === data.index7) && data.index7 !== 0) || 
        ((data.index2 === data.index5 && data.index5 === data.index8) && data.index8 !== 0) || 
        ((data.index3 === data.index6 && data.index6 === data.index9) && data.index9 !== 0) || 
        ((data.index1 === data.index5 && data.index5 === data.index9) && data.index1 !== 0) || 
        ((data.index3 === data.index5 && data.index5 === data.index7) && data.index7 !== 0)) {
            setWinner(turn);
        }
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
        setCount(count+1);
    }

    const selectedBySecondPlayer = (e, turn) => {
        if (data["index" + e.target.id] === 0) {
            data["index" + e.target.id] = turn;
        }
        dispatch({ type: "SELECTED_BY_SECOND", payload: data })
        setTurn(1);
        setCount(count+1);
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
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="1">
                            {
                                data.index1 === 1 ? <img src={Circle} width="50" alt="Circle" /> : data.index1 === 2 ? <img src={Cross} width="50" alt="Cross" /> : <img src={White} width="50" className="img" alt="Null" />
                            }
                        </div>

                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="2" >
                            {
                                data.index2 === 1 ? <img src={Circle} width="50" alt="Circle" /> : data.index2 === 2 ? <img src={Cross} width="50" alt="Cross" /> : <img src={White} width="50" className="img" alt="Null" />
                            }
                        </div>

                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="3">
                            {
                                data.index3 === 1 ? <img src={Circle} width="50" alt="Circle" /> : data.index3 === 2 ? <img src={Cross} width="50" alt="Cross" /> : <img src={White} width="50" className="img" alt="Null" />
                            }
                        </div>
                    </div>
                    <div className="d-flex individualRow w-100">
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="4">
                            {
                                data.index4 === 1 ? <img src={Circle} width="50" alt="Circle"/> : data.index4 === 2 ? <img src={Cross} width="50" alt="Cross" /> : <img src={White} width="50" className="img" alt="Null" />
                            }
                        </div>

                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="5">
                            {
                                data.index5 === 1 ? <img src={Circle} width="50" alt="Circle" /> : data.index5 === 2 ? <img src={Cross} width="50" alt="Cross" /> : <img src={White} width="50" className="img" alt="Null" />
                            }
                        </div>

                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="6">
                            {
                                data.index6 === 1 ? <img src={Circle} width="50" alt="Circle" /> : data.index6 === 2 ? <img src={Cross} width="50" alt="Cross" /> : <img src={White} width="50" className="img" alt="Null" />
                            }
                        </div>
                    </div>
                    <div className="d-flex individualRow w-100">
                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="7">
                            {
                                data.index7 === 1 ? <img src={Circle} width="50" alt="Circle" /> : data.index7 === 2 ? <img src={Cross} width="50" alt="Cross" /> : <img src={White} width="50" className="img"alt="Null" />
                            }
                        </div>

                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="8">
                            {
                                data.index8 === 1 ? <img src={Circle} width="50" alt="Circle" /> : data.index8 === 2 ? <img src={Cross} width="50" alt="Cross" /> : <img src={White} width="50" className="img" alt="Null" />
                            }
                        </div>

                        <div className="p-4 widthForDiv" onClick={onClickHandler} id="9">
                            {
                                data.index9 === 1 ? <img src={Circle} width="50"  alt="Circle"/> : data.index9 === 2 ? <img src={Cross} width="50" alt="Cross" /> : <img src={White} width="50" className="img" alt="Null" />
                            }
                        </div>
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

                {/* Winner Announce */}
                <div className="displayTurn mt-5 btn btn-outline-dark">
                {
                    winner === 1 ? <h1>Winner is {players.fPlayerName}</h1> :
                    winner === 2 ? <h1>Winner is {players.sPlayerName}</h1> :
                    winner === 0 && count === 9 ? <h1>Draw Match</h1> :
                    <h1>Winner To Be Announced</h1>
                }
                </div>
            </center>
        </div>
    )
}

export default Board