import { Redirect, withRouter } from 'react-router-dom';

import { Auth } from '.';

const LoggedWrapper = ({ children }) => {
  if (!Auth.HasLogged()) {
    return <Redirect to="/login" />;
  } 

  return children;
}

export default withRouter(LoggedWrapper);
