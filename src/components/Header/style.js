import styled from "styled-components";

export const HeaderStyle = styled.header`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px;

`

export const Img = styled.img`
    height: 72px;
`

export const Nav = styled.nav`
    display: flex;
    gap: 32px; /*gap da espaço entre os filhos*/
`
export const NavItem = styled.a`
 font-family: 'Sarala', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;

    color: #FFF2E7;

    &:hover{
        color: rgba(236, 214, 196, 0.53);
    }
`
    
