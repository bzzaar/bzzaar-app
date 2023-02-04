import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./tokenChip";

const useStyles = makeStyles(() =>
  createStyles({
    TokenChip: {
      height: "calc(5.5rem + 4px)",
      width: "100%",
      backgroundColor: (style: Theme & Props) =>
        style.name === "dark" ? style.background2 : style.background1,
      borderRadius: "10rem",
      border: (style: Theme & Props) =>
        style.name === "dark"
          ? `2px solid ${style.background3}`
          : `2px solid ${style.background1}`,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      transition: (style: Theme & Props) => style.transition,
      transitionProperty:
        "box-shadow, height, width, background, font-size, background-color, transform",
      position: "absolute",
      top: 0,
      left: 0,
      opacity: (style: Theme & Props) =>
        style.isActive || style.openMenu ? 1 : 0,
      zIndex: (style: Theme & Props) => (style.isActive ? 2 : 1),
      transform: (style: Theme & Props) => {
        if (style.openMenu) {
          if (style.isActive) {
            return "translateY(-3rem)";
          } else {
            return "translateY(3rem)";
          }
        } else {
          return "translateY(0)";
        }
      },
      "&:hover": {
        backgroundColor: (style: Theme & Props) => {
          if (style.collapsible) {
            if (style.name === "dark") {
              return style.background3;
            } else {
              return style.background2;
            }
          } else {
            return;
          }
        },
      },
    },
    tokenIconContainer: {
      height: "5.5rem",
      width: "5.5rem",
      backgroundColor: (style: Theme & Props) =>
        style.name === "dark" ? style.background3 : style.background2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      padding: "1rem",
      transition: (style: Theme & Props) => style.transition,
    },
    tokenIcon: {
      margin: "auto",
      width: "100%",
      height: "100%",
    },
    label: {
      font: (style: Theme & Props) => style.typography.h4,
      color: (style: Theme & Props) => style.textColor,
      margin: "auto",
      userSelect: "none",
    },
    dropdownBtn: {
      height: "5.5rem",
      width: "5.5rem",
      display: "flex",
      borderRadius: "50%",
      backgroundColor: "transparent",
      transition: (style: Theme & Props) => style.transition,
    },
    chevron: {
      width: "1.4rem",
      margin: "auto",
      color: (style: Theme & Props) => style.textColor,
      transition: (style: Theme & Props) => style.transition,
      opacity: (style: Theme & Props) => (style.openMenu ? 0 : 1),
    },
    rotate: {
      transform: "rotate(-180deg)",
    },
  })
);

export default useStyles;
