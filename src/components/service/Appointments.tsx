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
import { useInView } from 'react-intersection-observer';

export const Appointments = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
});
    return (
        <Box w="100%" p={1} mt={"70px"} mx="auto" maxW="1200px" ref={ref}>
      <Flex
      mt={"120px"}
        direction={['column', 'column', 'row']} // Column on small screens, row on large
        justify="space-between"
        align="flex-start" // Align content to the top
        gap={20} // Increased gap to create more space between text and image
      >
        {/* Left Side - Text Content */}
        <Box flex="1"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-100px)",
          transition: "all 1s ease-out",
        }}>
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

          {/* Features */}
          <Stack spacing={6}>
            {/* Referral Partnership */}
            <Flex align="center">
              <Icon as={FaHandshake} color="#F37335" boxSize={6} mr={4} />
              <Box>
                <Heading as="h4" size="md" mb={2}>
                  Referral Partnership
                </Heading>
                <Text>
                  You only pay per acquisition. If we can't deliver, our service
                  is free. We've left behind the era of making big promises
                  without any evidence to support them!
                </Text>
              </Box>
            </Flex>

            {/* Unmatched Support */}
            <Flex align="center">
              <Icon as={FaBolt} color="#F37335" boxSize={6} mr={4} />
              <Box>
                <Heading as="h4" size="md" mb={2}>
                  Unmatched Support
                </Heading>
                <Text>
                  Metari makes certain that you're always in the know. Our
                  partners come first, anytime you need us, you can simply
                  contact us via text or schedule a call.
                </Text>
              </Box>
            </Flex>

            {/* Exclusive Areas */}
            <Flex align="center">
              <Icon as={FaMapMarkerAlt} color="#F37335" boxSize={6} mr={4} />
              <Box>
                <Heading as="h4" size="md" mb={2}>
                  Exclusive Areas
                </Heading>
                <Text>
                  Our partners receive exclusive rights to the city that they
                  choose. Through our system, clients can establish a commanding
                  position in their market. We only work with 1 partner per
                  area!
                </Text>
              </Box>
            </Flex>
          </Stack>
        </Box>
    
            {/* Right Side - Image Section */}
            <Box flex="1" textAlign="center"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(100px)",
          transition: "all 1s ease-out",
        }}>
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
      
