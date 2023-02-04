import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./tokenSwitcher";

const useStyles = makeStyles(() =>
  createStyles({
    TokenSwitcher: {
      backgroundColor: "transparent",
      transition: (style: Theme & Props) => style.transition,
    },
  })
);

export default useStyles;
