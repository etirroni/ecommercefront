import { createGlobalStyle } from "styled-components"
import {CartContextProvider} from "@/components/CartContext"


const GlobalStyles = createGlobalStyle`
 
  body{
    background-color:#000;
    color:white;
    padding:0;
    margin:0;
    font-family: 'Orbitron', sans-serif;
    letter-spacing:1px;
    
  }
`

export default function App({ Component, pageProps }) {
  return(
    <>
      <GlobalStyles/>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  )
}
