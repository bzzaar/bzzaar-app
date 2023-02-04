import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    SlippageExplainer: {
      backgroundColor: (style: Theme) => style.background3,
      border: (style: Theme) => `2px solid ${style.background4}`,
      boxShadow: (style: Theme) => style.slippageChipShadow,
      margin: "auto",
      width: "45rem",
      height: "4.5rem",
      textAlign: "center",
      verticalAlign: "middle",
      lineHeight: "2.6rem",
      position: "absolute",
      padding: "0.5rem",
      borderRadius: "0 10rem 10rem 0",
      zIndex: 3,
      top: "-2.2rem",
      left: "-1rem",
      clipPath:
        "polygon(0% 50%, 5% 0, 100% 0, 100% 100%, 5% 100%, 0% 50%, 0 50%)",
      transition: (style: Theme) => style.transition,
      color: (style: Theme) => style.textColor,
      font: (style: Theme) => style.typography.p1,
    },
  })
);
export default useStyles;
