import React from 'react';
import Button from '../Button/Button';
import { EventWrapper, Figure, Image, Title, Description } from './EventStyle';

const Event = ({
    id,
    image,
    imageAlt,
    title,
    description,
    buttonText
}) => {
    return (
        <EventWrapper>
            <Figure>
                <Image src={image} alt={imageAlt} />
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button text={buttonText} id={id}/>
        </EventWrapper>
    );
}

export default Event;