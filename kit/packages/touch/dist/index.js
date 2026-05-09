"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CircularSwipeGesture: () => CircularSwipeGesture,
  CompressGesture: () => CompressGesture,
  CornerSwipeGesture: () => CornerSwipeGesture,
  CurvedSwipeGesture: () => CurvedSwipeGesture,
  DiagonalSwipeGesture: () => DiagonalSwipeGesture,
  DoubleTapGesture: () => DoubleTapGesture,
  DragAndDropGesture: () => DragAndDropGesture,
  DragGesture: () => DragGesture,
  EdgeSwipeGesture: () => EdgeSwipeGesture,
  FingerGatherGesture: () => FingerGatherGesture,
  FingerSpreadGesture: () => FingerSpreadGesture,
  FourFingerTapGesture: () => FourFingerTapGesture,
  LongPressGesture: () => LongPressGesture,
  MultiFingerDragGesture: () => MultiFingerDragGesture,
  MultiStepGesture: () => MultiStepGesture,
  PanGesture: () => PanGesture,
  PinchGesture: () => PinchGesture,
  PinchRotateGesture: () => PinchRotateGesture,
  PressForceGesture: () => PressForceGesture,
  QuadTapGesture: () => QuadTapGesture,
  RotationGesture: () => RotationGesture,
  StretchGesture: () => StretchGesture,
  SwipeDownGesture: () => SwipeDownGesture,
  SwipeLeftGesture: () => SwipeLeftGesture,
  SwipeRightGesture: () => SwipeRightGesture,
  SwipeRotateSequence: () => SwipeRotateSequence,
  SwipeTapSequence: () => SwipeTapSequence,
  SwipeUpGesture: () => SwipeUpGesture,
  TapAndHoldGesture: () => TapAndHoldGesture,
  TapCancelGesture: () => TapCancelGesture,
  TapGesture: () => TapGesture,
  TapHoldSequence: () => TapHoldSequence,
  TapSwipeSequence: () => TapSwipeSequence,
  TapTapSwipeSequence: () => TapTapSwipeSequence,
  ThreeFingerSwipeGesture: () => ThreeFingerSwipeGesture,
  ThreeFingerTapGesture: () => ThreeFingerTapGesture,
  TripleTapGesture: () => TripleTapGesture,
  TwoFingerSwipeGesture: () => TwoFingerSwipeGesture,
  TwoFingerTapGesture: () => TwoFingerTapGesture,
  VeryLongPressGesture: () => VeryLongPressGesture,
  useCircularSwipe: () => useCircularSwipe,
  useCompress: () => useCompress,
  useCornerSwipe: () => useCornerSwipe,
  useCurvedSwipe: () => useCurvedSwipe,
  useDiagonalSwipe: () => useDiagonalSwipe,
  useDoubleTap: () => useDoubleTap,
  useDrag: () => useDrag,
  useDragAndDrop: () => useDragAndDrop,
  useEdgeSwipe: () => useEdgeSwipe,
  useFingerGather: () => useFingerGather,
  useFingerSpread: () => useFingerSpread,
  useFourFingerTap: () => useFourFingerTap,
  useLongPress: () => useLongPress,
  useMultiFingerDrag: () => useMultiFingerDrag,
  useMultiStep: () => useMultiStep,
  usePan: () => usePan,
  usePinch: () => usePinch,
  usePinchRotate: () => usePinchRotate,
  usePressForce: () => usePressForce,
  useQuadTap: () => useQuadTap,
  useRotation: () => useRotation,
  useStretch: () => useStretch,
  useSwipeDown: () => useSwipeDown,
  useSwipeLeft: () => useSwipeLeft,
  useSwipeRight: () => useSwipeRight,
  useSwipeRotate: () => useSwipeRotate,
  useSwipeTap: () => useSwipeTap,
  useSwipeUp: () => useSwipeUp,
  useTap: () => useTap,
  useTapAndHold: () => useTapAndHold,
  useTapCancel: () => useTapCancel,
  useTapHold: () => useTapHold,
  useTapSwipe: () => useTapSwipe,
  useTapTapSwipe: () => useTapTapSwipe,
  useThreeFingerSwipe: () => useThreeFingerSwipe,
  useThreeFingerTap: () => useThreeFingerTap,
  useTripleTap: () => useTripleTap,
  useTwoFingerSwipe: () => useTwoFingerSwipe,
  useTwoFingerTap: () => useTwoFingerTap,
  useVeryLongPress: () => useVeryLongPress
});
module.exports = __toCommonJS(index_exports);

