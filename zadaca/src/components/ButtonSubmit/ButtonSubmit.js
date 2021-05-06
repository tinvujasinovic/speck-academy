import React from 'react';
import { ButtonWrapper } from '../Button/ButtonStyle';

const ButtonSubmit = ({
    text, 
    action
}) => {

    return (
        <ButtonWrapper type='submit' onClick={action}>
            {text}
        </ButtonWrapper>
    );
}
export default ButtonSubmit;