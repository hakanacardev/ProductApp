import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import LoginButton from '../Atoms/LoginButton';
import Avatar from '../Atoms/Avatar';
import Logo from '../../assets/logo.svg';
import SideBarElement from '../Atoms/SideBarElement';
import Search from '../../assets/search.svg';
import AvatarSvg from '../../assets/avatar.svg';

const SideBar = () => {
  return (
    <View style={{marginTop: 50}}>
      <ScrollView
        horizontal
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}>
        <SideBarElement logo={<Search />} title={'Fırsatı Bul'} />
        <SideBarElement logo={<Search />} title={'Avatar'} />
        <SideBarElement logo={<Search />} title={'Fırsatı Bul'} />
        <SideBarElement logo={<Search />} title={'Avatar'} />
        <SideBarElement logo={<Search />} title={'Fırsatı Bul'} />
        <SideBarElement logo={<Search />} title={'Avatar'} />
      </ScrollView>
    </View>
  );
};
export default SideBar;

const styles = StyleSheet.create({
  scrollView: {
    width: 'auto',
    marginLeft: 16,
  },
  contentContainerStyle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
