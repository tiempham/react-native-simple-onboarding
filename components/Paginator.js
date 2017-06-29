import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import PageDots from './PageDots';
import { SymbolButton, TextButton } from './Buttons';

const getDefaultStyle = (isLight) => ({
  color: isLight ? '#ff6619' : '#b2b2b2',
});

const SkipButton = ({ isLight, ...props }) => (
  <TextButton {...props} textStyle={getDefaultStyle(isLight)}>
    BỎ QUA
  </TextButton>
);

const NextButton = ({ isLight, ...props }) => (
  <TextButton textStyle={getDefaultStyle("#ff6619")} {...props}>
    TIẾP TỤC
  </TextButton>
);
const DoneButton = ({ isLight, size, ...props }) => (
  <SymbolButton {...props} size={size} textStyle={{color:'#ff6619'}} style={{ borderRadius: size / 2, backgroundColor: 'rgba(255, 255, 255, 0.10)' }}>
    ✓
  </SymbolButton>
);

const BUTTON_SIZE = 40;
const Paginator = ({ isLight, overlay, showSkip, showNext, showDone, pages, currentPage, onEnd, onNext }) => (
  <View style={{ ...styles.container, ...(overlay ? styles.containerOverlay : {}) }}>
    <View style={styles.buttonLeft}>
      {showSkip && currentPage + 1 !== pages ?
        <SkipButton isLight={isLight} size={BUTTON_SIZE} onPress={onEnd} /> :
        null
      }
    </View>
    <PageDots isLight={isLight} pages={pages} currentPage={currentPage} />
    <View style={styles.buttonRight}>
      {currentPage + 1 === pages ?
        (showDone ? <DoneButton isLight={isLight} size={BUTTON_SIZE} onPress={onEnd} /> : null) :
        (showNext ? <NextButton isLight={isLight} size={BUTTON_SIZE} onPress={onNext} /> : null)
      }
    </View>
  </View>
);

const styles = {
  container: {
    height: 60,
    paddingHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerOverlay: {
    backgroundColor: '#fff',
  },
  buttonLeft: {
    width: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonRight: {
    width: 80,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
};

export default Paginator;
