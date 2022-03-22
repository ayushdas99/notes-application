const reducer = (state=0, action) => {
    if(action.type === 'add-note'){
        return(state + action.payload)
    }
    else if(action.type === 'delete-node'){
        return(state - action.payload)
    }
    else{
        return state;
    }
}

export default reducer;