import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header
`
    background-color: #000;
    
`;
const Logo = styled(Link)
`
    color:#fff;
    text-decoration:none;
    font-weight:bold;
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
    color:#aaa;
    text-decoration:none;
    text-shadow: 2px 2px 4px #FF10F0;
    &:hover {
        color: #fff;
        transition: color 0.5s;
      }
    
`
const StyledNav = styled.nav
`
    display: flex;
    gap: 20px;
`

export default function Header(){
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>NeverBackDownNeverWhat</Logo>
                    <StyledNav>
                    <NavLink href={'/'}>Home</NavLink>
                    <NavLink href={'/products'}>All products</NavLink>
                    <NavLink href={'/categories'}>Categories</NavLink>
                    <NavLink href={'/account'}>Account</NavLink>
                    <NavLink href={'/cart'}>Cart (0)</NavLink>
                    </StyledNav>
                </Wrapper>
         
            </Center>
        </StyledHeader>
    )
}