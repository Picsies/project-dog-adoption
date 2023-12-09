import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { DogsPage } from "../pages/DogsPage";
import { DogDetailsPage } from "../pages/DogDetailsPage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ThankYouPage } from "../pages/ThankYouPage";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dogs" element={<DogsPage />} />
    <Route path="/dogs/:id" element={<DogDetailsPage />} />
    <Route path="/registration" element={<RegistrationPage />} />
    <Route path="/ThankYou" element={<ThankYouPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default routes;