import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const setHeight = h => (height / 100) * h;
const setWidth = w => (width / 100) * w;
console.log(setWidth(20), setHeight(20));

export default {setHeight, setWidth};
