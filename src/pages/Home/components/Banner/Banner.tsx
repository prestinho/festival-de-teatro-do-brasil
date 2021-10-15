import React from 'react'

import { Container, H1 } from './styles';


export interface Props {
}

const Banner: React.FC<Props> = ({}) => {
    return (
        <Container>
            <H1>
                I FESTIVAL <br/>
                DE TEATRO <br/>
                DO BRASIL
            </H1>
        </Container>
    )
}

export default Banner;
