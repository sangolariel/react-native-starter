import React, {RefObject} from 'react';
import {
  NavigationContainerRef,
  StackActions,
  TabActions,
} from '@react-navigation/native';

import {IObject} from '~/types/common';

export const navigationRef:
  | RefObject<NavigationContainerRef<any>>
  | IObject<any> = React.createRef();

export function navigate(name: string, params?: IObject<any>) {
  navigationRef.current?.navigate(name, params);
}

export function replace(name: string, params?: IObject<any>) {
  navigationRef?.current.dispatch(StackActions.replace(name, params));
}

export function nestedNavigate(
  parentName: string,
  name: string,
  params?: IObject<any>,
) {
  navigationRef.current?.navigate(parentName, {
    screen: name,
    params: params,
  });
}

export function goBack() {
  navigationRef?.current.goBack();
}

export function jumpTo(name: string, params?: IObject<any>) {
  const jumpToAction = TabActions.jumpTo(name, params);
  navigationRef?.current.dispatch(jumpToAction);
}
