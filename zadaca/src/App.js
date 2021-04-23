import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import Grid from './components/Grid/Grid';
import Event from './components/Event/Event';
import Footer from './components/Footer/Footer';
//images
import ImageDesign from './assets/images/design.jpg';
import ImageDevelopment from './assets/images/development.jpg';
import ImageMarketing from './assets/images/marketing.jpg';

function App() {
  return (
    <>
      <Header/>
      <Main>
        <Hero/>
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
      </Main>
      <Footer/>
    </>
  );
}

export default App;
