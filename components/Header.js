import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const StyledHeader = styled.header
`
    background: linear-gradient(to top right, #A3E1DC, #FFF);
    padding:10px;
    margin:70px ;
    border:6px solid white;
    border-radius:10px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3); 
`;

const Logo = styled(Link)
`
    color:#fff;
    padding: 10px;
    font-weight:bold;
    font-size: 20px;
    text-decoration:none;  
    text-shadow: 1px 1px 2px #000; 
   
`
const Wrapper = styled.div
`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    gap:50px;
  
`
const NavLink = styled(Link)
`
    color:#fff;
    padding:10px;
    background-color:#FFCBCB;
    border:dashed 4px white;
    border-radius:10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
    text-decoration:none;
    font-size:20px;
    text-shadow: 1px 1px 2px #000;  
    &:hover {
        background-color:#FFDBCC;
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
                    
                        <Logo href={'/'}>
                       
                       Cloudy
                        </Logo>
                    
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