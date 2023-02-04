import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    Terminal: {
      backgroundColor: (style: Theme) => style.background1,
      width: "60rem",
      height: "100vh",
      transition: (style: Theme) => style.transition,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      opacity: 0.6,
      boxShadow: (style: Theme) => style.boxShadow1,
      padding: "12rem 4rem",
    },
    text: {
      color: (style: Theme) => style.highlightPrimary,
      font: (style: Theme) => style.typography.h3.normal,
    },
  })
);

export default useStyles;
