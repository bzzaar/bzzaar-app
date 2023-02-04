import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./menuChip";

const useStyles = makeStyles(() =>
  createStyles({
    MenuChip: {
      width: "28rem",
      height: "5.5rem",
      marginTop: "-1px",
      backgroundColor: (style: Theme & Props) => style.background1,
      borderRadius: "2.75rem",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "left",
      flexDirection: "column",
      zIndex: 1,
      position: "relative",
      transition: (style: Theme & Props) => style.transition,
      border: (style: Theme & Props) =>
        style.name === "dark"
          ? `1px solid ${style.background4}`
          : `1px solid ${style.background3}`,
      "&:hover": {
        zIndex: 3,
        backgroundColor: (style: Theme & Props) =>
          style.name === "dark" ? style.background4 : style.background3,
        boxShadow: (style: Props & Theme) => style.slippageChipShadow,
      },
    },
    text: {
      color: (style: Theme & Props) => style.textColor,
      margin: "auto auto auto 6.5rem",
      alignSelf: "left",
      font: (style: Theme & Props) => style.typography.h3.normal,
    },
    button: {
      height: "100%",
      width: "100%",
      borderRadius: "2.75rem",
      backgroundColor: "transparent",
      cursor: "pointer",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "left",
      transition: (style: Theme & Props) => style.transition,
    },
  })
);

export default useStyles;
