import React from 'react';
import {View} from 'react-native';
import {
  Avatar,
  Caption,
  Switch,
  Text,
  Title,
  TouchableRipple,
  useTheme,
  Drawer,
} from 'react-native-paper';

import {useBaseHook} from '~/hooks';

import styles from './style';

import {PreferencesContext} from '~/contexts/preferencesContext';

import {ThemeType} from '~/types/common';

export default function ProfileContent() {
  const paperTheme: ThemeType = useTheme();
  const {theme, toggleTheme} = React.useContext(PreferencesContext);

  const {t} = useBaseHook();

  return (
    <View
      //@ts-ignore
      style={[
        styles.drawerContent,
        {
          backgroundColor: paperTheme.colors.background,
        },
      ]}>
      <View style={styles.userInfoSection}>
        <Avatar.Image
          source={{
            uri: 'https://haymora.com/upload/files/cong_nghe_thong_tin/2019/futurify/logo-cong-ty-futurify.jpg',
          }}
          size={50}
        />
        <Title style={styles.title}>Sang Nguyen</Title>
        <Caption style={styles.caption}>sangnh@futurify.vn</Caption>
      </View>
      <Drawer.Section>
        <TouchableRipple onPress={toggleTheme}>
          <View style={styles.preference}>
            <Text>{t('profile:switch_dark_theme')}</Text>
            <View pointerEvents="none">
              <Switch value={theme === 'dark'} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
}
