import React,{useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../State";



const StyleHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #A5B1DF;
padding: 10px;
`

const Header = ({ handleToggleDarkMode,counter}) => {

    const dispatch = useDispatch();

    const count = useSelector(state => state.count)
   
    
    return(
        <StyleHeader>
            <nav>
            <h1>Notes Application</h1>
            <h3>Counter:{counter}</h3>
            <button onClick={() => dispatch(actionCreators.addCounter(1))}>+</button>
            <button onClick={() => dispatch(actionCreators.minusCounter(1))}>-</button>
    
            <h3>Redux counter: {count}</h3>
            <button>
                <Link to="/home">Home page</Link>
            </button>
            <button>
                <Link to="/about">About us</Link>
            </button>
            <button onClick={ () => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}>Toggle</button>
            </nav>        
        </StyleHeader>
    )
}
export default Header;