import './App.css';
import mock_data from './ARTICLES.json'
import Dashboard from './pages/Dashboard';

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";

const ARTICLES = mock_data;

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      {/* <Dashboard articles={ARTICLES} /> */}
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
