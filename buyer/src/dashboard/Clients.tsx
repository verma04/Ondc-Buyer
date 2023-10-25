"use client";
//@ts-nocheck
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Clients() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
                DeshBazaar's collaboration tools streamlined our processes like
                never before. A game-changer for our team!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://pulseplaydigital.sgp1.digitaloceanspaces.com/20231025-3lr8d-t1-jpg"
              }
              name={"Rahul Mehta"}
              title={"CEO of Mehta Enterprises"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                The platform's design is so intuitive; it made setting up and
                managing our store a breeze. Truly user-friendly!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://pulseplaydigital.sgp1.digitaloceanspaces.com/20231025-rkrqi-photo-1586297135537-94bc9ba060aa"
              }
              name={"Ananya Roy"}
              title={"Founder of Roy Crafts & Co"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Every query was addressed promptly, and the support team went
                above and beyond. Absolutely stellar service!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://pulseplaydigital.sgp1.digitaloceanspaces.com/20231025-0db58-photo-1586297135537-94bc9ba060aa--1-"
              }
              name={"Vikram Singh"}
              title={"Director of Singh Innovations"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
