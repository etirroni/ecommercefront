import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Cart from "@/components/Icons/Cart";
import ProductImages from "@/components/ProductImages";

import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top:40px;
   
`;
const Box = styled.div`
    border-radius: 10px;
    padding: 30px;
  
`
const PriceRow = styled.div`
    display:flex;
    gap:20px;
    align-items:center;
`
const Price = styled.span`
    font-size:2rem;
`

export default function ProductPage({product}){
    const {addProduct} = useContext(CartContext)
    return(
        <>
        <Header/>
        <Center>
            <ColWrapper>
                <Box>
                 <ProductImages images={product.images}/>
                </Box>
                <div>
                    <Title>{product.title}</Title>
                    <p>{product.description}</p>
                    <PriceRow>
                    <div><Price>
                            {product.price} €
                        </Price>
                    </div>
                    <div><Button onClick={() => addProduct(product._id)}>
                            <Cart/>Add To Cart
                        </Button>
                    </div>   
                    </PriceRow>
                </div>
             </ColWrapper>
        </Center>
        </>
    )
}

export async function getServerSideProps(context) {
    await mongooseConnect ()
    const {id} = context.query
    const product = await Product.findById(id)
    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}