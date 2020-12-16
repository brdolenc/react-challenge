import { Typography } from '@material-ui/core';

import * as S from './styles';

const Logo = () => (
  <Typography component={S.TitleSpot} variant="h6">
    Spot
    <Typography component={S.TitleI}>i</Typography>
    <Typography component={S.TitleFood} variant="h6">Food</Typography>
  </Typography>
);

export default Logo;
