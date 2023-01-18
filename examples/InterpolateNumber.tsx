import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const InterpolateNumber = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  };

  const animatedInterpolate = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 300, 0],
  });

  const interpolatedInterpolate = animatedInterpolate.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0.5],
  });

  const translateXInterpolate = animatedInterpolate.interpolate({
    inputRange: [0, 30, 50, 80, 100, 150, 299, 300],
    outputRange: [0, -30, -50, 80, -100, 300, 0, -100],
  });

  const animatedStyles = {
    transform: [
      {translateY: animatedInterpolate},
      {translateX: translateXInterpolate},
    ],
    opacity: interpolatedInterpolate,
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

export default InterpolateNumber;
