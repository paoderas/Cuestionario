const express = require("express");
const quizController = require("../controllers/quizController"); // Importar el controlador

const router = express.Router();

// Ruta para crear un cuestionario
router.post("/", quizController.createQuiz);

// Ruta para obtener todos los cuestionarios
router.get("/", quizController.getQuizzes); // Asegúrate de que getQuizzes esté definido

module.exports = router;





