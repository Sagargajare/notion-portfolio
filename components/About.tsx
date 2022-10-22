import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <Box my="6" w="100%">
      <Text>About</Text>
      <Box>
        <Flex direction="row">
          <Box>
            <Image h="450px" src="/img/avatar.svg" />
          </Box>
          <Box></Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
