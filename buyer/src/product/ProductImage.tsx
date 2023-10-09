import { Center } from "@chakra-ui/react";
import React from "react";

const ProductImage = () => {
  return (
    <Center
      position={"sticky"}
      top={"0"}
      width={"50%"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      gap={"1rem"}
      sx={{ position: "sticky", top: 0 }}
    >
      {[1, 2, 2, 3, 4].map((set, key) => (
        <Center
          key={key}
          width={"48%"}
          height={"20rem"}
          border={"1px solid red"}
        ></Center>
      ))}
    </Center>
  );
};

export default ProductImage;
