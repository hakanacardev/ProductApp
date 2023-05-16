import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import PageContainer from '../components/Templates/PageContainer';
import Head from '../components/Molecule/Head';
import SideBar from '../components/Molecule/SideBar';
import ProductPromotionCard from '../components/Molecule/ProductPromotionCard';
import Nav from '../components/Molecule/Nav';

const ProductPage = props => {
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
    console.log('jsonData', jsonData);
  }
  useEffect(() => {
    logJSONData2();
  }, []);
  return (
    <PageContainer>
      <Head />
      <SideBar />
      <View style={{width: '80%', alignSelf: 'center'}}>
        <ProductPromotionCard product={data.length > 0 && data[1]} />
      </View>
      <Nav />
    </PageContainer>
  );
};
export default ProductPage;
