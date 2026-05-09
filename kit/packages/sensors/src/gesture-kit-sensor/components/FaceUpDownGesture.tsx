import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useFaceUpDown } from '../hooks/useFaceUpDown';

type Props = {
  front: React.ReactNode;
  back: React.ReactNode;
};

export const FaceUpDownGesture = ({ front, back }: Props) => {
  const { rotation } = useFaceUpDown();

  // وجه أمامي
  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ rotateX: `${rotation.value}deg` }],
    opacity: rotation.value < 90 ? 1 : 0,
  }));

  // وجه خلفي
  const backStyle = useAnimatedStyle(() => ({
    transform: [{ rotateX: `${rotation.value + 180}deg` }],
    opacity: rotation.value >= 90 ? 1 : 0,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, frontStyle]}>
        {front}
      </Animated.View>

      <Animated.View style={[styles.card, styles.back, backStyle]}>
        {back}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  back: {
    backgroundColor: '#333',
  },
});