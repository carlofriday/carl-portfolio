import { Box, Flex, HStack, IconButton, useColorMode, Link, Text, Button } from "@chakra-ui/react";
import { TbSun } from "react-icons/tb";
import { TbMoon } from "react-icons/tb";
import NextLink from 'next/link'


const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box>
            <Flex px={10} py={4} gap={4} justifyContent='space-between' mb={3} flexDirection={{ base: 'column', md: 'row' }}>
                <HStack>
                    <Text as='b' ml={20}>carl.dev</Text>
                </HStack>
                <HStack py={2}>
                    <NextLink href='#home' passHref>
                        <Button variant="ghost" _hover={{ bg: 'gray.600' }}>
                            Home
                        </Button>
                    </NextLink>
                    <Link href='#about'>
                        <Button variant="ghost" _hover={{ bg: 'gray.600' }}>
                            About
                        </Button>
                    </Link>
                    <Link href='#services'>
                        <Button variant="ghost" _hover={{ bg: 'gray.600' }}>
                            Services
                        </Button>
                    </Link>
                    <Link href='#footer'>
                        <Button variant="ghost" _hover={{ bg: 'gray.600' }}>
                            Contact
                        </Button>[]
                    </Link>
                    <IconButton
                        aria-label="Toggle dark mode"
                        icon={
                            <Box as="span" fontSize="xl">
                                {colorMode === "dark" ? <TbSun />
                                    : <TbMoon />}
                            </Box>
                        }
                        onClick={toggleColorMode}
                    />
                    {/* <Box id="home"></Box>
                    <Box id="about"></Box>
                    <Box id="services"></Box>
                    <Box id="footer"></Box> */}
                </HStack>
            </Flex>
        </Box>

    );
};

export default NavBar;
