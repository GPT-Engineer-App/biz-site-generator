import { Box, Flex, Heading, Text, Button, Image, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex bg="blue.600" color="white" minHeight="400px" direction="column" align="center" justify="center" textAlign="center" p={10}>
        <Heading as="h1" size="2xl" fontWeight="bold">
          Your Business Name
        </Heading>
        <Text fontSize="xl" mt={4}>
          Innovative solutions to boost your creative projects
        </Text>
        <Button mt={10} colorScheme="orange" size="lg">
          Get Started
        </Button>
      </Flex>

      {/* About Section */}
      <VStack spacing={8} p={10} align="start">
        <Heading as="h2" size="xl">
          About Us
        </Heading>
        <Text fontSize="lg">We are a team of dedicated professionals committed to delivering top-notch services and solutions. Our mission is to help your business grow and thrive in a competitive market.</Text>
        <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzEzNzc3MjEyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
      </VStack>

      {/* Services Section */}
      <Box bg="gray.100" p={10}>
        <Heading as="h2" size="xl" textAlign="center">
          Our Services
        </Heading>
        <Flex justify="space-around" wrap="wrap" mt={8}>
          <Box p={5} bg="white" borderRadius="md" boxShadow="md" maxW="sm">
            <Heading as="h3" size="md">
              Service 1
            </Heading>
            <Text mt={3}>Description of service 1.</Text>
          </Box>
          <Box p={5} bg="white" borderRadius="md" boxShadow="md" maxW="sm">
            <Heading as="h3" size="md">
              Service 2
            </Heading>
            <Text mt={3}>Description of service 2.</Text>
          </Box>
          <Box p={5} bg="white" borderRadius="md" boxShadow="md" maxW="sm">
            <Heading as="h3" size="md">
              Service 3
            </Heading>
            <Text mt={3}>Description of service 3.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Contact Section */}
      <VStack spacing={4} p={10} align="start">
        <Heading as="h2" size="xl">
          Contact Us
        </Heading>
        <HStack spacing={5}>
          <Icon as={FaPhone} w={6} h={6} />
          <Text>+123 456 7890</Text>
        </HStack>
        <HStack spacing={5}>
          <Icon as={FaEnvelope} w={6} h={6} />
          <Text>info@yourbusiness.com</Text>
        </HStack>
      </VStack>

      {/* Footer */}
      <Flex bg="blue.800" color="white" p={5} justify="space-between">
        <Text>© 2023 Your Business Name. All rights reserved.</Text>
        <HStack spacing={5}>
          <Link href="#" isExternal>
            <Icon as={FaFacebook} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaTwitter} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaInstagram} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaLinkedin} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Index;
