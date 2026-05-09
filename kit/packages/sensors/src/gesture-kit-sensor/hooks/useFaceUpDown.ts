import { useEffect, useRef } from 'react';
import { Accelerometer } from 'expo-sensors';
import { useSharedValue, withTiming, SharedValue } from 'react-native-reanimated';

type FlipState = 'front' | 'back';

type UseFlipOptions = {
  threshold?: number;
  duration?: number;
  onFlipToFront?: () => void;
  onFlipToBack?: () => void;
};

type UseFlipReturn = {
  rotation: SharedValue<number>;
};

export const useFaceUpDown = ({
  threshold = 0.7,
  duration = 400,
  onFlipToFront,
  onFlipToBack,
}: UseFlipOptions = {}): UseFlipReturn => {
  const rotation = useSharedValue<number>(0);
  const current = useRef<FlipState>('front');

  useEffect(() => {
    Accelerometer.setUpdateInterval(150);

    const sub = Accelerometer.addListener(({ z }) => {
      let next: FlipState = current.current;

      if (z > threshold) next = 'front';
      else if (z < -threshold) next = 'back';

      // 🔥 تشغيل فقط عند تغيير الحالة
      if (next !== current.current) {
        current.current = next;

        if (next === 'front') {
          rotation.value = withTiming(0, { duration });
          onFlipToFront?.();
        } else {
          rotation.value = withTiming(180, { duration });
          onFlipToBack?.();
        }
      }
    });

    return () => {
      sub.remove();
    };
  }, [threshold, duration, onFlipToFront, onFlipToBack]);

  return { rotation };
};