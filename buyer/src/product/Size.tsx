import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Size = () => {
  const data = ["22", "33", "34", "45"];
  const [active, setActive] = React.useState(data[0]);
  return (
    <Flex mt="2rem" flexDirection={"column"}>
      <Text>Size: {active}</Text>

      <Flex mt="1rem" gap={"1rem"}>
        {data.map((set, key) => (
          <Button
            key={key}
            onClick={() => setActive(set)}
            border={active === set ? "1px solid red" : ""}
          >
            {set}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Size;
