import { Flex, Box, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';

export const Statistics = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
});

  return (
    <Flex 
      justify="space-around" 
      align="center" 
      bgGradient="linear(to-r, #FF512F, #F09819)" 
      p={10} 
      color="white" 
      flexWrap="wrap"
      ref={ref}>
      <Box textAlign="center" m={4}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(100px)",
        transition: "all 0.8s ease-out",
      }}>
        <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold">100K</Text>
        <Text fontSize={["md", "lg", "xl"]}>Leads Delivered</Text>
      </Box>
      
      <Box textAlign="center" m={4}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(100px)",
        transition: "all 0.8s ease-out",
      }}>
        <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold">94%</Text>
        <Text fontSize={["md", "lg", "xl"]}>Client Retention Rate</Text>
      </Box>
      
      <Box textAlign="center" m={4}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(100px)",
        transition: "all 0.8s ease-out",
      }}>
        <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold">150,000+</Text>
        <Text fontSize={["md", "lg", "xl"]}>Appointments Connected</Text>
      </Box>
    </Flex>
  )
}
