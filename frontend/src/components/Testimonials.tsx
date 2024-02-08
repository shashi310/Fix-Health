

import React from 'react';
import { Box, Heading, Text, Avatar, Flex } from '@chakra-ui/react';

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'Fix Health helped me recover from my injury faster than I expected. The doctors were very knowledgeable and caring.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU',
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'I have been using Fix Health for my regular physiotherapy sessions and I am extremely satisfied with the service. Highly recommended!',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1urixDbYF6eKgEGMMgkmZsvF4LeIH-hq8esh1810CohOqP56EjvtDBfisEPd8vioocX0&usqp=CAU',
  },
  {
    id: 3,
    name: 'John Doe',
    comment: 'Fix Health helped me recover from my injury faster than I expected. The doctors were very knowledgeable and caring.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU',
  },
 
];

const Testimonials: React.FC = () => {
  return (
    <Box bg="gray.800" color="white" py={20} textAlign="center">
      <Heading as="h2" size="xl" mb={8}>
        Testimonials
      </Heading>
      <Flex justify="center" align="center" flexWrap="wrap">
        {testimonials.map(testimonial => (
          <Box key={testimonial.id} maxW="sm" borderWidth="1px" borderRadius="lg" p={4} mx={4} my={2}>
            <Avatar size="xl" name={testimonial.name} src={testimonial.avatarUrl} mb={4} />
            <Text fontSize="lg" fontWeight="bold" mb={4}>{testimonial.name}</Text>
            <Text>{testimonial.comment}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonials;
