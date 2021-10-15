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
    font-size: 3.5rem;
    line-height: 3rem;
    padding-left: 20px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -2px;

    background: linear-gradient(#ff46be,#ff2525);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    @media(min-width: 768px) {
        font-size: 5rem;
        line-height: 4.5rem;
    }
}



.puffIn {
  animation-name: puffIn;
}

@-webkit-keyframes puffIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}

@keyframes puffIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}

`;
