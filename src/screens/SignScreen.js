import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Color, Fonts, Images} from '../constants';
import {TextInput} from 'react-native-gesture-handler';
import Sperator from '../components/Sperator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Display} from '../untils';
import {ToggleButton} from '../components';
const SignScreen = ({navigation}) => {
  const [isPassWord, setIsPassWord] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Color.DEFAULT_WHITE}
        translucent
      />
      <Sperator height={2} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Sign In</Text>
      </View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.content}>
        Enter your username and password, and enjoy ordering food
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            size={22}
            color={Color.DEFAULT_GREY}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Color.DEFAULT_GREY}
            selectionColor={Color.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <Sperator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            size={22}
            color={Color.DEFAULT_GREY}
            style={{marginRight: 10}}
          />
          <TextInput
            secureTextEntry={isPassWord ? true : false}
            placeholder="Password"
            placeholderTextColor={Color.DEFAULT_GREY}
            selectionColor={Color.DEFAULT_GREY}
            style={styles.inputText}
          />
          <Feather
            name={`${!isPassWord ? 'eye' : 'eye-off'}`}
            size={22}
            color={Color.DEFAULT_GREY}
            style={{marginRight: 10}}
            onPress={() => setIsPassWord(prev => !prev)}
          />
        </View>
      </View>

      <Text></Text>
      <View style={styles.forgotPasswordContainer}>
        <View style={styles.toggleContainer}>
          <ToggleButton size={0.5} />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </View>
      <TouchableOpacity
        // onPress={() => signIn()}
        style={styles.signinButton}
        activeOpacity={0.8}>
        <Text style={styles.signinButtonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text>Sign Up</Text>
      </View>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>
            Connect with Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>Connect with Google</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: Color.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Color.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Color.DEFAULT_BLACK,
    flex: 1,
  },
  forgotPasswordContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Color.DEFAULT_GREY,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  forgotPasswordText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Color.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  signinButton: {
    backgroundColor: Color.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Color.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Color.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Color.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Color.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
    alignSelf: 'center',
  },
  facebookButton: {
    backgroundColor: Color.FABEBOOK_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: Color.GOOGLE_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonLogo: {
    height: 18,
    width: 18,
  },
  signinButtonLogoContainer: {
    backgroundColor: Color.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: 'absolute',
    left: 25,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialSigninButtonText: {
    color: Color.DEFAULT_WHITE,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Color.DEFAULT_RED,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginHorizontal: 20,
    marginTop: 3,
    marginBottom: 10,
  },
});
export default SignScreen;
