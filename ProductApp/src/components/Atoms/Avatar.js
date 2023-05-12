import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/colors';
import AvatarSvg from '../../assets/avatar.svg';

const Avatar = () => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        borderWidth: 2,
        backgroundColor: colors.black,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <AvatarSvg />
    </TouchableOpacity>
  );
};
export default Avatar;
