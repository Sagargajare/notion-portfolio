import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";
import React from "react";
import Badge from "./Badge";

type Props = {};

const About = (props: Props) => {
  return (
    <Box my="6" w="100%" py="24">
      <Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Box>
            <Image h="450px" src="/img/avatar.svg" />
          </Box>
          <Box>
            <Badge emoji="🧐">About me</Badge>
            <Text
              fontFamily={"Raleway"}
              lineHeight="57px"
              fontWeight="800"
              fontSize={{ base: "48px", md: "52px" }}
              color="#FFFFFF"
            >
              Frontend Guy :- Saga
            </Text>
            <VStack mt="6" gap="2" alignItems={"left"}>
              <Text>
                👨‍💻 I have been developing and programming interfaces with
                JavaScript, React JS and Typescript for more than 2 years.
              </Text>
              <Text>
                🎓Computer Engineering undergrad at University of Pune(SPPU)
              </Text>
              <Text>
                💡 Interests in Front-end development with React, React Native,
                VueJS and UX/UI Design.
              </Text>
              <Text>
                🚀 Trying to be a little better than you are every day.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
