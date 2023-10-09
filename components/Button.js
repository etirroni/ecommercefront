import styled, {css} from "styled-components"


export const ButtonStyle = css `


    font-family: 'Permanent Marker', cursive;
    color:white;
    background-color:#FFCBCB;
    border:dashed 6px white;
    font-size:large;
    text-shadow: 1px 1px 2px #000;


    border-radius:20px;
    padding:30px 15px;
    cursor:pointer;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 

    box-sizing:border-box; 
    display:inline-flex;
    letter-spacing:1px;
    &:hover{
        scale:0.8;
        background-color:#FFDBCC;
        transition:scale 0.5s;
        
    }
    svg{
        height:20px;
        margin-right:5px;
    }
    ${props => props.small && props.outline && css`
        padding:5px 5px;
    `
    }

    ${props => props.small && !props.outline && css`
        padding:5px 5px;
        background-color:transparent;
        box-shadow: none;
        border:none;
    `
    }
    

    ${props => props.size ==='lg' && css`
        font-size:1.5rem;
        
    `
    }

  

`;


const StyledButton = styled.button 
`
    ${ButtonStyle}
`


export default function Button({children,...rest}) {
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    )
}