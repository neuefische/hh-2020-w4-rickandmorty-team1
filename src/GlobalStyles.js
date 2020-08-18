import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}
body {
    margin: 0;
    font-size: 112.5%;
    background-image: url('./images/rick_and_morty_bg.jpg');
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    height: 100%;
}
`
