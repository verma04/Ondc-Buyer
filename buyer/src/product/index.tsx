"use client";

import { Center, Container, Stack } from "@chakra-ui/react";
import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

const Product = () => {
  return (
    <Container as={Stack} maxW={"6xl"} py={10}>
      <Center
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        gap="1rem"
      >
        <ProductImage />
        <ProductDetails />
      </Center>
    </Container>
  );
};

export default Product;
