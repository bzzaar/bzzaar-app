import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./buttonGroup";

const useStyles = makeStyles(() =>
  createStyles({
    buttonGroup: {
      backgroundColor: (style: Props & Theme) =>
        style.isEthMintTransaction ? style.background1 : style.background4,
      transition: (style: Theme & Props) => style.transition,
      margin: "3.5rem auto 0 auto",
      width: "55rem",
      height: "5.5rem",
      borderRadius: "10rem",
      display: "flex",
      position: "relative",
    },
    approve: {
      zIndex: (style: Theme & Props) => (style.isEthMintTransaction ? 0 : 1),
      height: "100%",
      margin: "auto",
      position: "absolute",
      width: "calc(50% * 1.125)",
      left: 0,
      top: 0,
      opacity: (style: Theme & Props) =>
        style.isEthMintTransaction ? "0" : "1",
      filter: "drop-shadow(2px 1px 10px rgba(00, 00, 0, 0.3))",
    },
    transaction: {
      zIndex: (style: Theme & Props) => (style.isEthMintTransaction ? 1 : 0),
      height: "100%",
      margin: "auto",
      position: "absolute",
      width: (style: Theme & Props) =>
        style.isEthMintTransaction ? "100%" : "calc(50% * 1.125)",
      left: (style: Theme & Props) =>
        style.isEthMintTransaction ? "" : "calc(50% * 0.875)",
      top: 0,
      filter: (style: Theme & Props) =>
        style.isEthMintTransaction
          ? "drop-shadow(2px 1px 10px rgba(00, 00, 0, 0.3))"
          : "",
    },
  })
);

export default useStyles;
