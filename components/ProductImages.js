import { useState } from "react";
import styled from "styled-components"

const Image = styled.img`
max-width:100%;
max-height:100%;
background-color:#eee;
border-radius:10px;
`;
const BigImage = styled.img`
max-width: 100%;
max-height: 300px;
background-color:#eee;
border-radius:10px;
`
const ImageButtons = styled.div`
display: flex;
gap: 10px;
flex-grow:0;
margin-top:10px;
`
const ImageButton = styled.div`

border-radius:10px;
height: 100px;
padding:10px;
cursor:pointer;
&:hover{
    opacity:0.5;
    transition:opacity 0.3s
}
${props => props.active ?`
    opacity:0.5;
` : `
    opacity:1;
`}
`
const BigImageWrapper = styled.div`
   text-align:center; 
`

export default function ProductImages({images}) {
    const [activeImage, setActiveImage] = useState(images?.[0])
    return(
        <>
            <BigImageWrapper>
                <BigImage src={activeImage}/>
            </BigImageWrapper>
            <ImageButtons>
                {images.map(image => (
                    <ImageButton key={image} active={image===activeImage} onClick={()=> setActiveImage(image)}>
                        <Image src={image} alt=""/>
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    )
}