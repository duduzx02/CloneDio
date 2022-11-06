import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}

body {
    background-color: #1e192c;
    color: #FFF;
}

body *{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

`;
