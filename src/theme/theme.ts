import { palette } from "@/theme/palette";
import { typographyOptions } from "@/theme/typography";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette,
  typography: typographyOptions,
  shape: {
    borderRadius: 0
  }
})

export default theme