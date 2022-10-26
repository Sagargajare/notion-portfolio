import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  VStack,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Badge from "../Badge";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillMediumSquare } from "react-icons/ai";
import { TfiDownload } from "react-icons/tfi";
type Props = {};
const IconLinks = [
  {
    name: "Github",
    link: "https://github.com/sagargajare/",
    icon: <FaGithub size="32px" />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sagar-gajare/",
    icon: <BsLinkedin size="32px" />,
  },
  {
    name: "Medium",
    link: "https://medium.com/@sagargajare",
    icon: <AiFillMediumSquare size="32px" />,
  },
];
const LeftSide = () => {
  return (
    <Flex mb={{ base: "8", md: "0" }} direction={"column"}>
      <Badge emoji="👋">Hello</Badge>
      <Box
        fontFamily={"Raleway"}
        lineHeight="61.05px"
        fontWeight="800"
        fontSize={{ base: "48px", md: "52px" }}
      >
        <Text>Sagar</Text>
        <Text>Gajare</Text>
      </Box>
      <Text
        mt="4"
        fontFamily={"Raleway"}
        lineHeight="23px"
        fontWeight="400"
        fontSize={"20px"}
        color="rgba(255, 255, 255, 0.5)"
      >
        Fullstack developer
      </Text>
      <HStack my="8" gap={6}>
        {IconLinks.map((link, key) => {
          return <Box key={key}>{link.icon}</Box>;     
        })}
      </HStack>
    </Flex>
  );
};
const MiddleSide = () => {
  return (
    <Box
      mb={{ base: "8", md: "0" }}
      w={{ base: "100%", md: "555px" }}
      h={{ base: "100%", md: "600px" }}
    >
      <Image src="/img/avatar.svg" />
    </Box>
  );
};

const RightSide = () => {
  return (
    <VStack>
      <Link
        fontFamily={"Raleway"}
        lineHeight="23px"
        fontWeight="600"
        fontSize={"16px"}
        color="rgba(123, 74, 226, 0.5);"
      >
        Download CV
        <Icon as={TfiDownload} />
      </Link>
      <Button
        fontFamily={"Raleway"}
        lineHeight="23px"
        fontWeight="600"
        fontSize={"16px"}
        color="rgba(123, 74, 226, 0.5);"
        bg="transparent"
        borderRadius={"1rem"}
        border="1px solid rgba(123, 74, 226, 0.5);"
        px="8"
      >
        Contact Me
      </Button>
    </VStack>
  );
};
const Index = (props: Props) => {
  return (
    <Flex
      id="hero"
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      <Box>
        <LeftSide />
      </Box>
      <MiddleSide />
      <RightSide />
    </Flex>
  );
};

export default Index;
