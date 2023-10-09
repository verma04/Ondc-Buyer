import { Button, Center, Flex } from "@chakra-ui/react";
import React from "react";

const Quantity = () => {
  const [count, setCount] = React.useState(1);
  const increment = () => {
    if (count >= 1) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };
  return (
    <Flex mt="2rem">
      <Center
        justifyContent={"space-between"}
        padding={"0.3rem"}
        width={"10rem"}
        border="1px solid"
        borderRadius={"10px"}
      >
        <Button onClick={decrement}>-</Button>
        {count}
        <Button onClick={increment}>+</Button>
      </Center>
    </Flex>
  );
};

export default Quantity;
