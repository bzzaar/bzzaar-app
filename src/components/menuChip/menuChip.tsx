import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./menuChipStyles";

export interface Props {
  clickFunction?: any;
  label: string;
}

function MenuChip(props: Props) {
  const { clickFunction, label } = props;
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const handleClick = () => clickFunction && clickFunction();

  return (
    <div className={classes.MenuChip}>
      <button onClick={handleClick} className={classes.button}>
        <p className={classes.text}>{label}</p>
      </button>
    </div>
  );
}

export default React.memo(MenuChip);
