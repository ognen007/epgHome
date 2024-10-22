import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

export const Client = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
});

  return (
    <Box w="100%" p={10}>
      {/* Left aligned heading and text */}
      <Box mb={10} mt={"50px"} ref={ref}>
      <Text textAlign="left" color="gray.600"
              style={{
                opacity: inView ? 1 : 0,
                transition: "all 2s ease-out",
            }}>
          / Mission Driven
        </Text>
        <Heading as="h2" size="xl" textAlign="left" mb={4}
                style={{
                  opacity: inView ? 1 : 0,
                  transition: "all 2s ease-out",
              }}>
          Clients we serve.
        </Heading>
      </Box>

      {/* Cards Section */}
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)']}
        gap={8}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(100px)",
          transition: "all 0.8s ease-out",
        }}>
        {/* Card 1 */}
        <Box
          bg="white"
          p={6}
          boxShadow="lg"
          borderRadius="lg"
          textAlign="left"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '30px',
            bg: 'gray.200',
            borderRadius: 'lg',
            zIndex: -1,
          }}
        >
          <Box
            bg="gray.100"
            borderRadius="lg"
            height="150px"
            mb={4}
          >
            {/* Placeholder for the image */}
          </Box>
          <Text fontSize="xl" fontWeight="bold" mb={2}>Kyle Walker</Text>
          <Text color="#F37335" mb={4}>Morgan Milzow & Ford, Realtors</Text>
          <Text fontSize="md">
            I've done over $12,000 in commissions working with Metari and I've renewed for an entire year with them!!
          </Text>
        </Box>

        {/* Card 2 */}
        <Box
          bg="white"
          p={6}
          boxShadow="lg"
          borderRadius="lg"
          textAlign="left"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '30px',
            bg: 'gray.200',
            borderRadius: 'lg',
            zIndex: -1,
          }}
        >
          <Box
            bg="gray.100"
            borderRadius="lg"
            height="150px"
            mb={4}
          >
            {/* Placeholder for the image */}
          </Box>
          <Text fontSize="xl" fontWeight="bold" mb={2}>Dominic Sacca</Text>
          <Text color="#F37335" mb={4}>Coldwell Banker Select RE</Text>
          <Text fontSize="md">
            Things are going quite well! In 3 weeks of launching, I am already talking to Mike who is in the process of signing a buyer contract!
          </Text>
        </Box>

        {/* Card 3 */}
        <Box
          bg="white"
          p={6}
          boxShadow="lg"
          borderRadius="lg"
          textAlign="left"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '30px',
            bg: 'gray.200',
            borderRadius: 'lg',
            zIndex: -1,
          }}
        >
          <Box
            bg="gray.100"
            borderRadius="lg"
            height="150px"
            mb={4}
          >
            {/* Placeholder for the image */}
          </Box>
          <Text fontSize="xl" fontWeight="bold" mb={2}>Gregory Lawrence</Text>
          <Text color="#F37335" mb={4}>ReMax Real Estate Centre</Text>
          <Text fontSize="md">
            "Things are looking bright with the progress we've made!"
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};
