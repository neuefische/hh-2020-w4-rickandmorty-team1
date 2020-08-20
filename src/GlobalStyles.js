import { createGlobalStyle } from 'styled-components'
import img from './images/rick-and-morty-bg-2.jpg'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    width: 200px;
    margin: 0;
    font-size: 112.5%;
    background: url('${img}');
    background-repeat: no-repeat; 
    background-size: cover;
    height: 100%;
    width: 100%;
}
`
