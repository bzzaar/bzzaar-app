import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./transactionModal";

const useStyles = makeStyles(() =>
  createStyles({
    TransactionModal: {
      backgroundColor: (style: Props & Theme) => style.background2,
      padding: "1rem",
      width: "50%",
      height: "100%",
      overflow: "visible",
      position: "absolute",
      top: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      transition: (style: Theme & Props) => style.transition,
      zIndex: (style: Theme & Props) => style.isActive && 2,
      left: (style: Theme & Props) => (style.type === "send" ? 0 : "32rem"),
      boxShadow: (style: Props & Theme) =>
        style.isActive && `var(--${style.type}Shadow)`,
    },
    index: {
      position: "relative",
      display: "hidden",
    },
    title: {
      width: "100%",
      height: "5.2rem",
      textAlign: "center",
      font: (style: Props & Theme) => style.typography.h2,
      color: (style: Props & Theme) => style.textColor,
      textTransform: "capitalize",
      margin: "1rem 0",
      position: "absolute",
      left: 0,
      top: "2rem",
    },
    tokenSwitcherContainer: {
      width: "18.6rem",
      height: "calc(5.5rem + 4px)",
      borderRadius: "10rem",
      margin: "5rem auto",
      top: "6rem",
      left: "calc(50% - 9.3rem)",
      display: "flex",
      position: "absolute",
      boxShadow: (style: Theme & Props) => style.tokenChipShadow,
    },
    inputContainer: {
      position: "absolute",
      top: "21rem",
      left: "calc(50% - 10.3rem)",
    },
    balanceContainer: {
      position: "absolute",
      top: "34rem",
      left: "calc(50% - 10.3rem)",
    },
    slippageContainerContainer: {
      position: "absolute",
      top: "48rem",
    },
    toastContainer: {
      position: "absolute",
      width: "100%",
      top: "32rem",
      left: 0,
    },
  })
);

export default useStyles;
