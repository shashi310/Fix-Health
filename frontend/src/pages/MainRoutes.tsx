import { Heading } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AppointMent from "./AppointMent";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Heading>page not found</Heading>} />
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/appointment"} element={<AppointMent />} />
    </Routes>
  );
};

export default MainRoutes;
