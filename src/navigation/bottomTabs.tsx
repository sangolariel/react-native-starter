/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as tabs from '~/navigation/tabs';

import {tabsSetting} from '~/configs/navigator';

import * as TabsIcon from '~/layout/svg/bottomTab';

import {IObject} from '~/types/common';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {i18n} = useTranslation();
  const theme: IObject<any> = useTheme();

  const lang: string = i18n.language;
  const backBehavior = 'initialRoute';

  const {initialRouteName, headerShown} = tabsSetting.configs;

  const {tabsNavigator} = tabsSetting;

  const listTabs: IObject<any> = tabs;
  const tabbarIcons: IObject<any> = TabsIcon;

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      backBehavior={backBehavior}
      sceneContainerStyle={{
        backgroundColor: theme.colors.bgColor,
      }}
      screenOptions={{
        headerShown,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colors.background,
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}>
      {tabsNavigator.map((tab: IObject<any>, _i: number) => {
        const TabBarIcon = tabbarIcons[tab.option.tabBarIcon];
        if (!Object.keys(listTabs).includes(tab.screen)) {
          return null;
        }
        return (
          <Tab.Screen
            key={'tabs' + tab.screen}
            name={tab.screen}
            component={listTabs[tab.screen]}
            options={{
              tabBarIcon: ({focused, color}) => {
                return <TabBarIcon width={20} height={24} color={color} />;
              },
              title: tab.name[lang],
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;
