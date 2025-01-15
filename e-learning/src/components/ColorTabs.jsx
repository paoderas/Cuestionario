import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ExploreIcon from '@mui/icons-material/Explore';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function ColorTabs() {
  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyles = (tabValue) => (theme) => ({
    color: '#FFFFFF',
    textTransform: 'none',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    backgroundColor: value === tabValue ? '#16a34a' : '#15803d', // Fondo según selección
    borderRadius: '4px',
    flex: 1,
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
      backgroundColor: '#16a34a',
      transform: 'scale(1.05)',
    },
    '&.Mui-selected': {
      backgroundColor: '#16a34a',
      transform: 'scale(1.05)',
      color: '#FFFFFF',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#16a34a',
      color: '#FFFFFF',
    },
    // =================== Breakpoints para responsividad ===================
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      height: '80px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      height: '60px',
    },
  });

  return (
    <Box sx={{ width: '100%' }}>
      {/* Barra de pestañas */}
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="tabs with icons"
        centered
        sx={(theme) => ({
          width: '100%',
          height: '90px',
          backgroundColor: '#15803d',
          '& .MuiTabs-indicator': {
            backgroundColor: '#FFFFFF',
            height: '4px',
          },
          // Breakpoints
          [theme.breakpoints.down('md')]: {
            height: '80px',
          },
          [theme.breakpoints.down('sm')]: {
            height: '60px',
          },
        })}
      >
        <Tab
          value="explora"
          label="Explora"
          icon={<ExploreIcon />}
          iconPosition="start"
          sx={tabStyles('explora')}
        />
        <Tab
          value="aprende"
          label="Aprende"
          icon={<SchoolIcon />}
          iconPosition="start"
          sx={tabStyles('aprende')}
        />
        <Tab
          value="avanza"
          label="Avanza"
          icon={<TrendingUpIcon />}
          iconPosition="start"
          sx={tabStyles('avanza')}
        />
      </Tabs>

      {/* Mostrar contenido según la pestaña seleccionada */}
      {value === 'explora' && (
        <Box
          sx={(theme) => ({
            padding: 2,
            backgroundColor: '#d9f99d',
            height: '60vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            // Breakpoints
            [theme.breakpoints.down('md')]: {
              height: '50vh',
            },
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              height: 'auto',
            },
          })}
        >
          <Box
            sx={(theme) => ({
              width: '300px',
              height: '100%',
              backgroundColor: '#fff',
              borderRadius: '4px',
              boxShadow: 1,
              // Breakpoints
              [theme.breakpoints.down('md')]: {
                width: '200px',
              },
              [theme.breakpoints.down('sm')]: {
                width: '90%',
                height: '200px',
                marginTop: '20px',
              },
            })}
          >
            {/* Contenido / Imagen a futuro */}
          </Box>
        </Box>
      )}

      {value === 'aprende' && (
        <Box
          sx={(theme) => ({
            padding: 2,
            backgroundColor: '#d9f99d',
            height: '60vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            [theme.breakpoints.down('md')]: {
              height: '50vh',
            },
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              height: 'auto',
            },
          })}
        >
          <Box
            sx={(theme) => ({
              width: '300px',
              height: '100%',
              backgroundColor: '#fff',
              borderRadius: '4px',
              boxShadow: 1,
              [theme.breakpoints.down('md')]: {
                width: '200px',
              },
              [theme.breakpoints.down('sm')]: {
                width: '90%',
                height: '200px',
                marginTop: '20px',
              },
            })}
          >
            {/* Contenido / Imagen a futuro */}
          </Box>
        </Box>
      )}

      {value === 'avanza' && (
        <Box
          sx={(theme) => ({
            padding: 2,
            backgroundColor: '#d9f99d',
            height: '60vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            [theme.breakpoints.down('md')]: {
              height: '50vh',
            },
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              height: 'auto',
            },
          })}
        >
          <Box
            sx={(theme) => ({
              width: '300px',
              height: '100%',
              backgroundColor: '#fff',
              borderRadius: '4px',
              boxShadow: 1,
              [theme.breakpoints.down('md')]: {
                width: '200px',
              },
              [theme.breakpoints.down('sm')]: {
                width: '90%',
                height: '200px',
                marginTop: '20px',
              },
            })}
          >
            {/* Contenedor para tu imagen/contenido */}
          </Box>
        </Box>
      )}
    </Box>
  );
}
