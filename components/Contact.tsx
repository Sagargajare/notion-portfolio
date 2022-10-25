import { Box, Button, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { RiFileCopyLine } from "react-icons/ri";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import Badge from "./Badge";

type Props = {};

const Contact = (props: Props) => {
  return (
    <Box id="contact"  my="16">
      <Flex
        w="100%"
        justifyContent={"center"}
        alignItems="center"
        alignContent={"center"}
        direction="column"
      >
        <Badge emoji="📬"> Contact</Badge>
        <Text
          fontFamily={"Raleway"}
          lineHeight="57px"
          fontWeight="800"
          fontSize={{ base: "24px", md: "48px" }}
          color="#FFFFFF"
          mt="4"
        >
          Let's talk!
        </Text>
        <Box py="12" w="100%" my="8">
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-around"}
            alignItems="center"
            alignContent="center"
            w={{ base: "100%", md: "40%" }}
            mx="auto"
          >
            <Box>
              <Button
                color="rgba(123, 74, 226, 0.5);"
                leftIcon={<BsWhatsapp />}
                borderRadius={"10px"}
                variant={"outline"}
                borderColor="rgba(123, 74, 226, 0.5);"
              >
                Get in touch
              </Button>
            </Box>

            <Flex direction={"column"} textAlign="center">
              <Box mx="auto" py="1">
                <TbBrandTelegram size="50px" color="rgba(123, 74, 226, 0.5" />
              </Box>

              <Box py="1">
                <Text
                  fontFamily={"Raleway"}
                  lineHeight="23.48px"
                  fontWeight="400"
                  fontSize={{ base: "16px", md: "20px" }}
                  color="#7B4AE2"
                >
                  Email:
                </Text>
              </Box>

              <Box py="1">
                <Text
                  fontFamily={"Raleway"}
                  lineHeight="23.48px"
                  fontWeight="400"
                  fontSize={{ base: "16px", md: "20px" }}
                  color="rgba(255, 255, 255, 0.5);"
                >
                  sggajare360@gmail.com
                </Text>
              </Box>
              <Box py="1">
                <IconButton
                  color={"rgba(123, 74, 226, 0.5"}
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  icon={
                    <RiFileCopyLine
                      color="rgba(123, 74, 226, 0.5"
                      size="25px"
                    />
                  }
                  aria-label={"Copy"}
                ></IconButton>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Link _hover={{
            underline:"none"
          }} href="#hero">
            <Button
            border={"rgba(123, 74, 226, 0.5)"}
            color="rgba(123, 74, 226, 0.5);"
            bg="transparent"
            _hover={{ border: "1px solid rgba(123, 74, 226, 0.5)" }}
            variant={"outline"}
            rightIcon={<HiOutlineArrowNarrowUp />}
          >
            Back to top{" "}
          </Button>
          </Link>
          
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
