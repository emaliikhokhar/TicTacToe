import { combineReducers } from "redux";
import playerReducer from "./PlayerReducer";
import BoardReducer from "./BoardReducer";

const rootReducer = combineReducers({
    play: playerReducer,
    board: BoardReducer})

export default rootReducer