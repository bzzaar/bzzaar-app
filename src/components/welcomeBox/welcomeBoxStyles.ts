import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./welcomeBox";

const useStyles = makeStyles(() =>
  createStyles({
    info: {
      width: "64rem",
      height: "fit-content",
      padding: "3rem",
      paddingBottom: "4rem",
      position: "absolute",
      top: "calc(50% - 40rem)",
      left: "calc(50% - 32rem)",
      zIndex: 5,
      boxShadow: (style: Props & Theme) => style.boxShadow1,
      backgroundColor: (style: Props & Theme) => style.background3,
      transition: (style: Theme & Props) => style.transition,
      border: (style: Theme & Props) => `2px solid ${style.background4}`,
    },
    exitContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
    },
    link: {
      "&:hover": {
        color: (style: Theme & Props) => style.highlightPrimary,
      },
    },
    exit: {
      position: "relative",
      margin: "0 2rem 0 auto",
      fill: (style: Theme & Props) => style.textColor,
      width: "3.7rem",
      height: "3.7rem",
      padding: "1rem",
      bottom: -10,
      left: 0,
      alignSelf: "right",
      cursor: "pointer",
      "&:hover": {
        filter: "brightness(1.4)",
        fill: (style: Props & Theme) => style.highlightPrimary,
      },
    },
    heading: {
      margin: "2rem",
      font: (style: Theme & Props) => style.typography.h2,
      color: (style: Props & Theme) => style.textColor,
    },
    subtitle: {
      margin: "2rem",
      font: (style: Theme & Props) => style.typography.h4,
      color: (style: Props & Theme) => style.highlightPrimary,
    },
    paragraph: {
      margin: "2rem",
      font: (style: Theme & Props) => style.typography.p1,
      color: (style: Props & Theme) => style.textColor,
      overflow: "auto",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
    learnButton: {
      //   position: 'relative',
      //   bottom: 0,
      //   right: 0,
      //   right: -230,
      alignSelf: "right",
      width: "23rem",
      height: "5.5rem",
      margin: "auto 6rem auto 3rem",
      backgroundColor: (style: Theme & Props) => style.highlightPrimary,
      padding: "5px 10px",
      color: "var(--swarm-almost-white)",
      borderRadius: "100px",
      cursor: "pointer",
      font: (style: Props & Theme) => style.typography.h3.onOrange,
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
  })
);

export default useStyles;
