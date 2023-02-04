import { createStyles, makeStyles } from "@material-ui/styles";
import { Props } from "./addressBar";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    AddressBar: {
      width: "28rem",
      height: "5.5rem",
      backgroundColor: (style: Theme & Props) =>
        style.name === "dark" ? style.background1 : style.background1,
      borderRadius: "2.75rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: "-1px 0px 0px -1px",
      transition: (style: Theme & Props) => style.transition,
      "&:hover": {
        backgroundColor: (style: Theme & Props) =>
          style.name === "dark" ? style.background3 : style.background2,
      },
    },
    address: {
      fontSize: "1.5rem",
      padding: "5px 10px",
      font: (style: Theme & Props) => style.typography.h3.normal,
      color: (style: Theme & Props) => style.textColor,
      userSelect: "none",
      margin: "auto",
    },
    iconContainer: {
      height: "calc(5.5rem - 2px)",
      width: "5.5rem",
      margin: "0 auto 0 0",
      backgroundColor: (style: Theme & Props) =>
        style.name === "dark" ? style.background3 : style.background2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      border: "none",
      transition: (style: Theme & Props) => style.transition,
    },
    icon: {
      margin: "auto",
      width: "100%",
      height: "100%",
    },
    dropdownBtn: {
      height: "5.5rem",
      width: "5.5rem",
      margin: "auto",
      display: "flex",
      borderRadius: "50%",
      background: "transparent",
      transition: (style: Theme & Props) => style.transition,
    },
    chevron: {
      width: "1.4rem",
      margin: "auto",
      color: (style: Theme & Props) => style.textColor,
      transition: (style: Theme & Props) => style.transition,
      "&.rotate": {
        transform: "rotate(-180deg)",
      },
    },
    spinner: {
      margin: "auto",
      width: "2.4rem",
      height: "2.4rem",
      animation: "rotate reverse 3s infinite linear",
      color: (style: Theme & Props) => style.textColor,
    },
  })
);

export default useStyles;
