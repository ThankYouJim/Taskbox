import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';
import InboxScreen from './components/InboxScreen';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
      <AmplifySignOut />
    </Provider>
  )
}

export default withAuthenticator(App);
