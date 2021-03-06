import React from 'react';
import color from 'color';
import {Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {useBaseHook} from '~/hooks';

import overlay from '~/utils/overlay';
import Feed from '~/layout/screens/feed';
import {AllNotifications} from '~/layout/containers/allNotifications';

import {ThemeType} from '~/types/common';

const initialLayout = {width: Dimensions.get('window').width};

const All = () => <AllNotifications />;

const Mentions = () => <Feed />;

const Notifications = () => {
  const {t} = useBaseHook();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'all', title: t('notification:all')},
    {key: 'mentions', title: t('notification:mentions')},
  ]);

  const theme: ThemeType = useTheme();

  const renderScene = SceneMap({
    all: All,
    mentions: Mentions,
  });

  const tabBarColor = theme.dark
    ? (overlay(4, theme.colors.surface) as string)
    : theme.colors.surface;

  const rippleColor = theme.dark
    ? color(tabBarColor).lighten(0.5)
    : color(tabBarColor).darken(0.2);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: theme.colors.primary}}
      style={{backgroundColor: tabBarColor, shadowColor: theme.colors.text}}
      labelStyle={{color: theme.colors.primary}}
      pressColor={rippleColor}
    />
  );

  return (
    <React.Fragment>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </React.Fragment>
  );
};

export default Notifications;
