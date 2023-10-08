import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const StyledHeader = styled.header
`
    background-color:#000
    
`;
const Logo = styled(Link)
`
    color:#fff;
    text-decoration:none;
    font-weight:bold;
    font-size: large;
    text-shadow: 2px 2px 4px #00FF00
`
const Wrapper = styled.div
`
    display:flex;
    justify-content: space-between;
    padding: 30px 0;
`
const NavLink = styled(Link)
`
    color:#fff;
    text-decoration:none;
    text-shadow: 2px 2px 4px #FF10F0;
    &:hover {
        opacity:0.7;
      }
    
`
const StyledNav = styled.nav
`
    display: flex;
    gap: 20px;
`

export default function Header(){
    const {cartProducts} = useContext(CartContext)
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>ElGigantti</Logo>
                    <StyledNav>
                    <NavLink href={'/'}>Home</NavLink>
                    <NavLink href={'/products'}>All products</NavLink>
                    <NavLink href={'/categories'}>Categories</NavLink>
                    <NavLink href={'/account'}>Account</NavLink>
                    <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
                    </StyledNav>
                </Wrapper>
         
            </Center>
        </StyledHeader>
    )
}