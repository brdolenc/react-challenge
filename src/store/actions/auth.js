export const saveAuth = (auth) => ({
  type: 'SAVE_AUTH',
  auth,
});

export const purgeAuth = (auth) => ({
  type: 'PURGE_AUTH',
  auth,
});
