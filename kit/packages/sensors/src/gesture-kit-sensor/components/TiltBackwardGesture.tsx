import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useTiltBackward } from '../hooks/useTiltBackward';

type Props = {
  children: React.ReactNode;
};

export const TiltBackwardGesture = ({ children }: Props) => {
  const { rotateX } = useTiltBackward();

  const style = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateX: `${rotateX.value}deg` },
    ],
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
};