import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./approveButton";

const useStyles = makeStyles(() =>
  createStyles({
    ApproveButton: {
      width: "100%",
      height: "100%",
      backgroundColor: (style: Props & Theme) => style.background4,
      borderRadius: "10rem 0 0 10rem",
      zIndex: 1,
      clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
      alignSelf: "left",
      transition: (style: Theme & Props) =>
        style.isActive ? style.transition : "",
      "&:hover": {
        backgroundColor: (style: Props & Theme) =>
          style.isActive ? style.background1 : "",
      },
    },
    wrap: {
      backgroundColor: (style: Props & Theme) => style.background1,
      transition: (style: Theme & Props) =>
        style.isActive ? style.transition : "",
      width: "99.3%",
      height: "100%",
      alignSelf: "left",
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.h3.normal,
      borderRadius: "10rem 0 0 10rem",
      clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
      border: (style: Theme & Props) => `1px solid ${style.background4}`,
      animation: (style: Theme & Props) =>
        style.isGlowing && "pulsingGlow 2s infinite",
      "&:hover": {
        backgroundColor: (style: Props & Theme) =>
          style.isActive ? style.highlightPrimary : "",
        border: (style: Theme & Props) =>
          style.isActive ? `1px solid ${style.highlightSecondary}` : "",
        width: (style: Theme & Props) => (style.isActive ? "100%" : ""),
        height: (style: Theme & Props) => (style.isActive ? "100%" : ""),
        font: (style: Theme & Props) =>
          style.isActive ? style.typography.h3.onOrange : "",
        color: (style: Theme & Props) =>
          style.isActive ? "var(--swarm-almost-white)" : "",
        "& $approve": {
          color: (style: Theme & Props) =>
            style.isActive ? "var(--swarm-almost-white)" : "",
        },
      },
    },
  })
);

export default useStyles;
