import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import { useSharedValue, withSpring } from 'react-native-reanimated';

export const useFreeFall = (onFreeFall?: () => void) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    const sub = Accelerometer.addListener(({ x, y, z }) => {
      const total = Math.sqrt(x * x + y * y + z * z);

      if (total < 0.5) {
        scale.value = withSpring(0.7);
        onFreeFall?.();
      } else {
        scale.value = withSpring(1);
      }
    });

    return () => sub.remove();
  }, [onFreeFall]);

  return { scale };
};