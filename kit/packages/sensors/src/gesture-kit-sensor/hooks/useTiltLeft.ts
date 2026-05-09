import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import { useSharedValue, withTiming } from 'react-native-reanimated';

export const useTiltLeft = (onTiltLeft?: () => void) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    const sub = Accelerometer.addListener(({ x }) => {
      if (x > 0.7) {
        rotation.value = withTiming(-15);
        onTiltLeft?.();
      } else {
        rotation.value = withTiming(0);
      }
    });

    return () => sub.remove();
  }, [onTiltLeft]);

  return { rotation };
};