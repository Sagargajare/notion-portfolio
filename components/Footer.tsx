import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillMediumSquare } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

type Props = {};
const IconLinks = [
  {
    name: "Github",
    link: "https://github.com/sagargajare/",
    icon: <FaGithub size="20px" />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sagar-gajare/",
    icon: <BsLinkedin size="20px" />,
  },
  {
    name: "Medium",
    link: "https://medium.com/@sagargajare",
    icon: <AiFillMediumSquare size="20px" />,
  },
];
const Footer = (props: Props) => {
  return (
    <Box p="2" bg="rgba(123, 74, 226, 0.1)"  borderRadius={"10px"}>
      <Flex alignItems={"center"} alignContent="center" justifyContent={"space-between"}>
        <Flex direction={{base:"column",md:"row"}}>
          <Box p="2" mx="2">
            <Text color="#4B3587" as="span">
              Designed by{" "}
              <Link
                target={"_blank"}
                href={
                  "https://www.figma.com/community/file/1162385628597290713"
                }
              >
                <Text color={"#4B3587"} as="span">
                  Henrique de Sousa
                </Text>
              </Link>
            </Text>{" "}
          </Box>

          <Box p="2" mx="2">
            <Text color="#4B3587" as="span">
              {" "}
              Developed by{" "}
              <Link
                target={"_blank"}
                href={
                  "https://www.figma.com/community/file/1162385628597290713"
                }
              >
                <Text color={"#4B3587"} as="span">
                  Sagar Gajare
                </Text>
              </Link>
            </Text>
          </Box>
        </Flex>

        <Box my="2">
          <HStack gap={3}>
            {IconLinks.map((link, key) => {
              return <Box key={key}>{link.icon}</Box>;
            })}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
