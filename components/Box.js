import styled from "styled-components"

const StyledDiv = styled.div`
    border-radius: 10px;
    padding:30px;
    background: linear-gradient(to bottom , #A3E1DC, #e7e7e7);
    text-shadow: 1px 1px 2px #000;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
`;

export default function Box({children}){
    return(
        <StyledDiv>{children}</StyledDiv>
    )
}