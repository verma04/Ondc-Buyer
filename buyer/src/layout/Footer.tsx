"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

const Logo = (props: any) => {
  return (
    <Image
      alt="logo"
      width={200}
      height={200}
      src="https://pulseplaydigital.sgp1.digitaloceanspaces.com/20231025-dyte6-deshbazaar-logo-1--2-"
    />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"#222"}>
      <Box bg={"#222"} color={"#222"}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <Box as="a" href={"#"} color="white">
                Overview
              </Box>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Box as="a" href={"#"} color="white">
                  Features
                </Box>
                <Tag
                  size={"sm"}
                  bg={useColorModeValue("green.300", "green.800")}
                  ml={2}
                  color={"white"}
                >
                  New
                </Tag>
              </Stack>
              <Box as="a" href={"#"} color="white">
                Tutorials
              </Box>
              <Box as="a" href={"#"} color="white">
                Pricing
              </Box>
              <Box as="a" href={"#"} color="white">
                Releases
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Box as="a" href={"#"} color="white">
                About Us
              </Box>
              <Box as="a" href={"#"} color="white">
                Press
              </Box>
              <Box as="a" href={"#"} color="white">
                Careers
              </Box>
              <Box as="a" href={"#"} color="white">
                Contact Us
              </Box>
              <Box as="a" href={"#"} color="white">
                Partners
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Legal</ListHeader>
              <Box as="a" href={"#"} color="white">
                Cookies Policy
              </Box>
              <Box as="a" href={"#"} color="white">
                Privacy Policy
              </Box>
              <Box as="a" href={"#"} color="white">
                Terms of Service
              </Box>
              <Box as="a" href={"#"} color="white">
                Law Enforcement
              </Box>
              <Box as="a" href={"#"} color="white">
                Status
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <Box as="a" href={"#"} color="white">
                Facebook
              </Box>
              <Box as="a" href={"#"} color="white">
                Twitter
              </Box>
              <Box as="a" href={"#"} color="white">
                Dribbble
              </Box>
              <Box as="a" href={"#"} color="white">
                Instagram
              </Box>
              <Box as="a" href={"#"} color="white">
                LinkedIn
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Logo />
          </Flex>
          <Text pt={6} color="white" fontSize={"sm"} textAlign={"center"}>
            © 2023 PulsePlay Digital Private Limited | All Rights Reserved
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
