import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavBarContainer = styled.div`
    height: 5vh;
    width: 100vw;
    align-items: center;
    padding-inline: 20vw;
    justify-content: space-around;
    display: flex;
    background-color: burlywood;
`

export const LinkClaro = styled(Link)`
    color: black;
    font-weight: 700;
    text-decoration: none;
`

export const LinkEscuro = styled(LinkClaro)`
    color: white;
`