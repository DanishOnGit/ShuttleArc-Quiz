import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export function MenuItems() {
  return (
    <>
      <Flex alignItems="center">
        <Link to="/">
          <Text p="0 1rem">Home</Text>
        </Link>
        
        <Link to="/about">
          <Text>About</Text>
        </Link>
      </Flex>
    </>
  );
}
