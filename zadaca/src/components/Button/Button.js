import React from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonWrapper } from './ButtonStyle';

const Button = ({
    text
}) => {

    const history = useHistory();

    const redirect = () => {
        history.push('/event')
    }

    return (
        <ButtonWrapper type="button" onClick={redirect}>
            {text}
        </ButtonWrapper>
    );
}
export default Button;