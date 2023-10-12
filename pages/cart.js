import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
    display:grid;
    grid-template-columns: 1.3fr .7fr;
    gap: 40px;
    margin-top:40px;
    background: linear-gradient(to bottom , #A3E1DC, #e7e7e7);
    border-radius:10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
   
`;
const Box = styled.div`
    border-radius: 10px;
    padding: 30px;
    text-shadow: 1px 1px 2px #000;
`;
const Title = styled.h2`
    text-shadow: 1px 1px 2px #000;
`
const ProductInfoCell = styled.td`
   padding:10px 0;
   text-shadow: 1px 1px 2px #000;
  
`;
const ProductImageBox = styled.div`
    width: 100px;
    height: 100px;
    padding: 10px;
    background-color: #eee;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        max-width:80px;
        max-height:80px;
    }
`;
const QuantityLabel = styled.span`
    padding:0 3px;
`;

const CityHolder = styled.div`
    display: flex;
    gap: 5px;
`;
const ButtonHolder = styled.div`
    display:flex;
    justify-content:center;
`;

export default function CartPage() {
    const {cartProducts, addProduct, removeProduct, clearCart} = useContext(CartContext)
    const [products,setProducts] = useState([])
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [city,setCity] = useState('');
    const [postCode,setPostCode] = useState('');
    const [streetAddress,setStreetAddress] = useState('');
    const [country, setCountry] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    useEffect(()=>{
        if (cartProducts.length > 0){
          axios.post('/api/cart', {ids:cartProducts})
            .then(response => {
                setProducts(response.data);
            })
        } else{
            setProducts([])
        }
    }, [cartProducts])
    useEffect(() => {
        if(typeof window ==='undefined'){
            return;
        }
        if(window?.location.href.includes('success')){
            setIsSuccess(true)
          
        }
    }, [])

    function moreOfThisProduct(id){
        addProduct(id)
    }
    function lessOfThisProduct(id){
        removeProduct(id)
    }
    async function goToPayment(){
        const response = await axios.post('/api/checkout', {
            name,email,country,city,postCode,streetAddress,
            cartProducts
        })
        if (response.data.url){
            window.location = response.data.url
        }
    }
    let total = 0;
    for (const productId of cartProducts){
        const price = products.find(p=>p._id===productId)?.price || 0;
        total+=price;
    }

    if(isSuccess){
        clearCart();
        return(
            <>
             <Header/>
             <Center>
                <Box>
                    <Title>Thank you for your order!</Title>
                    <p>You will receive order verification in your email.</p>
                </Box>
             </Center>
            </>
        )
    }
    
    return(
        <>
            <Header/>
            <Center>
                <ColumnsWrapper>
                    <Box>
                        <Title>Your Cart</Title>
                        {!cartProducts?.length && (
                            <h2>Your cart is empty </h2>
                        )}
                        {products?.length > 0 && (  
                           
                        <Table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                                <tbody>
                                 {products.map(product =>(
                                    <tr key={product._id}>
                                        <ProductInfoCell>
                                            <ProductImageBox>
                                                <img src={product.images[0]}/>
                                            </ProductImageBox>
                                                {product.title}: 
                                        </ProductInfoCell>
                                        <td>
                                            <Button small="true" onClick={ () => lessOfThisProduct(product._id)}>-</Button>
                                            <QuantityLabel>{cartProducts.filter(id => id === product._id).length}</QuantityLabel>
                                            <Button small="true" onClick={ () => moreOfThisProduct(product._id) }>+</Button>
                                        </td>
                                        <td>
                                        {cartProducts.filter(id => id === product._id).length * product.price} €
                                        </td>
                                    </tr>
                            ))}
                            <tr>
                                <td>Total:</td>
                                <td></td>
                                <td>{total}</td>
                            </tr>
                            </tbody>
                            </Table>
                        )}
                    </Box>
                    {!!cartProducts?.length &&(
                    <Box>
                        <Title>Order Information</Title>
                       
                            <Input 
                                type="text" 
                                placeholder="Name" 
                                value={name}
                                name="name" 
                                onChange={ev => setName(ev.target.value)}/>
                            <Input 
                                type="text" 
                                placeholder="Email" 
                                value={email}
                                name="email" 
                                onChange={ev => setEmail(ev.target.value)}/>
                            <Input 
                                type="text" 
                                placeholder="Country" 
                                value={country}
                                name="country" 
                                onChange={ev => setCountry(ev.target.value)}/>
                            <CityHolder>
                            <Input 
                                type="text" 
                                placeholder="City" 
                                value={city}
                                name="city" 
                                onChange={ev => setCity(ev.target.value)}/>
                            <Input 
                                type="text" 
                                placeholder="Post code" 
                                value={postCode}
                                name="postCode" 
                                onChange={ev => setPostCode(ev.target.value)}/>             
                            </CityHolder>
                            <Input 
                                type="text" 
                                placeholder="Street address" 
                                value={streetAddress}
                                name="streetAddress" 
                                onChange={ev => setStreetAddress(ev.target.value)}/>
                            <ButtonHolder>
                            <Button 
                            onClick={goToPayment}>
                                Proceed to pick payment methods
                            </Button>
                            </ButtonHolder>
                            
                        
                    </Box>
                    )}
                </ColumnsWrapper>
            </Center>
        </>
    )
}