import { useEffect, useRef } from 'react';
import { Accelerometer } from 'expo-sensors';
import {
  useSharedValue,
  withSpring,
  interpolate,
  Extrapolate,
  SharedValue,
} from 'react-native-reanimated';

type FlipSide = 'front' | 'back';

type UseFlipOptions = {
  threshold?: number;
  perspective?: number;
  onFlip?: (side: FlipSide) => void;
};

type UseFlipReturn = {
  rotation: SharedValue<number>;
  side: FlipSide;
};

export const useFlip = ({
  threshold = 0.6,
  perspective = 1000,
  onFlip,
}: UseFlipOptions = {}): UseFlipReturn => {
  const rotation = useSharedValue(0);
  const current = useRef<FlipSide>('front');

  useEffect(() => {
    Accelerometer.setUpdateInterval(30);

    const sub = Accelerometer.addListener(({ z }) => {
      // 🔥 نحول z إلى زاوية (smooth)
      const angle = interpolate(
        z,
        [-1, 1],
        [180, 0],
        Extrapolate.CLAMP
      );

      rotation.value = withSpring(angle, {
        damping: 15,
        stiffness: 120,
      });

      // 🔥 تحديد الحالة (مرة واحدة فقط)
      let next: FlipSide = z > threshold ? 'front' : z < -threshold ? 'back' : current.current;

      if (next !== current.current) {
        current.current = next;
        onFlip?.(next);
      }
    });

    return () => sub.remove();
  }, [threshold, onFlip]);

  return {
    rotation,
    side: current.current,
  };
};