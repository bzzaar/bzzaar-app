import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./transactionSwitch";

const useStyles = makeStyles(() =>
  createStyles({
    TransactionSwitch: {
      width: "5.5rem",
      height: "5.5rem",
      borderRadius: "50%",
      backgroundColor: (style: Theme & Props) => style.background3,
      border: (style: Theme & Props) => `1px solid ${style.background4}`,
      transition: (style: Theme & Props) => style.transition,
      display: "flex",
      "&:hover": {
        backgroundColor: (style: Theme & Props) => style.highlightPrimary,
        border: (style: Theme & Props) =>
          `1px solid ${style.highlightSecondary}`,
        "& $icon": {
          fill: "var(--swarm-almost-white)",
        },
      },
    },
    icon: {
      fill: (style: Theme & Props) => style.textColor,
      width: "2.5rem",
      height: "2.5rem",
      margin: "auto",
    },
  })
);

export default useStyles;
