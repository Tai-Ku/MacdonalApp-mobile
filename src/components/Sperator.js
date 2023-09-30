import React from 'react';
import {View} from 'react-native';

const Sperator = ({height = 0, width = 0, ...extraProps}) => {
  return <View style={{width, height, ...extraProps}} />;
};

export default Sperator;
