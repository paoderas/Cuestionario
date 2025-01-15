import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";

import DisplayQuizUI from "./QuizDetail";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Reports from "./ReportsPage";
import ProfileIndex from "./profileindex";
import UpdateProfile from "./updateProfile";
import AboutUs from "./aboutUs";
import ContactUs from "./ContactUS";
import QuizList from "./quizzList";
import QuizView from "./quizzview";
import CreateQuiz from "./createQuiz";
import Busqueda from "./busqueda";
import Home from "./Home";
import SelectDepartamentoMunicipio from "./SelectDepartamentoMunicipio";
import Navbar from "./partials/Navbar";
import FNiveles from "./FNiveles";
import BNiveles from "./BNiveles";
import CNiveles from "./CNiveles";
import Footer from "./partials/Footer";
import UserProfileDisplay from "./UserProfileDisplay";

const Router = () => {
  const [quizQuestions, setQuizQuestions] = React.useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Siempre visible */}
      <Navbar />

      {/* Contenido principal */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<ProfileIndex />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/list" element={<QuizList />} />
          <Route path="/quizview" element={<QuizView />} />
          <Route path="/create" element={<CreateQuiz setQuizQuestions={setQuizQuestions} />} />
          <Route path="/update" element={<UpdateProfile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/select" element={<SelectDepartamentoMunicipio />} />
          <Route path="/BNiveles" element={<BNiveles />} />
          <Route path="/FNiveles" element={<FNiveles />} />
          <Route path="/CNiveles" element={<CNiveles />} />
          <Route path="/quiz/:id" element={<DisplayQuizUI />} />
        </Routes>
      </div>


      <Footer />
    </div>
  );
};

export default Router;






