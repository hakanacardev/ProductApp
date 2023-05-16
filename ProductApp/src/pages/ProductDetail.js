import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import colors from '../assets/colors';

const ProductDetail = props => {
  console.log('props?', props.route.params?.productId);
  const [data, setData] = useState({});
  async function ProductDetailRequest() {
    const response = await fetch(
      `https://api.extrazone.com/promotions/?Id=${props.route.params?.productId}`,
      {
        method: 'get',
        headers: {
          'x-country-id': 'TR',
          'x-language-id': 'TR',
        },
      },
    );
    const jsonData = await response.json();
    setData(jsonData);
    console.log('jsonData', jsonData);
  }
  useEffect(() => {
    if (props.route.params?.productId) {
      ProductDetailRequest();
    }
  }, [props.route.params?.productId]);
  const regex = /(<([^>]+)>)/gi;
  const resultTitle = data?.Title?.replace(regex, '');
  const resultP = data?.Description?.replace(regex, '');
  return (
    <>
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
            source={{uri: data?.ImageUrl}}
          />
          <Image
            style={[
              {
                width: 100,
                height: 100,
                borderRadius: 100,
                borderWidth: 10,
                borderColor: colors.white,
                position: 'absolute',
                bottom: -32,
              },
            ]}
            source={{uri: data?.BrandIconUrl}}
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
            {data?.RemainingText}
          </Text>
        </View>
        <View
          style={{marginTop: 30, paddingHorizontal: 20, alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
            {resultTitle}
          </Text>
        </View>
      </View>
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text>{resultP}</Text>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          width: '90%',
          bottom: 10,
          padding: 10,
          backgroundColor: colors.red,
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 16,
        }}>
        <Text style={{color: colors.white, fontSize: 20}}>
          {data?.DetailButtonText}
        </Text>
      </TouchableOpacity>
    </>
  );
};
export default ProductDetail;
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
