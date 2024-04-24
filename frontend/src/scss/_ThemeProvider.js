import { createTheme } from "@mui/material/styles";

// Créer un thème personnalisé
const mUItheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Couleur principale
    },
    secondary: {
      main: "#f50057", // Couleur secondaire
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    // Définissez d'autres échelles de couleurs ici
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","), // Police par défaut
    fontSize: 16,
    h1: {
      fontSize: "2.25rem",
      fontWeight: 700,
    },
    // Ajouter des échelles de polices supplémentaires
    heading: {
      fontFamily: ["Montserrat", "sans-serif"].join(","), // Police pour les titres
      fontWeight: 600,
    },
    body: {
      fontFamily: ["Open Sans", "sans-serif"].join(","), // Police pour le corps du texte
    },
    // Définissez d'autres échelles de polices ici
  },
  components: {
    MuiAppBar: {
      // Ici, sous components
      styleOverrides: {
        root: {
          height: "6rem",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 12rem",
          backdropFilter: "blur(5px)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // bord arrondi
          padding: "10px 20px", // padding personnalisé
          color: "pink",
        },
        contained: {
          height: "4rem",
          boxShadow: "none", // supprimer la boîte d'ombre
          color: "White",
          backgroundColor: "#F583BE",
          minWidth: "8rem",
          "&:hover": {
            backgroundColor: "pink", // couleur de fond au survol
          },
        },
      },
      // Typographie spécifique pour les boutons
      defaultProps: {
        style: {
          textTransform: "none", // Changer la casse en minuscules
          fontFamily: ["Open Sans", "sans-serif"].join(","),
          fontWeight: 500,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // bord arrondi
          padding: "10px 20px", // padding personnalisé
          color: "pink",
        },
      },
    },
    // Ajoutez d'autres styles pour d'autres composants ici
  },
  // Autres configurations de thème
});

export default mUItheme;