// src/gesture-kit-basic-touch/components/TapGesture.tsx
var import_react = __toESM(require("react"));
var import_react_native_gesture_handler = require("react-native-gesture-handler");
var TapGesture = ({
  children,
  onTap,
  numberOfTaps = 1,
  maxDuration,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react.useMemo)(() => {
    let g = import_react_native_gesture_handler.Gesture.Tap().numberOfTaps(numberOfTaps);
    if (maxDuration !== void 0) g = g.maxDuration(maxDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        numberOfTaps
      };
      onTap(event);
    });
    return g.enabled(enabled);
  }, [onTap, numberOfTaps, maxDuration, maxDistance, enabled]);
  return /* @__PURE__ */ import_react.default.createElement(import_react_native_gesture_handler.GestureDetector, { gesture }, children);
};
TapGesture.displayName = "TapGesture";

// src/gesture-kit-basic-touch/components/DoubleTapGesture.tsx
var import_react2 = __toESM(require("react"));
var import_react_native_gesture_handler2 = require("react-native-gesture-handler");
var DoubleTapGesture = ({
  children,
  onDoubleTap,
  maxDelay,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react2.useMemo)(() => {
    let g = import_react_native_gesture_handler2.Gesture.Tap().numberOfTaps(2);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        numberOfTaps: 2
      };
      onDoubleTap(event);
    });
    return g.enabled(enabled);
  }, [onDoubleTap, maxDelay, maxDistance, enabled]);
  return /* @__PURE__ */ import_react2.default.createElement(import_react_native_gesture_handler2.GestureDetector, { gesture }, children);
};
DoubleTapGesture.displayName = "DoubleTapGesture";

// src/gesture-kit-basic-touch/components/TripleTapGesture.tsx
var import_react3 = __toESM(require("react"));
var import_react_native_gesture_handler3 = require("react-native-gesture-handler");
var TripleTapGesture = ({
  children,
  onTripleTap,
  maxDelay,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react3.useMemo)(() => {
    let g = import_react_native_gesture_handler3.Gesture.Tap().numberOfTaps(3);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        numberOfTaps: 3
      };
      onTripleTap(event);
    });
    return g.enabled(enabled);
  }, [onTripleTap, maxDelay, maxDistance, enabled]);
  return /* @__PURE__ */ import_react3.default.createElement(import_react_native_gesture_handler3.GestureDetector, { gesture }, children);
};
TripleTapGesture.displayName = "TripleTapGesture";

// src/gesture-kit-basic-touch/components/QuadTapGesture.tsx
var import_react4 = __toESM(require("react"));
var import_react_native_gesture_handler4 = require("react-native-gesture-handler");
var QuadTapGesture = ({
  children,
  onQuadTap,
  maxDelay,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react4.useMemo)(() => {
    let g = import_react_native_gesture_handler4.Gesture.Tap().numberOfTaps(4);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        numberOfTaps: 4
      };
      onQuadTap(event);
    });
    return g.enabled(enabled);
  }, [onQuadTap, maxDelay, maxDistance, enabled]);
  return /* @__PURE__ */ import_react4.default.createElement(import_react_native_gesture_handler4.GestureDetector, { gesture }, children);
};
QuadTapGesture.displayName = "QuadTapGesture";

// src/gesture-kit-basic-touch/components/LongPressGesture.tsx
var import_react5 = __toESM(require("react"));
var import_react_native_gesture_handler5 = require("react-native-gesture-handler");
var LongPressGesture = ({
  children,
  onLongPress,
  onPressIn,
  onPressOut,
  minDuration = 500,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react5.useMemo)(() => {
    let g = import_react_native_gesture_handler5.Gesture.LongPress().minDuration(minDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    if (onPressIn) {
      g = g.onStart((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          duration: e.duration
        };
        onPressIn(event);
      });
    }
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        duration: e.duration
      };
      onLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          duration: e.duration
        };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
  return /* @__PURE__ */ import_react5.default.createElement(import_react_native_gesture_handler5.GestureDetector, { gesture }, children);
};
LongPressGesture.displayName = "LongPressGesture";

