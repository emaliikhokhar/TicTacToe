export const savePlayers = (data) => {
    return {
        type: "SAVE_PLAYER",
        payload: data
}}

export const selectedByFirst = (data) => {
    return {
        type: "SELECTED_BY_FIRST",
        payload: data
    }
}

export const selectedBySecond = (data) => {
    return {
        type: "SELECTED_BY_SECOND",
        payload: data
    }
}