import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;

    @media   (max-width:1000px){
      font-size:90%
    }
}

:focus{
    outline:0;
    box-shadow: 0 0 4px ${(props) => props.theme['yellow-dark']}
}

body{
    background-color:   ${(props) => props.theme.background};
    color:   ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
}

body,input, textarea, button{
    font-family: 'Roboto', sans-serif;
    background-color:   ${(props) => props.theme[`base-input`]};
    font-weight:400;
    font-size:1rem;


  
} 


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

`