// src/gesture-kit-basic-touch/components/VeryLongPressGesture.tsx
var import_react6 = __toESM(require("react"));
var import_react_native_gesture_handler6 = require("react-native-gesture-handler");
var VeryLongPressGesture = ({
  children,
  onVeryLongPress,
  onPressIn,
  onPressOut,
  minDuration = 1500,
  maxDistance,
  enabled = true
}) => {
  const gesture = (0, import_react6.useMemo)(() => {
    let g = import_react_native_gesture_handler6.Gesture.LongPress().minDuration(minDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    if (onPressIn) {
      g = g.onStart((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          duration: e.duration
        };
        onPressIn(event);
      });
    }
    g = g.onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        duration: e.duration
      };
      onVeryLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          duration: e.duration
        };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onVeryLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
  return /* @__PURE__ */ import_react6.default.createElement(import_react_native_gesture_handler6.GestureDetector, { gesture }, children);
};
VeryLongPressGesture.displayName = "VeryLongPressGesture";

// src/gesture-kit-basic-touch/components/TapAndHoldGesture.tsx
var import_react7 = __toESM(require("react"));
var import_react_native_gesture_handler7 = require("react-native-gesture-handler");
var TapAndHoldGesture = ({
  children,
  onTapAndHold,
  onTap,
  holdDuration = 500,
  enabled = true
}) => {
  const gesture = (0, import_react7.useMemo)(() => {
    const holdGesture = import_react_native_gesture_handler7.Gesture.LongPress().minDuration(holdDuration).onEnd((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        duration: e.duration
      };
      onTapAndHold(event);
    }).enabled(enabled);
    if (onTap) {
      const tapGesture = import_react_native_gesture_handler7.Gesture.Tap().onEnd((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          numberOfTaps: 1
        };
        onTap(event);
      }).enabled(enabled);
      return import_react_native_gesture_handler7.Gesture.Exclusive(holdGesture, tapGesture);
    }
    return holdGesture;
  }, [onTapAndHold, onTap, holdDuration, enabled]);
  return /* @__PURE__ */ import_react7.default.createElement(import_react_native_gesture_handler7.GestureDetector, { gesture }, children);
};
TapAndHoldGesture.displayName = "TapAndHoldGesture";

// src/gesture-kit-basic-touch/components/TapCancelGesture.tsx
var import_react8 = __toESM(require("react"));
var import_react_native_gesture_handler8 = require("react-native-gesture-handler");
var TapCancelGesture = ({
  children,
  onTapCancel,
  onTapStart,
  maxDuration,
  enabled = true
}) => {
  const gesture = (0, import_react8.useMemo)(() => {
    let g = import_react_native_gesture_handler8.Gesture.Tap();
    if (maxDuration !== void 0) g = g.maxDuration(maxDuration);
    if (onTapStart) {
      g = g.onBegin((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y
        };
        onTapStart(event);
      });
    }
    g = g.onTouchesCancelled(() => {
      onTapCancel({ absoluteX: 0, absoluteY: 0, x: 0, y: 0 });
    });
    return g.enabled(enabled);
  }, [onTapCancel, onTapStart, maxDuration, enabled]);
  return /* @__PURE__ */ import_react8.default.createElement(import_react_native_gesture_handler8.GestureDetector, { gesture }, children);
};
TapCancelGesture.displayName = "TapCancelGesture";

// src/gesture-kit-basic-touch/components/PressForceGesture.tsx
var import_react9 = __toESM(require("react"));
var import_react_native_gesture_handler9 = require("react-native-gesture-handler");
var PressForceGesture = ({
  children,
  onPressForce,
  forceThreshold = 0.5,
  enabled = true
}) => {
  const gesture = (0, import_react9.useMemo)(() => {
    const g = import_react_native_gesture_handler9.Gesture.ForceTouch().minForce(forceThreshold).onStart((e) => {
      const event = {
        absoluteX: e.absoluteX,
        absoluteY: e.absoluteY,
        x: e.x,
        y: e.y,
        force: e.force
      };
      onPressForce(event);
    }).enabled(enabled);
    return g;
  }, [onPressForce, forceThreshold, enabled]);
  return /* @__PURE__ */ import_react9.default.createElement(import_react_native_gesture_handler9.GestureDetector, { gesture }, children);
};
PressForceGesture.displayName = "PressForceGesture";

// src/gesture-kit-basic-touch/hooks/useTap.ts
var import_react10 = require("react");
var import_react_native_gesture_handler10 = require("react-native-gesture-handler");
function useTap(options) {
  const { onTap, numberOfTaps = 1, maxDuration, maxDistance, enabled = true } = options;
  return (0, import_react10.useMemo)(() => {
    let g = import_react_native_gesture_handler10.Gesture.Tap().numberOfTaps(numberOfTaps);
    if (maxDuration !== void 0) g = g.maxDuration(maxDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps };
      onTap(event);
    });
    return g.enabled(enabled);
  }, [onTap, numberOfTaps, maxDuration, maxDistance, enabled]);
}

