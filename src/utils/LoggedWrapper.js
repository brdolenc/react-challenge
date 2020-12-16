import { Redirect, withRouter } from 'react-router-dom';

import { HasLogged } from '.';

const LoggedWrapper = ({ children }) => {
  if (!HasLogged()) {
    return <Redirect to="/login" />;
  } 

  return children;
}

export default withRouter(LoggedWrapper);
