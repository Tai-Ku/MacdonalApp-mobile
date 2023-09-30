import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {Color} from '../constants';

const containerStyle = (size, isActive) => ({
  backgroundColor: isActive ? Color.DEFAULT_GREEN : Color.DEFAULT_GREY,
  height: 32 * size,
  width: 64 * size,
  borderRadius: 32,
  padding: 4 * size,
});

const toggleStyle = (size, animateValue) => ({
  height: 24 * size,
  width: 24 * size,
  borderRadius: 32,
  backgroundColor: Color.DEFAULT_WHITE,
  transform: [
    {
      translateX: animateValue,
    },
  ],
});
const ToggleButton = ({size}) => {
  const [isActive, setIsActive] = useState(false);
  const [animateValue, setAnimatedValue] = useState(new Animated.Value(0));

  const toggleHandle = () => {
    Animated.timing(animateValue, {
      toValue: isActive ? 0 : 32 * size,
      duration: 250,
      easing: Easing.bounce,
      delay: 0,
      useNativeDriver: true,
    });
    setIsActive(!isActive);
  };
  return (
    <TouchableOpacity
      onPress={() => toggleHandle()}
      style={containerStyle(size, isActive)}>
      <Animated.View style={toggleStyle(size, animateValue)} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.DEFAULT_GREEN,
    height: 32,
    width: 64,
    borderRadius: 32,
    padding: 4,
  },
  toggle: {
    height: 24,
    width: 24,
    borderRadius: 32,
    backgroundColor: Color.DEFAULT_WHITE,
  },
});

export default ToggleButton;
