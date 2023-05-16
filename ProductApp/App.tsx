import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Head from './src/components/Molecule/Head';
import SideBar from './src/components/Molecule/SideBar';
import SideBarElement from './src/components/Atoms/SideBarElement';
import ProductPromotionCard from './src/components/Molecule/ProductPromotionCard';
import Nav from './src/components/Molecule/Nav';
import PageContainer from './src/components/Templates/PageContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductPage from './src/pages/ProductPage';
import ProductDetail from './src/pages/ProductDetail';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductPage"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
