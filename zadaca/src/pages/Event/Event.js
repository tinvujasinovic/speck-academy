import React from 'react';
import { useParams } from 'react-router';
import EventInfo from '../../components/EventInfo/EventInfo';
import Section from '../../components/Section/Section';
import AllEvents from '../../lib/mock/events';


const Event = () => {

    let { id } = useParams();

    let event = AllEvents.find(x => x.id === parseInt(id));

    return (
        <Section title={event.title}>
            <EventInfo
                location={event.location}
                time={event.dateTime}
                availability={event.availability}
                company={event.company}
                imageAlt={event.imageAlt}
                imageUrl={event.imageUrl}
                description={event.description}
            />
        </Section>
    );
}

export default Event;