import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import { useSharedValue, withTiming } from 'react-native-reanimated';

export const useTiltRight = (onTiltRight?: () => void) => {
  const tilt = useSharedValue(0);

  useEffect(() => {
    const sub = Accelerometer.addListener(({ x }) => {
      if (x < -0.7) {
        tilt.value = withTiming(15);
        onTiltRight?.();
      } else {
        tilt.value = withTiming(0);
      }
    });

    return () => sub.remove();
  }, [onTiltRight]);

  return { tilt };
};