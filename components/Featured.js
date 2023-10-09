import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import Cart from "./Icons/Cart";
import SparkleIcon from "./Icons/Sparkle";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div
`
    background: linear-gradient(to bottom left, #A3E1DC, #FFF);
    color:#fff;
    padding: 50px 0;
    margin:70px ;
    border:6px solid white;
    border-radius:10px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3); 
`;

const Title = styled.h1
`
    margin:0;
    text-shadow: 1px 1px 2px #000; 
    background-color:#FFCBCB;
    border-radius:10px;
    padding:10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
    display:flex;
    justify-content:center;
    
`;
const Desc = styled.p
`
    text-shadow: 1px 1px 2px #000;  

`;
const ColumnsWrapper = styled.div
`
    display: grid;
    grid-template-columns:  1.2fr 0.8fr;
    gap:40px;
    img{
        max-width: 100%;  
    }
`;
const Column = styled.div
`
   display: flex;
   align-items: center;
  

`
const ButtonsWrapper = styled.div 
`
    display:flex;
    gap: 20px;
    margin-top:30px;
    
`
const BoxInBox = styled.div`
    
    padding: 20px;
    
`


export default function Featured({product}){
    const {addProduct} = useContext(CartContext)
    function addFeaturedToCart(){
        addProduct(product._id)
    }

    return(
       
            <Bg>
            <Center>
            <ColumnsWrapper>
                <Column>
                <BoxInBox>
                    <Title>{product.title}</Title>
                    <Desc>{product.description}</Desc>
                    <ButtonsWrapper>
                        <ButtonLink href={'/product/'+product._id}>
                            <SparkleIcon/>
                            Read More</ButtonLink>
                        <Button pink="true" onClick={addFeaturedToCart}>
                            <Cart/>
                            Add To Cart</Button>
                    </ButtonsWrapper>
                </BoxInBox> 
                           
                </Column>
                <Column>
                <ButtonLink href={'/product/'+product._id}>
                <img src="https://firebasestorage.googleapis.com/v0/b/fir-upload-657f3.appspot.com/o/images%2F1696507156836.png?alt=media&token=bd49df15-4511-4475-ad76-e9c9e55475bb" alt="firebaseLogo"/>
                </ButtonLink>
                </Column>
            </ColumnsWrapper>
            </Center>
            </Bg>
        
    )
}