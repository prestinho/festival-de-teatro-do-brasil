import React from 'react'
import PlayCard from '../PlayCard/PlayCard';

import { Play } from '../../models/Play';

import { Container } from './styles';

export interface Props {
}

const plays = require('../../assets/jsons/plays.json')

const PlaysGrid: React.FC<Props> = ({}) => {
    return (
        <Container>
            {plays.map( (play : Play) => (
                <PlayCard play={play} />
            ))}
        </Container>
    )
}

export default PlaysGrid;
