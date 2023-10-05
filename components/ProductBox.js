import styled from "styled-components"


const PRoductWrapper = styled.div
`
 color:#fff;
`;

const Box = styled.div
`
    background-color:#eee;
    padding:20px;
    height:200px;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:20px;
    
    
    img{
        max-width:100%;
        max-height:200px;
    }
`;

export default function ProductBox({_id,title,description,price,images}){
    return(
        <PRoductWrapper>
        <Box>
            <img src={images[0]} alt="Image coming soon"/>
        </Box>
            {title}
        </PRoductWrapper>
    )
}