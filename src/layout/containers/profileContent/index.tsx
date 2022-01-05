import React from 'react';
import {StyleSheet, View} from 'react-native';
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

import {PreferencesContext} from '~/contexts/preferencesContext';

export default function ProfileContent() {
  const paperTheme = useTheme();
  const {theme, toggleTheme} = React.useContext(PreferencesContext);

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
            <Text>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={theme === 'dark'} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 60,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  sections: {
    paddingTop: 25,
  },
});
