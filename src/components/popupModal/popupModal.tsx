import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./popupModalStyles";
import Overlay from "../overlay/overlay";

export interface Props {
  closeModal?: () => void;
  children?: React.ReactNode;
}

function PopupModal(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <Overlay handleClickAway={props.closeModal}>
      <div className={classes.PopupModal}>{props.children}</div>
    </Overlay>
  );
}

export default React.memo(PopupModal);
