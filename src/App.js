import './App.css';
import mock_data from './ARTICLES.json'
import Dashboard from './pages/Dashboard';

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  View,
} from "@aws-amplify/ui-react";

const ARTICLES = mock_data;

function App({ signOut }) {
  return (
    <View className="App">
      <Dashboard articles={ARTICLES} onClick={signOut} />
    </View>
  );
}

export default withAuthenticator(App);
