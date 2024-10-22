import { Box, SimpleGrid, Image, Text } from '@chakra-ui/react';

// Step 1: Import each image explicitly
import image1 from '../../assets/projects/image1.png';
import image2 from '../../assets/projects/image2.png';
import image3 from '../../assets/projects/image3.png';
import image4 from '../../assets/projects/image4.png';
import image5 from '../../assets/projects/image5.png';
import image6 from '../../assets/projects/image6.png';
import image7 from '../../assets/projects/image7.png';
import image8 from '../../assets/projects/image8.png';
import image9 from '../../assets/projects/image9.png';
import image10 from '../../assets/projects/image10.png';
import image11 from '../../assets/projects/image11.png';
import image12 from '../../assets/projects/image12.png';
import image13 from '../../assets/projects/image13.png';
import image14 from '../../assets/projects/image14.png';
import image15 from '../../assets/projects/image15.png';
import image16 from '../../assets/projects/image16.png';
import image17 from '../../assets/projects/image17.png';
import { useInView } from 'react-intersection-observer';

// Step 2: Create the ProjectHolder component
export const ProjectHolder = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
});
  // Array of imported images
  const projectImages = [
    image1, image2, image3, image4, image5, image6, image7, image8,
    image9, image10, image11, image12, image13, image14, image15, image16, image17
  ];

  return (
    <Box padding="4" maxW="1200px" mx="auto" my="8" ref={ref}>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="8">
        Here are a few of the projects we've delivered to current and past clients
      </Text>

      {/* Step 3: Create the SimpleGrid layout for the images */}
      <SimpleGrid columns={[1, 2, 3]} spacing="8">
        {projectImages.map((image, index) => (
          <Box 
          key={index} 
          borderWidth="1px" 
          borderRadius="lg" 
          overflow="hidden" 
          shadow="md"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-100px)",
            transition: "all 2s ease-out",
          }}  >
            <Image src={image} alt={`Project ${index + 1}`} width="100%" height="250px" objectFit="cover" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
