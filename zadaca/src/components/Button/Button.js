import React from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonWrapper } from './ButtonStyle';

const Button = (
    props
) => {
    const history = useHistory();

    const redirect = (e) => {
        e.preventDefault();
        if(props.id > 0)
            history.push(`/event/${props.id}`);
    }

    return (
        <ButtonWrapper type="button" onClick={props.callback ? props.callback : redirect}>
            {props.text}
        </ButtonWrapper>
    );
}
export default Button;