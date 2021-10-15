import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --primary-color: #ffe169;
    --secondary-color: #ffcc00;
    --terciary-color: #ed1b24;
    --quaternary-color: #2E8FC6;

    --white: #ffffff;
    --light-gray: #f9faf4;
    --gray: #777777;
    --dark-gray: #444444;

    --card-width: 320px;
    --card-border: 10px;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html, body, #root {
    height: 100vh;
}

*, button, input {
    font-family: 'Sora', sans-serif;
    color: var(--dark-gray);
    border: 0;
    outline: 0; 
}

h1 { 
    font-size: 10vh;
}
`;
