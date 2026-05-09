import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useTiltLeft } from '../hooks/useTiltLeft';

type Props = {
  children: React.ReactNode;
  onTiltLeft?: () => void;
};

export const TiltLeftGesture = ({ children, onTiltLeft }: Props) => {
  const { rotation } = useTiltLeft(onTiltLeft);

  const style = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
};