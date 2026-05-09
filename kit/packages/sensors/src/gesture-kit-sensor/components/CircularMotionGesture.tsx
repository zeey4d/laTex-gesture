import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useCircularMotion } from '../hooks/useCircularMotion';

type Props = {
  children: React.ReactNode;
};

export const CircularMotionGesture = ({ children }: Props) => {
  const { translateX, translateY } = useCircularMotion();

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
};