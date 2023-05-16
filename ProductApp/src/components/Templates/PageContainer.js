import React from 'react';
import {SafeAreaView, View} from 'react-native';

const PageContainer = props => {
  return <SafeAreaView style={{flex: 1}}>{props.children}</SafeAreaView>;
};
export default PageContainer;
