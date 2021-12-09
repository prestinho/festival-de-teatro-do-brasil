import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --primary-color: #ffe169;
    --secondary-color: #ffcc00;
    --terciary-color: #ed1b24;
    --quaternary-color: #2E8FC6;
    --quinternary-color: #83b01e;

    --white: #ffffff;
    --lightest-gray: #f3f3f3;
    --light-gray: #dedede;
    --gray: #777777;
    --dark-gray: #444444;
    --pink: #ff7076;

    --card-width: ${process.env.REACT_APP_CARD_WIDTH}px;
    --card-border: 10px;

    --box-shadow: rgb(0 0 0 / 24%) 0px 8px 12px;
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

    @media(min-width: 768px) {
        font-size: 3rem;
        line-height: 3rem;
    }
    @media(min-width: 1030px) {
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
