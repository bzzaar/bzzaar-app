import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./toastMessageStyles";

export interface Props {
  message: string;
}

function ToastMessage(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.ToastMessage}>
      <p className={classes.message}>{props.message}</p>
    </div>
  );
}

export default React.memo(ToastMessage);
