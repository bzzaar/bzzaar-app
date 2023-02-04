import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./message";

const useStyles = makeStyles(() =>
  createStyles({
    Message: {
      backgroundColor: "transparent",
      posiiton: "relative",
      display: "flex",
      margin: "auto",
      fontSize: "2.5rem",
      textAlign: "center",
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.highlight,
    },
    messageText: {
      position: "relative",
    },
    dots: {
      margin: "auto auto auto 0",
      position: "absolute",
    },
  })
);

export default useStyles;
