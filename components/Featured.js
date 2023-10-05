import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

const Bg = styled.div
`
    background-color: #000;
    color:#fff;
    padding: 50px 0;
`;

const Title = styled.h1
`
    margin:0;
    font-weight:normal;
`;
const Desc = styled.p
`
    font-size:.8rem;
    color: #aaa;
`;
const ColumnsWrapper = styled.div
`
    display: grid;
    grid-template-columns:  1.2fr 0.8fr;
    gap:40px;
    img{
        max-width: 100%;
        opacity:0.5;
        &:hover {
            opacity:1;
            transition: opacity 0.5s;
          }
       
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
    return(
       
            <Bg>
            <Center>
            <ColumnsWrapper>
                <Column>
                <div>
                    <Title>{product.title}</Title>
                    <Desc>{product.description}</Desc>
                    <ButtonsWrapper>
                        <ButtonLink href={'/products/'+product._id} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                                Read More</ButtonLink>
                        <ButtonLink href={'/products/'+product._id} pink><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    Add To Cart</ButtonLink>
                    </ButtonsWrapper>
                </div>                
                </Column>
                <Column>
                <img src="https://firebasestorage.googleapis.com/v0/b/fir-upload-657f3.appspot.com/o/images%2F1696507156836.png?alt=media&token=bd49df15-4511-4475-ad76-e9c9e55475bb" alt="firebaseLogo"/>
                </Column>
            </ColumnsWrapper>
            </Center>
            </Bg>
        
    )
}