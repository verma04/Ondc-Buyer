"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import Wishlist from "@/svg/Wishlist";
import User from "@/svg/User";
import Cart from "@/svg/Cart";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function MainNavbar() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={"#2462DD"}>
      <Container as={Stack} maxW={"6xl"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href={"/"}>
              <Image
                alt="logo"
                width={180}
                height={180}
                src="https://pulseplaydigital.sgp1.digitaloceanspaces.com/20231025-dyte6-deshbazaar-logo-1--2-"
              />
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex gap={"2rem"} alignItems={"center"}>
            <Link href="/contact-us" target="_blank">
              <Button color="white" bg={"#FF9C24"}>
                Get Demo
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
