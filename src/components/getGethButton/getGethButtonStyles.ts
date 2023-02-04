import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    GetGethButton: {
      position: "absolute",
      bottom: "5rem",
      left: "2.5rem",
      width: "18rem",
      height: "4.5rem",
      backgroundColor: (style: Theme) => style.highlightPrimary,
      padding: "5px 10px",
      color: "var(--swarm-almost-white)",
      borderRadius: "100px",
      cursor: "pointer",
      font: (style: Theme) => style.typography.h3.onOrange,
      zIndex: 1,
      transition: "all 150ms ease-in-out",
      borderColor: (style: Theme) => style.highlightSecondary,
      borderSize: "1px",
      borderStyle: "solid",
      boxShadow: (style: Theme) => style.boxShadowAddressBar,
      "&:hover": {
        backgroundColor: (style: Theme) => style.background2,
        color: (style: Theme) => style.textColor,
        borderColor: (style: Theme) => style.background2,
      },
    },
  })
);

export default useStyles;
