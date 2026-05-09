import { BaseGestureProps, TapEvent, LongPressEvent, BaseGestureEvent, UseTapOptions, UseDoubleTapOptions, UseTripleTapOptions as UseTripleTapOptions$1, UseQuadTapOptions as UseQuadTapOptions$1, UseLongPressOptions, UseVeryLongPressOptions as UseVeryLongPressOptions$1, UseTapAndHoldOptions as UseTapAndHoldOptions$1, UseTapCancelOptions as UseTapCancelOptions$1, UsePressForceOptions as UsePressForceOptions$1, SwipeEvent, PanEvent, SwipeDirection } from '@gesture-kit/core';
export { PanEvent, PinchEvent, SwipeDirection, SwipeEvent, UsePanOptions } from '@gesture-kit/core';
import React from 'react';
import * as react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture from 'react-native-gesture-handler/lib/typescript/handlers/gestures/tapGesture';
import * as react_native_gesture_handler_lib_typescript_handlers_gestures_longPressGesture from 'react-native-gesture-handler/lib/typescript/handlers/gestures/longPressGesture';
import * as react_native_gesture_handler_lib_typescript_handlers_gestures_gestureComposition from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gestureComposition';
import * as react_native_gesture_handler_lib_typescript_handlers_gestures_forceTouchGesture from 'react-native-gesture-handler/lib/typescript/handlers/gestures/forceTouchGesture';

/**
 * Types for Basic Touch gestures.
 */

interface PressForceEvent extends BaseGestureEvent {
    force: number;
}
interface TapProps extends BaseGestureProps {
    onTap: (event: TapEvent) => void;
    numberOfTaps?: number;
    maxDuration?: number;
    maxDistance?: number;
}
interface DoubleTapProps extends BaseGestureProps {
    onDoubleTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
}
interface TripleTapProps extends BaseGestureProps {
    onTripleTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
}
interface QuadTapProps extends BaseGestureProps {
    onQuadTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
}
interface LongPressProps extends BaseGestureProps {
    onLongPress: (event: LongPressEvent) => void;
    onPressIn?: (event: LongPressEvent) => void;
    onPressOut?: (event: LongPressEvent) => void;
    minDuration?: number;
    maxDistance?: number;
}
interface VeryLongPressProps extends BaseGestureProps {
    onVeryLongPress: (event: LongPressEvent) => void;
    onPressIn?: (event: LongPressEvent) => void;
    onPressOut?: (event: LongPressEvent) => void;
    minDuration?: number;
    maxDistance?: number;
}
interface TapAndHoldProps extends BaseGestureProps {
    onTapAndHold: (event: LongPressEvent) => void;
    onTap?: (event: TapEvent) => void;
    holdDuration?: number;
}
interface TapCancelProps extends BaseGestureProps {
    onTapCancel: (event: BaseGestureEvent) => void;
    onTapStart?: (event: BaseGestureEvent) => void;
    maxDuration?: number;
}
interface PressForceProps extends BaseGestureProps {
    onPressForce: (event: PressForceEvent) => void;
    forceThreshold?: number;
}
interface UseTripleTapOptions {
    onTripleTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
    enabled?: boolean;
}
interface UseQuadTapOptions {
    onQuadTap: (event: TapEvent) => void;
    maxDelay?: number;
    maxDistance?: number;
    enabled?: boolean;
}
interface UseVeryLongPressOptions {
    onVeryLongPress: (event: LongPressEvent) => void;
    onPressIn?: (event: LongPressEvent) => void;
    onPressOut?: (event: LongPressEvent) => void;
    minDuration?: number;
    maxDistance?: number;
    enabled?: boolean;
}
interface UseTapAndHoldOptions {
    onTapAndHold: (event: LongPressEvent) => void;
    onTap?: (event: TapEvent) => void;
    holdDuration?: number;
    enabled?: boolean;
}
interface UseTapCancelOptions {
    onTapCancel: (event: BaseGestureEvent) => void;
    onTapStart?: (event: BaseGestureEvent) => void;
    maxDuration?: number;
    enabled?: boolean;
}
interface UsePressForceOptions {
    onPressForce: (event: PressForceEvent) => void;
    forceThreshold?: number;
    enabled?: boolean;
}

