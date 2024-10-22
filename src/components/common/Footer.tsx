import React from 'react';
import { Box, Text, Flex, IconButton, Divider, Stack, Image } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import EPG from "../../assets/epg-logo.png";

export const Footer = () => {
  return (
    <Box
      bg="white"
      color="gray.800"
      py={8}
      px={{ base: 4, md: 8 }}
      boxShadow="md"
    >
      <Divider mb={4} borderColor="gray.300" />
      <Flex
        justify="space-between"
        align="center"
        direction={{ base: 'column', md: 'row' }}
        maxW="1200px"
        mx="auto"
      >
        <Image src={EPG} alt="Your Company Logo" w={"250px"} h={"auto"}/>
        <Stack direction="row" spacing={4} mt={{ base: 4, md: 0 }}>
          <IconButton
            as="a"
            href="https://facebook.com"
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            colorScheme="gray"
          />
          <IconButton
            as="a"
            href="https://twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            colorScheme="gray"
          />
          <IconButton
            as="a"
            href="https://linkedin.com"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            colorScheme="gray"
          />
        </Stack>
      </Flex>
      <Text mt={4} textAlign="center" fontSize="sm">
        © {new Date().getFullYear()} EPG. All rights reserved.
      </Text>
    </Box>
  );
};
