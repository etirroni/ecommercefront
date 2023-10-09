import styled from "styled-components"
import Center from "./Center"
import ProductsGrid from "./ProductsGrid"
import Title from "./Title"

const NewProductsWrapper = styled.div`
    background: linear-gradient(to bottom left, #A3E1DC, #FFF);
    border:6px solid white;
    border-radius:10px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3); 
    padding: 20px;
`

export default function NewProducts({products}) {
    return(
        <Center>
            <NewProductsWrapper>
            <Title>Just arrived...</Title>
            <ProductsGrid products={products}/>
            </NewProductsWrapper>
        </Center>
    )
}