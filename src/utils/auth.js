import { useSelector } from 'react-redux';

class Auth  {
  static HasLogged() {
    return useSelector((state) => state.Auth.logged);
  }
}

export default Auth;
