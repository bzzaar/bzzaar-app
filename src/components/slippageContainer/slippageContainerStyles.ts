import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '../../store/themeContext/themes';
import { Props } from './slippageContainer';

const useStyles = makeStyles(() =>
  createStyles({
    slippageContainer: {
      width: '100%',
      height: '5rem',
      margin: 'auto 0 0 0',
      backgroundColor: 'transparent',
      transition: (style: Theme & Props) => style.transition,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    label: {
      margin: 'auto 1rem',
      font: (style: Theme & Props) => style.typography.p1,
      color: (style: Theme & Props) => style.textColor,
    },
    chipContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: (style: Theme & Props) => style.textColor,
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '5rem',
      height: '2.6rem',
      borderRadius: '20px',
      margin: 'auto',
      color: (style: Theme & Props) => style.highlightPrimary,
    },
    input: {
      color: 'inherit',
      font: (style: Theme & Props) => style.typography.highlight,
      width: '100%',
      height: '2.6rem',
      margin: 'auto',
      textAlign: 'center',
      opacity: 0.8,
      cursor: 'pointer',
      '&:hover': {
        opacity: 1,
      },
    },
    iconContainer: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 1rem 0 0',
    },
    icon: {
      margin: 'auto',
      fill: (style: Theme & Props) => style.textColor,
      stroke: (style: Theme & Props) => style.textColor,
      width: '2rem',
      height: '3rem',
    },
    explainerContainer: {
      position: 'relative',
      opacity: 1,
    },
    active: {
      opacity: 1,
    },
  })
);

export default useStyles;
