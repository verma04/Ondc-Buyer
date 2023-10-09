import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Color = () => {
  const data = ["red", "blue", "green", "yellow"];
  const [active, setActive] = React.useState(data[0]);
  return (
    <Flex mt="2rem" flexDirection={"column"}>
      <Text>Color: {active}</Text>

      <Flex mt="1rem" gap={"1rem"}>
        {data.map((set, key) => (
          <Button
            key={key}
            backgroundColor={set}
            onClick={() => setActive(set)}
            borderRadius={"50%"}
            border={active === set ? "1px solid red" : ""}
          ></Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Color;
