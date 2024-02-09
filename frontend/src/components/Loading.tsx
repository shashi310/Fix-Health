import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const Loading: React.FC = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={9999}
      bg="rgba(0, 0, 0, 0.7)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner thickness="4px" speed="0.65s" color="teal.300" size="xl" />
    </Box>
  );
};

export default Loading;
