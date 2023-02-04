import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./success";

const useStyles = makeStyles(() =>
  createStyles({
    Success: {
      transition: (style: Theme & Props) => style.transition,
      color: (style: Theme & Props) => style.textColor,
      height: "100%",
      width: "100%",
    },
    container: {
      position: "relative",
      padding: "4rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    closeButton: {
      padding: "1rem",
      position: "absolute",
      right: "4rem",
      top: "4rem",
    },
    chevron: {
      stroke: (style: Theme & Props) => style.textColor,
      width: "2rem",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1rem 0",
      height: "3rem",
    },
    bottom: {
      marginTop: "4rem",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      margin: "1rem 0 0 3rem",
    },
    left: {
      height: "100%",
      margin: "0 auto 0 1rem",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    right: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      margin: "0 0 0 auto",
      color: (style: Theme & Props) => style.highlightPrimary,
      font: (style: Theme & Props) => style.typography.h5,
    },
    title: {
      font: (style: Theme & Props) => style.typography.h2,
    },
    paragraphSmall: {
      font: (style: Theme & Props) => style.typography.error,
    },
    paragraphBig: {
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.h3.normal,
    },
    check: {
      width: "2rem",
      stroke: (style: Theme & Props) => style.highlightPrimary,
      marginRight: "2rem",
    },
    link: {
      fontSize: "1.4rem",
      display: "flex",
      alignItems: "center",
      "&:hover": {
        filter: "brightness(1.2)",
        textDecoration: "underline",
      },
    },
    dot: {
      width: "1rem",
      fill: "var(--red)",
      marginRight: "1rem",
    },
    externalLink: {
      width: "1.5rem",
      stroke: (style: Theme & Props) => style.textColor,
      marginLeft: "2rem",
    },
    listItem: {
      display: "flex",
      font: (style: Theme & Props) => style.typography.error,
      margin: "2rem auto 2rem 1rem",
    },
    strip: {
      width: "100%",
      height: "0.8rem",
      margin: "0 0 auto 0",
      backgroundColor: (style: Theme & Props) => style.highlightPrimary,
    },
    questionIcon: {
      width: "2rem",
      marginRight: "1rem",
      fill: "grey",
    },
  })
);

export default useStyles;
