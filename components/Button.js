import styled, {css} from "styled-components"


export const ButtonStyle = css `


    background-color: #000;
    color:#00FF00;
    font-family:'Orbitron', sans-serif;
    border:0;
    border-radius:10px;
    padding:10px 15px;
    cursor:pointer;

    box-sizing:border-box;
    opacity:0.8; 
    display:inline-flex;
    letter-spacing:1px;
    &:hover{
        scale:1.2;
        transition:scale 0.5s;
    }
    svg{
        height:20px;
        margin-right:5px;
    }
    ${props => props.pink && props.outline && css`
    box-shadow: 0 0 4px 3px #FF10F0;
    color:#FF10F0;
    `
    }

    ${props => props.pink && !props.outline && css`
    color:#FF10F0;
    `
    }
    

    ${props => props.size ==='lg' && css`
        font-size:1.1rem;
        padding: 10px 15px
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