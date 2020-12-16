import { useState, useEffect } from 'react';

const usePersistedState = (key, defaultState) => {
  const [state, setState] = useState(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue) {
      return JSON.parse(savedValue);
    }

    return defaultState;
  });

  useEffect(() => {
    if (state) {
      localStorage.setItem(key, JSON.stringify(state));
    } else {
      localStorage.removeItem(key);
    }
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
