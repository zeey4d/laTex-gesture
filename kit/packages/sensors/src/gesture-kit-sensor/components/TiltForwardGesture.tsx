import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useTiltForward } from '../hooks/useTiltForward';

type Props = {
  children: React.ReactNode;
};

export const TiltForwardGesture = ({ children }: Props) => {
  const { rotateX } = useTiltForward();

  const style = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 }, // 🔥 مهم جدًا
      { rotateX: `${rotateX.value}deg` },
    ],
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
};