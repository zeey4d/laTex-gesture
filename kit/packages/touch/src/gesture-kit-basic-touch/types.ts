/**
 * Types for Basic Touch gestures.
 * Self-contained — no dependency on @gesture-kit/core.
 */

// ─── Base Types ───────────────────────────────────────────────────────────────

/** Coordinates and context shared by all gesture events. */
export interface BaseGestureEvent {
  /** X position relative to the element. */
  x: number;
  /** Y position relative to the element. */
  y: number;
  /** X position relative to the screen. */
  absoluteX: number;
  /** Y position relative to the screen. */
  absoluteY: number;
}

/** Common props shared by all gesture components. */
export interface BaseGestureProps {
  /** Whether the gesture is active. @default true */
  enabled?: boolean;
  children: React.ReactNode;
}

// ─── Events ───────────────────────────────────────────────────────────────────

export interface TapEvent extends BaseGestureEvent {
  /** Number of taps detected. */
  numberOfTaps: number;
}

export interface LongPressEvent extends BaseGestureEvent {
  /** How long the press lasted in milliseconds. */
  duration: number;
}

export interface PressForceEvent extends BaseGestureEvent {
  /** Force value (0–1) of the press. */
  force: number;
}

// ─── Component Props ──────────────────────────────────────────────────────────

export interface TapProps extends BaseGestureProps {
  onTap: (event: TapEvent) => void;
  numberOfTaps?: number;
  maxDuration?: number;
  maxDistance?: number;
}

export interface DoubleTapProps extends BaseGestureProps {
  onDoubleTap: (event: TapEvent) => void;
  maxDelay?: number;
  maxDistance?: number;
}

export interface TripleTapProps extends BaseGestureProps {
  onTripleTap: (event: TapEvent) => void;
  maxDelay?: number;
  maxDistance?: number;
}

export interface QuadTapProps extends BaseGestureProps {
  onQuadTap: (event: TapEvent) => void;
  maxDelay?: number;
  maxDistance?: number;
}

export interface LongPressProps extends BaseGestureProps {
  onLongPress: (event: LongPressEvent) => void;
  onPressIn?: (event: LongPressEvent) => void;
  onPressOut?: (event: LongPressEvent) => void;
  minDuration?: number;
  maxDistance?: number;
}

export interface VeryLongPressProps extends BaseGestureProps {
  onVeryLongPress: (event: LongPressEvent) => void;
  onPressIn?: (event: LongPressEvent) => void;
  onPressOut?: (event: LongPressEvent) => void;
  minDuration?: number;
  maxDistance?: number;
}

export interface TapAndHoldProps extends BaseGestureProps {
  onTapAndHold: (event: LongPressEvent) => void;
  onTap?: (event: TapEvent) => void;
  holdDuration?: number;
}

export interface TapCancelProps extends BaseGestureProps {
  onTapCancel: (event: BaseGestureEvent) => void;
  onTapStart?: (event: BaseGestureEvent) => void;
  maxDuration?: number;
}

export interface PressForceProps extends BaseGestureProps {
  onPressForce: (event: PressForceEvent) => void;
  forceThreshold?: number;
}

// ─── Hook Options ─────────────────────────────────────────────────────────────

export interface UseTapOptions {
  onTap: (event: TapEvent) => void;
  numberOfTaps?: number;
  maxDuration?: number;
  maxDistance?: number;
  enabled?: boolean;
}

export interface UseDoubleTapOptions {
  onDoubleTap: (event: TapEvent) => void;
  maxDelay?: number;
  maxDistance?: number;
  enabled?: boolean;
}

export interface UseTripleTapOptions {
  onTripleTap: (event: TapEvent) => void;
  maxDelay?: number;
  maxDistance?: number;
  enabled?: boolean;
}

export interface UseQuadTapOptions {
  onQuadTap: (event: TapEvent) => void;
  maxDelay?: number;
  maxDistance?: number;
  enabled?: boolean;
}

export interface UseLongPressOptions {
  onLongPress: (event: LongPressEvent) => void;
  onPressIn?: (event: LongPressEvent) => void;
  onPressOut?: (event: LongPressEvent) => void;
  minDuration?: number;
  maxDistance?: number;
  enabled?: boolean;
}

export interface UseVeryLongPressOptions {
  onVeryLongPress: (event: LongPressEvent) => void;
  onPressIn?: (event: LongPressEvent) => void;
  onPressOut?: (event: LongPressEvent) => void;
  minDuration?: number;
  maxDistance?: number;
  enabled?: boolean;
}

export interface UseTapAndHoldOptions {
  onTapAndHold: (event: LongPressEvent) => void;
  onTap?: (event: TapEvent) => void;
  holdDuration?: number;
  enabled?: boolean;
}

export interface UseTapCancelOptions {
  onTapCancel: (event: BaseGestureEvent) => void;
  onTapStart?: (event: BaseGestureEvent) => void;
  maxDuration?: number;
  enabled?: boolean;
}

export interface UsePressForceOptions {
  onPressForce: (event: PressForceEvent) => void;
  forceThreshold?: number;
  enabled?: boolean;
}
