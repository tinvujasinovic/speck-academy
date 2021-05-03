import React from 'react';
import EventInfo from '../../components/EventInfo/EventInfo';
import Section from '../../components/Section/Section';

import './Event.scss';

const Event = () => {
    return (
        <Section title={'UX/UI design workshop'}>
            <EventInfo>
             
                <div className="EventInfo-Content">
                    <div className="EventInfo-ContentRow">
                        <div className="EventInfo-ItemTitle">
                            <h3 className="EventInfo-ItemTitleTitle">Lokacija</h3>
                            <p className="EventInfo-ItemTitleValue">Hodnik FOI-a</p>
                        </div>
                        <div className="EventInfo-ItemTitle">
                            <h3 className="EventInfo-ItemTitle">Datum i vrijeme</h3>
                            <p className="EventInfo-ItemTitleValue">14.10. (9:00-16:00h)</p>
                        </div>
                    </div>
                    <div className="EventInfo-ContentRow">
                        <div className="EventInfo-ItemTitle">
                            <h3 className="EventInfo-ItemTitle">Slobodna mjesta</h3>
                            <p className="EventInfo-ItemTitleValue">15/60</p>
                        </div>
                        <div className="EventInfo-ItemTitle">
                            <h3 className="EventInfo-ItemTitle">Firma</h3>
                            <p className="EventInfo-ItemTitleValue">Speck</p>
                        </div>
                    </div>
                </div>
            </EventInfo>
            <p className="EventInfo-Description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint laborum quibusdam quisquam, fugiat
                cumque dignissimos quasi. Corrupti dignissimos commodi ad sint aliquam. Ipsum doloremque, eum commodi
                dolor voluptatibus blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                reiciendis error animi quae dolorum officiis suscipit iusto quos facere temporibus libero a, labore
                nihil ipsa necessitatibus debitis quibusdam? Optio, dolor?
            </p>
        </Section>
    );
}

export default Event;