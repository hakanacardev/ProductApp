import React from 'react';
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
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Head />
      </View>
      <View>
        <SideBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
