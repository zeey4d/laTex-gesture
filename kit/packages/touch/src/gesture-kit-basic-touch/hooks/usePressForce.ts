/** usePressForce — Hook for force/pressure touch. */
import type { UsePressForceOptions, PressForceEvent } from '../types';
import { useMemo } from 'react';
import { Gesture } from 'react-native-gesture-handler';

export function usePressForce(options: UsePressForceOptions) {
  const { onPressForce, forceThreshold = 0.5, enabled = true } = options;
  return useMemo(() => {
    const g = Gesture.ForceTouch()
      .minForce(forceThreshold)
      .onStart((e) => {
        const event: PressForceEvent = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, force: e.force };
        onPressForce(event);
      })
      .enabled(enabled);
    return g;
  }, [onPressForce, forceThreshold, enabled]);
}
