import styled, {css} from "styled-components"

const StyledButton = styled.button 
`
    background-color: #000;
    color:#00FF00;
    font-family:'Orbitron', sans-serif;
    border:0;
    border-radius:10px;
    padding:10px 15px;
    cursor:pointer;
    box-shadow: 0 0 10px 2px #00FF00;
    box-sizing:border-box;
    opacity:0.8; 
    display:inline-flex;
    letter-spacing:1px;
    &:hover{ 
        opacity:1; 
        transition: opacity 0.5s;
        text-shadow: 1px 1px 1px #00FF00;
        transition: text-shadow 0.5s;
    }
    svg{
        height:20px;
        margin-right:5px;
    }

    ${props => props.pink && css`
    box-shadow: 0 0 10px 2px #FF10F0;
    color:#FF10F0;
    &:hover{ 
        text-shadow: 1px 1px 1px #FF10F0;
        transition: text-shadow 0.5s;
    }
`}
    ${props => props.size ==='lg' && css`
        font-size:1.1rem;
        padding: 10px 15px
    `}
`;

export default function Button({children,...rest}) {
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    )
}