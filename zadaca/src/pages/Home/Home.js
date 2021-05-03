import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import Event from '../../components/Event/Event';
import { Grid } from '../../lib/style/generalStyles';
import allEvents from '../../lib/mock/events';
import Load from '../../components/Load/Load';

const Home = () => {
    const [events, setEvents] = useState([]);


    useEffect(() => {
        let eventsList = [];
        setTimeout(() => {
            eventsList = allEvents.map((event, index) => {
                return event.isFeatured ? <Event
                    key={index}
                    id={event.id}
                    image={event.imageUrl}
                    imageAlt={event.imageAlt}
                    title={event.title}
                    description={event.shortDescription}
                    buttonText='Find out more'
                /> : null
            });

            setEvents(eventsList);
        }, 1000);

        return ()=>{};
    }, []);
    return (
        <main>
            <Hero />
            <Section title="Featured events" withoutTopPadding={true}>
                {events.length > 0 ?
                    <Grid columns={3}>
                        {events}
                    </Grid>
                    : <Load />
                }
            </Section>
        </main>
    );
}

export default Home;