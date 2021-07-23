import {  Flex } from "@chakra-ui/layout";
import { Logo } from "./Logo";
import { MenuItems } from "./MenuItems";

export function NavBar() {
  return (
    <>
      <Flex px="2.5">
        <Logo />
        <MenuItems />
      </Flex>
    </>
  );
}
