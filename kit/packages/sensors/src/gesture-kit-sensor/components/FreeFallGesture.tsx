import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useFreeFall } from '../hooks/useFreeFall';

type Props = {
  children: React.ReactNode;
  onFreeFall?: () => void;
};

export const FreeFallGesture = ({ children, onFreeFall }: Props) => {
  const { scale } = useFreeFall(onFreeFall);

  const style = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
};