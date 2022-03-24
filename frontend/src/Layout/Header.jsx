import React,{useContext} from "react";
import { Link , useNavigate} from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../State";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import {logout, reset} from '../auth/authSlice'



const StyleHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #A5B1DF;
padding: 10px;
`

const Header = ({ handleToggleDarkMode,counter}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user} = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
      }
   
    
    return(
        <StyleHeader>
            <nav>
            <h1>Notes Application</h1>
            <h3>Counter:{counter}</h3>
            <button>
                <Link to="/main">Main</Link>
            </button>
            <button>
                <Link to="/home">Home page</Link>
            </button>
            <button>
                <Link to="/about">About us</Link>
            </button>
            <ul>
            {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
            </ul>
            
            </nav>        
        </StyleHeader>
    )
}
export default Header;