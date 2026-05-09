import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import {
  useSharedValue,
  withSpring,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

export const useTiltForward = () => {
  const rotateX = useSharedValue(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(16); // smooth (60fps)

    const sub = Accelerometer.addListener(({ y }) => {
      // 🔥 تحويل القيمة إلى زاوية
      const angle = interpolate(
        y,
        [-1, 1],
        [30, -30], // أقوى وواضحة
        Extrapolate.CLAMP
      );

      rotateX.value = withSpring(angle, {
        damping: 15,
        stiffness: 120,
      });
    });

    return () => sub.remove();
  }, []);

  return { rotateX };
};