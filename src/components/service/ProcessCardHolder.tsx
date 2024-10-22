import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';

export const ProcessCardHolder = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
});
  return (
    <Box p={10} ref={ref}>
      <Text textAlign="center" fontSize="sm" color="gray.500" mb={4}>
        / THE PROCESS
      </Text>
      <Heading textAlign="center" mb={10}>
        The Metari Difference
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={6}>
        <Box
          p={6}
          bg="gray.100"
          borderRadius="md"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-100px)",
            transition: "all 1s ease-out",
          }}>
          <Heading fontSize="lg" mb={2}>
            Performance Partnership
          </Heading>
          <Text>
            Partner with us on a referral basis for every deal you close we
            source!
          </Text>
        </Box>

        <Box
          p={6}
          bg="gray.100"
          borderRadius="md"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-200px)",
            transition: "all 1s ease-out",
          }}>
          <Heading fontSize="lg" mb={2}>
            Area & Agent Exclusivity
          </Heading>
          <Text>
            Claim full access to your service area, with full exclusivity.
          </Text>
        </Box>

        <Box
          p={6}
          bg="gray.100"
          borderRadius="md"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-300px)",
            transition: "all 1s ease-out",
          }}>
          <Heading fontSize="lg" mb={2}>
            24/7 Personal Support Team
          </Heading>
          <Text>
            Receive 24/7 support from our team when you need it!
          </Text>
        </Box>

        <Box
          p={6}
          bg="gray.100"
          borderRadius="md"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(100px)",
            transition: "all 1s ease-out",
          }}>
          <Heading fontSize="lg" mb={2}>
            Custom CRM
          </Heading>
          <Text>
            Track and measure return on investment with our custom, easy to use
            CRM.
          </Text>
        </Box>

        <Box
          p={6}
          bg="gray.100"
          borderRadius="md"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(200px)",
            transition: "all 1s ease-out",
          }}>
          <Heading fontSize="lg" mb={2}>
            Live Reporting
          </Heading>
          <Text>
            See the 30,000 foot view of your results with our data driven
            bi-weekly reporting.
          </Text>
        </Box>

        <Box
          p={6}
          bg="gray.100"
          borderRadius="md"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(300px)",
            transition: "all 1s ease-out",
          }}>
          <Heading fontSize="lg" mb={2}>
            Qualified Appointments
          </Heading>
          <Text>
            We pack your calendar every single month with qualified
            appointments.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
