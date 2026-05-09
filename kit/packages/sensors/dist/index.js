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
  AirDrawGesture: () => AirDrawGesture,
  AirPinchGesture: () => AirPinchGesture,
  AirRotateGesture: () => AirRotateGesture,
  AirSwipeGesture: () => AirSwipeGesture,
  AirTapGesture: () => AirTapGesture,
  CircularMotionGesture: () => CircularMotionGesture,
  FaceUpDownGesture: () => FaceUpDownGesture,
  FlipGesture: () => FlipGesture,
  FreeFallGesture: () => FreeFallGesture,
  HandAwayGesture: () => HandAwayGesture,
  HandNearGesture: () => HandNearGesture,
  HandWaveGesture: () => HandWaveGesture,
  HoverGesture: () => HoverGesture,
  MultiAxisTiltGesture: () => MultiAxisTiltGesture,
  MultiHandGesture: () => MultiHandGesture,
  ProximityTapGesture: () => ProximityTapGesture,
  ShakeGesture: () => ShakeGesture,
  SwingGesture: () => SwingGesture,
  TiltBackwardGesture: () => TiltBackwardGesture,
  TiltForwardGesture: () => TiltForwardGesture,
  TiltLeftGesture: () => TiltLeftGesture,
  TiltRightGesture: () => TiltRightGesture,
  useAirDraw: () => useAirDraw,
  useAirPinch: () => useAirPinch,
  useAirRotate: () => useAirRotate,
  useAirSwipe: () => useAirSwipe,
  useAirTap: () => useAirTap,
  useCircularMotion: () => useCircularMotion,
  useFaceUpDown: () => useFaceUpDown,
  useFlip: () => useFlip,
  useFreeFall: () => useFreeFall,
  useHandAway: () => useHandAway,
  useHandNear: () => useHandNear,
  useHandWave: () => useHandWave,
  useHover: () => useHover,
  useMultiAxisTilt: () => useMultiAxisTilt,
  useMultiHand: () => useMultiHand,
  useProximityTap: () => useProximityTap,
  useShake: () => useShake,
  useSwing: () => useSwing,
  useTiltBackward: () => useTiltBackward,
  useTiltForward: () => useTiltForward,
  useTiltLeft: () => useTiltLeft,
  useTiltRight: () => useTiltRight
});
module.exports = __toCommonJS(index_exports);

// src/gesture-kit-sensor/components/ShakeGesture.tsx
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var ShakeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { ...rest }, children);
};
ShakeGesture.displayName = "ShakeGesture";

// src/gesture-kit-sensor/components/TiltLeftGesture.tsx
var import_react2 = __toESM(require("react"));
var import_react_native2 = require("react-native");
var TiltLeftGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react2.default.createElement(import_react_native2.View, { ...rest }, children);
};
TiltLeftGesture.displayName = "TiltLeftGesture";

// src/gesture-kit-sensor/components/TiltRightGesture.tsx
var import_react3 = __toESM(require("react"));
var import_react_native3 = require("react-native");
var TiltRightGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react3.default.createElement(import_react_native3.View, { ...rest }, children);
};
TiltRightGesture.displayName = "TiltRightGesture";

// src/gesture-kit-sensor/components/TiltForwardGesture.tsx
var import_react4 = __toESM(require("react"));
var import_react_native4 = require("react-native");
var TiltForwardGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react4.default.createElement(import_react_native4.View, { ...rest }, children);
};
TiltForwardGesture.displayName = "TiltForwardGesture";

// src/gesture-kit-sensor/components/TiltBackwardGesture.tsx
var import_react5 = __toESM(require("react"));
var import_react_native5 = require("react-native");
var TiltBackwardGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react5.default.createElement(import_react_native5.View, { ...rest }, children);
};
TiltBackwardGesture.displayName = "TiltBackwardGesture";

// src/gesture-kit-sensor/components/FlipGesture.tsx
var import_react6 = __toESM(require("react"));
var import_react_native6 = require("react-native");
var FlipGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react6.default.createElement(import_react_native6.View, { ...rest }, children);
};
FlipGesture.displayName = "FlipGesture";

