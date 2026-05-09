import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import { useSharedValue, withSpring } from 'react-native-reanimated';

export const useMultiAxisTilt = () => {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  useEffect(() => {
    // 1. جعل التحديث سريع جداً (تقريباً 60 إطار في الثانية)
    Accelerometer.setUpdateInterval(16); 

    const sub = Accelerometer.addListener(({ x, y }) => {
      // 2. زيادة المعامل ليكون التفاعل أوضح (مثلاً 40 أو 50)
      // 3. استخدام withSpring بدلاً من withTiming لحركة استجابة فورية
      rotateY.value = withSpring(x * 45, { damping: 20, stiffness: 90 });
      rotateX.value = withSpring(-y * 45, { damping: 20, stiffness: 90 });
    });

    return () => sub.remove();
  }, []);

  return { rotateX, rotateY };
};