/**
 * Type definitions for this gesture category.
 */

export interface BaseGestureEvent {
  absoluteX: number;
  absoluteY: number;
  x: number;
  y: number;
}

export interface SensorEvent extends BaseGestureEvent {
  accelerationX: number;
  accelerationY: number;
  accelerationZ: number;
}

export interface TiltEvent extends SensorEvent {
  angle: number;
  direction: 'left' | 'right' | 'forward' | 'backward';
}

export interface ShakeEvent extends SensorEvent {
  intensity: number;
  duration: number;
}

export interface FlipEvent extends SensorEvent {
  orientation: 'faceUp' | 'faceDown';
}

export interface MotionEvent extends SensorEvent {
  rotationX: number;
  rotationY: number;
  rotationZ: number;
}
