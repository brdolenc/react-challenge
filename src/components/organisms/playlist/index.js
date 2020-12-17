import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SpotiFy from '../../../services/spotify';
import { CardPlay } from '../../molecules';
import { purgeAuth } from '../../../store/actions/auth';
import { changeFilter } from '../../../store/actions/filter';

import * as S from './styles';

const Playlist = () => {
  const [ playlists, setPlaylists ] = useState([]);
  const [ originalPlaylists, setOriginalPlaylists ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  const { token, tokenType }  = useSelector((state) => state.Auth);
  const filterValues = useSelector((state) => state.Filter);

  const dispatch = useDispatch();
  const history = useHistory();

  const purgerAuthUser = () => dispatch(purgeAuth());

  const getPlaylists = async (filter = false) => {
    const response = await SpotiFy.getPlaylists(tokenType, token, filter);

    if (response.status === 200) {
      return response.data.playlists.items;
    } else if (response.status === 401) {
      purgerAuthUser();
      history.push('/login');
    }

    return null;
  }

  useEffect( async () => {
    const dataPlaylists = await getPlaylists();

    if (!dataPlaylists) {
      setError(true);
    } else {
      filterTextPlaylist(dataPlaylists);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    filterTextPlaylist(originalPlaylists);
    filterPlayList();
  }, [filterValues]);

  const filterTextPlaylist = (dataPlaylists) => {
    let dataSave = dataPlaylists;

    setOriginalPlaylists(dataSave);

    if (filterValues.text) {
      dataSave = dataPlaylists.filter((playlist) =>
        playlist.name.toLowerCase().includes(filterValues.text.toLowerCase())
      );
    } 
    
    setPlaylists(dataSave);
  }

  const filterPlayList = async () => {
    if (filterValues.hasFilter) {
      setLoading(true);

      const dataPlaylists = await getPlaylists(filterValues.advancedFilter);

      if (!dataPlaylists) {
        setError(true);
      } else {
        setOriginalPlaylists(dataPlaylists);
        setPlaylists(dataPlaylists);
      }

      const filter = {
        text: filterValues.text,
        advancedFilter: filterValues.advancedFilter,
        hasFilter: false
      }

      dispatch(changeFilter(filter));
      setLoading(false);
    }
  }

  return (
    <>
      {loading ?
          <S.ProgressCustom />
        :
        error ?
          <Alert severity="error">Não foi possível retornar as playlists!</Alert>
        : 
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          > 
            {playlists.length > 0 ?
              playlists.map((playlist) => {
                return (
                  <Grid key={playlist.name}>
                    <CardPlay 
                      name={playlist.name}
                      link={playlist.external_urls.spotify}
                      image={playlist.images[0].url}
                    />
                  </Grid>
                )
              })
              :
              <Typography component="p">
                Nenhum resultado encontrado!
              </Typography>
            }
          </Grid>
      }
    </>
  );
}

export default Playlist;
