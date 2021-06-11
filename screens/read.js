import * as React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../db';

export default class Read extends React.Component {
  getDataTitle = async () => {};

  getDataAuthor = async () => {};

  getDataBody = async () => {};

  render() {
    return (
      <SafeAreaProvider style={{ backgroundColor: '#ffc0c2' }}>
        <Header
          centerComponent={{
            text: "READER'S PAGE",
            style: {
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'monospace',
              padding: 10,
            },
          }}
          backgroundColor="#0e3150"
        />
      </SafeAreaProvider>
    );
  }
}
