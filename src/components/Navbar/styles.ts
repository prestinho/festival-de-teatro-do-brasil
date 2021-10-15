import styled from "styled-components";


import { Props } from './Navbar' ;


export const Container = styled.div<Props>`
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-content: center;
    transition: easy all 0.2;
    background-color: ${ props => props.hasNavigated ? 'var(--primary)' : '' };
`;

