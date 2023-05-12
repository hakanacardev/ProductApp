import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoginButton from '../Atoms/LoginButton';
import Avatar from '../Atoms/Avatar';
import Logo from "../../assets/logo.svg"

const Head = () => {
  return (
      <View
        style={{
          flexDirection: 'row',
          top: 40,
          marginHorizontal: 15,
          height: '25%',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Logo />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <LoginButton />
          <Avatar />
        </View>
      </View>
  );
};
export default Head;