// src/gesture-kit-sensor/components/FaceUpDownGesture.tsx
var import_react7 = __toESM(require("react"));
var import_react_native7 = require("react-native");
var FaceUpDownGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react7.default.createElement(import_react_native7.View, { ...rest }, children);
};
FaceUpDownGesture.displayName = "FaceUpDownGesture";

// src/gesture-kit-sensor/components/FreeFallGesture.tsx
var import_react8 = __toESM(require("react"));
var import_react_native8 = require("react-native");
var FreeFallGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react8.default.createElement(import_react_native8.View, { ...rest }, children);
};
FreeFallGesture.displayName = "FreeFallGesture";

// src/gesture-kit-sensor/components/SwingGesture.tsx
var import_react9 = __toESM(require("react"));
var import_react_native9 = require("react-native");
var SwingGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react9.default.createElement(import_react_native9.View, { ...rest }, children);
};
SwingGesture.displayName = "SwingGesture";

// src/gesture-kit-sensor/components/CircularMotionGesture.tsx
var import_react10 = __toESM(require("react"));
var import_react_native10 = require("react-native");
var CircularMotionGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react10.default.createElement(import_react_native10.View, { ...rest }, children);
};
CircularMotionGesture.displayName = "CircularMotionGesture";

// src/gesture-kit-sensor/components/MultiAxisTiltGesture.tsx
var import_react11 = __toESM(require("react"));
var import_react_native11 = require("react-native");
var MultiAxisTiltGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react11.default.createElement(import_react_native11.View, { ...rest }, children);
};
MultiAxisTiltGesture.displayName = "MultiAxisTiltGesture";