/**
 * TapGesture — Detects single tap gestures.
 */

declare const TapGesture: React.FC<TapProps>;

/**
 * DoubleTapGesture — Detects double tap gestures.
 */

declare const DoubleTapGesture: React.FC<DoubleTapProps>;

/**
 * TripleTapGesture — Detects triple tap gestures.
 */

declare const TripleTapGesture: React.FC<TripleTapProps>;

/**
 * QuadTapGesture — Detects quad (four) tap gestures.
 */

declare const QuadTapGesture: React.FC<QuadTapProps>;

/**
 * LongPressGesture — Detects long press gestures.
 */

declare const LongPressGesture: React.FC<LongPressProps>;

/**
 * VeryLongPressGesture — Detects very long press gestures (default 1500ms).
 */

declare const VeryLongPressGesture: React.FC<VeryLongPressProps>;

/**
 * TapAndHoldGesture — Detects a tap followed by a hold.
 */

declare const TapAndHoldGesture: React.FC<TapAndHoldProps>;

/**
 * TapCancelGesture — Detects when a tap is cancelled (finger moves away).
 */

declare const TapCancelGesture: React.FC<TapCancelProps>;

/**
 * PressForceGesture — Detects force/pressure touch gestures (3D Touch / Force Touch).
 */

declare const PressForceGesture: React.FC<PressForceProps>;

