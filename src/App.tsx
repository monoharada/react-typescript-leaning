import React from 'react';

interface AppProps {
  message: string
  name?: number
}

const App = ({ message, name }: AppProps) => {
  return <div>{message}React Starter Kit in TypeScript{name}</div>;
};

export default App;
