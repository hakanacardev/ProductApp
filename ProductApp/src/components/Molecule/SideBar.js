import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import SideBarElement from '../Atoms/SideBarElement';
import Search from '../../assets/search.svg';

const SideBar = () => {
  const [data, setData] = useState([]);
  async function logJSONData() {
    const response = await fetch('https://api.extrazone.com/tags/list', {
      method: 'get',
      headers: {
        'x-country-id': 'TR',
        'x-language-id': 'TR',
      },
    });
    const jsonData = await response.json();
    setData(jsonData);
  }
  useEffect(() => {
    logJSONData();
  }, []);
  return (
    <View style={{marginTop: 50}}>
      <ScrollView
        horizontal
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}>
        {data.length > 0 &&
          data.map(v => {
            return <SideBarElement logo={v?.IconUrl} title={v?.Name} />;
          })}
      </ScrollView>
    </View>
  );
};
export default SideBar;

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
