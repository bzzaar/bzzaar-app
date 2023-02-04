import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./blur";

const useStyles = makeStyles(() =>
  createStyles({
    Blur: {
      backgroundColor: (style: Props & Theme) => style.background1,
      backdropFilter: (style: Props) =>
        style.locked ? "blur(10px)" : "blur(0px)",
      transition: "var(--transition1)",
      width: "100vw",
      height: "calc(100vh - 11rem)",
      position: "absolute",
      left: 0,
      top: "11rem",
      zIndex: (style: Props) => (style.locked ? 5 : -5),
    },
  })
);

export default useStyles;
