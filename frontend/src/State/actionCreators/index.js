export const addCounter = (count) => {
    return(dispatch) => {
        dispatch({
            type: 'add',
            payload: count
        })
    }
}


export const minusCounter = (count) => {
    return(dispatch) => {
        dispatch({
            type: 'subtract',
            payload: count
        })
    }
}