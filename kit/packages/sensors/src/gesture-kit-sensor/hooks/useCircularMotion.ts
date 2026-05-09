import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import {
  useSharedValue,
  withSpring,
  interpolate,
  Extrapolate,
  SharedValue,
} from 'react-native-reanimated';

type UseCircularMotionOptions = {
  radius?: number;
  smoothing?: number;
};

type UseCircularMotionReturn = {
  translateX: SharedValue<number>;
  translateY: SharedValue<number>;
};

export const useCircularMotion = ({
  radius = 80,
  smoothing = 15,
}: UseCircularMotionOptions = {}): UseCircularMotionReturn => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(16); // 60fps

    const sub = Accelerometer.addListener(({ x, y }) => {
      // 🔥 تحويل القيم إلى نطاق مناسب
      const mappedX = interpolate(
        x,
        [-1, 1],
        [-radius, radius],
        Extrapolate.CLAMP
      );

      const mappedY = interpolate(
        y,
        [-1, 1],
        [-radius, radius],
        Extrapolate.CLAMP
      );

      // 🔥 حركة ناعمة
      translateX.value = withSpring(mappedX, {
        damping: smoothing,
        stiffness: 120,
      });

      translateY.value = withSpring(mappedY, {
        damping: smoothing,
        stiffness: 120,
      });
    });

    return () => sub.remove();
  }, [radius, smoothing]);

  return {
    translateX,
    translateY,
  };
};