// src/gesture-kit-sensor/components/ShakeGesture.tsx
import React from "react";
import { View } from "react-native";
var ShakeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React.createElement(View, { ...rest }, children);
};
ShakeGesture.displayName = "ShakeGesture";

// src/gesture-kit-sensor/components/TiltLeftGesture.tsx
import React2 from "react";
import { View as View2 } from "react-native";
var TiltLeftGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React2.createElement(View2, { ...rest }, children);
};
TiltLeftGesture.displayName = "TiltLeftGesture";

// src/gesture-kit-sensor/components/TiltRightGesture.tsx
import React3 from "react";
import { View as View3 } from "react-native";
var TiltRightGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React3.createElement(View3, { ...rest }, children);
};
TiltRightGesture.displayName = "TiltRightGesture";

// src/gesture-kit-sensor/components/TiltForwardGesture.tsx
import React4 from "react";
import { View as View4 } from "react-native";
var TiltForwardGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React4.createElement(View4, { ...rest }, children);
};
TiltForwardGesture.displayName = "TiltForwardGesture";

// src/gesture-kit-sensor/components/TiltBackwardGesture.tsx
import React5 from "react";
import { View as View5 } from "react-native";
var TiltBackwardGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React5.createElement(View5, { ...rest }, children);
};
TiltBackwardGesture.displayName = "TiltBackwardGesture";

// src/gesture-kit-sensor/components/FlipGesture.tsx
import React6 from "react";
import { View as View6 } from "react-native";
var FlipGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React6.createElement(View6, { ...rest }, children);
};
FlipGesture.displayName = "FlipGesture";

// src/gesture-kit-sensor/components/FaceUpDownGesture.tsx
import React7 from "react";
import { View as View7 } from "react-native";
var FaceUpDownGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React7.createElement(View7, { ...rest }, children);
};
FaceUpDownGesture.displayName = "FaceUpDownGesture";

// src/gesture-kit-sensor/components/FreeFallGesture.tsx
import React8 from "react";
import { View as View8 } from "react-native";
var FreeFallGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React8.createElement(View8, { ...rest }, children);
};
FreeFallGesture.displayName = "FreeFallGesture";

// src/gesture-kit-sensor/components/SwingGesture.tsx
import React9 from "react";
import { View as View9 } from "react-native";
var SwingGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React9.createElement(View9, { ...rest }, children);
};
SwingGesture.displayName = "SwingGesture";

// src/gesture-kit-sensor/components/CircularMotionGesture.tsx
import React10 from "react";
import { View as View10 } from "react-native";
var CircularMotionGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React10.createElement(View10, { ...rest }, children);
};
CircularMotionGesture.displayName = "CircularMotionGesture";

// src/gesture-kit-sensor/components/MultiAxisTiltGesture.tsx
import React11 from "react";
import { View as View11 } from "react-native";
var MultiAxisTiltGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React11.createElement(View11, { ...rest }, children);
};
MultiAxisTiltGesture.displayName = "MultiAxisTiltGesture";

