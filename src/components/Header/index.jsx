import { HeaderStyle, Img, Nav, NavItem, } from "./style";
import logo from "../../assets/logo.svg"
const Header = ()=>{
    return (
        <HeaderStyle>
             <Img src={logo} alt="logo"/>
            <Nav className="cabecalho-menu">
                <NavItem  href="https://discord.gg/wagxzStdcR">Comunidade Ballerini</NavItem>
                <NavItem  href="https://discord.gg/wagxzStdcR">Tutorial</NavItem>
                <NavItem  href="https://discord.gg/wagxzStdcR">Open Source</NavItem>
                <NavItem  href="https://discord.gg/wagxzStdcR">Comandos</NavItem>
            </Nav>
        </HeaderStyle>
    )
}

export default Header;
