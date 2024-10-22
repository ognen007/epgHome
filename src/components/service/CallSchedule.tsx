import { Box, Flex, Heading, Text, Image, Button } from '@chakra-ui/react';
import EmployeeImg from '../../assets/employe.png'; // Ensure correct image path

export const CallSchedule = () => {
  return (
    <Box
      w="100%"
      p={10}
      mx="auto"
      bgGradient="linear(to-r, #f2a778, #ff8e4d)"
      color="white"
    >
      <Flex
        direction={['column', 'column', 'row']}
        justify="space-between"
        align="center"
        gap={10}
        maxW="1400px"
        mx="auto"
      >
        {/* Left Side - Larger Image */}
        <Box flex="2"> {/* Increased flex value for larger image */}
          <Image
            src={EmployeeImg} // The image you uploaded
            alt="Schedule a call"
            borderRadius="md"
            maxW="100%"
            height={['300px', '400px', '500px']} // Responsive height for image
            objectFit="cover"
          />
        </Box>

        {/* Right Side - Text Content */}
        <Box flex="1" textAlign={['center', 'center', 'left']}>
          <Text fontSize="sm" fontWeight="bold" mb={2}>
            LET'S CHAT
          </Text>
          <Heading as="h2" size="xl" mb={4}>
            Ready to schedule a call with our team?
          </Heading>
          <Text fontSize="lg" mb={6}>
            Schedule a consultation call with one of our consultants! Let’s pave
            the way for your success.
          </Text>
          <Button
            colorScheme="blackAlpha"
            bg="black"
            size="lg"
            px={8}
            _hover={{ bg: 'gray.700' }}
          >
            Book A Consultation
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
