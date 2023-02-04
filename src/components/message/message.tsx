import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./messageStyles";

export interface Props {
  message: string;
}

function Message(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dots === "...." ? setDots("") : setDots((dots) => dots + ".");
    }, 200);

    return () => clearInterval(interval);
  }, [dots]);

  return (
    <div className={classes.Message}>
      <p className={classes.messageText}>
        {props.message}
        <span className={classes.dots}>{dots}</span>
      </p>
    </div>
  );
}

export default React.memo(Message);
