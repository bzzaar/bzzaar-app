import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { ReactComponent as Chevron } from "../../media/chevron-down-solid.svg";
import useStyles from "./tokenChipStyles";

export interface Props {
  collapsible: boolean;
  token: "ETH" | "DAI" | "BZZ";
  isActive?: boolean;
  openMenu?: boolean;
  clickFunction?: any;
}

function TokenChip(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const { clickFunction, token } = props;
  const handleClick = () => clickFunction && clickFunction(token);

  return (
    <div onClick={handleClick} className={classes.TokenChip}>
      <div className={classes.tokenIconContainer}>
        <img
          className={classes.tokenIcon}
          alt="tokenIcon"
          src={`./media/${props.token}.svg`}
        ></img>
      </div>
      <div className={classes.label}>{props.token}</div>
      <div className={classes.dropdownBtn}>
        {props.collapsible && props.isActive ? (
          <Chevron
            className={`${classes.chevron} ${props.openMenu && classes.rotate}`}
          />
        ) : null}
      </div>
    </div>
  );
}

export default React.memo(TokenChip);
