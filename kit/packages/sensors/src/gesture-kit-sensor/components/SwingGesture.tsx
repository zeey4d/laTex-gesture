import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useSwing } from '../hooks/useSwing';

type Props = {
  children: React.ReactNode;
  onSwing?: () => void;
};

export const SwingGesture = ({ children, onSwing }: Props) => {
  const { translateX } = useSwing(onSwing);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
};