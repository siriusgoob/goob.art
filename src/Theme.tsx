import { createTheme, TypographyVariantsOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    accent: {
      dark: string;
      light: string;
      main: string;
    };
  }

  interface PaletteOptions {
    accent?: {
      dark?: string;
      light?: string;
      main?: string;
    };
  }

  interface TypographyVariants {
    copyright: React.CSSProperties;
    navbar: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    copyright?: React.CSSProperties;
    navbar?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    copyright: true;
    navbar: true;
  }
}

const typography: TypographyVariantsOptions = {
  body1: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "22px",
    letterSpacing: "3px",
    textAlign: "justify",
  },
  body2: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "18px",
    letterSpacing: "3px",
    textAlign: "justify",
  },
  button: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "22px",
    letterSpacing: "3px",
    textTransform: "none",
  },
  copyright: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "12px",
    fontWeight: 300,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  h1: {
    fontFamily: "Rubik Spray Paint",
    fontSize: "44px",
    letterSpacing: "15px",
    textTransform: "uppercase",
  },
  h2: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "28px",
    fontWeight: 300,
    letterSpacing: "3px",
    textTransform: "uppercase",
  },
  h3: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "22px",
    letterSpacing: "12px",
  },
  h4: {
    fontFamily: "Rubik Spray Paint",
    fontSize: "36px",
    letterSpacing: "6px",
    textTransform: "uppercase",
  },
  navbar: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "18px",
    letterSpacing: "3px",
    textTransform: "uppercase",
  },
  subtitle1: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "`8px",
    fontWeight: 300,
    letterSpacing: "3px",
  },
};

export const theme = createTheme({
  palette: {
    accent: {
      dark: "#4b270d",
      light: "#ba841f",
      main: "#884e0f",
    },
    background: {
      default: "#130e12",
    },
    primary: {
      dark: "#525133",
      light: "#d5d497",
      main: "#9f9c58",
    },
    text: {
      primary: "#f7f4eb",
      secondary: "#dccda6",
    },
  },
  typography: typography,
});
