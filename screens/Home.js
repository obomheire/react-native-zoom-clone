import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import ContentsMenu from '../components/ContentsMenu'
import Header from '../components/Header'
import MenuButtons from '../components/MenuButtons'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{height: '100%'}}>
        <Header />
        <SearchBar />
        <MenuButtons />
        <ContentsMenu />
      </SafeAreaView>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        padding: 15
    }
})