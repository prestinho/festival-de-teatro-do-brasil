 import styled from "styled-components";

 export const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        height: 50vh;
    }
`;

export const H1 = styled.h1`
    animation: puffIn 0.6s 0.5s;
    z-index: 2;
`;
