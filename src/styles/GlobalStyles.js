import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-family: 'Nunito Sans', sans-serif;
    overflow-x: hidden; 
  }
  body{
    font-size: 62.5%;
    /* background: #f4fafc;
    color: #000;  */
    overflow-x: hidden; 
  }
`
export { GlobalStyles }
