import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image, Pressable, TextInput, SafeAreaView, ScrollView, } from 'react-native';


export default function start() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./image/startLogo.png')} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FEBD2F',
    justifyContent: 'center',
    alignItems:'center',

  },
  header: {
    backgroundColor: '#FdBD1F',
    alignItems: 'center',
    justifyContent: 'center',
  },


  logo: {
    width: 296,
    height: 358,
  },


});
