import React from 'react';

const authConstant = React.createContext({
  authenticated: false,
  login: () => {},
});

export default authConstant;
