import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useShake } from '../hooks/useShake';

type Props = {
  children: React.ReactNode;
  onShake?: () => void;
};

export const ShakeGesture = ({ children, onShake }: Props) => {
  const { shakeOffset } = useShake({ onShake });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeOffset.value }],
  }));

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};