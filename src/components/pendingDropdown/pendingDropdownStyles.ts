import { createStyles, makeStyles } from "@material-ui/styles";
import { Props } from "./pendingDropdown";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "absolute",
      width: "220px",
      height: "fit-content",
      top: "75px",
      right: "5px",
      backgroundColor: (style: Theme & Props) => style.background1,
      borderRadius: "5px",
      padding: "5px 10px",
      zIndex: 1,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
      border: "1px #4A494A solid",
      transition: (style: Theme & Props) => style.transition,
    },
    dropdownBtn: {
      color: (style: Theme & Props) => style.textColor,
      backgroundColor: (style: Theme & Props) => style.background1,
      height: "30px",
      width: "100%",
      cursor: "pointer",
      padding: "5px 10px",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      margin: "5px",
      "&:hover": {
        "& $text": {
          color: (style: Theme & Props) => style.textColor,
        },
        "& $icon": {
          color: (style: Theme & Props) => style.textColor,
        },
      },
    },
    icon: {
      color: (style: Theme & Props) => style.highlightPrimary,
      margin: "auto 5px auto 5px",
      height: "12px",
      width: "12px",
    },
    text: {
      color: (style: Theme & Props) => style.highlightPrimary,
      margin: "auto auto auto 5px",
      fontFamily: "IBM Plex Mono, monospace",
      fontSize: "1.2rem",
    },
  })
);

export default useStyles;
