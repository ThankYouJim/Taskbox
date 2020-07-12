// import React, {useReducer, useContext} from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/InboxScreen';

// const MyContext = React.createContext();
// const MyProvider = MyContext.Provider;

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  )
}

export default App;
