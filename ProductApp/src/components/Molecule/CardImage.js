import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import LoginButton from '../Atoms/LoginButton';
import Avatar from '../Atoms/Avatar';
import Logo from '../../assets/logo.svg';
import colors from '../../assets/colors';

const CardImage = props => {
  return (
    <View
      style={{
        width: '100%',
        position: 'relative',
      }}>
      <Image
        style={{
          width: '100%',
          borderRadius: 32,
          borderBottomLeftRadius: 160,
          overflow: 'hidden',
          aspectRatio: 1,
          resizeMode: 'contain',
        }}
        source={{uri: props.product.ImageUrl}}
      />
      <Image
        style={[
          {
            width: 120,
            height: 120,
            borderRadius: 100,
            borderWidth: 10,
            borderColor: colors.white,
            position: 'absolute',
            bottom: -32,
          },
        ]}
        source={{uri: props.product.BrandIconUrl}}
      />
      <Text
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          padding: 10,
          backgroundColor: colors.black,
          borderRadius: 22,
          color: colors.white,
        }}>
        {props.product.RemainingText}
      </Text>
    </View>
  );
};
export default CardImage;
