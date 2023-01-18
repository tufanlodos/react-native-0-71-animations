import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const TimingAbsolute = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 30,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const animatedStyles = {
    top: animation,
    left: animation,
    right: animation,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'tomato',
    position: 'absolute',
    height: 150,
  },
});

export default TimingAbsolute;
