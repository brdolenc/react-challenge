import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import * as S from './styles';

const CardPlay = ({ link, image, name }) => {
  return (
    <S.CardCustom>
      <CardActionArea onClick={() => window.open(link, '_blank')}>
        <CardMedia
          component="img"
          alt={name}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton aria-label="play/pause" onClick={() => window.open(link, '_blank')}>
        <PlayArrowIcon />
      </IconButton>
    </S.CardCustom>
  );
}

export default CardPlay;
