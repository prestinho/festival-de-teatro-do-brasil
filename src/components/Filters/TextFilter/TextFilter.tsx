import React, { memo } from 'react'

import { Input } from './styles';

export interface Props {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFilter: React.FC<Props> = ({...props}) => {
    return (
        <Input {...props}/>
    )
}

export default memo(TextFilter);
