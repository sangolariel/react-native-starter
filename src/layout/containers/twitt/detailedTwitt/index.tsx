import React from 'react';
import {View, Image} from 'react-native';
import {
  Surface,
  Title,
  Caption,
  Avatar,
  Subheading,
  useTheme,
} from 'react-native-paper';
import color from 'color';
import styles from './style';
import {ThemeType} from '~/types/common';

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
};

export const DetailedTwitt = (props: Props) => {
  const theme: ThemeType = useTheme();

  const contentColor = color(theme.colors.text).alpha(0.8).rgb().string();

  const imageBorderColor = color(theme.colors.text).alpha(0.15).rgb().string();

  return (
    <Surface style={styles.container}>
      <View style={styles.topRow}>
        <Avatar.Image
          style={styles.avatar}
          source={{uri: props.avatar}}
          size={60}
        />
        <View>
          <Title>{props.name}</Title>
          <Caption style={styles.handle}>{props.handle}</Caption>
        </View>
      </View>
      <Subheading style={[styles.content, {color: contentColor}]}>
        {props.content}
      </Subheading>
      <Image
        source={{uri: props.image}}
        style={[
          styles.image,
          {
            borderColor: imageBorderColor,
          },
        ]}
      />
    </Surface>
  );
};
