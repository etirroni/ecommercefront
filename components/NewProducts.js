import styled from "styled-components"
import Center from "./Center"
import ProductsGrid from "./ProductsGrid"

const Title = styled.h2`
    font-weight:normal;   
`

export default function NewProducts({products}) {
    return(
        <Center>
            <Title>Some of the newest shit!</Title>
            <ProductsGrid products={products}/>
        </Center>
    )
}