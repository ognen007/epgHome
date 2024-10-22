import { useInView } from "react-intersection-observer";
import Services from "../../assets/services.png";
import { Box, Text, Button, VStack, useMediaQuery } from '@chakra-ui/react';

export const Header = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [isNotSmallerThan350] = useMediaQuery('(min-width: 350px)');

    return (
        <Box
            className="header"
            bgImage={Services}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height={{ base: '80vh', md: '75vh', lg: '92vh' }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            color="white"
        >
            <VStack
                spacing={6}
                textAlign="center"
                maxW="lg"
                px={4}
                ref={ref}  // Apply ref to observe the entire VStack
                style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(100px)",
                    transition: "all 0.8s ease-out",
                }}
            >
                <Text
                    className="header-h1"
                    color={"#000"}
                    fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                >
                    We are a growth-focused{"\n"} real estate referral agency.
                </Text>
                <Text
                    className="header-p"
                    color={"#000"}
                    fontSize={{ base: 'md', md: 'lg' }}
                >
                    Helping realtors consistently pack their calendars with qualified opportunities month after month.
                </Text>
                {isNotSmallerThan350 ? (
                    <Button
                        colorScheme="blackAlpha"
                        bg="black"
                        _hover={{ bg: 'gray.800' }}
                        size="lg"
                        style={{
                            opacity: inView ? 1 : 0,
                            transition: "all 2s ease-out",
                        }}
                    >
                        Book A Consultation
                    </Button>
                ) : (
                    <Button
                        colorScheme="blackAlpha"
                        bg="black"
                        _hover={{ bg: 'gray.800' }}
                        size="md"
                        fontSize={"md"}
                        style={{
                            opacity: inView ? 1 : 0,
                            transition: "all 2s ease-out",
                        }}
                    >
                        Book A Consultation
                    </Button>
                )}
                <Text
                    color={"#000"}
                    fontSize="sm"
                    mt={8}
                    letterSpacing="widest"
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(100px)",
                        transition: "all 0.5s ease-out",
                    }}
                >
                    SCROLL TO EXPLORE
                </Text>
                <Box
                    width="2px"
                    height="75px"
                    bg="black"
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(100px)",
                        transition: "all 1s ease-out",
                    }}
                />
            </VStack>
        </Box>
    );
};
