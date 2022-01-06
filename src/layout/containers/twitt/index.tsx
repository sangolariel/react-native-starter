import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  Surface,
  Title,
  Caption,
  Text,
  Avatar,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import color from 'color';
import styles from './style';

type Props = {
  id: number;
  name: string;
  handle: string;
  date: string;
  content: string;
  image: string;
  avatar: string;
  comments: number;
  retweets: number;
  hearts: number;
  onPress: (id: number) => void;
};

export const Twitt = (props: Props) => {
  const theme = useTheme();

  const contentColor = color(theme.colors.text).alpha(0.8).rgb().string();

  const imageBorderColor = color(theme.colors.text).alpha(0.15).rgb().string();

  return (
    <TouchableRipple onPress={() => props.onPress(props.id)}>
      <Surface style={styles.container}>
        <View style={styles.leftColumn}>
          <Avatar.Image source={{uri: props.avatar}} size={60} />
        </View>
        <View style={styles.rightColumn}>
          <View style={styles.topRow}>
            <Title>{props.name}</Title>
            <Caption style={styles.handle}>{props.handle}</Caption>
            <Caption style={[styles.handle, styles.dot]}>{'\u2B24'}</Caption>
            <Caption>{props.date}</Caption>
          </View>
          <Text style={{color: contentColor}}>{props.content}</Text>
          <Image
            source={{uri: props.image}}
            style={[
              styles.image,
              {
                borderColor: imageBorderColor,
              },
            ]}
          />
          <View style={styles.bottomRow}>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{top: 10, bottom: 10}}>
              <View style={styles.iconContainer}>
                <Caption style={styles.iconDescription}>
                  {props.comments}
                </Caption>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{top: 10, bottom: 10}}>
              <View style={styles.iconContainer}>
                <Caption style={styles.iconDescription}>
                  {props.retweets}
                </Caption>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{top: 10, bottom: 10}}>
              <View style={styles.iconContainer}>
                <Caption style={styles.iconDescription}>{props.hearts}</Caption>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Surface>
    </TouchableRipple>
  );
};
