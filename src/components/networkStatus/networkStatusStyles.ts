import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./networkStatus";

const useStyles = makeStyles(() =>
  createStyles({
    networkStatusContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "row",
      width: "30rem",
      margin: "0 auto 0 3rem",
    },
    iconContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "30%",
    },
    networkStatusMessage: {
      width: "70%",
      display: "flex",
      alignItems: "center",
      color: (style: Theme & Props) => style.textColor,
    },
    icon: {
      width: "8rem",
    },
    SvgOrange: {
      filter: "drop-shadow(0 0 0.75rem #DBBF26)",
    },
    SvgGreen: {
      filter: "drop-shadow(0 0 0.75rem #3FA676)",
    },
    SvgBlue: {
      filter: "drop-shadow(0 0 0.75rem #3F8EA6)",
    },
    SvgGrey: {
      filter: "drop-shadow(0 0 0.75rem #E25656)",
    },
    SvgPurple: {
      filter: "drop-shadow(0 0 0.75rem #9571D9)",
    },
    SvgRed: {
      filter: "drop-shadow(0 0 0.75rem #E25656)",
    },
    SvgYellow: {
      filter: "drop-shadow(0 0 0.75rem #FFF04D)",
    },
  })
);

export default useStyles;
