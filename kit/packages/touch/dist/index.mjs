// src/gesture-kit-basic-touch/components/TapGesture.tsx
import React, { useMemo } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
var TapGesture = ({
  children,
  onTap,
  numberOfTaps = 1,
  maxDuration,
  maxDistance,
  enabled = true
}) => {
  const gesture = useMemo(() => {
    let g = Gesture.Tap().numberOfTaps(numberOfTaps);
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
  return /* @__PURE__ */ React.createElement(GestureDetector, { gesture }, children);
};
TapGesture.displayName = "TapGesture";

// src/gesture-kit-basic-touch/components/DoubleTapGesture.tsx
import React2, { useMemo as useMemo2 } from "react";
import { Gesture as Gesture2, GestureDetector as GestureDetector2 } from "react-native-gesture-handler";
var DoubleTapGesture = ({
  children,
  onDoubleTap,
  maxDelay,
  maxDistance,
  enabled = true
}) => {
  const gesture = useMemo2(() => {
    let g = Gesture2.Tap().numberOfTaps(2);
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
  return /* @__PURE__ */ React2.createElement(GestureDetector2, { gesture }, children);
};
DoubleTapGesture.displayName = "DoubleTapGesture";

// src/gesture-kit-basic-touch/components/TripleTapGesture.tsx
import React3, { useMemo as useMemo3 } from "react";
import { Gesture as Gesture3, GestureDetector as GestureDetector3 } from "react-native-gesture-handler";
var TripleTapGesture = ({
  children,
  onTripleTap,
  maxDelay,
  maxDistance,
  enabled = true
}) => {
  const gesture = useMemo3(() => {
    let g = Gesture3.Tap().numberOfTaps(3);
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
  return /* @__PURE__ */ React3.createElement(GestureDetector3, { gesture }, children);
};
TripleTapGesture.displayName = "TripleTapGesture";

// src/gesture-kit-basic-touch/components/QuadTapGesture.tsx
import React4, { useMemo as useMemo4 } from "react";
import { Gesture as Gesture4, GestureDetector as GestureDetector4 } from "react-native-gesture-handler";
var QuadTapGesture = ({
  children,
  onQuadTap,
  maxDelay,
  maxDistance,
  enabled = true
}) => {
  const gesture = useMemo4(() => {
    let g = Gesture4.Tap().numberOfTaps(4);
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
  return /* @__PURE__ */ React4.createElement(GestureDetector4, { gesture }, children);
};
QuadTapGesture.displayName = "QuadTapGesture";

// src/gesture-kit-basic-touch/components/LongPressGesture.tsx
import React5, { useMemo as useMemo5 } from "react";
import { Gesture as Gesture5, GestureDetector as GestureDetector5 } from "react-native-gesture-handler";
var LongPressGesture = ({
  children,
  onLongPress,
  onPressIn,
  onPressOut,
  minDuration = 500,
  maxDistance,
  enabled = true
}) => {
  const gesture = useMemo5(() => {
    let g = Gesture5.LongPress().minDuration(minDuration);
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
  return /* @__PURE__ */ React5.createElement(GestureDetector5, { gesture }, children);
};
LongPressGesture.displayName = "LongPressGesture";

// src/gesture-kit-basic-touch/components/VeryLongPressGesture.tsx
import React6, { useMemo as useMemo6 } from "react";
import { Gesture as Gesture6, GestureDetector as GestureDetector6 } from "react-native-gesture-handler";
var VeryLongPressGesture = ({
  children,
  onVeryLongPress,
  onPressIn,
  onPressOut,
  minDuration = 1500,
  maxDistance,
  enabled = true
}) => {
  const gesture = useMemo6(() => {
    let g = Gesture6.LongPress().minDuration(minDuration);
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
  return /* @__PURE__ */ React6.createElement(GestureDetector6, { gesture }, children);
};
VeryLongPressGesture.displayName = "VeryLongPressGesture";

// src/gesture-kit-basic-touch/components/TapAndHoldGesture.tsx
import React7, { useMemo as useMemo7 } from "react";
import { Gesture as Gesture7, GestureDetector as GestureDetector7 } from "react-native-gesture-handler";
var TapAndHoldGesture = ({
  children,
  onTapAndHold,
  onTap,
  holdDuration = 500,
  enabled = true
}) => {
  const gesture = useMemo7(() => {
    const holdGesture = Gesture7.LongPress().minDuration(holdDuration).onEnd((e) => {
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
      const tapGesture = Gesture7.Tap().onEnd((e) => {
        const event = {
          absoluteX: e.absoluteX,
          absoluteY: e.absoluteY,
          x: e.x,
          y: e.y,
          numberOfTaps: 1
        };
        onTap(event);
      }).enabled(enabled);
      return Gesture7.Exclusive(holdGesture, tapGesture);
    }
    return holdGesture;
  }, [onTapAndHold, onTap, holdDuration, enabled]);
  return /* @__PURE__ */ React7.createElement(GestureDetector7, { gesture }, children);
};
TapAndHoldGesture.displayName = "TapAndHoldGesture";

// src/gesture-kit-basic-touch/components/TapCancelGesture.tsx
import React8, { useMemo as useMemo8 } from "react";
import { Gesture as Gesture8, GestureDetector as GestureDetector8 } from "react-native-gesture-handler";
var TapCancelGesture = ({
  children,
  onTapCancel,
  onTapStart,
  maxDuration,
  enabled = true
}) => {
  const gesture = useMemo8(() => {
    let g = Gesture8.Tap();
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
  return /* @__PURE__ */ React8.createElement(GestureDetector8, { gesture }, children);
};
TapCancelGesture.displayName = "TapCancelGesture";

// src/gesture-kit-basic-touch/components/PressForceGesture.tsx
import React9, { useMemo as useMemo9 } from "react";
import { Gesture as Gesture9, GestureDetector as GestureDetector9 } from "react-native-gesture-handler";
var PressForceGesture = ({
  children,
  onPressForce,
  forceThreshold = 0.5,
  enabled = true
}) => {
  const gesture = useMemo9(() => {
    const g = Gesture9.ForceTouch().minForce(forceThreshold).onStart((e) => {
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
  return /* @__PURE__ */ React9.createElement(GestureDetector9, { gesture }, children);
};
PressForceGesture.displayName = "PressForceGesture";

// src/gesture-kit-basic-touch/hooks/useTap.ts
import { useMemo as useMemo10 } from "react";
import { Gesture as Gesture10 } from "react-native-gesture-handler";
function useTap(options) {
  const { onTap, numberOfTaps = 1, maxDuration, maxDistance, enabled = true } = options;
  return useMemo10(() => {
    let g = Gesture10.Tap().numberOfTaps(numberOfTaps);
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
import { useMemo as useMemo11 } from "react";
import { Gesture as Gesture11 } from "react-native-gesture-handler";
function useDoubleTap(options) {
  const { onDoubleTap, maxDelay, maxDistance, enabled = true } = options;
  return useMemo11(() => {
    let g = Gesture11.Tap().numberOfTaps(2);
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
import { useMemo as useMemo12 } from "react";
import { Gesture as Gesture12 } from "react-native-gesture-handler";
function useTripleTap(options) {
  const { onTripleTap, maxDelay, maxDistance, enabled = true } = options;
  return useMemo12(() => {
    let g = Gesture12.Tap().numberOfTaps(3);
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
import { useMemo as useMemo13 } from "react";
import { Gesture as Gesture13 } from "react-native-gesture-handler";
function useQuadTap(options) {
  const { onQuadTap, maxDelay, maxDistance, enabled = true } = options;
  return useMemo13(() => {
    let g = Gesture13.Tap().numberOfTaps(4);
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
import { useMemo as useMemo14 } from "react";
import { Gesture as Gesture14 } from "react-native-gesture-handler";
function useLongPress(options) {
  const { onLongPress, onPressIn, onPressOut, minDuration = 500, maxDistance, enabled = true } = options;
  return useMemo14(() => {
    let g = Gesture14.LongPress().minDuration(minDuration);
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
import { useMemo as useMemo15 } from "react";
import { Gesture as Gesture15 } from "react-native-gesture-handler";
function useVeryLongPress(options) {
  const { onVeryLongPress, onPressIn, onPressOut, minDuration = 1500, maxDistance, enabled = true } = options;
  return useMemo15(() => {
    let g = Gesture15.LongPress().minDuration(minDuration);
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
import { useMemo as useMemo16 } from "react";
import { Gesture as Gesture16 } from "react-native-gesture-handler";
function useTapAndHold(options) {
  const { onTapAndHold, onTap, holdDuration = 500, enabled = true } = options;
  return useMemo16(() => {
    const holdGesture = Gesture16.LongPress().minDuration(holdDuration).onEnd((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, duration: e.duration };
      onTapAndHold(event);
    }).enabled(enabled);
    if (onTap) {
      const tapGesture = Gesture16.Tap().onEnd((e) => {
        const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, numberOfTaps: 1 };
        onTap(event);
      }).enabled(enabled);
      return Gesture16.Exclusive(holdGesture, tapGesture);
    }
    return holdGesture;
  }, [onTapAndHold, onTap, holdDuration, enabled]);
}

// src/gesture-kit-basic-touch/hooks/useTapCancel.ts
import { useMemo as useMemo17 } from "react";
import { Gesture as Gesture17 } from "react-native-gesture-handler";
function useTapCancel(options) {
  const { onTapCancel, onTapStart, maxDuration, enabled = true } = options;
  return useMemo17(() => {
    let g = Gesture17.Tap();
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
import { useMemo as useMemo18 } from "react";
import { Gesture as Gesture18 } from "react-native-gesture-handler";
function usePressForce(options) {
  const { onPressForce, forceThreshold = 0.5, enabled = true } = options;
  return useMemo18(() => {
    const g = Gesture18.ForceTouch().minForce(forceThreshold).onStart((e) => {
      const event = { absoluteX: e.absoluteX, absoluteY: e.absoluteY, x: e.x, y: e.y, force: e.force };
      onPressForce(event);
    }).enabled(enabled);
    return g;
  }, [onPressForce, forceThreshold, enabled]);
}

// src/gesture-kit-drag-pan/components/PanGesture.tsx
import React10 from "react";
import { View } from "react-native";
var PanGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React10.createElement(View, { ...rest }, children);
};
PanGesture.displayName = "PanGesture";

// src/gesture-kit-drag-pan/components/DragGesture.tsx
import React11 from "react";
import { View as View2 } from "react-native";
var DragGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React11.createElement(View2, { ...rest }, children);
};
DragGesture.displayName = "DragGesture";

// src/gesture-kit-drag-pan/components/DragAndDropGesture.tsx
import React12 from "react";
import { View as View3 } from "react-native";
var DragAndDropGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React12.createElement(View3, { ...rest }, children);
};
DragAndDropGesture.displayName = "DragAndDropGesture";

// src/gesture-kit-drag-pan/components/SwipeUpGesture.tsx
import React13 from "react";
import { View as View4 } from "react-native";
var SwipeUpGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React13.createElement(View4, { ...rest }, children);
};
SwipeUpGesture.displayName = "SwipeUpGesture";

// src/gesture-kit-drag-pan/components/SwipeDownGesture.tsx
import React14 from "react";
import { View as View5 } from "react-native";
var SwipeDownGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React14.createElement(View5, { ...rest }, children);
};
SwipeDownGesture.displayName = "SwipeDownGesture";

// src/gesture-kit-drag-pan/components/SwipeLeftGesture.tsx
import React15 from "react";
import { View as View6 } from "react-native";
var SwipeLeftGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React15.createElement(View6, { ...rest }, children);
};
SwipeLeftGesture.displayName = "SwipeLeftGesture";

// src/gesture-kit-drag-pan/components/SwipeRightGesture.tsx
import React16 from "react";
import { View as View7 } from "react-native";
var SwipeRightGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React16.createElement(View7, { ...rest }, children);
};
SwipeRightGesture.displayName = "SwipeRightGesture";

// src/gesture-kit-drag-pan/components/EdgeSwipeGesture.tsx
import React17 from "react";
import { View as View8 } from "react-native";
var EdgeSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React17.createElement(View8, { ...rest }, children);
};
EdgeSwipeGesture.displayName = "EdgeSwipeGesture";

// src/gesture-kit-drag-pan/components/CornerSwipeGesture.tsx
import React18 from "react";
import { View as View9 } from "react-native";
var CornerSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React18.createElement(View9, { ...rest }, children);
};
CornerSwipeGesture.displayName = "CornerSwipeGesture";

// src/gesture-kit-drag-pan/components/DiagonalSwipeGesture.tsx
import React19 from "react";
import { View as View10 } from "react-native";
var DiagonalSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React19.createElement(View10, { ...rest }, children);
};
DiagonalSwipeGesture.displayName = "DiagonalSwipeGesture";

// src/gesture-kit-drag-pan/components/CurvedSwipeGesture.tsx
import React20 from "react";
import { View as View11 } from "react-native";
var CurvedSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React20.createElement(View11, { ...rest }, children);
};
CurvedSwipeGesture.displayName = "CurvedSwipeGesture";

// src/gesture-kit-drag-pan/components/CircularSwipeGesture.tsx
import React21 from "react";
import { View as View12 } from "react-native";
var CircularSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React21.createElement(View12, { ...rest }, children);
};
CircularSwipeGesture.displayName = "CircularSwipeGesture";

// src/gesture-kit-drag-pan/hooks/usePan.ts
import { useMemo as useMemo19 } from "react";
function usePan(options = {}) {
  const { enabled = true } = options;
  return useMemo19(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useDrag.ts
import { useMemo as useMemo20 } from "react";
function useDrag(options = {}) {
  const { enabled = true } = options;
  return useMemo20(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useDragAndDrop.ts
import { useMemo as useMemo21 } from "react";
function useDragAndDrop(options = {}) {
  const { enabled = true } = options;
  return useMemo21(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useSwipeUp.ts
import { useMemo as useMemo22 } from "react";
function useSwipeUp(options = {}) {
  const { enabled = true } = options;
  return useMemo22(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useSwipeDown.ts
import { useMemo as useMemo23 } from "react";
function useSwipeDown(options = {}) {
  const { enabled = true } = options;
  return useMemo23(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useSwipeLeft.ts
import { useMemo as useMemo24 } from "react";
function useSwipeLeft(options = {}) {
  const { enabled = true } = options;
  return useMemo24(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useSwipeRight.ts
import { useMemo as useMemo25 } from "react";
function useSwipeRight(options = {}) {
  const { enabled = true } = options;
  return useMemo25(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useEdgeSwipe.ts
import { useMemo as useMemo26 } from "react";
function useEdgeSwipe(options = {}) {
  const { enabled = true } = options;
  return useMemo26(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useCornerSwipe.ts
import { useMemo as useMemo27 } from "react";
function useCornerSwipe(options = {}) {
  const { enabled = true } = options;
  return useMemo27(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useDiagonalSwipe.ts
import { useMemo as useMemo28 } from "react";
function useDiagonalSwipe(options = {}) {
  const { enabled = true } = options;
  return useMemo28(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useCurvedSwipe.ts
import { useMemo as useMemo29 } from "react";
function useCurvedSwipe(options = {}) {
  const { enabled = true } = options;
  return useMemo29(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-drag-pan/hooks/useCircularSwipe.ts
import { useMemo as useMemo30 } from "react";
function useCircularSwipe(options = {}) {
  const { enabled = true } = options;
  return useMemo30(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/components/TwoFingerTapGesture.tsx
import React22 from "react";
import { View as View13 } from "react-native";
var TwoFingerTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React22.createElement(View13, { ...rest }, children);
};
TwoFingerTapGesture.displayName = "TwoFingerTapGesture";

// src/gesture-kit-multi-finger/components/ThreeFingerTapGesture.tsx
import React23 from "react";
import { View as View14 } from "react-native";
var ThreeFingerTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React23.createElement(View14, { ...rest }, children);
};
ThreeFingerTapGesture.displayName = "ThreeFingerTapGesture";

// src/gesture-kit-multi-finger/components/FourFingerTapGesture.tsx
import React24 from "react";
import { View as View15 } from "react-native";
var FourFingerTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React24.createElement(View15, { ...rest }, children);
};
FourFingerTapGesture.displayName = "FourFingerTapGesture";

// src/gesture-kit-multi-finger/components/TwoFingerSwipeGesture.tsx
import React25 from "react";
import { View as View16 } from "react-native";
var TwoFingerSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React25.createElement(View16, { ...rest }, children);
};
TwoFingerSwipeGesture.displayName = "TwoFingerSwipeGesture";

// src/gesture-kit-multi-finger/components/ThreeFingerSwipeGesture.tsx
import React26 from "react";
import { View as View17 } from "react-native";
var ThreeFingerSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React26.createElement(View17, { ...rest }, children);
};
ThreeFingerSwipeGesture.displayName = "ThreeFingerSwipeGesture";

// src/gesture-kit-multi-finger/components/MultiFingerDragGesture.tsx
import React27 from "react";
import { View as View18 } from "react-native";
var MultiFingerDragGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React27.createElement(View18, { ...rest }, children);
};
MultiFingerDragGesture.displayName = "MultiFingerDragGesture";

// src/gesture-kit-multi-finger/components/FingerSpreadGesture.tsx
import React28 from "react";
import { View as View19 } from "react-native";
var FingerSpreadGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React28.createElement(View19, { ...rest }, children);
};
FingerSpreadGesture.displayName = "FingerSpreadGesture";

// src/gesture-kit-multi-finger/components/FingerGatherGesture.tsx
import React29 from "react";
import { View as View20 } from "react-native";
var FingerGatherGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React29.createElement(View20, { ...rest }, children);
};
FingerGatherGesture.displayName = "FingerGatherGesture";

// src/gesture-kit-multi-finger/hooks/useTwoFingerTap.ts
import { useMemo as useMemo31 } from "react";
function useTwoFingerTap(options = {}) {
  const { enabled = true } = options;
  return useMemo31(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useThreeFingerTap.ts
import { useMemo as useMemo32 } from "react";
function useThreeFingerTap(options = {}) {
  const { enabled = true } = options;
  return useMemo32(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useFourFingerTap.ts
import { useMemo as useMemo33 } from "react";
function useFourFingerTap(options = {}) {
  const { enabled = true } = options;
  return useMemo33(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useTwoFingerSwipe.ts
import { useMemo as useMemo34 } from "react";
function useTwoFingerSwipe(options = {}) {
  const { enabled = true } = options;
  return useMemo34(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useThreeFingerSwipe.ts
import { useMemo as useMemo35 } from "react";
function useThreeFingerSwipe(options = {}) {
  const { enabled = true } = options;
  return useMemo35(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useMultiFingerDrag.ts
import { useMemo as useMemo36 } from "react";
function useMultiFingerDrag(options = {}) {
  const { enabled = true } = options;
  return useMemo36(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useFingerSpread.ts
import { useMemo as useMemo37 } from "react";
function useFingerSpread(options = {}) {
  const { enabled = true } = options;
  return useMemo37(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-multi-finger/hooks/useFingerGather.ts
import { useMemo as useMemo38 } from "react";
function useFingerGather(options = {}) {
  const { enabled = true } = options;
  return useMemo38(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/components/TapSwipeSequence.tsx
import React30 from "react";
import { View as View21 } from "react-native";
var TapSwipeSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React30.createElement(View21, { ...rest }, children);
};
TapSwipeSequence.displayName = "TapSwipeSequence";

// src/gesture-kit-sequences/components/SwipeTapSequence.tsx
import React31 from "react";
import { View as View22 } from "react-native";
var SwipeTapSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React31.createElement(View22, { ...rest }, children);
};
SwipeTapSequence.displayName = "SwipeTapSequence";

// src/gesture-kit-sequences/components/TapHoldSequence.tsx
import React32 from "react";
import { View as View23 } from "react-native";
var TapHoldSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React32.createElement(View23, { ...rest }, children);
};
TapHoldSequence.displayName = "TapHoldSequence";

// src/gesture-kit-sequences/components/SwipeRotateSequence.tsx
import React33 from "react";
import { View as View24 } from "react-native";
var SwipeRotateSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React33.createElement(View24, { ...rest }, children);
};
SwipeRotateSequence.displayName = "SwipeRotateSequence";

// src/gesture-kit-sequences/components/TapTapSwipeSequence.tsx
import React34 from "react";
import { View as View25 } from "react-native";
var TapTapSwipeSequence = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React34.createElement(View25, { ...rest }, children);
};
TapTapSwipeSequence.displayName = "TapTapSwipeSequence";

// src/gesture-kit-sequences/components/MultiStepGesture.tsx
import React35 from "react";
import { View as View26 } from "react-native";
var MultiStepGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React35.createElement(View26, { ...rest }, children);
};
MultiStepGesture.displayName = "MultiStepGesture";

// src/gesture-kit-sequences/hooks/useTapSwipe.ts
import { useMemo as useMemo39 } from "react";
function useTapSwipe(options = {}) {
  const { enabled = true } = options;
  return useMemo39(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/hooks/useSwipeTap.ts
import { useMemo as useMemo40 } from "react";
function useSwipeTap(options = {}) {
  const { enabled = true } = options;
  return useMemo40(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/hooks/useTapHold.ts
import { useMemo as useMemo41 } from "react";
function useTapHold(options = {}) {
  const { enabled = true } = options;
  return useMemo41(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/hooks/useSwipeRotate.ts
import { useMemo as useMemo42 } from "react";
function useSwipeRotate(options = {}) {
  const { enabled = true } = options;
  return useMemo42(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/hooks/useTapTapSwipe.ts
import { useMemo as useMemo43 } from "react";
function useTapTapSwipe(options = {}) {
  const { enabled = true } = options;
  return useMemo43(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sequences/hooks/useMultiStep.ts
import { useMemo as useMemo44 } from "react";
function useMultiStep(options = {}) {
  const { enabled = true } = options;
  return useMemo44(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-transform/components/PinchGesture.tsx
import React36 from "react";
import { View as View27 } from "react-native";
var PinchGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React36.createElement(View27, { ...rest }, children);
};
PinchGesture.displayName = "PinchGesture";

// src/gesture-kit-transform/components/RotationGesture.tsx
import React37 from "react";
import { View as View28 } from "react-native";
var RotationGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React37.createElement(View28, { ...rest }, children);
};
RotationGesture.displayName = "RotationGesture";

// src/gesture-kit-transform/components/PinchRotateGesture.tsx
import React38 from "react";
import { View as View29 } from "react-native";
var PinchRotateGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React38.createElement(View29, { ...rest }, children);
};
PinchRotateGesture.displayName = "PinchRotateGesture";

// src/gesture-kit-transform/components/StretchGesture.tsx
import React39 from "react";
import { View as View30 } from "react-native";
var StretchGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React39.createElement(View30, { ...rest }, children);
};
StretchGesture.displayName = "StretchGesture";

// src/gesture-kit-transform/components/CompressGesture.tsx
import React40 from "react";
import { View as View31 } from "react-native";
var CompressGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React40.createElement(View31, { ...rest }, children);
};
CompressGesture.displayName = "CompressGesture";

// src/gesture-kit-transform/hooks/usePinch.ts
import { useMemo as useMemo45 } from "react";
function usePinch(options = {}) {
  const { enabled = true } = options;
  return useMemo45(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-transform/hooks/useRotation.ts
import { useMemo as useMemo46 } from "react";
function useRotation(options = {}) {
  const { enabled = true } = options;
  return useMemo46(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-transform/hooks/usePinchRotate.ts
import { useMemo as useMemo47 } from "react";
function usePinchRotate(options = {}) {
  const { enabled = true } = options;
  return useMemo47(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-transform/hooks/useStretch.ts
import { useMemo as useMemo48 } from "react";
function useStretch(options = {}) {
  const { enabled = true } = options;
  return useMemo48(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-transform/hooks/useCompress.ts
import { useMemo as useMemo49 } from "react";
function useCompress(options = {}) {
  const { enabled = true } = options;
  return useMemo49(() => {
    return { enabled };
  }, [enabled]);
}
export {
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
};
