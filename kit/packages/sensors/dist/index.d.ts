import { BaseGestureEvent } from '@gesture-kit/core';
import React from 'react';

/**
 * Type definitions for this gesture category.
 */

interface SensorEvent extends BaseGestureEvent {
    accelerationX: number;
    accelerationY: number;
    accelerationZ: number;
}
interface TiltEvent extends SensorEvent {
    angle: number;
    direction: 'left' | 'right' | 'forward' | 'backward';
}
interface ShakeEvent extends SensorEvent {
    intensity: number;
    duration: number;
}
interface FlipEvent extends SensorEvent {
    orientation: 'faceUp' | 'faceDown';
}
interface MotionEvent extends SensorEvent {
    rotationX: number;
    rotationY: number;
    rotationZ: number;
}

/**
 * Shake Gesture - Detects shake motion
 * @module gestures
 */

interface ShakeGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const ShakeGesture: React.FC<ShakeGestureProps>;

/**
 * Tilt Left Gesture - Detects left tilt
 * @module gestures
 */

interface TiltLeftGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TiltLeftGesture: React.FC<TiltLeftGestureProps>;

/**
 * Tilt Right Gesture - Detects right tilt
 * @module gestures
 */

interface TiltRightGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TiltRightGesture: React.FC<TiltRightGestureProps>;

/**
 * Tilt Forward Gesture - Detects forward tilt
 * @module gestures
 */

interface TiltForwardGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TiltForwardGesture: React.FC<TiltForwardGestureProps>;

/**
 * Tilt Backward Gesture - Detects backward tilt
 * @module gestures
 */

interface TiltBackwardGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TiltBackwardGesture: React.FC<TiltBackwardGestureProps>;

/**
 * Flip Gesture - Detects device flip
 * @module gestures
 */

interface FlipGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FlipGesture: React.FC<FlipGestureProps>;

/**
 * Face Up/Down Gesture - Detects face up/down orientation
 * @module gestures
 */

interface FaceUpDownGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FaceUpDownGesture: React.FC<FaceUpDownGestureProps>;

/**
 * Free Fall Gesture - Detects free fall
 * @module gestures
 */

interface FreeFallGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FreeFallGesture: React.FC<FreeFallGestureProps>;

/**
 * Swing Gesture - Detects swing/twirl motion
 * @module gestures
 */

interface SwingGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwingGesture: React.FC<SwingGestureProps>;

/**
 * Circular Motion Gesture - Detects circular motion
 * @module gestures
 */

interface CircularMotionGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CircularMotionGesture: React.FC<CircularMotionGestureProps>;

/**
 * Multi Axis Tilt Gesture - Detects multi-axis tilt
 * @module gestures
 */

interface MultiAxisTiltGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const MultiAxisTiltGesture: React.FC<MultiAxisTiltGestureProps>;

/**
 * useShake - useShake hook
 */
interface useShakeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useShake(options?: useShakeOptions): {
    enabled: boolean;
};

/**
 * useTiltLeft - useTiltLeft hook
 */
interface useTiltLeftOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTiltLeft(options?: useTiltLeftOptions): {
    enabled: boolean;
};

/**
 * useTiltRight - useTiltRight hook
 */
interface useTiltRightOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTiltRight(options?: useTiltRightOptions): {
    enabled: boolean;
};

/**
 * useTiltForward - useTiltForward hook
 */
interface useTiltForwardOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTiltForward(options?: useTiltForwardOptions): {
    enabled: boolean;
};

/**
 * useTiltBackward - useTiltBackward hook
 */
interface useTiltBackwardOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTiltBackward(options?: useTiltBackwardOptions): {
    enabled: boolean;
};

/**
 * useFlip - useFlip hook
 */
interface useFlipOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFlip(options?: useFlipOptions): {
    enabled: boolean;
};

/**
 * useFaceUpDown - useFaceUpDown hook
 */
interface useFaceUpDownOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFaceUpDown(options?: useFaceUpDownOptions): {
    enabled: boolean;
};

/**
 * useFreeFall - useFreeFall hook
 */
interface useFreeFallOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFreeFall(options?: useFreeFallOptions): {
    enabled: boolean;
};

/**
 * useSwing - useSwing hook
 */
interface useSwingOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwing(options?: useSwingOptions): {
    enabled: boolean;
};

/**
 * useCircularMotion - useCircularMotion hook
 */
interface useCircularMotionOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCircularMotion(options?: useCircularMotionOptions): {
    enabled: boolean;
};

/**
 * useMultiAxisTilt - useMultiAxisTilt hook
 */
interface useMultiAxisTiltOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useMultiAxisTilt(options?: useMultiAxisTiltOptions): {
    enabled: boolean;
};

/**
 * Type definitions for this gesture category.
 */

interface AirGestureEvent extends BaseGestureEvent {
    handId: number;
    confidence: number;
    depth: number;
}
interface AirSwipeEvent extends AirGestureEvent {
    direction: 'up' | 'down' | 'left' | 'right';
    velocity: number;
}
interface AirPinchEvent extends AirGestureEvent {
    scale: number;
}
interface AirRotateEvent extends AirGestureEvent {
    rotation: number;
}
interface AirDrawEvent extends AirGestureEvent {
    path: Array<{
        x: number;
        y: number;
        z: number;
    }>;
}
interface MultiHandEvent extends AirGestureEvent {
    hands: number;
}

