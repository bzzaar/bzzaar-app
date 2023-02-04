import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./failure";

const useStyles = makeStyles(() =>
  createStyles({
    Failure: {
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
    closeButtonContainer: {
      padding: "1rem",
      position: "absolute",
      right: "4rem",
      top: "4rem",
      background: "none",
    },
    chevron: {
      stroke: (style: Theme & Props) => style.textColor,
      // stroke: "white",
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
      font: (style: Theme & Props) => style.typography.p2,
      color: (style: Theme & Props) => style.alert,
    },
    title: {
      font: (style: Theme & Props) => style.typography.h1,
    },
    paragraphSmall: {
      font: (style: Theme & Props) => style.typography.p1,
    },
    paragraphBig: {
      font: (style: Theme & Props) => style.typography.h4,
    },
    close: {
      width: "2rem",
      stroke: (style: Theme & Props) => style.alert,
      // stroke: "var(--red)",
      marginRight: "2rem",
    },
    link: {
      "&:hover": {
        filter: "brightness(1.2)",
      },
    },
    dot: {
      width: "1rem",
      fill: (style: Theme & Props) => style.alert,
      marginRight: "1rem",
      // marginTop: '0.5rem'
    },
    externalLink: {
      width: "1.5rem",
      stroke: (style: Theme & Props) => style.textColor,
      marginLeft: "2rem",
    },
    listItem: {
      // alignItems: 'flex-start',
      display: "flex",
      font: (style: Theme & Props) => style.typography.h6,
      margin: "2rem auto 2rem 1rem",
    },
    redStrip: {
      width: "100%",
      height: "1rem",
      backgroundColor: (style: Theme & Props) => style.alert,
    },
    questionIcon: {
      width: "2rem",
      marginRight: "1rem",
      fill: "grey",
    },
  })
);

export default useStyles;
