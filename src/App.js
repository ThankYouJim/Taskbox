import React, {useEffect} from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";
import InboxScreen from "./components/InboxScreen";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { fetchTasks } from "./lib/actions";

function App() {
  useEffect(() => {
    fetchTasks();
  })
  
  return (
    <Provider store={store}>
      <InboxScreen />
      {/* <AmplifySignOut /> */}
    </Provider>
  )
}

// export default withAuthenticator(App);
export default App;