/**
 * Air Draw Gesture - Detects air drawing
 * @module gestures
 */

interface AirDrawGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AirDrawGesture: React.FC<AirDrawGestureProps>;

/**
 * Air Pinch Gesture - Detects air pinch
 * @module gestures
 */

interface AirPinchGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AirPinchGesture: React.FC<AirPinchGestureProps>;

/**
 * Air Rotate Gesture - Detects air rotation
 * @module gestures
 */

interface AirRotateGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AirRotateGesture: React.FC<AirRotateGestureProps>;

/**
 * Air Swipe Gesture - Detects air swipe
 * @module gestures
 */

interface AirSwipeGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AirSwipeGesture: React.FC<AirSwipeGestureProps>;

/**
 * Air Tap Gesture - Detects air tap
 * @module gestures
 */

interface AirTapGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const AirTapGesture: React.FC<AirTapGestureProps>;

/**
 * Hand Wave Gesture - Detects hand wave
 * @module gestures
 */

interface HandWaveGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const HandWaveGesture: React.FC<HandWaveGestureProps>;

/**
 * Multi Hand Gesture - Detects multi-hand gestures
 * @module gestures
 */

interface MultiHandGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const MultiHandGesture: React.FC<MultiHandGestureProps>;

/**
 * useHandWave - useHandWave hook
 */
interface useHandWaveOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useHandWave(options?: useHandWaveOptions): {
    enabled: boolean;
};

/**
 * useAirSwipe - useAirSwipe hook
 */
interface useAirSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAirSwipe(options?: useAirSwipeOptions): {
    enabled: boolean;
};

/**
 * useAirTap - useAirTap hook
 */
interface useAirTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAirTap(options?: useAirTapOptions): {
    enabled: boolean;
};

/**
 * useAirPinch - useAirPinch hook
 */
interface useAirPinchOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAirPinch(options?: useAirPinchOptions): {
    enabled: boolean;
};

/**
 * useAirRotate - useAirRotate hook
 */
interface useAirRotateOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAirRotate(options?: useAirRotateOptions): {
    enabled: boolean;
};

/**
 * useAirDraw - useAirDraw hook
 */
interface useAirDrawOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useAirDraw(options?: useAirDrawOptions): {
    enabled: boolean;
};

/**
 * useMultiHand - useMultiHand hook
 */
interface useMultiHandOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useMultiHand(options?: useMultiHandOptions): {
    enabled: boolean;
};

/**
 * Type definitions for this gesture category.
 */

interface ProximityEvent extends BaseGestureEvent {
    distance: number;
    isNear: boolean;
}
interface HoverEvent extends BaseGestureEvent {
    duration: number;
    distance: number;
}

/**
 * Hand Near Gesture - Detects hand approaching
 * @module gestures
 */

interface HandNearGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const HandNearGesture: React.FC<HandNearGestureProps>;

/**
 * Hand Away Gesture - Detects hand moving away
 * @module gestures
 */

interface HandAwayGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const HandAwayGesture: React.FC<HandAwayGestureProps>;

/**
 * Proximity Tap Gesture - Detects proximity-based tap
 * @module gestures
 */

interface ProximityTapGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const ProximityTapGesture: React.FC<ProximityTapGestureProps>;

/**
 * Hover Gesture - Detects hovering
 * @module gestures
 */

interface HoverGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const HoverGesture: React.FC<HoverGestureProps>;

/**
 * useHandNear - useHandNear hook
 */
interface useHandNearOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useHandNear(options?: useHandNearOptions): {
    enabled: boolean;
};

/**
 * useHandAway - useHandAway hook
 */
interface useHandAwayOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useHandAway(options?: useHandAwayOptions): {
    enabled: boolean;
};

/**
 * useProximityTap - useProximityTap hook
 */
interface useProximityTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useProximityTap(options?: useProximityTapOptions): {
    enabled: boolean;
};

/**
 * useHover - useHover hook
 */
interface useHoverOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useHover(options?: useHoverOptions): {
    enabled: boolean;
};

export { type AirDrawEvent, AirDrawGesture, type AirGestureEvent, type AirPinchEvent, AirPinchGesture, type AirRotateEvent, AirRotateGesture, type AirSwipeEvent, AirSwipeGesture, AirTapGesture, CircularMotionGesture, FaceUpDownGesture, type FlipEvent, FlipGesture, FreeFallGesture, HandAwayGesture, HandNearGesture, HandWaveGesture, type HoverEvent, HoverGesture, type MotionEvent, MultiAxisTiltGesture, type MultiHandEvent, MultiHandGesture, type ProximityEvent, ProximityTapGesture, type SensorEvent, type ShakeEvent, ShakeGesture, SwingGesture, TiltBackwardGesture, type TiltEvent, TiltForwardGesture, TiltLeftGesture, TiltRightGesture, useAirDraw, useAirPinch, useAirRotate, useAirSwipe, useAirTap, useCircularMotion, useFaceUpDown, useFlip, useFreeFall, useHandAway, useHandNear, useHandWave, useHover, useMultiAxisTilt, useMultiHand, useProximityTap, useShake, useSwing, useTiltBackward, useTiltForward, useTiltLeft, useTiltRight };
