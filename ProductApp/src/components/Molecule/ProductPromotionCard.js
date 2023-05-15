import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import LoginButton from '../Atoms/LoginButton';
import Avatar from '../Atoms/Avatar';
import Logo from '../../assets/logo.svg';
import colors from '../../assets/colors';

const ProductPromotionCard = props => {
  const regex = /(<([^>]+)>)/gi;
  const result = props.product.Title.replace(regex, '');
  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 42,
      }}>
      <View
        style={{
          padding: 8,
          borderRadius: 42,
          borderWidth: 5,
          borderColor: colors.border,
          backgroundColor: colors.white,
        }}>
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
        <View style={{marginTop: 30, paddingHorizontal: 20,alignItems:'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold',alignItems:'center'}}>{result}</Text>
        </View>
      </View>
      <View
        style={[
          {
            width: '100%',
            height: 50,
            backgroundColor: props.product.PromotionCardColor,
            borderRadius: 42,
            height: 100,
            zIndex: -1,
          },
          {
            transform: [
              {rotateY: '3deg'},
              {rotateZ: '3deg'},
              {translateY: -80},
            ],
          },
        ]}
      />
    </View>
  );
};
export default ProductPromotionCard;
