import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useTiltRight } from '../hooks/useTiltRight';

type Props = {
  children: React.ReactNode;
  onTiltRight?: () => void;
};

export const TiltRightGesture = ({ children, onTiltRight }: Props) => {
  const { tilt } = useTiltRight(onTiltRight);

  const style = useAnimatedStyle(() => ({
    transform: [{ rotate: `${tilt.value}deg` }],
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
};