'use client'
import { Box, Flex, HStack, IconButton, useColorMode, Link, Text, Button, VStack } from "@chakra-ui/react";
import { TbSun } from "react-icons/tb";
import { TbMoon } from "react-icons/tb";
import NextLink from 'next/link'
import { useWallet } from '@xircus-web3/react'
import { useEffect } from 'react'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const wallet = useWallet()
    useEffect(() => {
        if (wallet.status !== "connected") {
            wallet.connectMetamask();
        }
    }, [wallet]);
    return (
        <Box>
            <Flex boxShadow="md" px={4} me={4} justifyContent='space-between' mb={3} flexDirection={{ base: 'column', md: 'row' }}>
                <HStack>
                    <Text as='b' ml={20}>carl.dev</Text>
                </HStack>
                <HStack py={2}>
                    <NextLink href='#home' passHref>
                        <Button variant="ghost" _hover={{ bg: 'gray.600' }}>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href='#about' passHref>
                        <Button variant="ghost" _hover={{ bg: 'gray.600' }}>
                            About
                        </Button>
                    </NextLink>
                    <NextLink href='#services' passHref>
                        <Button variant="ghost" _hover={{ bg: 'gray.600' }}>
                            Services
                        </Button>
                    </NextLink>
                    <NextLink href='#footer' passHref>
                        <Button variant="ghost" _hover={{ bg: 'gray.600' }}>
                            Contact
                        </Button>
                    </NextLink>
                    <VStack>
                        <Button onClick={wallet.connectMetamask}>Connect To Metamask</Button>
                        <Text> {wallet.status == 'connected' && wallet.account}</Text>
                    </VStack>
                    <VStack>
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
                    </VStack>

                    {/* <Box id="home"></Box>
                    <Box id="about"></Box>
                    <Box id="services"></Box>
                    <Box id="footer"></Box> */}
                </HStack>
            </Flex>
        </Box>

    );
};

export default Navbar;
