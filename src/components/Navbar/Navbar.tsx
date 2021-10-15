import React from 'react'

import { Container } from './styles';

export interface Props {
    hasNavigated?: boolean;
}

const Navbar: React.FC<Props> = ({hasNavigated}) => {
    return (
        <Container hasNavigated={hasNavigated}>

        </Container>
    )
}

export default Navbar;
