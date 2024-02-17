import React from 'react'
import { Flex, HStack, VStack, Text, Heading, IconButton } from '@chakra-ui/react'
import { TbBrandFacebook, TbBrandInstagram, TbBrandTwitter } from "react-icons/tb";

const Footer = () => {
    return (
        <Flex w='full' justifyContent='space-between' p={20}>
            <HStack gap={10}>
                <IconButton boxSize={12} aria-label='Facebook' icon={<TbBrandFacebook size={50} />} />
                <IconButton boxSize={12} aria-label='Facebook' icon={<TbBrandInstagram size={50} />} />
                <IconButton boxSize={12} aria-label='Facebook' icon={<TbBrandTwitter size={50} />} />
            </HStack>
            <VStack>
                <Heading size="xl">Contact</Heading>
                <Text fontSize="lg">Contact Number: 09456427119</Text>
                <Text fontSize="lg">Email: carl.xircus@gmail.com</Text>
            </VStack>
        </Flex>
    )
}

export default Footer
