/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Surface, Text, Avatar, useTheme} from 'react-native-paper';
import color from 'color';
import styles from './style';

type Props = {
  id: number;
  name: string;
  content: string;
  people: Array<{
    name: string;
    image: string;
  }>;
};

export const NotificationTwitt = (props: Props) => {
  const theme = useTheme();

  const contentColor = color(theme.colors.text).alpha(0.8).rgb().string();

  return (
    <Surface style={styles.container}>
      <View style={styles.leftColumn} />
      <View style={styles.rightColumn}>
        <View style={styles.topRow}>
          {props.people.map(({name, image}) => (
            <Avatar.Image
              style={{marginRight: 10}}
              key={name}
              source={{uri: image}}
              size={40}
            />
          ))}
        </View>
        <Text style={{marginBottom: 10}}>
          {props.people.map(({name}) => name).join(' and ')} likes {props.name}{' '}
          tweet.
        </Text>
        <Text style={{color: contentColor}}>{props.content}</Text>
      </View>
    </Surface>
  );
};
