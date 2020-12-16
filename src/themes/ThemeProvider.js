import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import DarkTheme from './dark';

const Theme = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      brandPrimary: PropTypes.string,
      brandSecondary: PropTypes.string,
      background: PropTypes.string,
      primary: PropTypes.string,
      secondary: PropTypes.string,
      tertiary: PropTypes.string,
      actived: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
  children: PropTypes.node.isRequired,
};

Theme.defaultProps = { theme: DarkTheme };

export default Theme;
