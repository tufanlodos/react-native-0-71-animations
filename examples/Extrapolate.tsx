import React, {useRef} from 'react';
import {StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';

const Extrapolate = () => {
  const animation = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  };

  const scaleInterpolate = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 2],
  });

  const animatedStyles = {
    transform: [{scale: scaleInterpolate}],
  };

  return (
    <Animated.View style={[styles.container]}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 600,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export default Extrapolate;
