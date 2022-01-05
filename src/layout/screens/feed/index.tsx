import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTheme} from 'react-native-paper';

import {Twitt} from '~/layout/containers/twitt';
import {twitts} from '~/mockData';
import {StackNavigatorParamlist} from '~/types/stackNavigator';

type TwittProps = React.ComponentProps<typeof Twitt>;

function renderItem({item}: {item: TwittProps}) {
  return <Twitt {...item} />;
}

function keyExtractor(item: TwittProps) {
  return item.id.toString();
}

type Props = {
  navigation?: NativeStackNavigationProp<StackNavigatorParamlist>;
};

const Feed = (props: Props) => {
  const theme = useTheme();

  const data = twitts.map((twittProps) => ({
    ...twittProps,
    onPress: () =>
      props.navigation &&
      props.navigation.push('DetailedTwitt', {
        ...twittProps,
      }),
  }));

  return (
    <FlatList
      contentContainerStyle={{backgroundColor: theme.colors.background}}
      style={{backgroundColor: theme.colors.background}}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{height: StyleSheet.hairlineWidth}} />
      )}
    />
  );
};

export default Feed;
