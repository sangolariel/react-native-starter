import React, {RefObject} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

import {IObject} from '~/types/common';

export const navigationRef:
  | RefObject<NavigationContainerRef<any>>
  | IObject<any> = React.createRef();
