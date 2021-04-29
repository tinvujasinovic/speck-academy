import React from 'react';
import './Button.scss';
import { useHistory } from 'react-router-dom';

const Button = ({
    text
}) => {

    const history = useHistory();

    const redirect = () => {
        history.push('/event')
    }

    return (
        <button className="Button" type="button" onClick={redirect}>
            {text}
        </button>
    );
}
export default Button;