import {CLIENT_TOKEN} from 'config';
import {Router} from 'containers';
import {setAuthorizationToken} from 'myModule';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createMockServer} from './mockServer/MockServer';

const App = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setAuthorizationToken(CLIENT_TOKEN);
    createMockServer();
    setTimeout(() => {
      setReady(true);
    }, 200);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {ready ? <Router /> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
