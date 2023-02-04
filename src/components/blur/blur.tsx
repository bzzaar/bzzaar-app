import React from "react";
import useStyles from "./blurStyles";

export interface Props {
  locked: boolean;
}

function Blur(props: Props) {
  const classes = useStyles({ ...props });

  return <div className={classes.Blur}></div>;
}

export default React.memo(Blur);
