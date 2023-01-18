import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Modulo = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(animation, {
        toValue: 12,
        duration: 3500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const randomValue = 3;
  const newAnimation = Animated.modulo(animation, randomValue);

  const interpolated = newAnimation.interpolate({
    inputRange: [0, 3],
    outputRange: ['0deg', '270deg'],
  });

  const animatedStyles = {
    transform: [{rotate: interpolated}],
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
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export default Modulo;
