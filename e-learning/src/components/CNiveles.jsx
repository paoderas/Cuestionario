import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScienceIcon from "@mui/icons-material/Science";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function CNiveles() {
  const [value, setValue] = React.useState("septimo");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyles = (tabValue) => ({
    color: "#FFFFFF",
    textTransform: "none",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
    backgroundColor: value === tabValue ? "#16a34a" : "#15803d",
    borderRadius: "4px",
    flex: 1,
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    "&:hover": {
      backgroundColor: "#16a34a",
      transform: "scale(1.05)",
    },
    "&.Mui-selected": {
      backgroundColor: "#16a34a",
      transform: "scale(1.05)",
      color: "#FFFFFF",
    },
  });

  const cardContent = {
    septimo: [
      { title: "Matemáticas Básicas", description: "Introducción a las matemáticas", imageUrl: "https://via.placeholder.com/150" },
      { title: "Lenguaje y Comunicación", description: "Aprendiendo a expresarte", imageUrl: "https://via.placeholder.com/150" },
      { title: "Ciencias Naturales", description: "Exploración de la naturaleza", imageUrl: "https://via.placeholder.com/150" },
    ],
    octavo: [
      { title: "Historia Universal", description: "Conociendo el pasado", imageUrl: "https://via.placeholder.com/150" },
      { title: "Física Básica", description: "Leyes fundamentales del universo", imageUrl: "https://via.placeholder.com/150" },
      { title: "Geografía", description: "Explorando el mundo", imageUrl: "https://via.placeholder.com/150" },
    ],
    noveno: [
      { title: "Química", description: "Fundamentos químicos", imageUrl: "https://via.placeholder.com/150" },
      { title: "Biología", description: "El estudio de la vida", imageUrl: "https://via.placeholder.com/150" },
      { title: "Civismo", description: "Principios éticos y sociales", imageUrl: "https://via.placeholder.com/150" },
    ],
    primer_ano: [
      { title: "Álgebra", description: "Resolviendo ecuaciones", imageUrl: "https://via.placeholder.com/150" },
      { title: "Literatura", description: "Lecturas clásicas", imageUrl: "https://via.placeholder.com/150" },
      { title: "Química Avanzada", description: "Reacciones químicas", imageUrl: "https://via.placeholder.com/150" },
    ],
    segundo_ano: [
      { title: "Cálculo", description: "Funciones y derivadas", imageUrl: "https://via.placeholder.com/150" },
      { title: "Física Avanzada", description: "Mecánica y electromagnetismo", imageUrl: "https://via.placeholder.com/150" },
      { title: "Historia Nacional", description: "Historia de tu país", imageUrl: "https://via.placeholder.com/150" },
    ],
  };

  const handleButtonClick = (title) => {
    console.log(`Comenzando con ${title}`);
  };

  const renderCards = (cards) => (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <CardMedia
              component="img"
              height="140"
              image={card.imageUrl}
              alt={card.title}
              sx={{ objectFit: "cover", height: "200px" }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body2">{card.description}</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "16px" }}
                onClick={() => handleButtonClick(card.title)}
              >
                Comenzar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#d9f99d" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        orientation="vertical"
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="vertical tabs with icons"
        sx={{
          backgroundColor: "#15803d",
          width: "200px",
          "& .MuiTabs-indicator": {
            backgroundColor: "#FFFFFF",
            width: "4px",
          },
        }}
      >
        <Tab value="septimo" label="Séptimo Grado" icon={<MenuBookIcon />} iconPosition="start" sx={tabStyles("septimo")} />
        <Tab value="octavo" label="Octavo Grado" icon={<ScienceIcon />} iconPosition="start" sx={tabStyles("octavo")} />
        <Tab value="noveno" label="Noveno Grado" icon={<PsychologyIcon />} iconPosition="start" sx={tabStyles("noveno")} />
        <Tab value="primer_ano" label="Primer Año" icon={<SchoolIcon />} iconPosition="start" sx={tabStyles("primer_ano")} />
        <Tab value="segundo_ano" label="Segundo Año" icon={<AutoStoriesIcon />} iconPosition="start" sx={tabStyles("segundo_ano")} />
      </Tabs>

      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        {renderCards(cardContent[value])}
      </Box>
    </Box>
  );
}
