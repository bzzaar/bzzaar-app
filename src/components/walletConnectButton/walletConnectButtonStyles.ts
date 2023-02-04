import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./walletConnectButton";

const useStyles = makeStyles(() =>
  createStyles({
    WalletConnectButton: {
      backgroundColor: "transparent",
      transition: (style: Theme & Props) => style.transition,
      padding: "3.5rem 5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        boxShadow: (style: Theme & Props) => style.boxShadow1,
        backgroundColor: (style: Theme & Props) => style.background3,
      },
    },
    iconContainer: {
      width: "3.8rem",
      margin: "auto",
      height: "55%",
    },
    icon: {
      width: "100%",
    },
    textContainer: {
      margin: "auto",
      height: "45%",
    },
    label: {
      font: (style: Theme & Props) => style.typography.h5,
      color: (style: Theme & Props) => style.textColor,
    },
    description: {
      font: (style: Theme & Props) => style.typography.p1,
      color: (style: Theme & Props) => style.textColor,
    },
  })
);

export default useStyles;
