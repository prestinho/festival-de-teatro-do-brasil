import styled from "styled-components";

export const PageContainer = styled.div`
    /* background: var(--light-gray); */
    /* background: linear-gradient(#e66465, #9198e5);  */
    //background: linear-gradient(to bottom, var(--secondary-color) 70%, var(--primary-color) );
    background: linear-gradient(#ffed6b,#ff9494);
    min-height: 100vh;
    color: var(--terciary-color);
    padding: 5vw;

    @media(min-width: 768px) {
        padding-top: 20vh;
    }

`;
