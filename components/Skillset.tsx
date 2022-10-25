import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  FaAws,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCss3,
  SiDjango,
  SiFlask,
  SiJava,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import Badge from "./Badge";

type Props = {};
const dailySkills = [
  {
    name: "React",
    Icon: <FaReact size="64px" />,
  },
  {
    name: "React",
    Icon: <SiJavascript size="64px" />,
  },
  {
    name: "React",
    Icon: <SiTypescript size="64px" />,
  },
  {
    name: "React",
    Icon: <SiNextdotjs size="64px" />,
  },
  {
    name: "React",
    Icon: <AiOutlineHtml5 size="64px" />,
  },
  {
    name: "React",
    Icon: <SiCss3 size="64px" />,
  },
  {
    name: "React",
    Icon: <FaGithub size="64px" />,
  },
  {
    name: "React",
    Icon: <FaGitAlt size="64px" />,
  },
];

const otherSkills = [
  {
    name: "Python",
    Icon: <FaPython size="64px" />,
  },
  {
    name: "Django",
    Icon: <SiDjango size="64px" />,
  },
  {
    name: "Flask",
    Icon: <SiFlask size="64px" />,
  },
  {
    name: "Linux",
    Icon: <SiLinux size="64px" />,
  },
  {
    name: "Java",
    Icon: <SiJava size="64px" />,
  },
  {
    name: "Nodejs",
    Icon: <FaNodeJs size="64px" />,
  },
  {
    name: "AWS",
    Icon: <FaAws size="64px" />,
  },
  {
    name: "MongoDb",
    Icon: <SiMongodb size="64px" />,
  },
];
const Skillset = (props: Props) => {
  return (
    <Box
      alignContent={"center"}
      textAlign={"center"}
      mx="auto"
      w={{ base: "100%", md: "90%" }}
      id="skillset"
    >
      <Flex
        w="100%"
        justifyContent={"center"}
        alignItems="center"
        alignContent={"center"}
        direction="column"
      >
        <Badge emoji="🧐">Skillset</Badge>
        <Box w="100%">
          <Text
            fontFamily={"Raleway"}
            lineHeight="57px"
            fontWeight="800"
            fontSize={{ base: "24px", md: "48px" }}
            color="#FFFFFF"
          >
            Technologies and skills
          </Text>
        </Box>
        <Box mt="5">
          <Text
            fontFamily={"Raleway"}
            lineHeight="28.18px"
            fontWeight="400"
            fontSize={{ base: "18px", md: "24px" }}
            color="rgba(255, 255, 255, 0.5);"
          >
            Techs I use on a daily basis
          </Text>

          <Flex
            justifyContent={"center"}
            flexWrap={"wrap"}
            mt="8"
            color="rgba(123, 74, 226, 0.5)"
          >
            {dailySkills.map((icn, key) => {
              return (
                <Box key={key} m="4">
                  {icn.Icon}
                </Box>
              );
            })}
          </Flex>
        </Box>
        <Box mt="12">
          <Text
            fontFamily={"Raleway"}
            lineHeight="28.18px"
            fontWeight="400"
            fontSize={{ base: "18px", md: "24px" }}
            color="rgba(255, 255, 255, 0.5);"
          >
            Other techs I've done projects with
          </Text>

          <Flex
            justifyContent={"center"}
            flexWrap={"wrap"}
            mt="8"
            color="rgba(123, 74, 226, 0.5)"
          >
            {otherSkills.map((icn, key) => {
              return (
                <Box key={key} m="4">
                  {icn.Icon}
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skillset;
