import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./transactionInput";

const useStyles = makeStyles(() =>
  createStyles({
    TransactionInput: {
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
    input: {
      width: "16.6rem",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      height: "3.3rem",
      margin: "auto 1rem 1rem 1rem",
      backgroundColor: "none",
      paddingLeft: "1rem",
      opacity: 0.5,
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.input,
      "&:hover": {
        opacity: (style: Theme & Props) => !style.disabled && 1,
      },
      "&:focus": {
        color: (style: Theme & Props) => style.highlightPrimary,
        opacity: 1,
      },
    },
  })
);

export default useStyles;
