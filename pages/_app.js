import { createGlobalStyle } from "styled-components"
import {CartContextProvider} from "@/components/CartContext"


const GlobalStyles = createGlobalStyle`
 
  body{
    background-color:#FFCBCB;
    color:white;
    padding:0;
    margin:0;
    font-family: 'Permanent Marker', cursive;
    letter-spacing:1px;
    font-size:large;    
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
