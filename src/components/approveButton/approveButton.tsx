import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./approveButtonStyles";

export interface Props {
  isActive: boolean;
  isGlowing: boolean;
}

function ApproveButton(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.ApproveButton}>
      <button disabled={!props.isActive} className={classes.wrap}>
        Approve
      </button>
    </div>
  );
}

export default React.memo(ApproveButton);
