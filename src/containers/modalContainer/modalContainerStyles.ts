import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { IState } from "../../store/reducers";

const useStyles = makeStyles(() =>
  createStyles({
    ModalContainer: {
      backgroundColor: (style: Theme) => style.background2,
      width: "64rem",
      height: "fit-content",
      position: "absolute",
      top: "27.5rem",
      left: "calc(50vw - 32rem)",
      boxShadow: (style: Theme) => style.boxShadow1,
      display: "flex",
      flexDirection: "column-reverse",
    },
    receiverNotifier: {
      position: "absolute",
      width: "100%",
      height: "3rem",
      textAlign: "center",
      color: (style: Theme) => style.highlightSecondary,
      top: "-6rem",
      font: (style: Theme) => style.typography.highlight2,
    },
    heading: {
      position: "absolute",
      width: "100%",
      height: "5rem",
      textAlign: "center",
      color: (style: Theme) => style.textColor,
      top: "-12rem",
      font: (style: Theme) => style.typography.h1,
    },
    infoIconContainer: {
      position: "absolute",
      width: "1.7rem",
      height: "1.7rem",
      bottom: "7.5rem",
      right: "0.4rem",
      top: "-2.5rem",
      filter: "brightness(0.8)",
      cursor: "pointer",
      "&:hover": {
        filter: "brightness(1)",
        "& $info": {
          fill: (style: Theme) => style.highlightPrimary,
        },
      },
    },
    info: {
      margin: "auto",
      width: "100%",
      fill: (style: Theme) => style.textColor,
    },
    infoIconHidden: {
      display: "hidden",
    },
    topContainer: {
      backgroundColor: (style: Theme) => style.background2,
      display: "flex",
      width: "100%",
      height: (style: Theme & IState) =>
        style.walletConnected ? "53.6rem" : "35rem",
      position: "relative",
      transition: (style: Theme) => style.transition,
      boxShadow: (style: Theme) => style.boxShadowTopContainer,
      overflow: "hidden",
      zIndex: 1,
    },
    statusMessage: {
      position: "inherit",
      display: "flex",
      margin: "auto",
      fontSize: "2.5rem",
      textAlign: "center",
      paddingTop: "1rem",
      color: (style: Theme) => style.textColor,
    },
    bottomContainer: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      width: "100%",
      height: "13.4rem",
      backgroundColor: (style: Theme) => style.background2,
      transition: (style: Theme) => style.transition,
    },
    switchContainer: {
      position: "absolute",
      left: "calc(50% - 2.5rem)",
      transition: (style: Theme) => style.transition,
      top: (style: Theme & IState) =>
        style.walletConnected
          ? "calc(26.8rem - 2.5rem)"
          : "calc(17.5rem - 2.5rem)",
      zIndex: 3,
    },
  })
);

export default useStyles;
