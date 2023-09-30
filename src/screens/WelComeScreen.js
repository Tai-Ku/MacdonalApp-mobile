import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Color, Fonts} from '../constants';
import {FlatList} from 'react-native-gesture-handler';
import General from '../constants/General';
import {WelcomeCard} from '../components';
import {Display} from '../assets/untils';
import Sperator from '../components/Sperator';

const pageStyle = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Color.DEFAULT_GREY};

const Pagination = ({index}) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        ),
      )}
    </View>
  );
};

const WelComeScreen = () => {
  const [welcomeIndex, setWelcomeIndex] = useState(0);
  const welcomeList = useRef();
  const overViewRef = useRef(({changed}) => {
    setWelcomeIndex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pageScroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeIndex < 2 ? welcomeIndex + 1 : welcomeIndex,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Sperator height={StatusBar.currentHeight} />
      <Sperator height={Display.setHeight(8)} />
      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeList}
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          pagingEnabled
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={overViewRef.current}
          renderItem={({item}) => <WelcomeCard {...item} />}
        />
      </View>
      <Sperator height={Display.setHeight(8)} />
      <Pagination index={welcomeIndex} />
      <Sperator height={Display.setHeight(8)} />
      {welcomeIndex === 2 ? (
        <TouchableOpacity
          style={styles.getStartedButton}
          activeOpacity={0.8}
          onPress={() => null}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => welcomeList.current.scrollToEnd()}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => pageScroll()}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      <Sperator height={Display.setHeight(8)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: Display.setHeight(60),
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Color.DEFAULT_GREEN,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Display.setWidth(90),
  },
  button: {
    backgroundColor: Color.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 16 * 1.4,
  },
  getStartedButton: {
    backgroundColor: Color.DEFAULT_GREEN,
    paddingVertical: 4,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
  },
  getStartedButtonText: {
    fontSize: 20,
    color: Color.DEFAULT_WHITE,
    lineHeight: 20 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});
export default WelComeScreen;
