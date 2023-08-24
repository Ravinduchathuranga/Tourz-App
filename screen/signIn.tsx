import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, SafeAreaView, ScrollView } from 'react-native';

export default function welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./image/logo.png')} style={styles.logo} />
      </View>

        <View style={styles.bodyView}>
          <ScrollView>
          <View style={styles.body}>
            <View style={styles.bodyText}>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text>Please log in to your account</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput style={styles.textInput} placeholder='Email or phone number' />
            </View>
            <View style={styles.inputView}>
              <TextInput style={styles.textInput} placeholder='Password' />
            </View>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
            <View style={styles.btnView}>
              <Pressable style={styles.signInBtn}>
                <Text style={styles.signInBtnText}>Sign In</Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.footerText}>Don’t have an account? <Text style={styles.subText}>Sign Up</Text></Text>
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
  inputView: {
    marginLeft: 25,
    marginVertical: 10,
  },
  btnGorup: {
    flexDirection: 'row',
    paddingBottom: 25,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#171725',
    marginVertical: 10,
    textAlign: 'right',
    marginRight: 33,
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
    marginVertical: 21,
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
  },
  signInBtn: {
    width: 305,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEBD2F',
    borderRadius: 16,
    // marginRight:25,
    // marginLeft: 25,
    // marginHorizontal: 25,
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
    width: 300,
    height: 300,
  },
  body: {
    width: 355,
    height: 475,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    margin: 10,
    // justifyContent:'center',
    // alignItems:'center',
  },
  welcomeText: {
    color: '#000000',
    fontSize: 24,
    // fontWeight:400,
  },
});
