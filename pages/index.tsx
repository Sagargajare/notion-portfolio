import { Box,Container,Text } from '@chakra-ui/react'
import React from 'react'
import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

type Props = {}

const Home = (props: Props) => {
  return (
    <Container maxWidth={"100%"}>
      <Navbar />
      <Hero />
      <About/>
    </Container>
  );
}

export default Home