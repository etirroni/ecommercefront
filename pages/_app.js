import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`

  body{
    background-color:#000;
    padding:0;
    margin:0;
    font-family: 'Orbitron', sans-serif;
  }
`

export default function App({ Component, pageProps }) {
  return(
    <>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  )
}
