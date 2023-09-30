import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Color, Fonts, Images} from '../constants';
import {Display} from '../assets/untils';

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
      <Image source={Images[image]} style={styles.image} />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DEFAULT_WHITE,
    width: Display.setWidth(100),
  },
  titleText: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  contentText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_LIGHT,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(30),
  },
});

export default WelcomeCard;
