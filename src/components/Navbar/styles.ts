import styled from "styled-components";


import { Props } from './Navbar' ;


export const Container = styled.div<Props>`
    height: 80px;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    padding-left: 20px;
    width: 100vw;
    z-index:99;
    
    @media(min-width: 768px) {
        height: ${ props => props.hasNavigated ? '60px' : '80px' };
        background-color: ${ props => props.hasNavigated ? 'var(--primary-color)' : '' };
        opacity: 0.9;
        transition: all easy 1s;
        transition: background-color 0.5s;
        transition: height 0.5s;
    }

    `;

export const Img = styled.img`
    max-height: 100%;
`;

export const Girl = styled.div`
`;


