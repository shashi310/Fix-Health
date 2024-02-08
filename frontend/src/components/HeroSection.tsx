import React, { useState,useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUser, FaMobileAlt, FaLocationArrow } from "react-icons/fa";
import { useSearchParams, useNavigate,useLocation  } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const initialState = {
    mobile: "",
    name: "",
    city: "",
    age: "",
    occupation: "",
    problemDescription: "",
    painIntensity: "",
    diseaseDuration: "",
    consultationSlot: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("searchParams", JSON.stringify(searchParams));
    setFormData(initialState);
    onClose();
    navigate("/appointment");
  };
  const handleFirstSubmit = (e: any) => {
    e.preventDefault();
    if (formData.mobile && formData.name && formData.city) { 
      onOpen();
      handleSetSearchParams()
    } else {
      alert("Please enter your details first");
    }
  };

  const handleSetSearchParams = () => {
    const params = new URLSearchParams();
    params.set('city', formData.city);
    setSearchParams(params);
  };

  useEffect(() => {
  const searchParams = new URLSearchParams(location.search);
  // const city = searchParams.get('city');
  // console.log('City:', city);
  setSearchParams(searchParams);
  }, [location.search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Flex
      bgImage="url('https://png.pngtree.com/background/20211215/original/pngtree-business-line-light-effect-aperture-blue-technology-banner-picture-image_1493098.jpg')"
      bgSize="cover"
      bgPosition="center"
      color="white"
      py={20}
      px={4}
      // pt={"17%"}
      align="center"
      justifyContent="space-between"
      flexDirection={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
      }}
    >
      {/* Left Side - Welcome Message */}
      <Box maxW={{ base: "100%", md: "50%" }} textAlign="left">
        <Heading as="h1" size="2xl" mb={4} color="black">
          Welcome to Fix Health
        </Heading>
        <Text fontSize="xl" mb={8} color="black">
          Your partner in healthcare
        </Text>
      </Box>

      {/* Right Side - Form */}
      <Box maxW={{ base: "100%", md: "50%" }}>
        <Heading as="h3" size="lg" mb={4} textAlign="center">
          Book an Appointment
          <br /> for <del>₹1000</del> <span style={{ color: "red" }}>FREE</span>
        </Heading>
        <form onSubmit={handleFirstSubmit}>
          <FormControl mb={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaMobileAlt color="gray.300" />}
              />
              <Input
                type="tel"
                autoFocus
                placeholder="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </InputGroup>
          </FormControl>
          <FormControl mb={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaUser color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </InputGroup>
          </FormControl>
          <FormControl mb={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaLocationArrow color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Your City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </InputGroup>
          </FormControl>
          <Button w="100%" colorScheme="teal" size="lg" mt={4} type="submit">
            Start your recovery
          </Button>
        </form>
      </Box>

      {/* Modal for additional forms */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.900" color="white">
          <ModalHeader>Additional Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Problem Form */}
            <form onSubmit={handleSubmit}>
              <Heading as="h3" size="lg" mb={4}>
                Problem
              </Heading>
              <FormControl mb={4}>
                <Input
                  type="number"
                  placeholder="Age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <Input
                  type="text"
                  placeholder="Occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <Input
                  type="text"
                  placeholder="Describe the problem"
                  name="problemDescription"
                  value={formData.problemDescription}
                  onChange={handleInputChange}
                />
              </FormControl>

              {/* Concern Form */}

              <Heading as="h3" size="lg" mt={8} mb={4}>
                Concern
              </Heading>
              <FormControl mb={4}>
                <Input
                  type="number"
                  placeholder="Intensity of pain (Scale 1-5)"
                  name="painIntensity"
                  value={formData.painIntensity}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <Input
                  type="text"
                  placeholder="Duration of disease in months (e.g-6 months)"
                  name="diseaseDuration"
                  value={formData.diseaseDuration}
                  onChange={handleInputChange}
                />
              </FormControl>

              {/* Consultation Form */}

              <Heading as="h3" size="lg" mt={8} mb={4}>
                Consultation Time
              </Heading>
              <FormControl mb={4}>
                <Input
                  type="datetime-local"
                  placeholder="Pick a consultation slot"
                  name="consultationSlot"
                  value={formData.consultationSlot}
                  onChange={handleInputChange}
                />
              </FormControl>
              <Button w={"100%"} colorScheme="teal" size="lg" type="submit">
                Book Appointment
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default HeroSection;
