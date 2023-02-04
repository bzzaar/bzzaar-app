import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./slippageChip";

const useStyles = makeStyles(() =>
  createStyles({
    SlippageChip: {
      backgroundColor: (style: Props & Theme) =>
        style.isActive ? style.background3 : "transparent",
      border: (style: Theme & Props) =>
        style.isActive
          ? `2px solid ${style.background4}`
          : `2px solid transparent`,
      boxShadow: (style: Theme & Props) =>
        style.isActive && style.slippageChipShadow,
      borderRadius: "20px",
      margin: "auto",
      width: "4.9rem",
      height: "2.6rem",
      textAlign: "center",
      verticalAlign: "middle",
      lineHeight: "2.6rem",
      transition: (style: Theme & Props) => style.transition,
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.p1,
    },
  })
);

export default useStyles;
