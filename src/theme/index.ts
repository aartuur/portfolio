import { alpha, createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#71B8FF",
    },
    secondary: {
      main: "#9C8CFF",
    },
    background: {
      default: "#050816",
      paper: "#0B1120",
    },
    text: {
      primary: "#F7FAFC",
      secondary: "rgba(226,232,240,0.72)",
    },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 0.95,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.035em",
      lineHeight: 1,
    },
    h3: {
      fontWeight: 650,
      letterSpacing: "-0.025em",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          paddingInline: 18,
          minHeight: 46,
          boxShadow: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
          borderRadius: 20,
          overflow: "hidden",
          "&::before": {
            display: "none",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },
  },
});

export const appBackgroundSx = {
  width: "100vw",
  minHeight: "100vh",
  color: "text.primary",
  backgroundColor: "#050816",
  backgroundImage: `
    radial-gradient(circle at 15% 20%, ${alpha("#38BDF8", 0.08)} 0%, transparent 28%),
    radial-gradient(circle at 85% 12%, ${alpha("#8B5CF6", 0.08)} 0%, transparent 24%),
    radial-gradient(circle at 50% 100%, ${alpha("#FFFFFF", 0.035)} 0%, transparent 30%),
    linear-gradient(180deg, #050816 0%, #060A17 35%, #050816 100%)
  `,
};