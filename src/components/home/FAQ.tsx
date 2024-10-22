import React from 'react';
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react';

// Sample FAQ data
const faqs = [
  {
    question: "What industries do you work with?",
    answer:
      "We specialize in supporting subcontractors in the construction industry, including roofing contractors, painters, landscapers, framers, and more. If you're looking to grow your commercial sector, we're here to help!"
  },
  {
    question: "Are you a lead generation service?",
    answer:
      "No, we're not a lead generation company. We are a full-service commercial sales brokerage, acting as your in-house sales team for commercial projects. We handle everything from sourcing qualified opportunities through our established relationships with general contractors to closing deals on your behalf. Our goal is to help you grow sustainably, not just provide leads."
  },
  {
    question: "What if I'm new to commercial projects?",
    answer:
      "No problem at all! Whether you're new to commercial work or looking to expand your existing portfolio, we're here to help. We'll ensure you're a good fit before we partner together, and we'll guide you through the process, helping you avoid common mistakes and fast-track your growth in the commercial sector."
  },
  {
    question: "What if I already have a sales team?",
    answer:
      "That's great! We can complement your existing team by providing them with additional commercial opportunities and supporting them in closing deals. Think of us as an extension of your team, freeing up your time and resources while expanding your reach."
  },
  {
    question: "My network already provides me with projects. Why should I work with you?",
    answer:
      "We often hear this, and while existing networks are valuable, they can limit your growth potential. We offer access to a wider range of high-quality commercial opportunities through our established relationships with general contractors nationwide. This allows you to break free from relying solely on your current network and ensures you have a consistent pipeline of projects."
  },
  {
    question:
      "I've tried other services before and didn't see much success. What's different about EPG?",
    answer:
      "We understand that many companies promise results but fail to deliver. At EPG, we have a proven track record of successfully connecting contractors with lucrative commercial projects. Our team has extensive experience in the industry, and we leverage strong relationships with general contractors to secure opportunities that match your capabilities. We align our success with yours, so we're committed to helping you grow."
  },
  {
    question: "Why are you better than other companies offering similar services?",
    answer:
      "Unlike others, we focus on building long-term partnerships. We don't just send you leads and walk away. We provide comprehensive support, including handling the sales process, negotiating with general contractors, and ensuring projects are a good fit for your business. Our success is tied to yours, and we work diligently to help you achieve sustainable growth."
  },
  {
    question:
      "How do I know this will work for me?",
    answer:
      "The best way to find out is to schedule a consultation with us. We've helped businesses of various sizes and experience levels expand their commercial sectors. We'll take the time to understand your unique needs and determine how we can bring substantial value to your business."
  },
  {
    question: "What if I'm concerned about payment terms and getting paid on time?",
    answer:
      "We understand the importance of cash flow and timely payments. Before engaging with any general contractor, we thoroughly vet them, including checking references from other subcontractors who have worked with them. We ensure they have a solid payment history and standard payment terms. Our interests are aligned with yours—we only get paid when you get paid."
  },
  {
    question:
      "How quickly can I expect to start seeing results?",
    answer:
      "We aim to begin providing you with tailored commercial opportunities within the first 30 days of our partnership. Our process is designed to quickly integrate with your business and start contributing to your growth as soon as possible."
  }
];

export const FAQ = () => {
  return (
    <Box
      w="100%"
      minH="100vh"  // Ensures it takes full screen height for vertical centering
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={5}
    >
      <Box maxW="800px" w="100%" textAlign="center">
        <Text fontSize="sm" color="gray.500" mb={2}>
          / FAQs
        </Text>
        <Heading as="h1" size="2xl" mb={8}>
          Frequently asked questions.
        </Heading>

        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} border="none">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      bg={isExpanded ? "#ff8e4d" : "white"}
                      color={isExpanded ? "white" : "black"}
                      borderTop={"1px solid"}
                      _hover={{ bg: isExpanded ? "#f2803e" : "gray.200" }}
                      py={4}
                      px={6}
                      w="full"  // Sets width to 100%
                      borderRadius={isExpanded ? "md" : "sm"}
                      transition="0.2s ease-in-out"
                    >
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} px={6} bg="gray.50" w="full"> {/* Set width to full */}
                    {faq.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};
