import { InlineWidget } from "react-calendly";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export const CallendlyComponent = () => {
  return (
    <Box
      bgGradient="linear(to-r, #fceabb, #f4d2ba)"
      boxShadow="lg"
      maxW="5xl"
      mx="auto"
      p={10}
      borderRadius="3xl"
      textAlign="center"
      mt={8}
    >
      {/* Heading Section */}
      <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={6}>
        Ready to discuss <Text as="span" color="#f12711">Growth?</Text>
      </Heading>
      <Text fontSize="lg" mb={8}>
        Book a call with one of our team members to see how we can help grow your business.
      </Text>

      {/* Calendly Widget Section */}
      <Flex direction="column" align="center">
        {/* Embed Calendly widget */}
        <Box w="full">
          <InlineWidget
            url="https://calendly.com/eminenceprojectgroup/epg-consultation"
            styles={{ width: 'auto', height: "750px" }}
            pageSettings={{
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              backgroundColor: 'red',
              primaryColor: 'red',
              textColor: 'red',
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};
