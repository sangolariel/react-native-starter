import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Headline, Caption, useTheme, Button} from 'react-native-paper';

type Props = {
  navigation: BottomTabNavigationProp<{}>;
};
const Message = () => {
  const theme = useTheme();

  const backgroundColor = theme.colors.background;

  return (
    <ScrollView
      style={{backgroundColor}}
      contentContainerStyle={[styles.scrollViewContent, {backgroundColor}]}>
      <Headline style={styles.centerText}>
        Send a message, get a message
      </Headline>
      <Caption style={styles.centerText}>
        Private Messages are private conversations between you and other people
        on Twitter. Share Tweets, media, and more!
      </Caption>
      <Button
        onPress={() => {}}
        style={styles.button}
        mode="contained"
        labelStyle={styles.labelStyle}>
        Write a message
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
  labelStyle: {
    color: 'white',
  },
});

export default Message;
