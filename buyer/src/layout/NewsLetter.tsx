"use client";

import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [error, setError] = useState(false);

  return (
    <Flex height={"20rem"} align={"center"} justify={"center"} bg={"#97978D"}>
      <Container maxW={"lg"} rounded={"lg"} p={6}>
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
          color={"white"}
        >
          Subscribe to our Newsletter
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === "fail@example.com") {
                setError(true);
                setState("initial");
                return;
              }

              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              bg={"#97978D"}
              border={" 1px solid white"}
              variant={"solid"}
              _placeholder={{
                color: "white",
              }}
              id={"email"}
              type={"email"}
              required
              placeholder={"Your Email"}
              aria-label={"Your Email"}
              value={email}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              bg={"#48464a"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
              color="white"
            >
              {state === "success" ? <CheckIcon /> : "Submit"}
            </Button>
          </FormControl>
        </Stack>
        <Text mt={2} textAlign={"center"} color={"white"}>
          {error
            ? "Oh no an error occured! 😢 Please try again later."
            : "You won't receive any spam! ✌️"}
        </Text>
      </Container>
    </Flex>
  );
}
