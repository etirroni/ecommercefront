import styled from "styled-components";



const StyledFooter = styled.footer
`
    
  
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center; 
    padding:50px;
    margin:100px 20px 20px 20px;
    border:6px solid white;
    border-radius:10px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3); 
`;

export default function Footer(){
    return(
        <StyledFooter>
            Hello this is footer 
        </StyledFooter>
    )
}