import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const DisplayQuizUI = ({ quiz }) => {
  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: "auto" }}>
      <Typography variant="h4" textAlign="center" marginBottom={4}>
        {quiz?.title || "Título no disponible"}
      </Typography>

      <Typography variant="body1" textAlign="center" marginBottom={4}>
        {quiz?.description || "Descripción no disponible"}
      </Typography>

      <Typography variant="h6" marginBottom={2}>
        Preguntas
      </Typography>

      {quiz?.questions?.length > 0 ? (
        quiz.questions.map((question, index) => (
          <Typography key={index} variant="body1" sx={{ marginBottom: 2 }}>
            {index + 1}. {question}
          </Typography>
        ))
      ) : (
        <Typography variant="body2" color="textSecondary">
          No hay preguntas disponibles.
        </Typography>
      )}

      <Divider sx={{ marginBottom: 4 }} />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => alert("Cuestionario guardado para resolver.")}
      >
        Guardar Cuestionario
      </Button>
    </Box>
  );
};

export default DisplayQuizUI;

