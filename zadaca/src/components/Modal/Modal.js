import React from 'react';
import { ModalWrapper, Title, Cross, Overlay, FormWrapper } from './ModalStyle';

const Modal = (props) => {
    if (!props.show)
        return null;

    return (
        <Overlay>
            <ModalWrapper>
                <FormWrapper>
                    <Title>Add event
            <Cross onClick={props.onClose} />
                    </Title>

                    {props.children}
                </FormWrapper>  
            </ModalWrapper>
        </Overlay>
    );
}

export default Modal;