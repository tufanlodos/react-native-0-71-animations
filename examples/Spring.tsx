import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Spring = () => {
  const animation = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.spring(animation, {
      toValue: 2,
      friction: 2,
      tension: 160,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    });
  };

  const animatedStyle = {
    transform: [{scale: animation}],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={[styles.box, animatedStyle]} />
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
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
  },
});

export default Spring;
