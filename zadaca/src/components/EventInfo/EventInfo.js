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

const EventInfo = () => {
    return (
        <>
            <EventInfoWrapper>
                <Figure>
                    <Image src={require("../../assets/images/design.jpg").default} alt="Design" />
                </Figure>
                <Content>
                    <Row>
                        <Item>
                            <Title>Lokacija</Title>
                            <Value>Hodnik FOI-a</Value>
                        </Item>
                        <Item>
                            <Title>Datum i vrijeme</Title>
                            <Value>14.10. (9:00-16:00h)</Value>
                        </Item>
                    </Row>
                    <Row>
                        <Item>
                            <Title>Slobodna mjesta</Title>
                            <Value>15/60</Value>
                        </Item>
                        <Item>
                            <Title>Firma</Title>
                            <Value>Speck</Value>
                        </Item>
                    </Row>
                    <Button text='Prijavi se' />
                </Content>
            </EventInfoWrapper>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint laborum quibusdam quisquam, fugiat
                cumque dignissimos quasi. Corrupti dignissimos commodi ad sint aliquam. Ipsum doloremque, eum commodi
                dolor voluptatibus blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                reiciendis error animi quae dolorum officiis suscipit iusto quos facere temporibus libero a, labore
                nihil ipsa necessitatibus debitis quibusdam? Optio, dolor?
            </Description>
        </>
    );
}

export default EventInfo;
