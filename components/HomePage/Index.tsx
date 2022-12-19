import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import About from "../About";
import Career from "../Career";
import Contact from "../Contact";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Project from "../Project";
import Recommendation from "../Recommendation";
import Skillset from "../Skillset";

type Props = {};

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
      <Footer />
    </Container>
  );
};

export default Home;
