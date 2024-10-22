import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useInView } from 'react-intersection-observer';

export const Opportunities = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
  return (
    <Box w="100%" textAlign="center" p={8} ref={ref}>
    {/* Header Section */}
    <Box mb={12} mt={"80px"}>
      <Text 
      mb={10}
      style={{
        opacity: inView ? 1 : 0,
        transition: "all 1s ease-out",
      }}>
        / Your business award
        </Text>
      <Text 
      fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} 
      fontWeight="bold"
      style={{
        opacity: inView ? 1 : 0,
        transition: "all 2s ease-out",
    }}>
        We generate <Box as="span" color="#F37335">opportunities</Box> that actually convert.
      </Text>
      <Text  
      fontSize={{ base: 'md', md: 'lg' }} 
      mt={4}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(100px)",
        transition: "all 0.8s ease-out",
      }}>
        Our digital marketing services help establish a foundation for your business to improve brand awareness,
        generate leads, and increase ROI.
      </Text>
    </Box>
    </Box>
  )
}
