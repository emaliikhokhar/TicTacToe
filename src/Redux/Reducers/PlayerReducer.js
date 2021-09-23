const initialState = {
    fPlayerName: '',
    sPlayerName: ''
}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SAVE_PLAYER":
            state = action.payload
            return state;

        default: return state;
    }
}

export default playerReducer