import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Badge from "./Badge";

type Props = {};
type ProjectCardProps = {};
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Box
      m="3"
      borderRadius={"16px"}
      w="288px"
      h="368px"
      p="6"
      border="1px solid rgba(123, 74, 226, 0.5)"
    >
      <Text
        fontFamily={"Raleway"}
        lineHeight="23px"
        fontWeight="700"
        fontSize={{ base: "16px", md: "20px" }}
        color="#FFFFFF"
      >
        Notion CMS
      </Text>
      <Text
        my="2"
        fontFamily={"Raleway"}
        lineHeight="16px"
        fontWeight="400"
        fontSize={{ base: "14px", md: "14px" }}
        color="color: rgba(255, 255, 255, 0.5);"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        reprehenderit, expedita tempore eius officiis fuga?
      </Text>
      <Box display={"flex"} mt="8" color="#7B4AE2">
        {["Reactjs", "Nextjs", "Chakra UI"].map((item, index) => {
          return (
            <Box
              borderRadius={"8px"}
              px="2"
              bg="rgba(123, 74, 226, 0.1)"
              mx="1"
              key={index}
            >
              {item}
            </Box>
          );
        })}
      </Box>
      <Box py="4">
        <Image src="/img/project.svg" />
      </Box>
    </Box>
  );
};
const Project = (props: Props) => {
  return (
    <Box w={{ base: "100%", md: "90%" }} mx="auto">
      <Badge emoji="🔗">Portfolio</Badge>
      <Text
        fontFamily={"Raleway"}
        lineHeight="57px"
        fontWeight="800"
        fontSize={{ base: "48px", md: "52px" }}
        color="#FFFFFF"
      >
        Works and projects
      </Text>

      <SimpleGrid
        justifyContent={"center"}
        alignItems={"center"}
        my="6"
        py="12"
        columns={[1, 1, 2, 3, 4]}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => {
          return <ProjectCard key={key} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Project;
