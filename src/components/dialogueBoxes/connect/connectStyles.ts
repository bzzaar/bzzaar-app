import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '../../../store/themeContext/themes';

const useStyles = makeStyles(() =>
  createStyles({
    Connect: {
      transition: (style: Theme) => style.transition,
      color: (style: Theme) => style.textColor,
      height: '100%',
      width: '100%',
    },
    container: {
      position: 'relative',
      padding: '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    infoIcon: {
      width: '2rem',
      stroke: 'var(--swarm-orange)',
      marginRight: '2rem',
    },
    title: {
      font: (style: Theme) => style.typography.h1,
    },
    paragraph: {
      font: (style: Theme) => style.typography.h4,
      margin: '4rem 0',
    },
    actionButton: {
      height: '6rem',
      width: '27rem',
      margin: '0 auto 3rem auto',
      borderRadius: '10rem',
      boxShadow: (style: Theme) => style.boxShadow1,
      transition: (style: Theme) => style.transition,
      color: (style: Theme) => style.textColor,
      backgroundColor: (style: Theme) =>
        style.name === 'dark' ? style.background3 : style.background2,
      font: (style: Theme) => style.typography.h6,
      border: (style: Theme) =>
        style.name === 'dark'
          ? `2px solid ${style.background4}`
          : `2px solid ${style.background1}`,
      borderLeft: 'none',
      '&:hover': {
        border: (style: Theme) => `1px solid ${style.highlightSecondary}`,
      },
    },
    orangeStrip: {
      width: '100%',
      height: '0.8rem',
      backgroundColor: (style: Theme) => style.highlightPrimary,
      margin: '0 0 auto 0',
    },
  })
);

export default useStyles;
