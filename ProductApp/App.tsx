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

const App = () => {
  const [data, setData] = useState([]);

  async function logJSONData2() {
    const response = await fetch(
      'https://api.extrazone.com/promotions/list?Channel=PWA',
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
  }
  useEffect(() => {
    logJSONData2();
  }, []);

  return (
    <NavigationContainer>
      <PageContainer>
        <Head />
        <SideBar />
        <View style={{width: '80%', alignSelf: 'center'}}>
          <ProductPromotionCard product={data.length > 0 && data[1]} />
        </View>
        <Nav />
      </PageContainer>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
