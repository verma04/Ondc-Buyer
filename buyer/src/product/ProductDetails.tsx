import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Size from "./Size";
import Color from "./Color";
import Quantity from "./Quantity";
import AddToCart from "./AddToCart";

const ProductDetails = () => {
  return (
    <Flex
      width={"50%"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
    >
      <Heading>Men T shiert sddssd </Heading>
      <Heading mt="1rem" as={"h3"}>
        <del>£229.00</del> £199.00{" "}
      </Heading>

      <Text mt="1rem">
        With a sleek design and a captivating essence, this is a modern Classic
        made for every occasion.
      </Text>

      <Size />

      <Color />

      <Quantity />
      <AddToCart />
    </Flex>
  );
};

export default ProductDetails;