declare function useTap(options: UseTapOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture.TapGesture;

declare function useDoubleTap(options: UseDoubleTapOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture.TapGesture;

declare function useTripleTap(options: UseTripleTapOptions$1): react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture.TapGesture;

declare function useQuadTap(options: UseQuadTapOptions$1): react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture.TapGesture;

declare function useLongPress(options: UseLongPressOptions): react_native_gesture_handler_lib_typescript_handlers_gestures_longPressGesture.LongPressGesture;

declare function useVeryLongPress(options: UseVeryLongPressOptions$1): react_native_gesture_handler_lib_typescript_handlers_gestures_longPressGesture.LongPressGesture;

declare function useTapAndHold(options: UseTapAndHoldOptions$1): react_native_gesture_handler_lib_typescript_handlers_gestures_longPressGesture.LongPressGesture | react_native_gesture_handler_lib_typescript_handlers_gestures_gestureComposition.ExclusiveGesture;

declare function useTapCancel(options: UseTapCancelOptions$1): react_native_gesture_handler_lib_typescript_handlers_gestures_tapGesture.TapGesture;

declare function usePressForce(options: UsePressForceOptions$1): react_native_gesture_handler_lib_typescript_handlers_gestures_forceTouchGesture.ForceTouchGesture;

/**
 * Types for Drag/Pan gestures.
 */

type EdgePosition = 'top' | 'bottom' | 'left' | 'right';
type CornerPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
interface DragEvent extends PanEvent {
    state: 'start' | 'move' | 'end';
}
interface DragAndDropEvent extends DragEvent {
    dropTargetId?: string;
}
interface EdgeSwipeEvent extends SwipeEvent {
    edge: EdgePosition;
}
interface CornerSwipeEvent extends SwipeEvent {
    corner: CornerPosition;
}
interface CurvedSwipeEvent extends SwipeEvent {
    curvature: number;
    path: Array<{
        x: number;
        y: number;
    }>;
}
interface CircularSwipeEvent extends BaseGestureEvent {
    angle: number;
    direction: 'clockwise' | 'counterclockwise';
    revolutions: number;
}
interface PanProps extends BaseGestureProps {
    onPanStart?: (event: PanEvent) => void;
    onPanMove?: (event: PanEvent) => void;
    onPanEnd?: (event: PanEvent) => void;
    minDistance?: number;
}
interface DragProps extends BaseGestureProps {
    onDragStart?: (event: DragEvent) => void;
    onDrag?: (event: DragEvent) => void;
    onDragEnd?: (event: DragEvent) => void;
}
interface DragAndDropProps extends BaseGestureProps {
    onDragStart?: (event: DragAndDropEvent) => void;
    onDrag?: (event: DragAndDropEvent) => void;
    onDrop?: (event: DragAndDropEvent) => void;
}
interface SwipeProps extends BaseGestureProps {
    onSwipe: (event: SwipeEvent) => void;
    direction?: SwipeDirection;
    threshold?: number;
    velocityThreshold?: number;
}
interface EdgeSwipeProps extends BaseGestureProps {
    onEdgeSwipe: (event: EdgeSwipeEvent) => void;
    edge?: EdgePosition;
    edgeWidth?: number;
}
interface CornerSwipeProps extends BaseGestureProps {
    onCornerSwipe: (event: CornerSwipeEvent) => void;
    corner?: CornerPosition;
    cornerSize?: number;
}
interface DiagonalSwipeProps extends BaseGestureProps {
    onDiagonalSwipe: (event: SwipeEvent) => void;
    threshold?: number;
}
interface CurvedSwipeProps extends BaseGestureProps {
    onCurvedSwipe: (event: CurvedSwipeEvent) => void;
    minCurvature?: number;
}
interface CircularSwipeProps extends BaseGestureProps {
    onCircularSwipe: (event: CircularSwipeEvent) => void;
    minAngle?: number;
}
interface UseDragOptions {
    onDragStart?: (e: DragEvent) => void;
    onDrag?: (e: DragEvent) => void;
    onDragEnd?: (e: DragEvent) => void;
    enabled?: boolean;
}
interface UseDragAndDropOptions {
    onDragStart?: (e: DragAndDropEvent) => void;
    onDrag?: (e: DragAndDropEvent) => void;
    onDrop?: (e: DragAndDropEvent) => void;
    enabled?: boolean;
}
interface UseSwipeUpOptions {
    onSwipeUp: (e: SwipeEvent) => void;
    threshold?: number;
    enabled?: boolean;
}
interface UseSwipeDownOptions {
    onSwipeDown: (e: SwipeEvent) => void;
    threshold?: number;
    enabled?: boolean;
}
interface UseSwipeLeftOptions {
    onSwipeLeft: (e: SwipeEvent) => void;
    threshold?: number;
    enabled?: boolean;
}
interface UseSwipeRightOptions {
    onSwipeRight: (e: SwipeEvent) => void;
    threshold?: number;
    enabled?: boolean;
}
interface UseEdgeSwipeOptions {
    onEdgeSwipe: (e: EdgeSwipeEvent) => void;
    edge?: EdgePosition;
    edgeWidth?: number;
    enabled?: boolean;
}
interface UseCornerSwipeOptions {
    onCornerSwipe: (e: CornerSwipeEvent) => void;
    corner?: CornerPosition;
    cornerSize?: number;
    enabled?: boolean;
}
interface UseDiagonalSwipeOptions {
    onDiagonalSwipe: (e: SwipeEvent) => void;
    threshold?: number;
    enabled?: boolean;
}
interface UseCurvedSwipeOptions {
    onCurvedSwipe: (e: CurvedSwipeEvent) => void;
    minCurvature?: number;
    enabled?: boolean;
}
interface UseCircularSwipeOptions {
    onCircularSwipe: (e: CircularSwipeEvent) => void;
    minAngle?: number;
    enabled?: boolean;
}

/**
 * Pan Gesture - Detects pan/drag movement
 * @module gestures
 */

interface PanGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const PanGesture: React.FC<PanGestureProps>;

/**
 * Drag Gesture - Detects drag gestures
 * @module gestures
 */

interface DragGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DragGesture: React.FC<DragGestureProps>;

/**
 * Drag and Drop Gesture - Detects drag and drop
 * @module gestures
 */

interface DragAndDropGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DragAndDropGesture: React.FC<DragAndDropGestureProps>;

/**
 * Swipe Up Gesture - Detects upward swipes
 * @module gestures
 */

interface SwipeUpGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeUpGesture: React.FC<SwipeUpGestureProps>;

/**
 * Swipe Down Gesture - Detects downward swipes
 * @module gestures
 */

interface SwipeDownGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeDownGesture: React.FC<SwipeDownGestureProps>;

/**
 * Swipe Left Gesture - Detects leftward swipes
 * @module gestures
 */

interface SwipeLeftGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeLeftGesture: React.FC<SwipeLeftGestureProps>;

/**
 * Swipe Right Gesture - Detects rightward swipes
 * @module gestures
 */

interface SwipeRightGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeRightGesture: React.FC<SwipeRightGestureProps>;

/**
 * Edge Swipe Gesture - Detects swipes from screen edges
 * @module gestures
 */

interface EdgeSwipeGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const EdgeSwipeGesture: React.FC<EdgeSwipeGestureProps>;

/**
 * Corner Swipe Gesture - Detects swipes from screen corners
 * @module gestures
 */

interface CornerSwipeGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CornerSwipeGesture: React.FC<CornerSwipeGestureProps>;

/**
 * Diagonal Swipe Gesture - Detects diagonal swipes
 * @module gestures
 */

interface DiagonalSwipeGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const DiagonalSwipeGesture: React.FC<DiagonalSwipeGestureProps>;

/**
 * Curved Swipe Gesture - Detects curved swipe paths
 * @module gestures
 */

interface CurvedSwipeGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CurvedSwipeGesture: React.FC<CurvedSwipeGestureProps>;

/**
 * Circular Swipe Gesture - Detects circular swipe gestures
 * @module gestures
 */

interface CircularSwipeGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CircularSwipeGesture: React.FC<CircularSwipeGestureProps>;

/**
 * usePan - usePan hook
 */
interface usePanOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function usePan(options?: usePanOptions): {
    enabled: boolean;
};

/**
 * useDrag - useDrag hook
 */
interface useDragOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDrag(options?: useDragOptions): {
    enabled: boolean;
};

/**
 * useDragAndDrop - useDragAndDrop hook
 */
interface useDragAndDropOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDragAndDrop(options?: useDragAndDropOptions): {
    enabled: boolean;
};

/**
 * useSwipeUp - useSwipeUp hook
 */
interface useSwipeUpOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeUp(options?: useSwipeUpOptions): {
    enabled: boolean;
};

/**
 * useSwipeDown - useSwipeDown hook
 */
interface useSwipeDownOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeDown(options?: useSwipeDownOptions): {
    enabled: boolean;
};

/**
 * useSwipeLeft - useSwipeLeft hook
 */
interface useSwipeLeftOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeLeft(options?: useSwipeLeftOptions): {
    enabled: boolean;
};

/**
 * useSwipeRight - useSwipeRight hook
 */
interface useSwipeRightOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeRight(options?: useSwipeRightOptions): {
    enabled: boolean;
};

/**
 * useEdgeSwipe - useEdgeSwipe hook
 */
interface useEdgeSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useEdgeSwipe(options?: useEdgeSwipeOptions): {
    enabled: boolean;
};

/**
 * useCornerSwipe - useCornerSwipe hook
 */
interface useCornerSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCornerSwipe(options?: useCornerSwipeOptions): {
    enabled: boolean;
};

/**
 * useDiagonalSwipe - useDiagonalSwipe hook
 */
interface useDiagonalSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useDiagonalSwipe(options?: useDiagonalSwipeOptions): {
    enabled: boolean;
};

/**
 * useCurvedSwipe - useCurvedSwipe hook
 */
interface useCurvedSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCurvedSwipe(options?: useCurvedSwipeOptions): {
    enabled: boolean;
};

/**
 * useCircularSwipe - useCircularSwipe hook
 */
interface useCircularSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCircularSwipe(options?: useCircularSwipeOptions): {
    enabled: boolean;
};

/**
 * Type definitions for this gesture category.
 */

interface MultiFingerEvent extends BaseGestureEvent {
    numberOfFingers: number;
}
interface MultiFingerSwipeEvent extends MultiFingerEvent {
    direction: 'up' | 'down' | 'left' | 'right';
    velocity: number;
}
interface SpreadGatherEvent extends MultiFingerEvent {
    scale: number;
    velocity: number;
}

/**
 * Two Finger Tap - Detects two finger tap
 * @module gestures
 */

interface TwoFingerTapGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TwoFingerTapGesture: React.FC<TwoFingerTapGestureProps>;

/**
 * Three Finger Tap - Detects three finger tap
 * @module gestures
 */

interface ThreeFingerTapGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const ThreeFingerTapGesture: React.FC<ThreeFingerTapGestureProps>;

/**
 * Four Finger Tap - Detects four finger tap
 * @module gestures
 */

interface FourFingerTapGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FourFingerTapGesture: React.FC<FourFingerTapGestureProps>;

/**
 * Two Finger Swipe - Detects two finger swipe
 * @module gestures
 */

interface TwoFingerSwipeGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TwoFingerSwipeGesture: React.FC<TwoFingerSwipeGestureProps>;

/**
 * Three Finger Swipe - Detects three finger swipe
 * @module gestures
 */

interface ThreeFingerSwipeGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const ThreeFingerSwipeGesture: React.FC<ThreeFingerSwipeGestureProps>;

/**
 * Multi Finger Drag - Detects multi finger drag
 * @module gestures
 */

interface MultiFingerDragGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const MultiFingerDragGesture: React.FC<MultiFingerDragGestureProps>;

/**
 * Finger Spread - Detects finger spread (pinch out)
 * @module gestures
 */

interface FingerSpreadGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FingerSpreadGesture: React.FC<FingerSpreadGestureProps>;

/**
 * Finger Gather - Detects finger gather (pinch in)
 * @module gestures
 */

interface FingerGatherGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const FingerGatherGesture: React.FC<FingerGatherGestureProps>;

/**
 * useTwoFingerTap - useTwoFingerTap hook
 */
interface useTwoFingerTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTwoFingerTap(options?: useTwoFingerTapOptions): {
    enabled: boolean;
};

/**
 * useThreeFingerTap - useThreeFingerTap hook
 */
interface useThreeFingerTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useThreeFingerTap(options?: useThreeFingerTapOptions): {
    enabled: boolean;
};

/**
 * useFourFingerTap - useFourFingerTap hook
 */
interface useFourFingerTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFourFingerTap(options?: useFourFingerTapOptions): {
    enabled: boolean;
};

/**
 * useTwoFingerSwipe - useTwoFingerSwipe hook
 */
interface useTwoFingerSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTwoFingerSwipe(options?: useTwoFingerSwipeOptions): {
    enabled: boolean;
};

/**
 * useThreeFingerSwipe - useThreeFingerSwipe hook
 */
interface useThreeFingerSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useThreeFingerSwipe(options?: useThreeFingerSwipeOptions): {
    enabled: boolean;
};

/**
 * useMultiFingerDrag - useMultiFingerDrag hook
 */
interface useMultiFingerDragOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useMultiFingerDrag(options?: useMultiFingerDragOptions): {
    enabled: boolean;
};

/**
 * useFingerSpread - useFingerSpread hook
 */
interface useFingerSpreadOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFingerSpread(options?: useFingerSpreadOptions): {
    enabled: boolean;
};

/**
 * useFingerGather - useFingerGather hook
 */
interface useFingerGatherOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useFingerGather(options?: useFingerGatherOptions): {
    enabled: boolean;
};

/**
 * Type definitions for this gesture category.
 */

type SequenceStep = 'tap' | 'swipe' | 'hold' | 'rotate' | 'pinch';
interface SequenceEvent extends BaseGestureEvent {
    steps: SequenceStep[];
    totalDuration: number;
}
interface SequenceConfig {
    steps: SequenceStep[];
    timingWindow?: number;
    interruptible?: boolean;
}

/**
 * Tap Swipe Sequence - Detects tap then swipe
 * @module gestures
 */

interface TapSwipeSequenceProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TapSwipeSequence: React.FC<TapSwipeSequenceProps>;

/**
 * Swipe Tap Sequence - Detects swipe then tap
 * @module gestures
 */

interface SwipeTapSequenceProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeTapSequence: React.FC<SwipeTapSequenceProps>;

/**
 * Tap Hold Sequence - Detects tap then hold
 * @module gestures
 */

interface TapHoldSequenceProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TapHoldSequence: React.FC<TapHoldSequenceProps>;

/**
 * Swipe Rotate Sequence - Detects swipe then rotate
 * @module gestures
 */

interface SwipeRotateSequenceProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const SwipeRotateSequence: React.FC<SwipeRotateSequenceProps>;

/**
 * Tap Tap Swipe Sequence - Detects tap tap then swipe
 * @module gestures
 */

interface TapTapSwipeSequenceProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const TapTapSwipeSequence: React.FC<TapTapSwipeSequenceProps>;

/**
 * Multi Step Gesture - Detects configurable multi-step gestures
 * @module gestures
 */

interface MultiStepGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const MultiStepGesture: React.FC<MultiStepGestureProps>;

/**
 * useTapSwipe - useTapSwipe hook
 */
interface useTapSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTapSwipe(options?: useTapSwipeOptions): {
    enabled: boolean;
};

/**
 * useSwipeTap - useSwipeTap hook
 */
interface useSwipeTapOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeTap(options?: useSwipeTapOptions): {
    enabled: boolean;
};

/**
 * useTapHold - useTapHold hook
 */
interface useTapHoldOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTapHold(options?: useTapHoldOptions): {
    enabled: boolean;
};

/**
 * useSwipeRotate - useSwipeRotate hook
 */
interface useSwipeRotateOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useSwipeRotate(options?: useSwipeRotateOptions): {
    enabled: boolean;
};

/**
 * useTapTapSwipe - useTapTapSwipe hook
 */
interface useTapTapSwipeOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useTapTapSwipe(options?: useTapTapSwipeOptions): {
    enabled: boolean;
};

/**
 * useMultiStep - useMultiStep hook
 */
interface useMultiStepOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useMultiStep(options?: useMultiStepOptions): {
    enabled: boolean;
};

/**
 * Type definitions for this gesture category.
 */

interface RotateEvent extends BaseGestureEvent {
    rotation: number;
    velocity: number;
    anchorX: number;
    anchorY: number;
}
interface PinchRotateEvent extends BaseGestureEvent {
    scale: number;
    rotation: number;
    focalX: number;
    focalY: number;
}
interface StretchEvent extends BaseGestureEvent {
    scaleX: number;
    scaleY: number;
}

/**
 * Pinch Gesture - Detects pinch in/out
 * @module gestures
 */

interface PinchGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const PinchGesture: React.FC<PinchGestureProps>;

/**
 * Rotation Gesture - Detects rotation
 * @module gestures
 */

interface RotationGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const RotationGesture: React.FC<RotationGestureProps>;

/**
 * Pinch Rotate Gesture - Detects simultaneous pinch and rotate
 * @module gestures
 */

interface PinchRotateGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const PinchRotateGesture: React.FC<PinchRotateGestureProps>;

/**
 * Stretch Gesture - Detects stretch transforms
 * @module gestures
 */

interface StretchGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const StretchGesture: React.FC<StretchGestureProps>;

/**
 * Compress Gesture - Detects compress transforms
 * @module gestures
 */

interface CompressGestureProps {
    children: React.ReactNode;
    enabled?: boolean;
    [key: string]: any;
}
declare const CompressGesture: React.FC<CompressGestureProps>;

/**
 * usePinch - usePinch hook
 */
interface usePinchOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function usePinch(options?: usePinchOptions): {
    enabled: boolean;
};

/**
 * useRotation - useRotation hook
 */
interface useRotationOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useRotation(options?: useRotationOptions): {
    enabled: boolean;
};

/**
 * usePinchRotate - usePinchRotate hook
 */
interface usePinchRotateOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function usePinchRotate(options?: usePinchRotateOptions): {
    enabled: boolean;
};

/**
 * useStretch - useStretch hook
 */
interface useStretchOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useStretch(options?: useStretchOptions): {
    enabled: boolean;
};

/**
 * useCompress - useCompress hook
 */
interface useCompressOptions {
    enabled?: boolean;
    [key: string]: any;
}
declare function useCompress(options?: useCompressOptions): {
    enabled: boolean;
};

export { type CircularSwipeEvent, CircularSwipeGesture, type CircularSwipeProps, CompressGesture, type CornerPosition, type CornerSwipeEvent, CornerSwipeGesture, type CornerSwipeProps, type CurvedSwipeEvent, CurvedSwipeGesture, type CurvedSwipeProps, DiagonalSwipeGesture, type DiagonalSwipeProps, DoubleTapGesture, type DoubleTapProps, type DragAndDropEvent, DragAndDropGesture, type DragAndDropProps, type DragEvent, DragGesture, type DragProps, type EdgePosition, type EdgeSwipeEvent, EdgeSwipeGesture, type EdgeSwipeProps, FingerGatherGesture, FingerSpreadGesture, FourFingerTapGesture, LongPressGesture, type LongPressProps, MultiFingerDragGesture, type MultiFingerEvent, type MultiFingerSwipeEvent, MultiStepGesture, PanGesture, type PanProps, PinchGesture, type PinchRotateEvent, PinchRotateGesture, type PressForceEvent, PressForceGesture, type PressForceProps, QuadTapGesture, type QuadTapProps, type RotateEvent, RotationGesture, type SequenceConfig, type SequenceEvent, type SequenceStep, type SpreadGatherEvent, type StretchEvent, StretchGesture, SwipeDownGesture, SwipeLeftGesture, type SwipeProps, SwipeRightGesture, SwipeRotateSequence, SwipeTapSequence, SwipeUpGesture, TapAndHoldGesture, type TapAndHoldProps, TapCancelGesture, type TapCancelProps, TapGesture, TapHoldSequence, type TapProps, TapSwipeSequence, TapTapSwipeSequence, ThreeFingerSwipeGesture, ThreeFingerTapGesture, TripleTapGesture, type TripleTapProps, TwoFingerSwipeGesture, TwoFingerTapGesture, type UseCircularSwipeOptions, type UseCornerSwipeOptions, type UseCurvedSwipeOptions, type UseDiagonalSwipeOptions, type UseDragAndDropOptions, type UseDragOptions, type UseEdgeSwipeOptions, type UsePressForceOptions, type UseQuadTapOptions, type UseSwipeDownOptions, type UseSwipeLeftOptions, type UseSwipeRightOptions, type UseSwipeUpOptions, type UseTapAndHoldOptions, type UseTapCancelOptions, type UseTripleTapOptions, type UseVeryLongPressOptions, VeryLongPressGesture, type VeryLongPressProps, useCircularSwipe, useCompress, useCornerSwipe, useCurvedSwipe, useDiagonalSwipe, useDoubleTap, useDrag, useDragAndDrop, useEdgeSwipe, useFingerGather, useFingerSpread, useFourFingerTap, useLongPress, useMultiFingerDrag, useMultiStep, usePan, usePinch, usePinchRotate, usePressForce, useQuadTap, useRotation, useStretch, useSwipeDown, useSwipeLeft, useSwipeRight, useSwipeRotate, useSwipeTap, useSwipeUp, useTap, useTapAndHold, useTapCancel, useTapHold, useTapSwipe, useTapTapSwipe, useThreeFingerSwipe, useThreeFingerTap, useTripleTap, useTwoFingerSwipe, useTwoFingerTap, useVeryLongPress };
