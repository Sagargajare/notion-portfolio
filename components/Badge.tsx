import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Badge = (props: Props) => {
  return (
    <Flex
      my="4"
      w="fit-content"
      borderRadius={"1rem"}
      p="1"
      px="4"
      bg="rgba(123, 74, 226, 0.1);"
    >
      <Box>👋</Box>
      <Box>
        <Text
          fontSize="20px"
          fontFamily="Raleway"
          fontWeight="700"
          color="#7B4AE2"
        >
          Hello
        </Text>
      </Box>
    </Flex>
  );
};

export default Badge;