// src/gesture-kit-sensor/hooks/useShake.ts
import { useMemo } from "react";
function useShake(options = {}) {
  const { enabled = true } = options;
  return useMemo(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useTiltLeft.ts
import { useMemo as useMemo2 } from "react";
function useTiltLeft(options = {}) {
  const { enabled = true } = options;
  return useMemo2(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useTiltRight.ts
import { useMemo as useMemo3 } from "react";
function useTiltRight(options = {}) {
  const { enabled = true } = options;
  return useMemo3(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useTiltForward.ts
import { useMemo as useMemo4 } from "react";
function useTiltForward(options = {}) {
  const { enabled = true } = options;
  return useMemo4(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useTiltBackward.ts
import { useMemo as useMemo5 } from "react";
function useTiltBackward(options = {}) {
  const { enabled = true } = options;
  return useMemo5(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useFlip.ts
import { useMemo as useMemo6 } from "react";
function useFlip(options = {}) {
  const { enabled = true } = options;
  return useMemo6(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useFaceUpDown.ts
import { useMemo as useMemo7 } from "react";
function useFaceUpDown(options = {}) {
  const { enabled = true } = options;
  return useMemo7(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useFreeFall.ts
import { useMemo as useMemo8 } from "react";
function useFreeFall(options = {}) {
  const { enabled = true } = options;
  return useMemo8(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useSwing.ts
import { useMemo as useMemo9 } from "react";
function useSwing(options = {}) {
  const { enabled = true } = options;
  return useMemo9(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useCircularMotion.ts
import { useMemo as useMemo10 } from "react";
function useCircularMotion(options = {}) {
  const { enabled = true } = options;
  return useMemo10(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useMultiAxisTilt.ts
import { useMemo as useMemo11 } from "react";
function useMultiAxisTilt(options = {}) {
  const { enabled = true } = options;
  return useMemo11(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/components/AirDrawGesture.tsx
import React12 from "react";
import { View as View12 } from "react-native";
var AirDrawGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React12.createElement(View12, { ...rest }, children);
};
AirDrawGesture.displayName = "AirDrawGesture";

// src/gesture-kit-air/components/AirPinchGesture.tsx
import React13 from "react";
import { View as View13 } from "react-native";
var AirPinchGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React13.createElement(View13, { ...rest }, children);
};
AirPinchGesture.displayName = "AirPinchGesture";

// src/gesture-kit-air/components/AirRotateGesture.tsx
import React14 from "react";
import { View as View14 } from "react-native";
var AirRotateGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React14.createElement(View14, { ...rest }, children);
};
AirRotateGesture.displayName = "AirRotateGesture";

// src/gesture-kit-air/components/AirSwipeGesture.tsx
import React15 from "react";
import { View as View15 } from "react-native";
var AirSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React15.createElement(View15, { ...rest }, children);
};
AirSwipeGesture.displayName = "AirSwipeGesture";

// src/gesture-kit-air/components/AirTapGesture.tsx
import React16 from "react";
import { View as View16 } from "react-native";
var AirTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React16.createElement(View16, { ...rest }, children);
};
AirTapGesture.displayName = "AirTapGesture";

// src/gesture-kit-air/components/HandWaveGesture.tsx
import React17 from "react";
import { View as View17 } from "react-native";
var HandWaveGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React17.createElement(View17, { ...rest }, children);
};
HandWaveGesture.displayName = "HandWaveGesture";

// src/gesture-kit-air/components/MultiHandGesture.tsx
import React18 from "react";
import { View as View18 } from "react-native";
var MultiHandGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React18.createElement(View18, { ...rest }, children);
};
MultiHandGesture.displayName = "MultiHandGesture";

// src/gesture-kit-air/hooks/useHandWave.ts
import { useMemo as useMemo12 } from "react";
function useHandWave(options = {}) {
  const { enabled = true } = options;
  return useMemo12(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useAirSwipe.ts
import { useMemo as useMemo13 } from "react";
function useAirSwipe(options = {}) {
  const { enabled = true } = options;
  return useMemo13(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useAirTap.ts
import { useMemo as useMemo14 } from "react";
function useAirTap(options = {}) {
  const { enabled = true } = options;
  return useMemo14(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useAirPinch.ts
import { useMemo as useMemo15 } from "react";
function useAirPinch(options = {}) {
  const { enabled = true } = options;
  return useMemo15(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useAirRotate.ts
import { useMemo as useMemo16 } from "react";
function useAirRotate(options = {}) {
  const { enabled = true } = options;
  return useMemo16(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useAirDraw.ts
import { useMemo as useMemo17 } from "react";
function useAirDraw(options = {}) {
  const { enabled = true } = options;
  return useMemo17(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useMultiHand.ts
import { useMemo as useMemo18 } from "react";
function useMultiHand(options = {}) {
  const { enabled = true } = options;
  return useMemo18(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-proximity/components/HandNearGesture.tsx
import React19 from "react";
import { View as View19 } from "react-native";
var HandNearGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React19.createElement(View19, { ...rest }, children);
};
HandNearGesture.displayName = "HandNearGesture";

// src/gesture-kit-proximity/components/HandAwayGesture.tsx
import React20 from "react";
import { View as View20 } from "react-native";
var HandAwayGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React20.createElement(View20, { ...rest }, children);
};
HandAwayGesture.displayName = "HandAwayGesture";

// src/gesture-kit-proximity/components/ProximityTapGesture.tsx
import React21 from "react";
import { View as View21 } from "react-native";
var ProximityTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React21.createElement(View21, { ...rest }, children);
};
ProximityTapGesture.displayName = "ProximityTapGesture";

// src/gesture-kit-proximity/components/HoverGesture.tsx
import React22 from "react";
import { View as View22 } from "react-native";
var HoverGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ React22.createElement(View22, { ...rest }, children);
};
HoverGesture.displayName = "HoverGesture";

// src/gesture-kit-proximity/hooks/useHandNear.ts
import { useMemo as useMemo19 } from "react";
function useHandNear(options = {}) {
  const { enabled = true } = options;
  return useMemo19(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-proximity/hooks/useHandAway.ts
import { useMemo as useMemo20 } from "react";
function useHandAway(options = {}) {
  const { enabled = true } = options;
  return useMemo20(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-proximity/hooks/useProximityTap.ts
import { useMemo as useMemo21 } from "react";
function useProximityTap(options = {}) {
  const { enabled = true } = options;
  return useMemo21(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-proximity/hooks/useHover.ts
import { useMemo as useMemo22 } from "react";
function useHover(options = {}) {
  const { enabled = true } = options;
  return useMemo22(() => {
    return { enabled };
  }, [enabled]);
}
export {
  AirDrawGesture,
  AirPinchGesture,
  AirRotateGesture,
  AirSwipeGesture,
  AirTapGesture,
  CircularMotionGesture,
  FaceUpDownGesture,
  FlipGesture,
  FreeFallGesture,
  HandAwayGesture,
  HandNearGesture,
  HandWaveGesture,
  HoverGesture,
  MultiAxisTiltGesture,
  MultiHandGesture,
  ProximityTapGesture,
  ShakeGesture,
  SwingGesture,
  TiltBackwardGesture,
  TiltForwardGesture,
  TiltLeftGesture,
  TiltRightGesture,
  useAirDraw,
  useAirPinch,
  useAirRotate,
  useAirSwipe,
  useAirTap,
  useCircularMotion,
  useFaceUpDown,
  useFlip,
  useFreeFall,
  useHandAway,
  useHandNear,
  useHandWave,
  useHover,
  useMultiAxisTilt,
  useMultiHand,
  useProximityTap,
  useShake,
  useSwing,
  useTiltBackward,
  useTiltForward,
  useTiltLeft,
  useTiltRight
};
