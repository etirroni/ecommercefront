import styled from "styled-components"
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div
`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    padding-top:20px;
`;

const Title = styled.h2`
    font-weight:normal;
   
`

export default function NewProducts({products}) {
    return(
        <Center>
            <Title>Some of the newest shit!</Title>
        <ProductsGrid>
            {products?.length > 0 && products.map(product =>(
                <ProductBox {...product}/>
            ))}
        </ProductsGrid>
        </Center>
    )
}