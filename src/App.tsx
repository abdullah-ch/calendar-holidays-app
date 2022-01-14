import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

// import styles from './App.module.css';
import WorldCalendar from './components/WorldCalendar';
import Selector from './components/Selector';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Selector />
        <WorldCalendar />
      </Provider>
    </div>
  );
};

export default App;
