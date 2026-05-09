import { useEffect, useRef } from 'react';
import { Accelerometer } from 'expo-sensors';
import { useSharedValue, withSequence, withTiming, withSpring } from 'react-native-reanimated';

type UseShakeOptions = {
  threshold?: number;
  cooldown?: number;
  onShake?: () => void;
};

export const useShake = ({
  threshold = 2.2,
  cooldown = 800,
  onShake,
}: UseShakeOptions = {}) => {
  const shakeOffset = useSharedValue(0);
  const lastShake = useRef(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const acceleration = Math.sqrt(x * x + y * y + z * z);
      const now = Date.now();

      if (acceleration > threshold && now - lastShake.current > cooldown) {
        lastShake.current = now;

        shakeOffset.value = withSequence(
          withTiming(-10, { duration: 40 }),
          withTiming(10, { duration: 40 }),
          withTiming(-8, { duration: 40 }),
          withTiming(8, { duration: 40 }),
          withSpring(0)
        );

        onShake?.();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [threshold, cooldown, onShake]);

  return { shakeOffset };
};