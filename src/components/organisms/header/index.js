import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";

import { Light, Dark } from '../../../themes';
import { changeTheme } from '../../../store/actions/themes';
import { SelectGroup } from '../../molecules';
import { Logo } from '../../atoms';
import { Auth } from '../../../utils';
import { purgeAuth } from '../../../store/actions/auth';

import * as S from './styles';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const registerThemes = [
    { name: 'Light', theme: Light },
    { name: 'Dark', theme: Dark }
  ];

  const dispatch = useDispatch();
  const history = useHistory();

  const purgerAuthUser = () => dispatch(purgeAuth());

  const logout = () => {
    purgerAuthUser();
    history.push('/login');
  }

  const { name: profileName, images: profileImage } = useSelector((state) => state.Auth);

  return (
    <S.Header>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid>
          {!Auth.HasLogged() ? <Avatar><PersonIcon /></Avatar> : <Avatar alt={ profileName } src={ profileImage[0] ? profileImage[0].url : '' } /> }
        </Grid>
        <Grid>
          <Logo />
        </Grid>
        <Grid>
        <IconButton edge="start"  color="inherit" aria-label="menu" onClick={() => setOpenDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <List>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon><CloseIcon /></ListItemIcon>
              <ListItemText primary="Fechar" />
            </ListItem>
            <Divider />
            {Auth.HasLogged() && (
              <ListItem button onClick={() => logout()}>
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            )}
            <Divider />
            <ListItem>
              <SelectGroup list={registerThemes} handleChange={(e) => { dispatch(changeTheme(e.theme)); }} />
            </ListItem>
          </List>
        </Drawer>
        </Grid>
      </Grid>
    </S.Header>
  );
};

export default Header;