// src/gesture-kit-basic-touch/hooks/useDoubleTap.ts
var import_react11 = require("react");
var import_react_native_gesture_handler11 = require("react-native-gesture-handler");
function useDoubleTap(options) {
  const { onDoubleTap, maxDelay, maxDistance, enabled = true } = options;
  return (0, import_react11.useMemo)(() => {
    let g = import_react_native_gesture_handler11.Gesture.Tap().numberOfTaps(2);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 2 };
      onDoubleTap(event);
    });
    return g.enabled(enabled);
  }, [onDoubleTap, maxDelay, maxDistance, enabled]);
}

// src/gesture-kit-basic-touch/hooks/useTripleTap.ts
var import_react12 = require("react");
var import_react_native_gesture_handler12 = require("react-native-gesture-handler");
function useTripleTap(options) {
  const { onTripleTap, maxDelay, maxDistance, enabled = true } = options;
  return (0, import_react12.useMemo)(() => {
    let g = import_react_native_gesture_handler12.Gesture.Tap().numberOfTaps(3);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 3 };
      onTripleTap(event);
    });
    return g.enabled(enabled);
  }, [onTripleTap, maxDelay, maxDistance, enabled]);
}

// src/gesture-kit-basic-touch/hooks/useQuadTap.ts
var import_react13 = require("react");
var import_react_native_gesture_handler13 = require("react-native-gesture-handler");
function useQuadTap(options) {
  const { onQuadTap, maxDelay, maxDistance, enabled = true } = options;
  return (0, import_react13.useMemo)(() => {
    let g = import_react_native_gesture_handler13.Gesture.Tap().numberOfTaps(4);
    if (maxDelay !== void 0) g = g.maxDuration(maxDelay);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 4 };
      onQuadTap(event);
    });
    return g.enabled(enabled);
  }, [onQuadTap, maxDelay, maxDistance, enabled]);
}

// src/gesture-kit-basic-touch/hooks/useLongPress.ts
var import_react14 = require("react");
var import_react_native_gesture_handler14 = require("react-native-gesture-handler");
function useLongPress(options) {
  const { onLongPress, onPressIn, onPressOut, minDuration = 500, maxDistance, enabled = true } = options;
  return (0, import_react14.useMemo)(() => {
    let g = import_react_native_gesture_handler14.Gesture.LongPress().minDuration(minDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    if (onPressIn) {
      g = g.onStart((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressIn(event);
      });
    }
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
      onLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
}

// src/gesture-kit-basic-touch/hooks/useVeryLongPress.ts
var import_react15 = require("react");
var import_react_native_gesture_handler15 = require("react-native-gesture-handler");
function useVeryLongPress(options) {
  const { onVeryLongPress, onPressIn, onPressOut, minDuration = 1500, maxDistance, enabled = true } = options;
  return (0, import_react15.useMemo)(() => {
    let g = import_react_native_gesture_handler15.Gesture.LongPress().minDuration(minDuration);
    if (maxDistance !== void 0) g = g.maxDistance(maxDistance);
    if (onPressIn) {
      g = g.onStart((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressIn(event);
      });
    }
    g = g.onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
      onVeryLongPress(event);
    });
    if (onPressOut) {
      g = g.onFinalize((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
        onPressOut(event);
      });
    }
    return g.enabled(enabled);
  }, [onVeryLongPress, onPressIn, onPressOut, minDuration, maxDistance, enabled]);
}

// src/gesture-kit-basic-touch/hooks/useTapAndHold.ts
var import_react16 = require("react");
var import_react_native_gesture_handler16 = require("react-native-gesture-handler");
function useTapAndHold(options) {
  const { onTapAndHold, onTap, holdDuration = 500, enabled = true } = options;
  return (0, import_react16.useMemo)(() => {
    const holdGesture = import_react_native_gesture_handler16.Gesture.LongPress().minDuration(holdDuration).onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
      onTapAndHold(event);
    }).enabled(enabled);
    if (onTap) {
      const tapGesture = import_react_native_gesture_handler16.Gesture.Tap().onEnd((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 1 };
        onTap(event);
      }).enabled(enabled);
      return import_react_native_gesture_handler16.Gesture.Exclusive(holdGesture, tapGesture);
    }
    return holdGesture;
  }, [onTapAndHold, onTap, holdDuration, enabled]);
}

