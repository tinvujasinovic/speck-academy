import React from 'react';
import Button from '../Button/Button';
import { EventInfoWrapper, Figure, Image, Content, Row, Item, Title, Value } from './EventInfoStyle';

const EventInfo = () => {
    return (
        <EventInfoWrapper>
            <Figure>
                <Image src={require("../../assets/images/design.jpg").default} alt="Design" />
            </Figure>
            <Content>
                <Row>
                    <Item>
                        <Title>Lokacija</Title>
                        <Value></Value>
                    </Item>
                    <Item>
                        <Title>Datum i vrijeme</Title>
                        <Value></Value>
                    </Item>
                </Row>
                <Row>
                    <Item>
                        <Title>Slobodna mjesta</Title>
                        <Value></Value>
                    </Item>
                    <Item>
                        <Title>Firma</Title>
                        <Value></Value>
                    </Item>
                </Row>

                {/* <Button text='Prijavi se' /> */}
            </Content>
        </EventInfoWrapper>
    );
}

export default EventInfo;