
import React from 'react';
import { Box, Heading, Text, Flex, Avatar } from '@chakra-ui/react';

interface Doctor {
  id: number;
  name: string;
  expertise: string;
  city: string;
  avatarUrl: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Emily Smith',
    expertise: 'Ortho Physiotherapy',
    city: 'New York',
    avatarUrl: 'https://img.freepik.com/premium-psd/3d-doctor-cartoon-character-avatar-isolated-3d-rendering_235528-998.jpg',
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    expertise: 'Sports Physiotherapy',
    city: 'Los Angeles',
    avatarUrl: 'https://img-new.cgtrader.com/items/4259571/d7777b320a/large/3d-avatar-profession-as-doctor-3d-model-d7777b320a.jpg',
  },
  {
    id: 3,
    name: 'Dr. Jane Smith',
    expertise: 'Sports Physiotherapy',
    city: 'California',
    avatarUrl: 'https://img.freepik.com/premium-photo/cute-cartoon-3d-girl-ware-doctor-cloth-friendly-female-doctor-illustration_862994-64667.jpg',
  },
  {
    id: 4,
    name: 'Dr. Emily Smith',
    expertise: 'Ortho Physiotherapy',
    city: 'New York',
    avatarUrl: 'https://img.freepik.com/premium-psd/3d-doctor-cartoon-character-avatar-isolated-3d-rendering_235528-998.jpg',
  },
  {
    id: 5,
    name: 'Dr. John Doe',
    expertise: 'Sports Physiotherapy',
    city: 'Los Angeles',
    avatarUrl: 'https://img-new.cgtrader.com/items/4259571/d7777b320a/large/3d-avatar-profession-as-doctor-3d-model-d7777b320a.jpg',
  },
  
];

const DoctorsSection: React.FC = () => {
  return (
    <Box bg="gray.900" color="white" py={20} textAlign="center">
      <Heading as="h2" size="xl" mb={8}>
        Our Senior Most Doctors
      </Heading>
      <Flex justify="center" align="center" flexWrap="wrap">
        {doctors.map(doctor => (
          <Box key={doctor.id} maxW="sm" borderWidth="1px" borderRadius="lg" p={4} mx={4} my={2}>
            <Avatar size="xl" name={doctor.name} src={doctor.avatarUrl} mb={4} />
            <Text fontSize="lg" fontWeight="bold" mb={2}>{doctor.name}</Text>
            <Text fontSize="md" mb={2}>{doctor.expertise}</Text>
            <Text fontSize="md">{doctor.city}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default DoctorsSection;
