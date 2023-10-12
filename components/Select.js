import styled from "styled-components"

const StyledSelect = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius:10px; 
    border: 2px solid #FFCBCB; ;
    font-size:medium;   
    background-color:#eee;
    
    font-family:"Permanent Marker";
    box-sizing:border-box;
    outline: none;
    &:focus{
        border-color: #eee; 
        box-shadow: 0 0 5px #eee; 
    }
 
`;

export default function Select(props) {
    return <StyledSelect {...props} />
}