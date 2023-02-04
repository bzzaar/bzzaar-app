import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./dropdown";

const useStyles = makeStyles(() =>
  createStyles({
    Dropdown: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "28rem",
      height: (style: Theme & Props) =>
        style.showDropdown
          ? `calc(${style.dropdownLength * 5.5}rem - ${
              style.dropdownLength - 1
            }px)`
          : "5.5rem",
      backgroundColor: (style: Theme & Props) =>
        style.name === "dark" ? style.background1 : style.background1,
      borderRadius: "calc(2.75rem + 2px)",
      zIndex: 6,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
      overflow: (style: Theme & Props) =>
        style.showDropdown ? "visible" : "hidden",
      border: (style: Theme & Props) =>
        style.name === "dark"
          ? `1px solid ${style.background3}`
          : `1px solid ${style.background1}`,
      transition: (style: Theme & Props) => style.transition,
      boxShadow: (style: Theme & Props) => style.boxShadowAddressBar,
    },
  })
);

export default useStyles;
