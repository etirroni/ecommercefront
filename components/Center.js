import styled from "styled-components"

const StyledDiv= styled.div`
    max-width: 1500px;
    margin:10px auto;
    padding: 0 20px;
  
`

export default function Center({children}){
    return(
        <StyledDiv>{children}</StyledDiv>
    )
}