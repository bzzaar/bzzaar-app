import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '../../store/themeContext/themes';
import { Props } from './popupModal';

const useStyles = makeStyles(() =>
  createStyles({
    PopupModal: {
      backgroundColor: (style: Props & Theme) => style.background2,
      width: '60rem',
      minHeight: '37rem',
      zIndex: 7,
      margin: 'auto',
      overflow: 'hidden',
    },
  })
);

export default useStyles;
