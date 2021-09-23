import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const Names = () => {

    const [firstPlayerName, setFirstPlayerName] = useState('');
    const [secondPlayerName, setSecondPlayerName] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const players = useSelector((state) => state.play)
    const submitForm = (e) => {
        e.preventDefault();

        if (!firstPlayerName && !secondPlayerName){
            alert("First and second player name is missing")
        }
        else if (!firstPlayerName && secondPlayerName) {
            alert("First player name is missing");
        }
        else if (firstPlayerName && !secondPlayerName) {
            alert("Second player name is missing");
        }
        else {
            const data = {
                fPlayerName: firstPlayerName,
                sPlayerName: secondPlayerName
            }
            dispatch({type: "SAVE_PLAYER", payload: data})
            history.push("/game")
        }
    }

    return (
        <div>
            <div className="w-100 text-center fs-3 pt-5">
                <form onSubmit={submitForm}>
                    <center>
                        <label for="player1">First Player Name</label>
                        <input type="text" className="form-control w-25 my-3" onChange={(e) => setFirstPlayerName(e.target.value)} />

                        <label for="player1">Second Player Name</label>
                        <input type="text" className="form-control w-25 my-3"  onChange={(e) => setSecondPlayerName(e.target.value)}/>

                        <input type="submit" className="btn btn-dark w-25 mt-5 p-3" value="Play" />
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Names