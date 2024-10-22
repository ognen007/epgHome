import { Box, Grid, Text } from '@chakra-ui/react';
import { Card } from '../common/Card';
import { useInView } from 'react-intersection-observer';

export const Oppurtunity = () => {
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

      {/* Cards Section */}
      <Grid
        templateColumns={['1fr', 'repeat(3, 1fr)']} // Responsive layout
        gap={6}
      >
        <Card
        header='Set' 
        info1='Appointments on Demand' 
        info2='Calendar Integration' 
        info3='Transaction Management' 
        info4='Inside Sales Reps'
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(150px)",
          transition: "all 1s ease-out",
        }}/>

        <Card 
        header='Set' 
        info1='Appointments on Demand' 
        info2='Calendar Integration' 
        info3='Transaction Management' 
        info4='Inside Sales Reps'
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(-150px)",
          transition: "all 1s ease-out",
        }}/>

        <Card 
        header='Set' 
        info1='Appointments on Demand' 
        info2='Calendar Integration' 
        info3='Transaction Management' 
        info4='Inside Sales Reps'
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(150px)",
          transition: "all 1s ease-out",
        }}/>
      </Grid>

      {/* <Box mt={8}>
        <Button bg="black" color="white" size="lg">Learn More</Button>
      </Box> */}
    </Box>
  );
};
