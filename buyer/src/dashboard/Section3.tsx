"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import {
  IoAnalytics,
  IoAppsSharp,
  IoCartOutline,
  IoHomeOutline,
  IoHourglassOutline,
  IoLogoAndroid,
  IoSpeedometer,
} from "react-icons/io5";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Section3() {
  return (
    <Box p={4} marginBottom={"5rem"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          E-commerce Simplified, Success Amplified
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Empowering your online business growth with all the essential tools.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Site Speed"}
            icon={<Icon as={IoSpeedometer} color="red" w={10} h={10} />}
            description={
              "Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!"
            }
            href={"#"}
          />
          <Card
            heading={"Multi-Warehouse"}
            icon={<Icon color="blue" as={IoHomeOutline} w={10} h={10} />}
            description={
              "One store, multiple locations. Ship products from multiple warehouses across India.."
            }
            href={"#"}
          />
          <Card
            heading={"Optimised Checkouts"}
            icon={<Icon color="green" as={IoCartOutline} w={10} h={10} />}
            description={
              "Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates."
            }
            href={"#"}
          />
          <Card
            heading={"Android App/IOS App"}
            icon={<Icon color="green" as={IoLogoAndroid} w={10} h={10} />}
            description={
              "The world is mobile. It's time your store is too. Get more loyal customers with your mobile app."
            }
            href={"#"}
          />
          <Card
            heading={"Advanced Analytics"}
            icon={<Icon color="blue" as={IoAnalytics} w={10} h={10} />}
            description={
              "All the information about your sales, traffic, regions and products, just a single click away."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