// src/gesture-kit-basic-touch/hooks/useTapCancel.ts
var import_react17 = require("react");
var import_react_native_gesture_handler17 = require("react-native-gesture-handler");
function useTapCancel(options) {
  const { onTapCancel, onTapStart, maxDuration, enabled = true } = options;
  return (0, import_react17.useMemo)(() => {
    let g = import_react_native_gesture_handler17.Gesture.Tap();
    if (maxDuration !== void 0) g = g.maxDuration(maxDuration);
    if (onTapStart) {
      g = g.onBegin((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y };
        onTapStart(event);
      });
    }
    g = g.onTouchesCancelled(() => {
      onTapCancel({ absoluteX: 0, absoluteY: 0, x: 0, y: 0 });
    });
    return g.enabled(enabled);
  }, [onTapCancel, onTapStart, maxDuration, enabled]);
}

// src/gesture-kit-basic-touch/hooks/usePressForce.ts
var import_react18 = require("react");
var import_react_native_gesture_handler18 = require("react-native-gesture-handler");
function usePressForce(options) {
  const { onPressForce, forceThreshold = 0.5, enabled = true } = options;
  return (0, import_react18.useMemo)(() => {
    const g = import_react_native_gesture_handler18.Gesture.ForceTouch().minForce(forceThreshold).onStart((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, force: e.force };
      onPressForce(event);
    }).enabled(enabled);
    return g;
  }, [onPressForce, forceThreshold, enabled]);
}

// src/gesture-kit-drag-pan/components/PanGesture.tsx
var import_react19 = __toESM(require("react"));
var import_react_native = require("react-native");
var PanGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react19.default.createElement(import_react_native.View, { ...rest }, children);
};
PanGesture.displayName = "PanGesture";

// src/gesture-kit-drag-pan/components/DragGesture.tsx
var import_react20 = __toESM(require("react"));
var import_react_native2 = require("react-native");
var DragGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react20.default.createElement(import_react_native2.View, { ...rest }, children);
};
DragGesture.displayName = "DragGesture";

// src/gesture-kit-drag-pan/components/DragAndDropGesture.tsx
var import_react21 = __toESM(require("react"));
var import_react_native3 = require("react-native");
var DragAndDropGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react21.default.createElement(import_react_native3.View, { ...rest }, children);
};
DragAndDropGesture.displayName = "DragAndDropGesture";

// src/gesture-kit-drag-pan/components/SwipeUpGesture.tsx
var import_react22 = __toESM(require("react"));
var import_react_native4 = require("react-native");
var SwipeUpGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react22.default.createElement(import_react_native4.View, { ...rest }, children);
};
SwipeUpGesture.displayName = "SwipeUpGesture";

// src/gesture-kit-drag-pan/components/SwipeDownGesture.tsx
var import_react23 = __toESM(require("react"));
var import_react_native5 = require("react-native");
var SwipeDownGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react23.default.createElement(import_react_native5.View, { ...rest }, children);
};
SwipeDownGesture.displayName = "SwipeDownGesture";

// src/gesture-kit-drag-pan/components/SwipeLeftGesture.tsx
var import_react24 = __toESM(require("react"));
var import_react_native6 = require("react-native");
var SwipeLeftGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react24.default.createElement(import_react_native6.View, { ...rest }, children);
};
SwipeLeftGesture.displayName = "SwipeLeftGesture";

// src/gesture-kit-drag-pan/components/SwipeRightGesture.tsx
var import_react25 = __toESM(require("react"));
var import_react_native7 = require("react-native");
var SwipeRightGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react25.default.createElement(import_react_native7.View, { ...rest }, children);
};
SwipeRightGesture.displayName = "SwipeRightGesture";

// src/gesture-kit-drag-pan/components/EdgeSwipeGesture.tsx
var import_react26 = __toESM(require("react"));
var import_react_native8 = require("react-native");
var EdgeSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react26.default.createElement(import_react_native8.View, { ...rest }, children);
};
EdgeSwipeGesture.displayName = "EdgeSwipeGesture";

// src/gesture-kit-drag-pan/components/CornerSwipeGesture.tsx
var import_react27 = __toESM(require("react"));
var import_react_native9 = require("react-native");
var CornerSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react27.default.createElement(import_react_native9.View, { ...rest }, children);
};
CornerSwipeGesture.displayName = "CornerSwipeGesture";

