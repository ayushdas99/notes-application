import React from "react";
import styled from "styled-components";


const StyleFooter = styled.div`
background-color: #6568C3;
text-align: center;
padding: 20px;
box-sizing: border-box;
`


export default function Footer(){
    return(
        <StyleFooter>
        <p>Author: Ayush Das</p>
        <p><a href="#">ayushdas@yahoo.com</a></p>
      </StyleFooter> 
    )
}