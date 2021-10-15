import React from 'react'
import TextFilter from '../TextFilter/TextFilter';

import { Container } from './styles';

export interface Props {
}

const FiltersContainer: React.FC<Props> = ({}) => {
    return (
        <Container>
            <TextFilter />
        </Container>
    )
}

export default FiltersContainer;
