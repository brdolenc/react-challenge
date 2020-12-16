import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';

import { Light, ThemeProvider } from '../../../themes';
import { Header } from '../../organisms';

import * as S from './styles';

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.themes.data);

  return (
    <ThemeProvider theme={theme || Light}>
      <S.GlobalStyle />
      <Header />
      <S.Main>
        <Container maxWidth="md">
          {children}
        </Container>
      </S.Main>
    </ThemeProvider>
  );
};

export default Layout;
