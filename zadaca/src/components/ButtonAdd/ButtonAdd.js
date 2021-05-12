import React from 'react';
import { ButtonAddWrapper } from './ButtonAddStyle';


const ButtonAdd = (
    props
) => {
    return (
        <ButtonAddWrapper type="button" onClick={props.callback}>{props.text}</ButtonAddWrapper>
    );
}
export default ButtonAdd;