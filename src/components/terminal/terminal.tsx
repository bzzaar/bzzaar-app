import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./terminalStyles";

function Terminal() {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles(theme);

  return (
    <div className={classes.Terminal}>
      <p className={classes.text}>{">"}</p>
    </div>
  );
}

export default React.memo(Terminal);
