import React from 'react';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import Event from '../../components/Event/Event';
import {Grid } from '../../lib/style/generalStyles';

import ImageDesign from '../../assets/images/design.jpg';
import ImageDevelopment from '../../assets/images/development.jpg';
import ImageMarketing from '../../assets/images/marketing.jpg';

const Home = () => {
    return (
        <main>
            <Hero />
            <Section title="Featured events">
                <Grid columns="3">
                    <Event
                        image={ImageDesign}
                        title="UX/UI design workshop"
                        description="Learn how to solve big problems and test new ideas based on Google Sprint methodology..."
                        buttonText="Find out more"
                    />
                    <Event
                        image={ImageDevelopment}
                        title="Frontend best practices"
                        description="Best frontend practices for developers. Learn advanced CSS techniques and much more..."
                        buttonText="Find out more"
                    />
                    <Event
                        image={ImageMarketing}
                        title="Digital marketing workshop"
                        description="Lear how to use Google Ads and social networks to gain customers for your digital product..."
                        buttonText="Find out more"
                    />
                </Grid>
            </Section>
        </main>
    );
}

export default Home;