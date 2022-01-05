import React from 'react';
import {RouteProp} from '@react-navigation/native';

import {DetailedTwitt} from '~/layout/containers/twitt/detailedTwitt';

import {StackNavigatorParamlist} from '~/types/stackNavigator';

type Props = {
  route: RouteProp<StackNavigatorParamlist, 'DetailedTwitt'>;
};

const Details = (props: Props) => {
  return <DetailedTwitt {...props.route.params} />;
};

export default Details;
