import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./modalBalance";

const useStyles = makeStyles(() =>
  createStyles({
    ModalBalance: {
      backgroundColor: (style: Props & Theme) => style.background2,
      transition: (style: Theme & Props) => style.transition,
      width: "20.6rem",
      height: "10.2rem",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    heading: {
      font: (style: Theme & Props) => style.typography.p1,
      color: (style: Theme & Props) => style.textColor,
      margin: "1rem auto auto 1rem",
    },
    balance: {
      width: "16.6rem",
      paddingLeft: "1rem",
      height: "3.3rem",
      margin: "auto 1rem 1rem 1rem",
      backgroundColor: "none",
      opacity: 0.5,
      textOverflow: "ellipsis",
      overflow: "hidden",
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.input,
    },
  })
);

export default useStyles;
