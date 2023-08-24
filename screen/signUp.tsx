import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, SafeAreaView, ScrollView, } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function signUp() {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./image/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.bodyView}>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.bodyText}>
              <Text style={styles.signUpText}>Register new account</Text>
              <Text>Please log in to your account</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput style={styles.textInput} placeholder='Your name*' />
            </View>
            <View style={styles.inputView}>
              <TextInput style={styles.textInput} placeholder='Password*' />
            </View>
            <View style={styles.inputView}>
              <TextInput style={styles.textInput} placeholder='Email*' />
            </View>
            <View style={styles.inputView}>
              <TextInput style={styles.textInput} placeholder='Phone number*' />
            </View>
            <View style={styles.checkBoxView}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                style={styles.checkBox}
              />
              <Text style={styles.checkBoxText}>By creating an account, you agree to 
                our {'\n'} Term and Conditions</Text>
            </View>
            <View style={styles.btnView}>
              <Pressable style={styles.signInBtn}>
                <Text style={styles.signInBtnText}>Sign Up</Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.footerText}>Don’t have an account? <Text style={styles.subText}>Sign In</Text></Text>
            </View>
            <View>
              <View style={styles.rectangleView}>
                <View style={styles.rectangle}></View>
                <Text style={styles.footerText}>Or continue with</Text>
                <View style={styles.rectangle}></View>
              </View>
            </View>
            <View style={styles.btnGorup}>
              <Pressable style={styles.appleButton}>
                <Image source={require('./image/apple.png')} style={styles.icon} />
              </Pressable>
              <Pressable style={styles.googleButton}>
                <Image source={require('./image/google.png')} style={styles.icon} />
              </Pressable>
              <Pressable style={styles.facbookButton}>
                <Image source={require('./image/facebook.png')} style={styles.facebookIcon} />
              </Pressable>
            </View>
          </View>
        </ScrollView>

      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkBox:{
    color:'#00FF00',
    marginHorizontal:16,
    marginVertical:5,
  },
  checkBoxText:{
    fontSize:14,
    fontWeight:'400',
    color:'#171725',
    marginVertical:5,
  },
  checkBoxView:{
    flexDirection:'row',
    marginHorizontal:15,
//  justifyContent:'center',
 alignItems:'center',
  },
  inputView: {
    marginLeft: 25,
    marginVertical: 10,
  },
  btnGorup: {
    flexDirection: 'row',
    paddingBottom: 25,
  },

  textInput: {
    width: 305,
    height: 52,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#E2E2EA',
    // marginHorizontal:20,
    padding: 20,

  },
  facebookIcon: {
    width: 9,
    height: 18,
  },
  subText: {
    color: '#FEBD2F',
    fontSize: 15,
    fontWeight: '400',
  },
  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    marginVertical: 15,
    marginHorizontal: 25,
    lineHeight: 7,
  },
  signInBtnText: {
    color: '#171725',
    fontSize: 15,
    fontWeight: '400',
  },

  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:5,
  },
  signInBtn: {
    width: 305,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEBD2F',
    borderRadius: 16,

  },
  rectangleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 50,
    height: 2,
    backgroundColor: '#F1F1F5',
    margin: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
    color: '#171725',
    padding: 13,
  },
  container: {
    flex: 1,
    backgroundColor: '#FEBD2F',


  },
  header: {
    backgroundColor: '#FdBD1F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appleButton: {
    width: 90,
    backgroundColor: '#171725',
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    // marginVertical:10,
    marginLeft: 33,
  },
  facbookButton: {
    width: 90,
    backgroundColor: '#3C66C3',
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginRight: 33,
    // marginHorizontal: 25,
  },
  googleButton: {
    width: 90,
    backgroundColor: '#CF4232',
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    // marginVertical: 10,
    marginHorizontal: 10,
  },
  logo: {
    width: 200,
    height: 200,
  },
  body: {
    width: 355,
    height: 610,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    // margin: 10,
    // justifyContent:'center',
    // alignItems:'center',
  },
  signUpText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '400',
  },
});
