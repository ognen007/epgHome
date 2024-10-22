import { Box, Button, Text } from '@chakra-ui/react'
import {FC} from 'react';

interface CardProps {
    header: string;
    info1: string;
    info2: string;
    info3: string;
    info4: string;
    style?:any;
}

export const Card: FC<CardProps> = ({
    header,
    info1,
    info2,
    info3,
    info4,
    style,
}) => {
  return (
    <Box style={style} bgGradient="linear(to-b, #f79536, #f79536)" color="white" borderRadius="lg" p={6} textAlign="left">
    <Text fontSize="2xl" fontWeight="bold" mb={4}>{header}</Text>
    <Text>{info1}</Text>
    <Text>{info2}</Text>
    <Text>{info3}</Text>
    <Text>{info4}</Text>
    <Button variant="link" mt={4} color="white">Learn More</Button>
  </Box>
  )
}
