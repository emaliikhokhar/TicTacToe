const initialState = {
    index1: 0,
    index2: 0,
    index3: 0,
    index4: 0,
    index5: 0,
    index6: 0,
    index7: 0,
    index8: 0,
    index9: 0
}

const BoardReducer = (state = initialState, action) => {
    switch(action.type) {
        case "1":
            return state;

        case "2":
            return state;

        default: return state;
    }
}

export default BoardReducer