import React from 'react'
import { Heading, Text, Box, Flex, Container, Grid, GridItem, Stack, VStack, HStack, Divider } from "@chakra-ui/react"
import { TbTools, TbHome2, TbNotes } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";

const Services = () => {
    return (
        <Stack px={10} py={10} mt={20}>
            <HStack w='fit-content' gap={4} direction={["column", "row"]} mb={20}>
                <Heading fontSize={60}>Provide Services</Heading>
                <TbTools size='70px' />
            </HStack>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <Box boxShadow='dark-lg' padding={10} borderColor='gray.600' p={4}>
                    <Container px={20} maxW='550px' mb={10} centerContent>
                        <TbHome2 size='100px' />
                        <Heading py={10}>UX, UI Design</Heading>
                        <Text textAlign='justify' letterSpacing={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </Container>
                </Box>
                <Box boxShadow='dark-lg' padding={10} borderColor='gray.600' p={4}>
                    <Container px={20} maxW='550px' centerContent>
                        <CgWebsite size='100px' />
                        <Heading py={10}>Web Design</Heading>
                        <Text textAlign='justify' letterSpacing={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </Container>
                </Box>
                <Box boxShadow='dark-lg' padding={10} borderColor='gray.600' p={4}>
                    <Container px={20} maxW='550px' centerContent>
                        <TbNotes size='100px' />
                        <Heading py={10}>Developer</Heading>
                        <Text textAlign='justify' letterSpacing={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </Container>
                </Box>
            </Grid>
            <Divider mt={10} />
        </Stack>

    )
}

export default Services
