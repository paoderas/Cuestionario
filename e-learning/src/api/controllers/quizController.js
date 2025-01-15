const Materia = require("../models/Materia");
const Cuestionario = require("../models/Cuestionario");
const Pregunta = require("../models/Pregunta");
const OpcionRespuesta = require("../models/OpcionRespuesta");
const Nivel = require("../models/Nivel");
const NivelesCuestionarios = require("../models/NivelesCuestionarios");

exports.createQuiz = async (req, res) => {
  const { theme, level, subject, description, questions } = req.body;

  // Validate input
  if (!theme || !level || !subject || !description || !questions || questions.length === 0) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }

  try {
    // Find or create the subject (Materia)
    const [materia, createdMateria] = await Materia.findOrCreate({
      where: { nombre: subject },
    });

    // Find or create the level (Nivel)
    const [nivel, createdNivel] = await Nivel.findOrCreate({
      where: { nombre: level, materia_id: materia.id },
      defaults: { descripcion: `Nivel para ${subject}` },
    });

    // Create the quiz (Cuestionario)
    const newQuiz = await Cuestionario.create({
      titulo: theme,
      nivel: level,
      descripcion: description,
      materia_id: materia.id,
    });

    // Associate quiz with level in `niveles_cuestionarios`
    await NivelesCuestionarios.create({
      nivel_id: nivel.id,
      cuestionario_id: newQuiz.id,
    });

    // Iterate through questions
    for (const question of questions) {
      // Create a question (Pregunta)
      const newQuestion = await Pregunta.create({
        contenido: question.question,
        tipo: question.type,
        cuestionario_id: newQuiz.id,
      });

      // Iterate through options for the question
      for (const option of question.options) {
        await OpcionRespuesta.create({
          contenido: option.text,
          es_correcta: option.isCorrect,
          pregunta_id: newQuestion.id,
        });
      }
    }

    // Respond with success
    res.status(201).json({ message: "Cuestionario creado con éxito." });
  } catch (error) {
    console.error("Error al crear el cuestionario:", error.message);
    res.status(500).json({ error: `No se pudo crear el cuestionario: ${error.message}` });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Cuestionario.findAll({
      include: [
        {
          model: Pregunta,
          include: [
            {
              model: OpcionRespuesta,
              attributes: ["id", "contenido", "es_correcta", "pregunta_id"],
            },
          ],
          attributes: ["id", "contenido", "tipo", "cuestionario_id"],
        },
      ],
      attributes: ["id", "titulo", "descripcion", "nivel", "materia_id"],
    });

    res.status(200).json(quizzes);
  } catch (error) {
    console.error("Error al obtener los cuestionarios:", error);
    res.status(500).json({ error: "No se pudieron obtener los cuestionarios." });
  }
};
