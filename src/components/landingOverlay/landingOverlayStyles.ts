import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    LandingOverlay: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      zIndex: -2,
      backgroundColor: (theme: Theme) => theme.background1,
      transition: (theme: Theme) => theme.transition,
    },
  })
);

export default useStyles;
