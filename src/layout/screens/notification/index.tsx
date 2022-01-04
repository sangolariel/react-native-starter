import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

const Notifications: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Notifications;
