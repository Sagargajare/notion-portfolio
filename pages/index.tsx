import { Box,Container,Text } from '@chakra-ui/react'
import React from 'react'
import About from '../components/About';
import Career from '../components/Career';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Recommendation from '../components/Recommendation';
import Skillset from '../components/Skillset';

type Props = {}

const Home = (props: Props) => {
  return (
    <Container w="1640px" maxWidth={"100%"}>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skillset />
      <Career />
      {/* <Recommendation /> */}
      <Contact />
      <Footer/>
    </Container>
  );
}

export default Home