// src/gesture-kit-sensor/hooks/useShake.ts
var import_react12 = require("react");
function useShake(options = {}) {
  const { enabled = true } = options;
  return (0, import_react12.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useTiltLeft.ts
var import_react13 = require("react");
function useTiltLeft(options = {}) {
  const { enabled = true } = options;
  return (0, import_react13.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useTiltRight.ts
var import_react14 = require("react");
function useTiltRight(options = {}) {
  const { enabled = true } = options;
  return (0, import_react14.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useTiltForward.ts
var import_react15 = require("react");
function useTiltForward(options = {}) {
  const { enabled = true } = options;
  return (0, import_react15.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useTiltBackward.ts
var import_react16 = require("react");
function useTiltBackward(options = {}) {
  const { enabled = true } = options;
  return (0, import_react16.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useFlip.ts
var import_react17 = require("react");
function useFlip(options = {}) {
  const { enabled = true } = options;
  return (0, import_react17.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useFaceUpDown.ts
var import_react18 = require("react");
function useFaceUpDown(options = {}) {
  const { enabled = true } = options;
  return (0, import_react18.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useFreeFall.ts
var import_react19 = require("react");
function useFreeFall(options = {}) {
  const { enabled = true } = options;
  return (0, import_react19.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useSwing.ts
var import_react20 = require("react");
function useSwing(options = {}) {
  const { enabled = true } = options;
  return (0, import_react20.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useCircularMotion.ts
var import_react21 = require("react");
function useCircularMotion(options = {}) {
  const { enabled = true } = options;
  return (0, import_react21.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-sensor/hooks/useMultiAxisTilt.ts
var import_react22 = require("react");
function useMultiAxisTilt(options = {}) {
  const { enabled = true } = options;
  return (0, import_react22.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/components/AirDrawGesture.tsx
var import_react23 = __toESM(require("react"));
var import_react_native12 = require("react-native");
var AirDrawGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react23.default.createElement(import_react_native12.View, { ...rest }, children);
};
AirDrawGesture.displayName = "AirDrawGesture";

// src/gesture-kit-air/components/AirPinchGesture.tsx
var import_react24 = __toESM(require("react"));
var import_react_native13 = require("react-native");
var AirPinchGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react24.default.createElement(import_react_native13.View, { ...rest }, children);
};
AirPinchGesture.displayName = "AirPinchGesture";

// src/gesture-kit-air/components/AirRotateGesture.tsx
var import_react25 = __toESM(require("react"));
var import_react_native14 = require("react-native");
var AirRotateGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react25.default.createElement(import_react_native14.View, { ...rest }, children);
};
AirRotateGesture.displayName = "AirRotateGesture";

// src/gesture-kit-air/components/AirSwipeGesture.tsx
var import_react26 = __toESM(require("react"));
var import_react_native15 = require("react-native");
var AirSwipeGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react26.default.createElement(import_react_native15.View, { ...rest }, children);
};
AirSwipeGesture.displayName = "AirSwipeGesture";

// src/gesture-kit-air/components/AirTapGesture.tsx
var import_react27 = __toESM(require("react"));
var import_react_native16 = require("react-native");
var AirTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react27.default.createElement(import_react_native16.View, { ...rest }, children);
};
AirTapGesture.displayName = "AirTapGesture";

// src/gesture-kit-air/components/HandWaveGesture.tsx
var import_react28 = __toESM(require("react"));
var import_react_native17 = require("react-native");
var HandWaveGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react28.default.createElement(import_react_native17.View, { ...rest }, children);
};
HandWaveGesture.displayName = "HandWaveGesture";

// src/gesture-kit-air/components/MultiHandGesture.tsx
var import_react29 = __toESM(require("react"));
var import_react_native18 = require("react-native");
var MultiHandGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react29.default.createElement(import_react_native18.View, { ...rest }, children);
};
MultiHandGesture.displayName = "MultiHandGesture";

// src/gesture-kit-air/hooks/useHandWave.ts
var import_react30 = require("react");
function useHandWave(options = {}) {
  const { enabled = true } = options;
  return (0, import_react30.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useAirSwipe.ts
var import_react31 = require("react");
function useAirSwipe(options = {}) {
  const { enabled = true } = options;
  return (0, import_react31.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useAirTap.ts
var import_react32 = require("react");
function useAirTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react32.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useAirPinch.ts
var import_react33 = require("react");
function useAirPinch(options = {}) {
  const { enabled = true } = options;
  return (0, import_react33.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useAirRotate.ts
var import_react34 = require("react");
function useAirRotate(options = {}) {
  const { enabled = true } = options;
  return (0, import_react34.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useAirDraw.ts
var import_react35 = require("react");
function useAirDraw(options = {}) {
  const { enabled = true } = options;
  return (0, import_react35.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-air/hooks/useMultiHand.ts
var import_react36 = require("react");
function useMultiHand(options = {}) {
  const { enabled = true } = options;
  return (0, import_react36.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-proximity/components/HandNearGesture.tsx
var import_react37 = __toESM(require("react"));
var import_react_native19 = require("react-native");
var HandNearGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react37.default.createElement(import_react_native19.View, { ...rest }, children);
};
HandNearGesture.displayName = "HandNearGesture";

// src/gesture-kit-proximity/components/HandAwayGesture.tsx
var import_react38 = __toESM(require("react"));
var import_react_native20 = require("react-native");
var HandAwayGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react38.default.createElement(import_react_native20.View, { ...rest }, children);
};
HandAwayGesture.displayName = "HandAwayGesture";

// src/gesture-kit-proximity/components/ProximityTapGesture.tsx
var import_react39 = __toESM(require("react"));
var import_react_native21 = require("react-native");
var ProximityTapGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react39.default.createElement(import_react_native21.View, { ...rest }, children);
};
ProximityTapGesture.displayName = "ProximityTapGesture";

// src/gesture-kit-proximity/components/HoverGesture.tsx
var import_react40 = __toESM(require("react"));
var import_react_native22 = require("react-native");
var HoverGesture = ({ children, enabled = true, ...rest }) => {
  return /* @__PURE__ */ import_react40.default.createElement(import_react_native22.View, { ...rest }, children);
};
HoverGesture.displayName = "HoverGesture";

// src/gesture-kit-proximity/hooks/useHandNear.ts
var import_react41 = require("react");
function useHandNear(options = {}) {
  const { enabled = true } = options;
  return (0, import_react41.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-proximity/hooks/useHandAway.ts
var import_react42 = require("react");
function useHandAway(options = {}) {
  const { enabled = true } = options;
  return (0, import_react42.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-proximity/hooks/useProximityTap.ts
var import_react43 = require("react");
function useProximityTap(options = {}) {
  const { enabled = true } = options;
  return (0, import_react43.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}

// src/gesture-kit-proximity/hooks/useHover.ts
var import_react44 = require("react");
function useHover(options = {}) {
  const { enabled = true } = options;
  return (0, import_react44.useMemo)(() => {
    return { enabled };
  }, [enabled]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
