import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/colors';
import Compass from '../../assets/compass.svg';
import Star from '../../assets/star.svg';
import Plus from '../../assets/plus.svg';
const Nav = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        bottom: 0,
        position: 'absolute',
        backgroundColor: colors.bg,
        width: '100%',
        height: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        zIndex: -1,
        elevation: 1,
        overflow:'visible'
      }}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Compass />
        <Text>Keşfet</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          zIndex: 1000,
        }}>
        <Plus />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Star />
        <Text>Keşfet</Text>
      </View>
    </View>
  );
};
export default Nav;
