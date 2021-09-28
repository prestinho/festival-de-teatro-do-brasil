import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html, body, #root {
    height: 100vh;
}

*, button, input {
    font-family: 'Rubik', sans-serif;
    border: 0;
    outline: 0; 
}

:root {
    --primary: #ffe169;
    --secondary: #ed1b24;

    --white: #ffffff;
    --gray: #888888;
}

`;