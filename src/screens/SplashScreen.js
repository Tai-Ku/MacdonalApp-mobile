import {Text, View, StatusBar, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Color, Fonts, Images} from '../constants';
import {Display} from '../assets/untils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 300);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.DEFAULT_GREEN}}>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <Image
          source={Images.PLATE}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.titleText}>FoodDelivery</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DEFAULT_GREEN,
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    color: Color.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_B,
  },
});
export default SplashScreen;
