import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable,SafeAreaView } from 'react-native';

export default function welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('./image/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.bodyView}>
                <View style={styles.body}>
                    <View style={styles.bodyText}>
                        <Text style={styles.welcomeText}>Welcome to Voyage</Text>
                        <Text>Live life with no excuses, travel with no regret</Text>
                    </View>
                    <Pressable style={styles.appleButton}>
                        <View style={styles.buttonView}>
                            <Image source={require('./image/apple.png')} style={styles.icon} />
                            <Text style={styles.text}>Sign in with Apple</Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.googleButton}>
                        <View style={styles.buttonView}>
                            <Image source={require('./image/google.png')} style={styles.icon} />
                            <Text style={styles.text}>Continue with Google</Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.facbookButton}>
                        <View style={styles.buttonView}>
                            <Image source={require('./image/facebook.png')} style={styles.facebookIcon} />
                            <Text style={styles.text}>Continue with Facebook</Text>
                        </View>
                    </Pressable>
                    <View>
                        <Text style={styles.footerText}>Continue as guest</Text>
                    </View>
                    <View>
                        <View style={styles.rectangleView}>
                            <View style={styles.rectangle}></View>
                            <Text>Or</Text>
                            <View style={styles.rectangle}></View>
                        </View>
                    </View>
                    <View style={styles.btnView}>
                        <Pressable style={styles.signInBtn}>
                            <Text style={styles.signInBtnText}>Sign In</Text>
                        </Pressable>
                        <Pressable style={styles.signUpBtn}>
                            <Text style={styles.signUpBtnText}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
    signUpBtnText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '400',
    },
    signUpBtn: {
        width: 145,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171725',
        borderRadius: 16,
        marginHorizontal: 0,
        marginLeft: 15,
    },
    btnView: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    signInBtn: {
        width: 145,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEBD2F',
        borderRadius: 16,
        // marginRight:25,
        marginLeft: 25,
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
        margin: 2,
    },
    footerText: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '400',
        color: '#171725',
        padding: 16,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookIcon: {
        width: 9,
        height: 18,
    },
    icon: {
        width: 20,
        height: 20,
    },
    facbookButton: {
        width: 305,
        backgroundColor: '#3C66C3',
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginHorizontal: 25,
    },
    googleButton: {
        width: 305,
        backgroundColor: '#CF4232',
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginVertical: 10,
        marginHorizontal: 25,
    },
    text: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '400',
        padding: 5,
    },
    appleButton: {
        width: 305,
        backgroundColor: '#171725',
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        // marginVertical:10,
        marginHorizontal: 25,
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
    logo: {
        width: 300,
        height: 300,
    },
    body: {
        width: 355,
        height: 437,
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
