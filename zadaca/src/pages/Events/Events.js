import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import { Grid } from '../../lib/style/generalStyles';
import Section from '../../components/Section/Section';

const Events = () => {
        return (
                <>
                        <Section title="Events">
                                <Grid columns={4}>
                                        <EventCard
                                                title="UX/UI design workshop"
                                                location="Hodnik FOI-a"
                                                time="14.10. (9:00-16:00h)"
                                                availablePlaces="15/60"
                                                company="Speck"
                                        />
                                        <EventCard
                                                title="UX/UI design workshop"
                                                location="Hodnik FOI-a"
                                                time="14.10. (9:00-16:00h)"
                                                availablePlaces="15/60"
                                                company="Speck"
                                        />
                                        <EventCard
                                                title="UX/UI design workshop"
                                                location="Hodnik FOI-a"
                                                time="14.10. (9:00-16:00h)"
                                                availablePlaces="15/60"
                                                company="Speck"
                                        />
                                        <EventCard
                                                title="UX/UI design workshop"
                                                location="Hodnik FOI-a"
                                                time="14.10. (9:00-16:00h)"
                                                availablePlaces="15/60"
                                                company="Speck"
                                        />
                                        <EventCard
                                                title="UX/UI design workshop"
                                                location="Hodnik FOI-a"
                                                time="14.10. (9:00-16:00h)"
                                                availablePlaces="15/60"
                                                company="Speck"
                                        />
                                        <EventCard
                                                title="UX/UI design workshop"
                                                location="Hodnik FOI-a"
                                                time="14.10. (9:00-16:00h)"
                                                availablePlaces="15/60"
                                                company="Speck"
                                        />
                                        <EventCard
                                                title="UX/UI design workshop"
                                                location="Hodnik FOI-a"
                                                time="14.10. (9:00-16:00h)"
                                                availablePlaces="15/60"
                                                company="Speck"
                                        />
                                        <EventCard
                                                title="UX/UI design workshop"
                                                location="Hodnik FOI-a"
                                                time="14.10. (9:00-16:00h)"
                                                availablePlaces="15/60"
                                                company="Speck"
                                        />
                                </Grid>
                        </Section>
                </>
        );
}
export default Events;