import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./rollingPrices";

const useStyles = makeStyles(() =>
  createStyles({
    RollingPrices: {
      backgroundColor: "transparent",
      transition: (style: Theme & Props) => style.transition,
      color: (style: Theme & Props) => style.textColor,
      width: "auto",
      marginRight: "5rem",
    },
    loadingIcon: {
      backgroundColor: "transparent",
      transition: (style: Theme & Props) => style.transition,
      color: (style: Theme & Props) => style.textColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "5rem",
      height: "5rem",
    },
    icon: {
      fill: (style: Theme & Props) => style.textColor,
      width: "50%",
      margin: "auto",
      animation: "rotate 1s infinite",
    },
    Rates: {
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textAlign: "center",
    },
    number: {
      fontWeight: "normal",
      font: (style: Theme & Props) => style.typography.h6,
    },
    text: {
      marginLeft: "0.5rem",
      fontWeight: "normal",
      font: (style: Theme & Props) => style.typography.h6_bold,
      color: (style: Theme & Props) => style.highlightPrimary,
    },
  })
);

export default useStyles;
