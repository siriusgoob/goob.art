import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";

interface ToggleLinkGroupProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  types: string[];
}

function ToggleLinkGroup({
  selectedType,
  setSelectedType,
  types,
}: ToggleLinkGroupProps) {
  const theme = useTheme();

  return (
    <ToggleButtonGroup
      exclusive
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        paddingBottom: "100px",
      }}
      value={selectedType}
    >
      {types.map((type) => (
        <ToggleButton
          disableRipple
          disableFocusRipple
          disableTouchRipple
          key={type}
          onClick={() => setSelectedType(type)}
          sx={{
            alignItems: "center",
            backgroundColor: "transparent",
            border: "none",
            color: theme.palette.text.primary,
            display: "flex",
            justifyContent: "start",
            padding: 0,
            textShadow: `0 0 10px ${theme.palette.text.primary}`,
            width: "fit-content",
            "&:hover": {
              backgroundColor: "transparent",
              textShadow: `0 0 20px ${theme.palette.text.primary}`,
            },
            "&.Mui-selected": {
              backgroundColor: "transparent",
              color: theme.palette.text.secondary,
            },
            "&.Mui-selected:hover": {
              backgroundColor: "transparent",
              textShadow: `0 0 20px ${theme.palette.text.primary}`,
            },
          }}
          value={type}
        >
          <Typography variant="navbar">{type}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default ToggleLinkGroup;
