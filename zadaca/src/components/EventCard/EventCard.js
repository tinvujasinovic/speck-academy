import React from 'react';
import Button from '../Button/Button';
import { 
    EventCardWrapper, 
    Title, 
    Content, 
    Row,
    Item,
    ItemTitle,
    ItemValue } from './EventCardStyle';

const EventCard = ({
    title,
    location,
    time,
    availablePlaces,
    company
}) => {
    return (
        <>
            <EventCardWrapper>
                <Title>{title}</Title>
                <Content>
                    <Row>
                        <Item>
                            <ItemTitle>Lokacija</ItemTitle>
                            <ItemValue>{location}</ItemValue>
                        </Item>
                        <Item>
                            <ItemTitle>Datum i vrijeme</ItemTitle>
                            <ItemValue>{time}</ItemValue>
                        </Item>
                    </Row>
                    <Row>
                        <Item>
                            <ItemTitle>Slobodna mjesta</ItemTitle>
                            <ItemValue>{availablePlaces}</ItemValue>
                        </Item>
                        <Item>
                            <ItemTitle>Firma</ItemTitle>
                            <ItemValue>{company}</ItemValue>
                        </Item>
                    </Row>
                </Content>
                <Button text={'Find out more'} />
            </EventCardWrapper>
        </>
    );
}

export default EventCard;