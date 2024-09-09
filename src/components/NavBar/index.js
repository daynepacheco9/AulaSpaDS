import { useContext } from 'react';
import { TemaContext } from '../../context/ColorContext';
import { LinkClaro, LinkEscuro, NavBarContainer } from './styles';
import lua from "/lua.png"
import sol from "/sol.png"

function NavBar() {
    const tema = useContext(TemaContext)

    if (tema.tema == "claro")
    {    return (
            <>
                <NavBarContainer >
                    <LinkClaro to={'/'}>Menu</LinkClaro>
                    <LinkClaro to={'/About'}>About</LinkClaro>
                    <img src={lua}><button/></img>
                </NavBarContainer>
            </>
        );
    }else{
        return (
            <>
                <NavBarContainer >
                    <LinkEscuro to={'/'}>Menu</LinkEscuro>
                    <LinkEscuro to={'/About'}>About</LinkEscuro>
                    <img src={sol}><button/></img>
                </NavBarContainer>
            </>
        );
    }
}
export default NavBar