import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./rollingPricesStyles";

export interface Props {
  DaiPrice: number;
  EthPrice: number;
}

function RollingPrices(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const [step, setStep] = useState(0);
  const { DaiPrice, EthPrice } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      step === 0 ? setStep(1) : setStep(0);
    }, 4000);

    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className={classes.RollingPrices}>
      {step === 0 && (
        <div className={classes.Rates}>
          <span className={classes.number}>{`${DaiPrice} `}</span>
          <span className={classes.text}>{`DAI / 1 BZZ`}</span>
        </div>
      )}
      {step === 1 && (
        <div className={classes.Rates}>
          <span className={classes.number}>{`${EthPrice} `}</span>
          <span className={classes.text}>{`ETH / 1 BZZ`}</span>
        </div>
      )}
    </div>
  );
}

export default React.memo(RollingPrices);
