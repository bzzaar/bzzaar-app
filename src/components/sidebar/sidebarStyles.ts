import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "40px",
      height: "calc(100vh - 70px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: "0",
      top: "70px",
      backgroundColor: (style: Theme) => style.background1,
      zIndex: 2,
    },
    block: {
      color: (style: Theme) => style.textColor,
      margin: "auto",
      fontSize: "0.8rem",
      display: "flex",
      width: "100%",
      height: "2%",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      opacity: "0.6",
    },
  })
);

export default useStyles;
