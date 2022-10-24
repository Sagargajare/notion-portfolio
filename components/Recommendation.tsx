import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Badge from "./Badge";

type Props = {};
type TestimonyCardProps = {
    keyn: number;
}
const TestimonyCard = ({ keyn }: TestimonyCardProps) => {
  return (
    <Box
      h="295px"
      borderRadius={"16px"}
      border={"1px solid rgba(123, 74, 226, 0.5)"}
      w="500px"
      m="1"
      p="8"
      bg={`${keyn % 2 !== 0 && "rgba(123, 74, 226, 0.1)"}`}
    >
      <Box color={"rgba(123, 74, 226, 0.5)"}>
        <FaQuoteRight size="25px" />
      </Box>
      <Box py="2">
        <Text
          fontFamily={"Raleway"}
          lineHeight="19px"
          fontWeight="400"
          fontSize={{ base: "12px", md: "16px" }}
          color="rgba(255, 255, 255, 0.5);"
        >
          Sagar is focused and dedicated to producing his very best at all
          times. He is always a great asset to any team. Very adaptive and
          always keen to learn new technologies. I recommend him highly.
        </Text>
      </Box>
      <Box mt="6" py="2">
        <Flex>
          <Box>
            <Avatar size="md" name="Azhar Badri" src="/img/azharbadri.jpg" />
          </Box>
          <Flex p="1" direction={"column"} ml="2" alignItems={"left"}>
            <Text
              fontFamily={"Raleway"}
              lineHeight="19px"
              fontWeight="700"
              fontSize={{ base: "16px", md: "20px" }}
              color="#ffffff"
            >
              Azhar Bandri
            </Text>
            <Text
              fontFamily={"Raleway"}
              lineHeight="19px"
              fontWeight="700"
              fontSize={{ base: "12px", md: "16px" }}
              color="rgba(123, 74, 226, 0.5);"
            >
              Operations Manager at Pleximus
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
const Recommendation = (props: Props) => {
  return (
    <Box my="16" w={{ base: "95%", md: "80%" }} mx="auto">
      <Badge emoji="💬">Recommendation</Badge>{" "}
      <Text
        fontFamily={"Raleway"}
        lineHeight="57px"
        fontWeight="800"
        fontSize={{ base: "24px", md: "48px" }}
        color="#FFFFFF"
        mt="4"
      >
        In testimony
      </Text>
      <Flex mt="12" w="100%" justifyContent={"space-evenly"}>
        {[0, 1, 2].map((key) => {
            return <TestimonyCard keyn={key } key={key} />;
        })}
      </Flex>
    </Box>
  );
};

export default Recommendation;
