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
    background-color: #000;
    color:#fff;
    padding: 50px 0;
`;

const Title = styled.h1
`
    margin:0;
    text-shadow: 2px 2px 4px #00D2B3;
    
`;
const Desc = styled.p
`
    font-size:.8rem;

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
                <div>
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
                </div>                
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