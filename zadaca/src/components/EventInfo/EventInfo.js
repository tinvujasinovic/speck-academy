import React from 'react';
import Button from '../Button/Button';
import {
    EventInfoWrapper,
    Figure,
    Image,
    Content,
    Row,
    Item,
    Title,
    Value,
    Description
} from './EventInfoStyle';

const EventInfo = (props) => {
    return (
        <>
            <EventInfoWrapper>
                <Figure>
                    <Image src={props.imageUrl} alt={props.imageAlt} />
                </Figure>
                <Content>
                    <Row>
                        <Item>
                            <Title>Lokacija</Title>
                            <Value>{props.location}</Value>
                        </Item>
                        <Item>
                            <Title>Datum i vrijeme</Title>
                            <Value>{props.time}</Value>
                        </Item>
                    </Row>
                    <Row>
                        <Item>
                            <Title>Slobodna mjesta</Title>
                            <Value>{props.availability}</Value>
                        </Item>
                        <Item>
                            <Title>Firma</Title>
                            <Value>{props.company}</Value>
                        </Item>
                    </Row>
                    <Button text='Prijavi se' />
                </Content>
            </EventInfoWrapper>
            <Description>
                {props.description}
            </Description>
        </>
    );
}

export default EventInfo;
