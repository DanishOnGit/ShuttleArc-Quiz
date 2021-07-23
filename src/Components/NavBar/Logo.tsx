import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../Database/Assets/logo.svg"
export function Logo() {
  return (
    <Box>
     <Link to="/"><Image src={logo} boxSize="60px" alt="Logo"/></Link>
    </Box>
  );
}
