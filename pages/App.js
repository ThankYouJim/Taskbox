import React, {useEffect} from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";
import InboxScreen from "./components/InboxScreen";

import { fetchTasks } from "./lib/actions";

function App() {
  useEffect(() => {
    fetchTasks();
  })
  
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  )
}

export default App;
