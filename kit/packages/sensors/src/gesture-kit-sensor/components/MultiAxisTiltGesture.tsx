import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useMultiAxisTilt } from '../hooks/useMultiAxisTilt';

type Props = {
  children: React.ReactNode;
};

export const MultiAxisTiltGesture = ({ children }: Props) => {
  const { rotateX, rotateY } = useMultiAxisTilt();

  const style = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateX: `${rotateX.value}deg` },
      { rotateY: `${rotateY.value}deg` },
    ],
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
};