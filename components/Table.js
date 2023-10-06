import styled from "styled-components"

const StyledTable = styled.table`
    width: 100%;
    th{
        text-align: left;
        text-transform: uppercase;
        color:#fff;
        font-weight:normal;
    }
    td{
        border-top: 1px solid #eee;
       
    }
`;

export default function Table(props){
    return <StyledTable {...props}/>
}