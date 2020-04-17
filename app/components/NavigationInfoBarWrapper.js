import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import backArrow from './../assets/svgs/backArrow';
import fontFamily from '../constants/fonts';
import Colors from '../constants/colors';
import { isPlatformiOS } from './../Util';
import { SvgXml } from 'react-native-svg';
import infoIcon from '../assets/images/info.png';

class NavigationInfoBarWrapper extends React.Component {
  render() {
    return (
      <>
        <StatusBar
          barStyle='light-content'
          backgroundColor={Colors.VIOLET}
          translucent={isPlatformiOS()}
        />
        <SafeAreaView style={styles.topSafeAreaContainer} />
        <SafeAreaView style={styles.bottomSafeAreaContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backArrowTouchable}
              onPress={() => this.props.onBackPress()}>
              <SvgXml style={styles.backArrow} xml={backArrow} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{this.props.title}</Text>
          <TouchableOpacity
          style={styles.infoArrowTouchable}
          onPress={() => this.props.onInfoTapped()}>
          <Image style={styles.info} source={infoIcon} />
        </TouchableOpacity>
          </View>
          {this.props.children}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  topSafeAreaContainer: {
    flex: 0,
    backgroundColor: Colors.VIOLET,
  },
  bottomSafeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.INTRO_WHITE_BG,
  },
  headerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.NAV_BAR_VIOLET,
    backgroundColor: Colors.VIOLET,
  },
  headerTitle: {
    fontSize: 26,
    fontFamily: fontFamily.primaryMedium,
    color: Colors.WHITE,
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
    height:'85%'
  },
  backArrowTouchable: {
    width: 60,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backArrow: {
    height: 18,
    width: 18,
  },
  infoArrowTouchable: {
    width: '80%',
    alignContent:'center',
    justifyContent:'center',
    alignItems: 'flex-end',
    alignSelf: 'center',
    position: 'relative'
  },
  info: {
    height: 22,
    width: 22,
  },
});


NavigationInfoBarWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onInfoTapped: PropTypes.func.isRequired,
};

export default NavigationInfoBarWrapper;
