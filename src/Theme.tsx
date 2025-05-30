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
    link: React.CSSProperties;
    navbar: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    copyright?: React.CSSProperties;
    link?: React.CSSProperties;
    navbar?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    copyright: true;
    link: true;
    navbar: true;
  }
}

const typography: TypographyVariantsOptions = {
  body1: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "1.375rem", // 22px
    letterSpacing: "0.1875rem", // 3px
    textAlign: "justify",
  },
  body2: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "1.125rem", // 18px
    letterSpacing: "0.1875rem", // 3px
    textAlign: "justify",
  },
  button: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "1.375rem", // 22px
    letterSpacing: "0.1875rem", // 3px
    textTransform: "none",
  },
  copyright: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "0.75rem", // 12px
    fontWeight: 300,
    letterSpacing: "0.125rem", // 2px
    textTransform: "uppercase",
  },
  h1: {
    fontFamily: "Rubik Spray Paint",
    fontSize: "2.75rem", // 44px
    letterSpacing: "1rem", // 16px
    textTransform: "uppercase",
  },
  h2: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "1.75rem", // 28px
    fontWeight: 300,
    letterSpacing: "0.1875rem", // 3px
    textTransform: "uppercase",
  },
  h3: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "1.375rem", // 22px
    letterSpacing: "0.75rem", // 12px
  },
  h4: {
    fontFamily: "Rubik Spray Paint",
    fontSize: "2.25rem", // 36px
    letterSpacing: "0.375rem", // 6px
    textTransform: "uppercase",
  },
  h5: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "1.375rem", // 22px
    fontWeight: 300,
    letterSpacing: "0.3125rem", // 5px
  },
  link: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "1.375rem", // 22px
    letterSpacing: "0.1875rem", // 3px
    textDecoration: "underline",
  },
  navbar: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "1.125rem", // 18px
    letterSpacing: "0.1875rem", // 3px
    textTransform: "uppercase",
  },
  subtitle1: {
    fontFamily: "Century Gothic Paneuropean",
    fontSize: "1.125rem", // 18px
    fontWeight: 300,
    letterSpacing: "0.1875rem", // 3px
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
