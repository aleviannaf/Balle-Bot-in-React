import { HeaderStyle, Img, Line1, Line2, Line3, MobileMenu, Nav, NavItem, } from "./style";
import logo from "../../assets/logo.svg"
import { useEffect, useState } from "react";
const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    console.log(openMenu)

    useEffect(() => { }, [openMenu])

    return (
        <HeaderStyle>
            <Img src={logo} alt="logo" />

            <MobileMenu onClick={() => { setOpenMenu(!openMenu) }} >
                 <div />
                 <div />
                 <div />
            </MobileMenu>

            <Nav open={openMenu}>
                {
                    openMenu && (
                        <MobileMenu onClick={() => { setOpenMenu(!openMenu) }} >
                            <Line1/>
                            <Line2 />
                            <Line3 />
                        </MobileMenu>
                    )
                }
                <NavItem href="https://discord.gg/wagxzStdcR">Comunidade Ballerini</NavItem>
                <NavItem href="https://discord.gg/wagxzStdcR">Tutorial</NavItem>
                <NavItem href="https://discord.gg/wagxzStdcR">Open Source</NavItem>
                <NavItem href="https://discord.gg/wagxzStdcR">Comandos</NavItem>
            </Nav>
        </HeaderStyle>
    )
}

export default Header;
