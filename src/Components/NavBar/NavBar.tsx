import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { Logo } from "./Logo";
import { MenuItems } from "./MenuItems";

export function NavBar() {
  return (
    <>
      <Flex>
        <Logo />
        <MenuItems />
      </Flex>
    </>
  );
}
