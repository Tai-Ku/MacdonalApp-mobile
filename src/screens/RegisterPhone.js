import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Sperator from '../components/Sperator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Color, CountryCode, Fonts} from '../constants';
import {Display} from '../untils';
import {StaticImageService} from '../services';
import FlagItem from '../components/FlagItem';

const getDropDown = y => ({...styles.countryDropdown, top: y + 60});

const RegisterPhone = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'Viet Nam'),
  );
  const [inputContainerY, setInputContainerY] = useState();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [dropDownLayout, setDropDownLayout] = useState(false);

  const closeDropDown = (pageX, pageY) => {
    if (isDropDownOpen) setIsDropDownOpen(false);
  };
  return (
    <SafeAreaView
      onStartShouldSetResponder={({nativeEvent: {pageX, pageY}}) =>
        closeDropDown(pageX, pageY)
      }>
      <View>
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
          <Text style={styles.headerTitle}>Login Into Food House</Text>
        </View>
      </View>
      <Text style={styles.title}>Register Phone</Text>

      <Text style={styles.content}>
        Enter your registered phone number to login
      </Text>

      <View
        style={styles.inputContainer}
        onLayout={({
          nativeEvent: {
            layout: {y},
          },
        }) => setInputContainerY(y)}>
        <TouchableOpacity
          style={styles.countryListContainer}
          onPress={() => setIsDropDownOpen(!isDropDownOpen)}>
          <Image
            source={{uri: StaticImageService.getFlagIcon(selectedCountry.code)}}
            style={styles.flatIcon}
          />
          <Text>{selectedCountry.dial_code}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} />
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput
            placeholder="Phone"
            placeholderTextColor={Color.DEFAULT_GREY}
            selectionColor={Color.DEFAULT_GREY}
            keyboardType="number-pad"
            style={styles.inputText}
          />
        </View>
      </View>
      {isDropDownOpen && (
        <View
          style={getDropDown(inputContainerY)}
          onLayout={({
            nativeEvent: {
              layout: {x, y, width, height},
            },
          }) => setDropDownLayout({y, x, width, height})}>
          <FlatList
            data={CountryCode}
            keyExtractor={item => item.code}
            renderItem={({item}) => (
              <FlagItem
                {...item}
                onPress={country => {
                  setSelectedCountry(country);
                  console.log(country);
                  setIsDropDownOpen(false);
                }}
              />
            )}
          />
        </View>
      )}
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
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 50,

    justifyContent: 'center',
  },
  countryListContainer: {
    backgroundColor: Color.LIGHT_GREY,
    width: Display.setWidth(22),
    height: Display.setHeight(6),
    marginRight: 10,
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: Color.LIGHT_GREY2,
    flexDirection: 'row',
  },
  phoneInputContainer: {
    backgroundColor: Color.LIGHT_GREY,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Color.LIGHT_GREY2,
    justifyContent: 'center',
    flex: 1,
  },
  flatIcon: {
    height: 20,
    width: 20,
  },
  countryCodeText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Color.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Color.DEFAULT_BLACK,
  },
  countryDropdown: {
    backgroundColor: Color.LIGHT_GREY,
    position: 'absolute',
    width: Display.setWidth(80),
    height: Display.setHeight(50),
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Color.LIGHT_GREY2,
    zIndex: 3,
  },
});

export default RegisterPhone;
