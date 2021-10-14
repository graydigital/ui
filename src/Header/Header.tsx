import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import * as React from "react";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";
import { GrLinkedinOption } from "react-icons/gr";

{
  /* <StaticImage
  placeholder="none"
  layout="fixed"
  width={107}
  height={30}
  src="../images/gray_digital_logo_white.png"
  alt="Gray Digital Logo"
/>; */
}

// Declaring type of props - see "Typing Component Props" for more examples
type HeaderProps = {
  LogoImage?: any;
  asLogoLink?: any;
  Link?: any;
};

export const Header = ({ LogoImage, Link, asLogoLink }: HeaderProps) => {
  return (
    <Box minH="480px">
      <Box as="header">
        <Box maxW="7xl" mx="auto" py="4" px={{ base: "6", md: "8" }}>
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box as={asLogoLink} to="/" rel="home">
                {LogoImage}
              </Box>
            </HStack>
            <Flex align="center">
              <HStack spacing="8" display={{ base: "none", md: "flex" }}>
                <NavLink.Desktop to="/our-work" active>
                  Our Work
                </NavLink.Desktop>
                <NavLink.Desktop to="/services">Services</NavLink.Desktop>
                <NavLink.Desktop to="/company">Company</NavLink.Desktop>
                <NavLink.Desktop to="/team">Team</NavLink.Desktop>
                <NavLink.Desktop to="/insights">Insights</NavLink.Desktop>
                <NavLink.Desktop to="/contact">Contact</NavLink.Desktop>
                <NavLink.Desktop href="https://linkedin.com/company/graydigital">
                  <GrLinkedinOption />
                </NavLink.Desktop>
                <Button bg="white" color="black" size="md" rounded="full">
                  <Link to="/careers">Join Us</Link>
                </Button>
              </HStack>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
