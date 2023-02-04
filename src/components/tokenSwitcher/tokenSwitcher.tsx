import React, { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./tokenSwitcherStyles";
import TokenChip from "../tokenChip/tokenChip";

export interface Props {
  setToken: (token: string) => void;
  setAmount: ({ amount, currency }) => void;
  amount: any;
  activeToken: string;
  disabled: boolean;
}

function TokenSwitcher(props: Props) {
  const { theme } = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => setOpenMenu(!openMenu);

  const clickFunction = (token: string) => {
    toggleOpenMenu();
    props.setToken(token);
    props.setAmount({ amount: props.amount, currency: token });
  };

  const classes = useStyles({ ...props, ...theme });

  return (
    <button
      onClick={!openMenu ? toggleOpenMenu : undefined}
      className={classes.TokenSwitcher}
      disabled={props.disabled}
    >
      <TokenChip
        clickFunction={clickFunction}
        token={"DAI"}
        collapsible
        isActive={props.activeToken === "DAI"}
        openMenu={openMenu}
      />
      <TokenChip
        clickFunction={clickFunction}
        token={"ETH"}
        collapsible
        isActive={props.activeToken === "ETH"}
        openMenu={openMenu}
      />
    </button>
  );
}

export default React.memo(TokenSwitcher);
