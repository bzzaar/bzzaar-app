import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./navbar";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "11rem",
      width: "100%",
      display: "flex",
      alignItems: "center",
      font: (style: Props & Theme) => style.typography.h3.normal,
      position: "absolute",
      zIndex: 6,
      top: 0,
      left: 0,
      right: 0,
      transition: (style: Theme & Props) => style.transition,
    },
    logo: {
      margin: "auto auto auto 6rem",
      width: "15.2rem",
      position: "relative",
      opacity: `${process.env.REACT_APP_CHAIN_ID}` === "5" ? "0" : "1",
      zIndex: 3,
    },
    balanceBar: {
      width: "auto",
      height: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      font: (style: Props & Theme) => style.typography.h6,
    },
    loadingText: {
      color: (style: Props & Theme) => style.textColor,
      font: (style: Props & Theme) => style.typography.h3.normal,
    },
    balance: {
      display: "flex",
      margin: "auto 10px ",
      color: (style: Props & Theme) => style.textColor,
      padding: "5px 10px",
      borderRadius: "5px",
      borderColor: (style: Props & Theme) => style.textColor,
      alignItems: "center",
    },
    refreshButton: {
      display: "flex",
      margin: "auto 10px ",
      fill: (style: Props & Theme) => style.textColor,
      padding: "5px 10px",
      borderRadius: "5px",
      font: (style: Props & Theme) => style.typography.h3.normal,
      alignItems: "center",
      cursor: "pointer",
      background: "transparent",
    },
    dropdownWrapper: {
      position: "relative",
      width: "28rem",
      height: "5.5rem",
      margin: "auto 6rem auto 3rem",
      backgroundColor: "transparent",
    },
    button: {
      width: "28rem",
      height: "5.5rem",
      margin: "auto 6rem auto 3rem",
      backgroundColor: (style: Theme & Props) => style.highlightPrimary,
      color: "var(--swarm-almost-white)",
      borderRadius: "100px",
      cursor: "pointer",
      font: (style: Props & Theme) => style.typography.h3.onOrange,
      zIndex: 1,
      transition: "all 150ms ease-in-out",
      borderColor: (style: Theme & Props) => style.highlightSecondary,
      borderSize: "1px",
      borderStyle: "solid",
      boxShadow: (style: Props & Theme) => style.boxShadowAddressBar,
      "&:hover": {
        backgroundColor: (style: Theme & Props) => style.background2,
        color: (style: Theme & Props) => style.textColor,
        borderColor: (style: Theme & Props) => style.background2,
      },
    },
    themeIcon: {
      display: "flex",
      margin: "auto",
      width: "2.5rem",
      height: "2.5rem",
      fill: (style: Props & Theme) => style.textColor,
      font: (style: Props & Theme) => style.typography.h3.normal,
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",
    },
    rotate: {
      animation: "rotate 2s linear infinite",
    },
  })
);

export default useStyles;
