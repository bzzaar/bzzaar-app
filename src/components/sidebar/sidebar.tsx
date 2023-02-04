import React, { useContext } from "react";
import useStyles from "./sidebarStyles";
import { ThemeContext } from "../../store/themeContext/themeContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <div className={classes.block}>{"*="}</div>
      <div className={classes.block}>{"*)"}</div>
      <div className={classes.block}>{"*>"}</div>
      <div className={classes.block}>{"*?"}</div>
      <div className={classes.block}>{"*@"}</div>
      <div className={classes.block}>{"*A"}</div>
      <div className={classes.block}>{"*B"}</div>
      <div className={classes.block}>{"*C"}</div>
      <div className={classes.block}>{"*D"}</div>
      <div className={classes.block}>{"=*"}</div>
      <div className={classes.block}>{"=="}</div>
      <div className={classes.block}>{"=)"}</div>
      <div className={classes.block}>{"=>"}</div>
      <div className={classes.block}>{"=?"}</div>
      <div className={classes.block}>{"=@"}</div>
      <div className={classes.block}>{"=A"}</div>
      <div className={classes.block}>{"=B"}</div>
      <div className={classes.block}>{"=C"}</div>
      <div className={classes.block}>{"=D"}</div>
      <div className={classes.block}>{")*"}</div>
      <div className={classes.block}>{")="}</div>
      <div className={classes.block}>{"))"}</div>
      <div className={classes.block}>{")>"}</div>
      <div className={classes.block}>{")?"}</div>
      <div className={classes.block}>{")@"}</div>
    </div>
  );
};

export default Sidebar;
