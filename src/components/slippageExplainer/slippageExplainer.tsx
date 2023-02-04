import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./slippageExplainerStyles";

function SlippageExplainer() {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...theme });

  return (
    <div className={classes.SlippageExplainer}>
      Slippage is the difference between the expected price of a trade and the
      price at which the trade is executed.
    </div>
  );
}
export default React.memo(SlippageExplainer);
