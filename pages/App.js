import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";
import InboxScreen from "./components/InboxScreen";

store.subscribe(() =>
  window?.localStorage.setItem("tasks", JSON.stringify(store.getState()))
);

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
