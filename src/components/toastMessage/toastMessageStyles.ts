import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./toastMessage";

const useStyles = makeStyles(() =>
  createStyles({
    ToastMessage: {
      width: "auto",
      height: "2rem",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "left",
    },
    message: {
      color: (style: Theme & Props) => style.alert,
      font: (style: Theme & Props) => style.typography.error,
      opacity: 1,
      display: "flex",
      justifyContent: "center",
    },
  })
);

export default useStyles;
