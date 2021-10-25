import React from 'react'

import { Container, LabeledRadio, Radio } from './styles';

export interface Props {
    states : string[];
}

const StateFilter: React.FC<Props> = ({states}) => {
    return (
        <Container>
            {states.map((state : string) => (
                <LabeledRadio key={state}>
                    <Radio type="radio" id={state} name="state" value={state} />
                    <label key={state} htmlFor={state}>{state}</label> 
                </LabeledRadio>
            ))}

        </Container>
    )
}

export default StateFilter;
