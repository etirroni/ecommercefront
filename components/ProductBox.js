import styled from "styled-components"
import Link from "next/link";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import Cart from "./Icons/Cart";
import SparkleIcon from "./Icons/Sparkle";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const PRoductWrapper = styled.div`
 color:#fff;
`;

const Box = styled(Link)`

    height:200px;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center; 
    cursor:pointer;  
    img{
        max-width:100%;
        max-height:160px;
    }
`;

const Title = styled(Link)`   
    font-weight:normal;
    margin-bottom:1rem;
    align-items:center;
    color:inherit;
    text-decoration:none;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    
`
const ProductInfoBox = styled.div`
   padding:10px;

`
const PriceRow = styled.div `    
    text-align:center;
    align-items:center;
    justify-content:space-between;
`
const Price = styled.div`
    font-size:1.2rem;
    font-weight:700;
    margin-bottom:20px;
   

`
const UnderlinedText = styled.span`
  border-bottom: 5px dotted white; 
  padding-bottom: 3px; 
  
  
`;



export default function ProductBox({_id,title,description,price,images}){
    const {addProduct} = useContext(CartContext)
    const url = '/product/'+_id;
    return(
        <PRoductWrapper>
        <Box href={url}>
            <img src={images?.[0]} alt="Image coming soon"/>
        </Box>
        <ProductInfoBox>
            <Title href={url}> { title } </Title>
            <PriceRow>
                <Price>
                    <UnderlinedText>${price}</UnderlinedText>
                </Price>
                <ButtonLink href={'/product/'+_id}><SparkleIcon/> Details</ButtonLink>
                <Button pink="true" onClick={ () => addProduct(_id)}><Cart/>  Add To Cart</Button>
            </PriceRow>
        </ProductInfoBox>
        </PRoductWrapper>
    )
}