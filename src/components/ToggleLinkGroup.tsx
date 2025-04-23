import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";

interface ToggleLinkGroupProps {
  selectedType: string;
  types: string[];
}

function ToggleLinkGroup({ selectedType, types }: ToggleLinkGroupProps) {
  const theme = useTheme();

  return (
    <ToggleButtonGroup
      exclusive
      value={selectedType}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        paddingBottom: "100px",
      }}
    >
      {types.map((type) => (
        <ToggleButton
          disableRipple
          disableFocusRipple
          disableTouchRipple
          key={type}
          sx={{
            alignItems: "center",
            backgroundColor: "transparent",
            border: "none",
            color: theme.palette.text.primary,
            display: "flex",
            justifyContent: "start",
            padding: 0,
            width: "fit-content",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&.Mui-selected": {
              backgroundColor: "transparent",
              color: theme.palette.text.secondary,
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
