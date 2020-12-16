import { useSelector } from 'react-redux';

const HasLogged = () => useSelector((state) => state.Auth.logged);

export default HasLogged;
