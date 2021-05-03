import React from 'react';
import Button from '../Button/Button';
import { EventInfoWrapper, Figure, Image, Content, Row, Item, Value } from './EventInfoStyle';

const EventInfo = () => {
    return (
        <EventInfoWrapper>
            <Figure>
                <Image src={require("../../assets/images/design.jpg").default} alt="Design" />
            </Figure>
            <Content>
                <Row>
                    <Item>
                        <h3>Lokacija</h3>
                        <Value></Value>
                    </Item>
                    <Item>
                        <h3>Datum i vrijeme</h3>
                        <Value></Value>
                    </Item>
                </Row>
                <Row>
                    <Item>
                        <h3>Slobodna mjesta</h3>
                        <Value></Value>
                    </Item>
                    <Item>
                        <h3>Firma</h3>
                        <Value></Value>
                    </Item>
                </Row>

                {/* <Button text='Prijavi se' /> */}
            </Content>
        </EventInfoWrapper>
    );
}

export default EventInfo;