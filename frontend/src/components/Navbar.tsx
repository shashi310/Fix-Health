
import React from 'react';
import { Flex, Box, Text, Button,Image } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
const Navbar: React.FC = () => {
  const navigate=useNavigate()
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.800"
          
      color="white"
    >
      <Box>    
          <Image w={"70%"} cursor={"pointer"} onClick={()=>navigate("/")} src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg" alt="logo" />
        
      </Box>

      <Box display={{ base: 'block', md: 'none' }} onClick={() => console.log('Toggle menu')}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            fill="currentColor"
            d="M2 4.286c0-.74.674-1.333 1.5-1.333h13c.826 0 1.5.593 1.5 1.333v1.428c0 .74-.674 1.334-1.5 1.334h-13c-.826 0-1.5-.594-1.5-1.334V4.286zm0 6.857c0-.74.674-1.334 1.5-1.334h13c.826 0 1.5.594 1.5 1.334v1.428c0 .74-.674 1.334-1.5 1.334h-13c-.826 0-1.5-.594-1.5-1.334v-1.428zm0 6.857c0-.74.674-1.333 1.5-1.333h13c.826 0 1.5.593 1.5 1.333v1.429c0 .74-.674 1.334-1.5 1.334h-13c-.826 0-1.5-.594-1.5-1.334v-1.429z"
          />
        </svg>
      </Box>

      <Box
        display={{ base: 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex align="center" justify="flex-end">
        <Button  bg={"teal"} color={"white"}  mr={4} onClick={() => console.log('Clicked home')}>
            Home
          </Button>
          <Button  bg={"teal"} color={"white"}  mr={4} onClick={() => console.log('Clicked Book Now')}>
            Book Now
          </Button>
          <Button bg={"teal"} color={"white"}  onClick={() => console.log('Clicked About')}>
            About
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;



// import React from 'react';
// import { Flex, Box, Text, Button, Image } from '@chakra-ui/react';
// import { useNavigate } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       wrap="wrap"
//       padding="1.5rem"
//       bg="rgba(20, 20, 20, 0.8)" // Setting the background color with alpha channel for transparency
//       color="white"
//       position="fixed"
//       top={0}
//       left={0}
//       right={0}
//       zIndex={999}
//     >
//       <Box>    
//         <Image w={"70%"} cursor={"pointer"} onClick={() => navigate("/")} src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg" alt="logo" />
//       </Box>

//       <Box display={{ base: 'block', md: 'none' }} onClick={() => console.log('Toggle menu')}>
//         {/* Your menu toggle icon */}
//       </Box>

//       <Box
//         display={{ base: 'none', md: 'block' }}
//         flexBasis={{ base: '100%', md: 'auto' }}
//       >
//         <Flex align="center" justify="flex-end">
//           <Button bg={"teal"} color={"white"} mr={4} onClick={() => console.log('Clicked Book Now')}>
//             Book Now
//           </Button>
//           <Button bg={"teal"} color={"white"} onClick={() => console.log('Clicked About')}>
//             About
//           </Button>
//         </Flex>
//       </Box>
//     </Flex>
//   );
// };

// export default Navbar;

