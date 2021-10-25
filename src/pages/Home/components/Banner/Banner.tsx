import React from 'react'

import { Container, H1, Dias } from './styles';


export interface Props {
}

const Banner: React.FC<Props> = () => {
    return (
        <Container>
            <H1>
                I FESTIVAL <br/>
                DE TEATRO <br/>
                DO BRASIL
            </H1>
            <Dias>
                <h2>Dias 25, 26 e 27 de Março</h2>
            </Dias>
        </Container>
    )
}

export default Banner;
