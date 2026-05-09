import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import { useSharedValue, withSpring } from 'react-native-reanimated';

export const useSwing = (onSwing?: () => void) => {
  const translateX = useSharedValue(0);

  useEffect(() => {
    const sub = Accelerometer.addListener(({ x }) => {
      if (Math.abs(x) > 1.2) {
        translateX.value = withSpring(x * 50);
        onSwing?.();
      } else {
        translateX.value = withSpring(0);
      }
    });

    return () => sub.remove();
  }, [onSwing]);

  return { translateX };
};