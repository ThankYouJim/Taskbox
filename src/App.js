import React, {useReducer, useContext} from 'react';

import InboxScreen from './components/InboxScreen';

const MyContext = React.createContext();
const MyProvider = MyContext.Provider;

function App() {
  return (
    <MyProvider>
      <InboxScreen />
    </MyProvider>
  )
}

export default App;
