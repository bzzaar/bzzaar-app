import { createStyles, makeStyles } from "@material-ui/styles";
import { Props } from "./pendingButton";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "30px",
      width: "200px",
      margin: "auto 10px",
      fontFamily: "inherit",
      backgroundColor: (style: Theme & Props) => style.background1,
      borderRadius: "5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      transition: (style: Theme & Props) => style.transition,
    },
    pending: {
      fontSize: "1.5rem",
      padding: "5px 10px",
      fontWeight: "bold",
      color: (style: Theme & Props) => style.highlightPrimary,
    },
    spinner: {
      margin: "auto",
      width: "20px",
      height: "20px",
      animation: "rotate 2s infinite linear",
    },
    dropdownBtn: {
      height: "30px",
      width: "30px",
      margin: "auto",
      display: "flex",
      backgroundColor: (style: Theme & Props) => style.background1,
    },
    chevron: {
      height: "60%",
      width: "60%",
      margin: "auto",
      color: (style: Theme & Props) => style.highlightPrimary,
      "&.rotate": {
        transform: "rotate(180deg)",
      },
    },
  })
);

export default useStyles;
