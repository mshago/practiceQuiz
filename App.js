import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Quiz from './src/components/quiz';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Quiz />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default App;
