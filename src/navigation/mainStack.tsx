import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {mainStack} from '~/configs/navigator';

import BottomTabs from './bottomTabs';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={mainStack.bottomTabs}>
      <Stack.Screen
        name={mainStack.bottomTabs}
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
