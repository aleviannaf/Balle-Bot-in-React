import styled from "styled-components";

export const HeaderStyle = styled.header`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px;

    @media (max-width: 740px){
        justify-content: space-between;
        margin-left: 10%;
        margin-right: 10%;
    }

`

export const Img = styled.img`
    height: 72px;
`

export const Nav = styled.nav`
    display: flex;
    gap: 32px; /*gap da espaço entre os filhos*/
    @media (max-width: 740px){
       display: ${(props)=>props.open ? "flex" : "none"};/*escondendo o menu*/
        position: absolute;
        /* top: 8vh; */
        top: 0;
        right: 0;
        width: 60vw;
        height: 100vh;
        background: #23232e;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        /* transform: translate(100%); */
        transition: transform 0.3s ease-in; 
    }
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
export const MobileMenu = styled.div`
    list-style: none;
    /* display: none; */
    cursor: pointer;
    div{
        width: 32px;
        height: 2px;
        background: #fff;
        margin: 8px;
    }

    @media (min-width: 740px){
         display: none; 
        
    }
    
`

export const Line1 = styled.div`
    transform:  rotate(-45deg) translate(-8px, 8px);
`
export const Line2 = styled.div`
    opacity: 0;
`
export const Line3 = styled.div`
    transform:  rotate(45deg) translate(-5px, -7px);
`
