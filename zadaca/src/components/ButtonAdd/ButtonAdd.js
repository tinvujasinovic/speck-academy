import React from 'react';
import { ButtonAddWrapper } from './ButtonAddStyle';


const ButtonAdd = (
    props
) => {

    return (
        <ButtonAddWrapper callBack={props.callBack}>{props.text}</ButtonAddWrapper>
    );
}
export default ButtonAdd;