// src/gesture-kit-drag-pan/components/DiagonalSwipeGesture.tsx
var import_react28 = __toESM(require("react"));
var import_react_native10 = require("react-native");
var DiagonalSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react28.default.createElement(import_react_native10.View, { ...rest }, children);
};
DiagonalSwipeGesture.displayName = "DiagonalSwipeGesture";

// src/gesture-kit-drag-pan/components/CurvedSwipeGesture.tsx
var import_react29 = __toESM(require("react"));
var import_react_native11 = require("react-native");
var CurvedSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react29.default.createElement(import_react_native11.View, { ...rest }, children);
};
CurvedSwipeGesture.displayName = "CurvedSwipeGesture";

// src/gesture-kit-drag-pan/components/CircularSwipeGesture.tsx
var import_react30 = __toESM(require("react"));
var import_react_native12 = require("react-native");
var CircularSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react30.default.createElement(import_react_native12.View, { ...rest }, children);
};
CircularSwipeGesture.displayName = "CircularSwipeGesture";

// src/gesture-kit-drag-pan/hooks/usePan.ts
var import_react31 = require("react");
function usePan(options = {}) {
  const { enabled = true } = options;
  return (0, import_react31.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useDrag.ts
var import_react32 = require("react");
function useDrag(options = {}) {
  const { enabled = true } = options;
  return (0, import_react32.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useDragAndDrop.ts
var import_react33 = require("react");
function useDragAndDrop(options = {}) {
  const { enabled = true } = options;
  return (0, import_react33.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useSwipeUp.ts
var import_react34 = require("react");
function useSwipeUp(options = {}) {
  const { enabled = true } = options;
  return (0, import_react34.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useSwipeDown.ts
var import_react35 = require("react");
function useSwipeDown(options = {}) {
  const { enabled = true } = options;
  return (0, import_react35.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useSwipeLeft.ts
var import_react36 = require("react");
function useSwipeLeft(options = {}) {
  const { enabled = true } = options;
  return (0, import_react36.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useSwipeRight.ts
var import_react37 = require("react");
function useSwipeRight(options = {}) {
  const { enabled = true } = options;
  return (0, import_react37.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useEdgeSwipe.ts
var import_react38 = require("react");
function useEdgeSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react38.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useCornerSwipe.ts
var import_react39 = require("react");
function useCornerSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react39.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useDiagonalSwipe.ts
var import_react40 = require("react");
function useDiagonalSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react40.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useCurvedSwipe.ts
var import_react41 = require("react");
function useCurvedSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react41.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useCircularSwipe.ts
var import_react42 = require("react");
function useCircularSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react42.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/components/TwoFingerTapGesture.tsx
var import_react43 = __toESM(require("react"));
var import_react_native13 = require("react-native");
var TwoFingerTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react43.default.createElement(import_react_native13.View, { ...rest }, children);
};
TwoFingerTapGesture.displayName = "TwoFingerTapGesture";

// src/gesture-kit-multi-finger/components/ThreeFingerTapGesture.tsx
var import_react44 = __toESM(require("react"));
var import_react_native14 = require("react-native");
var ThreeFingerTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react44.default.createElement(import_react_native14.View, { ...rest }, children);
};
ThreeFingerTapGesture.displayName = "ThreeFingerTapGesture";

// src/gesture-kit-multi-finger/components/FourFingerTapGesture.tsx
var import_react45 = __toESM(require("react"));
var import_react_native15 = require("react-native");
var FourFingerTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react45.default.createElement(import_react_native15.View, { ...rest }, children);
};
FourFingerTapGesture.displayName = "FourFingerTapGesture";

// src/gesture-kit-multi-finger/components/TwoFingerSwipeGesture.tsx
var import_react46 = __toESM(require("react"));
var import_react_native16 = require("react-native");
var TwoFingerSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react46.default.createElement(import_react_native16.View, { ...rest }, children);
};
TwoFingerSwipeGesture.displayName = "TwoFingerSwipeGesture";

// src/gesture-kit-multi-finger/components/ThreeFingerSwipeGesture.tsx
var import_react47 = __toESM(require("react"));
var import_react_native17 = require("react-native");
var ThreeFingerSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react47.default.createElement(import_react_native17.View, { ...rest }, children);
};
ThreeFingerSwipeGesture.displayName = "ThreeFingerSwipeGesture";

// src/gesture-kit-multi-finger/components/MultiFingerDragGesture.tsx
var import_react48 = __toESM(require("react"));
var import_react_native18 = require("react-native");
var MultiFingerDragGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react48.default.createElement(import_react_native18.View, { ...rest }, children);
};
MultiFingerDragGesture.displayName = "MultiFingerDragGesture";

// src/gesture-kit-multi-finger/components/FingerSpreadGesture.tsx
var import_react49 = __toESM(require("react"));
var import_react_native19 = require("react-native");
var FingerSpreadGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react49.default.createElement(import_react_native19.View, { ...rest }, children);
};
FingerSpreadGesture.displayName = "FingerSpreadGesture";

// src/gesture-kit-multi-finger/components/FingerGatherGesture.tsx
var import_react50 = __toESM(require("react"));
var import_react_native20 = require("react-native");
var FingerGatherGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react50.default.createElement(import_react_native20.View, { ...rest }, children);
};
FingerGatherGesture.displayName = "FingerGatherGesture";

// src/gesture-kit-multi-finger/hooks/useTwoFingerTap.ts
var import_react51 = require("react");
function useTwoFingerTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react51.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useThreeFingerTap.ts
var import_react52 = require("react");
function useThreeFingerTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react52.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useFourFingerTap.ts
var import_react53 = require("react");
function useFourFingerTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react53.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useTwoFingerSwipe.ts
var import_react54 = require("react");
function useTwoFingerSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react54.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useThreeFingerSwipe.ts
var import_react55 = require("react");
function useThreeFingerSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react55.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useMultiFingerDrag.ts
var import_react56 = require("react");
function useMultiFingerDrag(options = {}) {
  const { enabled = true } = options;
  return (0, import_react56.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useFingerSpread.ts
var import_react57 = require("react");
function useFingerSpread(options = {}) {
  const { enabled = true } = options;
  return (0, import_react57.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useFingerGather.ts
var import_react58 = require("react");
function useFingerGather(options = {}) {
  const { enabled = true } = options;
  return (0, import_react58.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/components/TapSwipeSequence.tsx
var import_react59 = __toESM(require("react"));
var import_react_native21 = require("react-native");
var TapSwipeSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react59.default.createElement(import_react_native21.View, { ...rest }, children);
};
TapSwipeSequence.displayName = "TapSwipeSequence";

// src/gesture-kit-sequences/components/SwipeTapSequence.tsx
var import_react60 = __toESM(require("react"));
var import_react_native22 = require("react-native");
var SwipeTapSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react60.default.createElement(import_react_native22.View, { ...rest }, children);
};
SwipeTapSequence.displayName = "SwipeTapSequence";

// src/gesture-kit-sequences/components/TapHoldSequence.tsx
var import_react61 = __toESM(require("react"));
var import_react_native23 = require("react-native");
var TapHoldSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react61.default.createElement(import_react_native23.View, { ...rest }, children);
};
TapHoldSequence.displayName = "TapHoldSequence";

// src/gesture-kit-sequences/components/SwipeRotateSequence.tsx
var import_react62 = __toESM(require("react"));
var import_react_native24 = require("react-native");
var SwipeRotateSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react62.default.createElement(import_react_native24.View, { ...rest }, children);
};
SwipeRotateSequence.displayName = "SwipeRotateSequence";

// src/gesture-kit-sequences/components/TapTapSwipeSequence.tsx
var import_react63 = __toESM(require("react"));
var import_react_native25 = require("react-native");
var TapTapSwipeSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react63.default.createElement(import_react_native25.View, { ...rest }, children);
};
TapTapSwipeSequence.displayName = "TapTapSwipeSequence";

// src/gesture-kit-sequences/components/MultiStepGesture.tsx
var import_react64 = __toESM(require("react"));
var import_react_native26 = require("react-native");
var MultiStepGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react64.default.createElement(import_react_native26.View, { ...rest }, children);
};
MultiStepGesture.displayName = "MultiStepGesture";

// src/gesture-kit-sequences/hooks/useTapSwipe.ts
var import_react65 = require("react");
function useTapSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react65.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/hooks/useSwipeTap.ts
var import_react66 = require("react");
function useSwipeTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react66.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/hooks/useTapHold.ts
var import_react67 = require("react");
function useTapHold(options = {}) {
  const { enabled = true } = options;
  return (0, import_react67.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/hooks/useSwipeRotate.ts
var import_react68 = require("react");
function useSwipeRotate(options = {}) {
  const { enabled = true } = options;
  return (0, import_react68.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/hooks/useTapTapSwipe.ts
var import_react69 = require("react");
function useTapTapSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react69.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/hooks/useMultiStep.ts
var import_react70 = require("react");
function useMultiStep(options = {}) {
  const { enabled = true } = options;
  return (0, import_react70.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-transform/components/PinchGesture.tsx
var import_react71 = __toESM(require("react"));
var import_react_native27 = require("react-native");
var PinchGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react71.default.createElement(import_react_native27.View, { ...rest }, children);
};
PinchGesture.displayName = "PinchGesture";

// src/gesture-kit-transform/components/RotationGesture.tsx
var import_react72 = __toESM(require("react"));
var import_react_native28 = require("react-native");
var RotationGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react72.default.createElement(import_react_native28.View, { ...rest }, children);
};
RotationGesture.displayName = "RotationGesture";

// src/gesture-kit-transform/components/PinchRotateGesture.tsx
var import_react73 = __toESM(require("react"));
var import_react_native29 = require("react-native");
var PinchRotateGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react73.default.createElement(import_react_native29.View, { ...rest }, children);
};
PinchRotateGesture.displayName = "PinchRotateGesture";

// src/gesture-kit-transform/components/StretchGesture.tsx
var import_react74 = __toESM(require("react"));
var import_react_native30 = require("react-native");
var StretchGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react74.default.createElement(import_react_native30.View, { ...rest }, children);
};
StretchGesture.displayName = "StretchGesture";

// src/gesture-kit-transform/components/CompressGesture.tsx
var import_react75 = __toESM(require("react"));
var import_react_native31 = require("react-native");
var CompressGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react75.default.createElement(import_react_native31.View, { ...rest }, children);
};
CompressGesture.displayName = "CompressGesture";

// src/gesture-kit-transform/hooks/usePinch.ts
var import_react76 = require("react");
function usePinch(options = {}) {
  const { enabled = true } = options;
  return (0, import_react76.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-transform/hooks/useRotation.ts
var import_react77 = require("react");
function useRotation(options = {}) {
  const { enabled = true } = options;
  return (0, import_react77.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-transform/hooks/usePinchRotate.ts
var import_react78 = require("react");
function usePinchRotate(options = {}) {
  const { enabled = true } = options;
  return (0, import_react78.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-transform/hooks/useStretch.ts
var import_react79 = require("react");
function useStretch(options = {}) {
  const { enabled = true } = options;
  return (0, import_react79.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-transform/hooks/useCompress.ts
var import_react80 = require("react");
function useCompress(options = {}) {
  const { enabled = true } = options;
  return (0, import_react80.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CircularSwipeGesture,
  CompressGesture,
  CornerSwipeGesture,
  CurvedSwipeGesture,
  DiagonalSwipeGesture,
  DoubleTapGesture,
  DragAndDropGesture,
  DragGesture,
  EdgeSwipeGesture,
  FingerGatherGesture,
  FingerSpreadGesture,
  FourFingerTapGesture,
  LongPressGesture,
  MultiFingerDragGesture,
  MultiStepGesture,
  PanGesture,
  PinchGesture,
  PinchRotateGesture,
  PressForceGesture,
  QuadTapGesture,
  RotationGesture,
  StretchGesture,
  SwipeDownGesture,
  SwipeLeftGesture,
  SwipeRightGesture,
  SwipeRotateSequence,
  SwipeTapSequence,
  SwipeUpGesture,
  TapAndHoldGesture,
  TapCancelGesture,
  TapGesture,
  TapHoldSequence,
  TapSwipeSequence,
  TapTapSwipeSequence,
  ThreeFingerSwipeGesture,
  ThreeFingerTapGesture,
  TripleTapGesture,
  TwoFingerSwipeGesture,
  TwoFingerTapGesture,
  VeryLongPressGesture,
  useCircularSwipe,
  useCompress,
  useCornerSwipe,
  useCurvedSwipe,
  useDiagonalSwipe,
  useDoubleTap,
  useDrag,
  useDragAndDrop,
  useEdgeSwipe,
  useFingerGather,
  useFingerSpread,
  useFourFingerTap,
  useLongPress,
  useMultiFingerDrag,
  useMultiStep,
  usePan,
  usePinch,
  usePinchRotate,
  usePressForce,
  useQuadTap,
  useRotation,
  useStretch,
  useSwipeDown,
  useSwipeLeft,
  useSwipeRight,
  useSwipeRotate,
  useSwipeTap,
  useSwipeUp,
  useTap,
  useTapAndHold,
  useTapCancel,
  useTapHold,
  useTapSwipe,
  useTapTapSwipe,
  useThreeFingerSwipe,
  useThreeFingerTap,
  useTripleTap,
  useTwoFingerSwipe,
  useTwoFingerTap,
  useVeryLongPress
});
