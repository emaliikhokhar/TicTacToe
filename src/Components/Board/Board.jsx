import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './Board.css'

const Board = () => {
    const [turn, setTurn] = useState(1);
    const players = useSelector((state) => state.play)

    return (
        <div className="rowGap">
            <center>
                <div className="m-5">
                    <div className="d-flex individualRow w-100">
                        <div className="p-4 widthForDiv"></div>
                        <div className="p-4 widthForDiv"></div>
                        <div className="p-4 widthForDiv"></div>
                    </div>
                    <div className="d-flex individualRow w-100">
                        <div className="p-4 widthForDiv"></div>
                        <div className="p-4 widthForDiv"></div>
                        <div className="p-4 widthForDiv"></div>
                    </div>
                    <div className="d-flex individualRow w-100">
                        <div className="p-4 widthForDiv"></div>
                        <div className="p-4 widthForDiv"></div>
                        <div className="p-4 widthForDiv"></div>
                    </div>
                </div>

                {/* Displaying Turn */}
                <div className="displayTurn">
                    {turn % 2 !== 0 ?
                        <div>
                            <h1>Current Turn: {players.fPlayerName}</h1>
                        </div> :
                        <div>
                            <h1>Current Turn: {players.sPlayerName}</h1>
                        </div>
                    }
                </div>
            </center>
        </div>
    )
}

export default Board
