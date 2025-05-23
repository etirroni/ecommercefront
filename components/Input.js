import styled from "styled-components"

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius:10px; 
    font-size:medium;   
    background-color:#eee;
    font-family:"Permanent Marker";
    box-sizing:border-box;
    outline: none;
    &:focus{
       
        outline: 5px dashed white; 
        transition: outline 0.4s
    }
`;

export default function Input(props) {
    return <StyledInput {...props} />
}