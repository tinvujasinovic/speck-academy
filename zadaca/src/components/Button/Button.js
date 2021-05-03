import React from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonWrapper } from './ButtonStyle';

const Button = (
    props
) => {
    const history = useHistory();

    const redirect = () => {
        history.push(`/event/${props.id}`)
    }

    return (
        <ButtonWrapper type="button" onClick={redirect}>
            {props.text}
        </ButtonWrapper>
    );
}
export default Button;