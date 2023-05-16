import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/colors';
import Search from '../../assets/search.svg';
const SideBarElement = props => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        padding: 6,
        width: 150,
        height: 50,
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 3,
        borderColor: colors.border,
        marginRight: 5,
        borderRadius: 8,
      }}>
      <Image
        style={{width: '20%', resizeMode: 'contain', height: '50%'}}
        source={{uri: props.logo}}
      />
      <Text style={{marginLeft: 4}}> {props.title} </Text>
    </TouchableOpacity>
  );
};
export default SideBarElement;
