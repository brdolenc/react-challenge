import { useState, useEffect } from "react";
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { Layout } from '../../templates';
import { saveAuth } from '../../../store/actions/auth';
import { Helpers, Auth } from '../../../utils';
import SpotiFy from '../../../services/spotify';

import * as S from './styles';

const env = process.env;

const Login = () => {
  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    setLoading(true);

    const urlApi = `${env.REACT_APP_SP_API_AUTH}/authorize?client_id=${env.REACT_APP_SP_API_CLIENT_ID}&redirect_uri=${env.REACT_APP_SP_API_REDIRECT_URI}&scope=user-read-private%20user-read-email&response_type=token`;
    window.open(urlApi, '_self');
  }

  useEffect( async () => {
    const query = Helpers.getQueryStringParams();

    if (query.token_type && query.access_token) {
      setLoading(true);

      const getProfile = await SpotiFy.getProfile(query.token_type, query.access_token);

      setLoading(false);

      if (getProfile.status === 200) {
        const dataAuth = {
          token: query.access_token,
          tokenType: query.token_type,
          ...getProfile.data
        }

        dispatch(saveAuth(dataAuth));
        history.push('/home');
      } else {
        setErrorLogin(true);
      }
    }
  }, []);

  if (Auth.HasLogged()) {
    return (<Layout><Alert severity="warning">Você já está logado!</Alert></Layout>);
  }

  return (
    <Layout>
      {errorLogin && <Alert severity="error">Não foi possível realizar o login!</Alert>}

      {!loading ? (
        <S.ButtonCustom
          size="large"
          startIcon={<ExitToAppTwoToneIcon />}
          onClick={_ => handleLogin()}
        >
          Login com SpotiFy
        </S.ButtonCustom>
      ) : <S.ProgressCustom />}
    </Layout>
  );
}

export default Login;
