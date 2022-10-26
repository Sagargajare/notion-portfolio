import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Badge from "./Badge";

type Props = {};
const CareerCard = () => {
  return (
    <Box
      id="career"
      w={{ base: "95%", md: "580px" }}
      h="auto"
      p="4"
      borderRadius={"16px"}
      border="1px solid rgba(123, 74, 226, 0.5)"
      m={{ md: "8", base: "4" }}
      mx="auto"
    >
      <Box p="4">
        <Text
          fontFamily={"Raleway"}
          lineHeight="23.48px"
          fontWeight="700"
          fontSize={{ base: "16px", md: "20px" }}
          color="#FFFFFF"
        >
          Company Name
        </Text>
      </Box>
      <Box p="4" pt="2">
        <Text
          fontFamily={"Raleway"}
          lineHeight="23.48px"
          fontWeight="400"
          fontSize={{ base: "12px", md: "16px" }}
          color="rgba(255, 255, 255, 0.5);"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          minima ipsum explicabo voluptate quaerat iure.
        </Text>
      </Box>
      <Flex
        justifyContent={"space-between"}
        mt="3"
        p="4"
        fontFamily={"Raleway"}
        lineHeight="21px"
        fontWeight="700"
        fontSize={{ base: "14px", md: "18px" }}
        color="#7B4AE2"
      >
        <Text>1 year 7 months</Text>
        <Text>April/2021 * Currently</Text>
      </Flex>
    </Box>
  );
};
const Career = (props: Props) => {
  return (
    <Box
      alignContent={"center"}
      textAlign={"center"}
      mx="auto"
      w={{ base: "100%", md: "90%" }}
      my="12"
    >
      <Flex
        w="100%"
        justifyContent={"center"}
        alignItems="center"
        alignContent={"center"}
        direction="column"
      >
        <Badge emoji="💼">Career</Badge>
        <Text
          fontFamily={"Raleway"}
          lineHeight="57px"
          fontWeight="800"
          fontSize={{ base: "24px", md: "48px" }}
          color="#FFFFFF"
        >
          Trajectory so far
        </Text>
      </Flex>
      <Box my="12">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-evenly"}
        >
          <Box>
            <Text
              fontFamily={"Raleway"}
              lineHeight="37.57px"
              fontWeight="800"
              fontSize={{ base: "24px", md: "32px" }}
              color="#FFFFFF"
              my="8"
            >
              Professional area
            </Text>
            <Flex flexWrap={"wrap"}>
              {[0, 1, 2, 3, 4, 5].map((key) => {
                return <CareerCard key={key} />;
              })}
            </Flex>
          </Box>
          <Box>
            <Text
              fontFamily={"Raleway"}
              lineHeight="37.57px"
              fontWeight="800"
              fontSize={{ base: "24px", md: "32px" }}
              color="#FFFFFF"
              my="8"
            >
              Academic
            </Text>
            <Flex flexWrap={"wrap"}>
              {[0, 1, 2, 3, 4, 5].map((key) => {
                return <CareerCard key={key} />;
              })}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Career;
