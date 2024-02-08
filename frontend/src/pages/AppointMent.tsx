import React, { useState } from "react";
import {
  Heading,
  Box,
  Text,
  Flex,
  Image,
  Button,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { doctors } from "../components/DoctorsSection";

const Appointment: React.FC = () => {
  const [showChoice, setShowChoice] = useState(true);
  const storedFormData = localStorage.getItem("formData") || "";
  const avatar =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU";
  const [userData, setUserData] = useState({
    name: "John Doe",
    mobile: "1234567890",
    city: "New York",
    age: "30",

    occupation: "Engineer",
    problemDescription: "Back pain",
    painIntensity: "3",
    diseaseDuration: "2 months",
    consultationSlot: "2024-02-09T10:00",
  });

  const [doctorData, setDoctorData] = useState({
    name: "Dr. Sarah Smith",
    expertise: "Physiotherapist",
    city: "New York",
    avatarUrl:
      "https://img-new.cgtrader.com/items/4259571/d7777b320a/large/3d-avatar-profession-as-doctor-3d-model-d7777b320a.jpg",
  });

  const handleAppointment = (doctor: any) => {
    setDoctorData(doctor);
    if (storedFormData) {
      const formDataObject = JSON.parse(storedFormData);
      setUserData(formDataObject);
    }
    setShowChoice(false);
  };

  const ReschedulebuttonText = useBreakpointValue({
    base: "Reschedule",
    md: "Reschedule",
    lg: "Reschedule Appointment",
    xl: "Reschedule Appointment",
  });
  const CancelbuttonText = useBreakpointValue({
    base: "Cancel",
    md: "Cancel",
    lg: "Cancel Appointment",
    xl: "Cancel Appointment",
  });

  return (
    <Box bg="gray.900" color="white" minH="100vh">
      <Navbar />

      {showChoice ? (
        <Box
          bg="gray.900"
          color="white"
          py={20}
          textAlign="center"
          // pt={"15%"}
        >
          <Heading as="h2" size="xl" mb={8}>
            Choose your Doctor
          </Heading>
          <Flex justify="center" align="center" flexWrap="wrap">
            {doctors.map((doctor) => (
              <Box
                cursor={"pointer"}
                key={doctor.id}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                mx={4}
                my={2}
                onClick={() => handleAppointment(doctor)}
              >
                <Avatar
                  size="xl"
                  name={doctor.name}
                  src={doctor.avatarUrl}
                  mb={4}
                />
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  {doctor.name}
                </Text>
                <Text fontSize="md" mb={2}>
                  {doctor.expertise}
                </Text>
                <Text fontSize="md">{doctor.city}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      ) : (
        <Box
          p={8}
          // pt={"10%"}
        >
          <Heading as="h1" size="xl" mb={6}>
            Appointment Confirmation
          </Heading>
          <Flex alignItems="center" mb={6}>
            <Image
              src={avatar}
              alt={userData.name}
              borderRadius="full"
              boxSize="60px"
              mr={4}
            />
            <Heading as="h2" size="lg">
              Hi, {userData.name}!
            </Heading>
          </Flex>
          <Box bg="gray.800" p={6} borderRadius="lg" mb={6}>
            <Heading as="h2" size="lg" mb={4}>
              Your Details
            </Heading>
            <Text fontSize="lg" mb={2}>
              Name: {userData.name}
            </Text>
            <Text fontSize="lg" mb={2}>
              Mobile: {userData.mobile}
            </Text>
            <Text fontSize="lg" mb={2}>
              City: {userData.city}
            </Text>
            <Text fontSize="lg" mb={2}>
              Age: {userData.age}
            </Text>
            <Text fontSize="lg" mb={2}>
              Occupation: {userData.occupation}
            </Text>
            <Text fontSize="lg" mb={2}>
              Problem Description: {userData.problemDescription}
            </Text>
            <Text fontSize="lg" mb={2}>
              Pain Intensity: {userData.painIntensity} (on a scale of 5)
            </Text>
            <Text fontSize="lg" mb={2}>
              Disease Duration: {userData.diseaseDuration}
            </Text>
            <Text fontSize="lg" mb={2}>
              Consultation Slot:{" "}
              {new Date(userData.consultationSlot).toLocaleString()}
            </Text>
          </Box>
          <Box bg="gray.800" p={6} borderRadius="lg" mb={6}>
            <Heading as="h2" size="lg" mb={4}>
              Doctor Details
            </Heading>
            <Flex alignItems="center" mb={4}>
              <Image
                src={doctorData.avatarUrl}
                alt={doctorData.name}
                borderRadius="full"
                boxSize="60px"
                mr={4}
              />
              <Box>
                <Heading as="h3" size="md" mb={1}>
                  {doctorData.name}
                </Heading>
                <Text fontSize="lg">{doctorData.expertise}</Text>
              </Box>
            </Flex>
           
          </Box>
          
          <Flex justify="space-between">
            <Button colorScheme="red" size="lg">
              {CancelbuttonText}
            </Button>
            <Button colorScheme="teal" size="lg">
              {ReschedulebuttonText}
            </Button>
          </Flex>
        </Box>
      )}

      <Footer />
    </Box>
  );
};

export default Appointment;
