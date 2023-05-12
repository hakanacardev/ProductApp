import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/colors';
const LoginButton = () => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.red,
        borderRadius: 20,
        alignItems: 'center',
        marginRight: 10,
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 12, textAlign: 'center', color: '#fff'}}>
        Giriş Yap
      </Text>
    </TouchableOpacity>
  );
};
export default LoginButton;
