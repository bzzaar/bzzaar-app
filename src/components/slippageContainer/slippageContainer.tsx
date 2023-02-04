import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../store/themeContext/themeContext';
import useStyles from './slippageContainerStyles';
import SlippageChip from '../slippageChip/slippageChip';
import ClickAwayListener from 'react-click-away-listener';
import { ReactComponent as InfoIcon } from '../../media/info-icon.svg';
import SlippageExplainer from '../slippageExplainer/slippageExplainer';
import { Transition } from 'react-transition-group';
import { transitionStyles, defaultStyle, duration } from './transitions';

export interface Props {
  slippageProps: {
    slippage: number;
    setSlippage: any;
    defaultSlippageOptions: Array<number>;
  };
}

function SlippageContainer(props: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [isHovering, setIsHovering] = useState(false);
  const classes = useStyles({ ...props, ...theme });
  const { slippage, setSlippage, defaultSlippageOptions } = props.slippageProps;

  const chips = defaultSlippageOptions.map((value: number) => (
    <SlippageChip
      key={value}
      clickFunction={setSlippage}
      isActive={value === slippage}
      value={value}
    />
  ));

  const handleInputChange = (e: any) => {
    setSlippage(e.target.value.replace(/[^0-9.]/g, '').replace(/^0+/, '') || 0);
  };

  const handleClickAway = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: any) => {
    const amount = parseFloat(e.target.value.replace(/[^0-9.]/g, '') || 0);

    if (e.key === 'Enter') {
      setSlippage(amount);
      setIsEditing(false);
    }
  };

  // const toggleHoverState = () => {
  //   setIsHovering(!isHovering);
  // };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div className={classes.slippageContainer}>
      <p className={classes.label}>Slippage</p>
      <div
        className={classes.iconContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <InfoIcon className={classes.icon} />
      </div>
      <Transition in={isHovering} timeout={duration} unmountOnExit>
        {(hoveringState: any) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[hoveringState],
            }}
          >
            <div className={classes.explainerContainer}>
              <SlippageExplainer></SlippageExplainer>
            </div>
          </div>
        )}
      </Transition>

      <div className={classes.chipContainer}>
        {chips}
        <div className={classes.inputContainer}>
          {isEditing ? (
            <ClickAwayListener onClickAway={handleClickAway}>
              <input
                className={`${classes.input} ${classes.active}`}
                type="text"
                value={slippage}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                data-type="input"
                autoFocus
              />
            </ClickAwayListener>
          ) : (
            <input
              className={classes.input}
              type="text"
              value={`${Number(slippage).toFixed(1)}%`}
              onClick={() => setIsEditing(true)}
              readOnly
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(SlippageContainer);
