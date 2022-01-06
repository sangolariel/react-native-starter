import React from 'react';
import {
  Animated,
  Image as RNImage,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import {IObject} from '~/types/common';

export interface Props {
  placeholderStyle?: IObject<any>;
  PlaceholderContent?: IObject<any>;
  containerStyle?: IObject<any>;
  style?: IObject<any>;
  ImageComponent?: any;
  [x: string]: any;
}

const Index: React.FC<Props> = ({
  placeholderStyle,
  PlaceholderContent,
  containerStyle,
  style,
  ImageComponent,
  ...attributes
}) => {
  const placeholderContainerOpacity = React.useRef(
    new Animated.Value(1),
  ).current;

  const onLoadEnd = () => {
    const minimumWait = 0;
    const staggerNonce = 5 * Math.random();
    setTimeout(
      () =>
        Animated.timing(placeholderContainerOpacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }).start(),
      minimumWait + staggerNonce,
    );
  };
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      {Platform.select({
        android: (
          <React.Fragment>
            <View style={styles.placeholderContainer}>
              <Animated.View
                testID="Image__placeholder"
                style={StyleSheet.flatten([
                  style,
                  styles.placeholder,
                  {
                    backgroundColor: placeholderContainerOpacity.interpolate({
                      inputRange: [0, 1],
                      outputRange: [
                        styles.placeholder.backgroundColor,
                        'transparent',
                      ],
                    }),
                  },
                  placeholderStyle,
                ])}>
                {PlaceholderContent}
              </Animated.View>
            </View>

            <ImageComponent {...attributes} style={style} />
          </React.Fragment>
        ),
        default: (
          <React.Fragment>
            <ImageComponent
              {...attributes}
              onLoadEnd={onLoadEnd}
              style={style}
            />

            <Animated.View
              style={StyleSheet.flatten([
                styles.placeholderContainer,
                {opacity: placeholderContainerOpacity},
              ])}>
              <View
                testID="Image__placeholder"
                style={StyleSheet.flatten([
                  style,
                  styles.placeholder,
                  placeholderStyle,
                ])}>
                {PlaceholderContent}
              </View>
            </Animated.View>
          </React.Fragment>
        ),
      })}
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
  placeholderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  placeholder: {
    backgroundColor: '#0E301A',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

Index.defaultProps = {
  ImageComponent: RNImage,
};

export {Index};
export default Index;
