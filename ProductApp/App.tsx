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

const App = () => {
  const [data, setData] = useState([]);
  const regex = /(<([^>]+)>)/gi;
  // const result = data.description.replace(regex, '');
  async function logJSONData() {
    const response = await fetch('https://api.extrazone.com/tags/list', {
      method: 'get',
      headers: {
        'x-country-id': 'TR',
        'x-language-id': 'TR',
      },
    });
    const jsonData = await response.json();
  }
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
    logJSONData();
    logJSONData2();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
