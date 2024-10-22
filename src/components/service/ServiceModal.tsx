import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { FaHandshake, FaBolt, FaMapMarkerAlt } from 'react-icons/fa';
import appointmentImg from '../../assets/appointments.png'; // Adjust the image path accordingly

export const ServiceModal = () => {
  return (
    <Box w="100%" p={5} mx="auto" maxW="1200px">
      <Flex
      mt={"120px"}
        direction={['column', 'column', 'row']} // Column on small screens, row on large
        justify="space-between"
        align="flex-start" // Align content to the top
        gap={20} // Increased gap to create more space between text and image
      >
        {/* Left Side - Text Content */}
        <Box flex="1">
          <Heading as="h2" size="2xl" mb={4}>
            Not just a{' '}
            <Text as="span" color="#F37335">
              Lead-Gen
            </Text>{' '}
            Agency.
          </Heading>
          <Text fontSize="lg" mb={8}>
            With our performance-based model, we partner with you on a referral
            basis. Yes, that means no monthly fees or retainers!
          </Text>
        </Box>

        {/* Right Side - Image Section */}
        <Box flex="1" textAlign="center">
          <Image
            src={appointmentImg} // The image for the appointments
            alt="Appointments Image"
            borderRadius="md"
            maxW="80%" // Makes the image smaller and more responsive
            mx="auto" // Centers the image horizontally
          />
        </Box>
      </Flex>
    </Box>
  );
};
