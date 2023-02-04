import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./confirmation";

const useStyles = makeStyles(() =>
  createStyles({
    Confirmation: {
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
    prompt: {
      margin: "1rem 0 2rem 4rem",
      font: (style: Theme & Props) => style.typography.error,
    },
    actionButton: {
      height: "6rem",
      width: "27rem",
      margin: "2rem auto auto auto",
      borderRadius: "10rem",
      boxShadow: (style: Theme & Props) => style.boxShadow1,
      transition: (style: Theme & Props) => style.transition,
      color: (style: Theme & Props) => style.textColor,
      backgroundColor: (style: Theme & Props) =>
        style.name === "dark" ? style.background3 : style.background2,
      font: (style: Theme & Props) => style.typography.h6,
      border: (style: Theme & Props) =>
        style.name === "dark"
          ? `2px solid ${style.background4}`
          : `2px solid ${style.background1}`,
      borderLeft: "none",
      "&:hover": {
        border: (style: Theme & Props) =>
          `1px solid ${style.highlightSecondary}`,
      },
    },
    chevron: {
      stroke: "white",
      width: "2rem",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1rem 0",
      height: "3rem",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      margin: "1rem 0 0 3rem",
    },
    left: {
      margin: "0 auto 0 0",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      height: "100%",
    },
    right: {
      margin: "0 0 0 auto",
      color: "var(--green)",
      font: (style: Theme & Props) => style.typography.h5,
    },
    title: {
      font: (style: Theme & Props) => style.typography.h2,
    },
    paragraphSmall: {
      font: (style: Theme & Props) => style.typography.h5,
    },
    paragraphBig: {
      font: (style: Theme & Props) => style.typography.h3.normal,
    },
    infoIcon: {
      width: "2rem",
      stroke: "var(--red)",
      marginRight: "2rem",
    },
    link: {
      "&:hover": {
        filter: "brightness(1.2)",
      },
    },
    dot: {
      width: "1rem",
      fill: (style: Theme & Props) => style.highlightPrimary,
      marginRight: "1rem",
    },
    externalLink: {
      width: "1.5rem",
      stroke: "white",
      marginLeft: "2rem",
    },
    listItem: {
      display: "flex",
      font: (style: Theme & Props) => style.typography.error,
      margin: "2rem auto 2rem 1rem",
    },
    orangeStrip: {
      width: "100%",
      height: "0.8rem",
      backgroundColor: (style: Theme & Props) => style.highlightPrimary,
      margin: "0 0 auto 0",
    },
    questionIcon: {
      width: "2rem",
      height: "2rem",
      marginRight: "1rem",
      fill: "grey",
    },
  })
);

export default useStyles;
