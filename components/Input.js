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
        box-shadow: rgba(0, 210, 179, 0.3) 0px 5px, rgba(0, 210, 179, 0.2)0px 10px, rgba(0, 210, 179, 0.1) 0px 15px;
        transition: box-shadow 0.4s
    }
`;

export default function Input(props) {
    return <StyledInput {...props} />
}