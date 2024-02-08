
import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box bg="gray.800" color="white" py={8} textAlign="center">
      <Text fontSize="lg" mb={4}>
        © 2024 Fix Health. All rights reserved.
      </Text>
      <Flex justify="center" align="center">
        <Link mr={4}>Privacy Policy</Link>
        <Link mr={4}>Terms of Service</Link>
        <Link>Contact Us</Link>
      </Flex>
    </Box>
  );
};

export default Footer;
