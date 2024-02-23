'use client'
// import { ChakraProvider } from '@chakra-ui/react'

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <ChakraProvider>{children}</ChakraProvider>
// }
import { Box, Link, CardBody, Heading, VStack, Text, Button, Show, Hide, HStack, Container, Stack, Spacer, Image, SimpleGrid, Center } from "@chakra-ui/react"
import Services from "@/components/Services"

export default function Home() {
  return (
    <Box w='fit-content'>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} id="about">
        <Container pr={20} textAlign='left' maxW='550px'>
          <Heading fontSize='65px' py={10} >👋Hey there, Its Dream Carl Friday.</Heading>
          <Text>I am now working as a developer for Xircus and have a
            strong desire to learn more about coding and become a professional coder.
            I am committed to reaching this objective, which will allow me to grow and improve my skills.
            I use my expertise to help the organization reach its aim of providing the best possible performance. </Text>
          {/* <Text>adipiscing elit,sed do eiusmod tempor</Text>
          <Text>incididunt ut labore et dolore.</Text> */}
          <Link><Button mt={5} size='lg'>Say Hello!</Button></Link>
        </Container>
        <Box display='flex' justifyContent='center'>
          <Image borderRadius={20} boxSize='md' alt="Carlo Friday" src='/assets/carl.png' />
        </Box>
      </SimpleGrid>
      <Services />
    </Box >
  )
}

// export default function Home() {
//   return (
//     <Box>
//       <NavBar />
//       <Center py={200} ml={200}>
//         <SimpleGrid columns={{ base: -1, md: 2, lg: 2 }} gap={5} >
//           <Container pr={20} textAlign='left' maxW='550px'>
//             <Heading fontSize='65px' py={10} >👋Hey there, It's Carl Friday.</Heading>
//             <Text>Lorem ipsum dolor sit amet, consectetur</Text>
//             <Text>adipiscing elit,sed do eiusmod tempor</Text>
//             <Text>incididunt ut labore et dolore.</Text>
//             <Link><Button mt={5} size='lg'>Say Hello!</Button></Link>
//           </Container>
//           <Box display='flex' justifyContent='center'>
//             <Image borderRadius={20} boxSize='md' alt="Carlo Friday" src='/assets/carl.png' />
//           </Box>
//         </SimpleGrid>
//       </Center>
//       <Services />
//       <Footer />
//     </Box >
//   )
// }
