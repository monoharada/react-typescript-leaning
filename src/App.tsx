import React from 'react';
import Counter from './Counter'
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string
  name?: number
  description?: string
}

const App: React.FC<AppProps> = ({ name, message, description }) => {
  return (
    <>
      <div>{message}React Starter Kit in TypeScript{name}</div>
      <div><Counter /></div>
      <div><CounterWithReducer /></div>

    </>
  );
};

App.defaultProps = {
  message: 'hello default ',
  name: 5,
  description: 'this is description'
}

export default App;
