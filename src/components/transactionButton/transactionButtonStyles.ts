import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./transactionButton";

const useStyles = makeStyles(() =>
  createStyles({
    TransactionButton: {
      backgroundColor: (style: Props & Theme) => style.background1,
      transition: (style: Theme & Props) => style.transition,
      width: "100%",
      height: "100%",
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.h3.normal,
      borderRadius: (style: Theme & Props) =>
        style.isEthMintTransaction ? "10rem" : "0 10rem 10rem 0",
      border: (style: Theme & Props) => `1px solid ${style.background4}`,
      borderLeft: "none",
      animation: (style: Theme & Props) =>
        style.isGlowing && "pulsingGlow 2s infinite",
      "&:hover": {
        backgroundColor: (style: Props & Theme) =>
          style.isActive ? style.highlightPrimary : "",
        border: (style: Theme & Props) =>
          style.isActive ? `1px solid ${style.highlightSecondary}` : "",
        font: (style: Theme & Props) =>
          style.isActive ? style.typography.h3.onOrange : "",
        color: (style: Theme & Props) =>
          style.isActive ? "var(--swarm-almost-white)" : "",
      },
      textShadowColor: (style: Props & Theme) =>
        style.isGlowing ? "rgba(0, 0, 0, 1)" : "",
      textShadowRadius: (style: Props & Theme) => (style.isGlowing ? 50 : ""),
    },
  })
);

export default useStyles;
