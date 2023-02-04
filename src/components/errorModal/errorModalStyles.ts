import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '../../store/themeContext/themes';

const useStyles = makeStyles(() =>
  createStyles({
    modal: {
      transition: (style: Theme) => style.transition,
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: -20,
      left: 0,
      zIndex: 5,
    },
    networkName: {
      textTransform: 'capitalize',
      fontWeight: 'bold',
    },
    overlay: {
      backgroundColor: 'black',
      opacity: 0.3,
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    modalContainer: {
      backgroundColor: (style: Theme) => style.background2,
      boxShadow: (style: Theme) => style.boxShadow1,
      width: '80rem',
      height: 'auto',
      margin: 'auto',
      padding: '5rem',
      zIndex: 6,
      position: 'relative',
      top: '-17rem',
    },
    index: {
      position: 'absolute',
      top: 0,
      left: 0,
      background: (style: Theme) => style.alert,
      height: '1rem',
      width: '100%',
    },
    header: {
      font: (style: Theme) => style.typography.h2,
      color: (style: Theme) => style.textColor,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '1rem 0 0 2.5rem',
    },
    content: {
      font: (style: Theme) => style.typography.h2,
      color: (style: Theme) => style.textColor,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '1.5rem 0 0 1rem',
    },
    subheader: {
      margin: '1rem 0 1rem 7.5rem',
      color: (style: Theme) => style.textColor,
      fontSize: '1.6rem',
    },
    dropdown: {
      display: 'flex',
      flexDirection: 'column',
      margin: '1rem 0 1rem 3rem',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    smallContent: {
      font: (style: Theme) => style.typography.h6,
      color: (style: Theme) => style.textColor,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '1.5rem 0 0 1rem',
    },
    info: {
      width: '2.5rem',
      margin: '0 1rem',
      fill: (style: Theme) => style.textColor,
    },
    icon: {
      display: 'flex',
    },
    chevron: {
      height: '3rem',
      width: '3rem',
      transitionDuration: '200ms',
      color: (style: Theme) => style.textColor,
      '&.rotate': {
        transform: 'rotate(180deg)',
        transitionDuration: '200ms',
      },
    },
    redDot: {
      margin: '0 1rem',
      padding: '1rem',
      borderRadius: '1rem',
      backgroundColor: (style: Theme) => style.alert,
    },
  })
);

export default useStyles;
