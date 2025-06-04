import {
  CornerDotType,
  CornerSquareType,
  DotType,
  DrawType,
  ErrorCorrectionLevel,
  Gradient,
  Mode,
  Options,
  ShapeType,
  TypeNumber,
} from "qr-code-styling";

export type QrCodeState = {
  type: DrawType;
  shape: ShapeType;
  width: number;
  height: number;
  margin: number;
  data: string;
  image: string;

  // nodeCanvas?: typeof nodeCanvas;
  // jsdom?: typeof JSDOM;
  qrOptions: {
    typeNumber: TypeNumber;
    mode: Mode;
    errorCorrectionLevel: ErrorCorrectionLevel;
  };
  imageOptions: {
    saveAsBlob: boolean;
    hideBackgroundDots: boolean;
    imageSize: number;
    crossOrigin: string;
    margin: number;
  };
  dotsOptions: {
    type?: DotType;
    color: string;
    gradient: Gradient;
    roundSize: boolean;
  };
  cornersSquareOptions: {
    type?: CornerSquareType;
    color: string;
    gradient: Gradient;
  };
  cornersDotOptions: {
    type?: CornerDotType;
    color: string;
    gradient: Gradient;
  };
  backgroundOptions: {
    round: number;
    color: string;
    gradient: Gradient;
  };
};
