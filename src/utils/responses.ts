import {Dimensions, StatusBar} from 'react-native';

// IPhone 12
export const DESIGN_WIDTH = 375;
export const DESIGN_HEIGHT = 767;

export const statusBarHeight = StatusBar.currentHeight || 0;

export const {width, height} = Dimensions.get('screen');

export const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

export const hScale = (size: number): number =>
  typeof size === 'number' ? (shortDimension / DESIGN_WIDTH) * size : size;

export const vScale = (size: number): number =>
  typeof size === 'number' ? (longDimension / DESIGN_HEIGHT) * size : size;

export const moderateHScale = (size: number, factor = 0.5): number => {
  return size + (hScale(size) - size) * factor;
};

export const moderateVScale = (size: number, factor = 0.5): number => {
  return size + (vScale(size) - size) * factor;
};

export const hs = hScale;
export const vs = vScale;
export const mhs = moderateHScale;
export const mvs = moderateVScale;

export const getSize = {
  hs: hScale,
  vs: vScale,
  mhs: moderateHScale,
  mvs: moderateVScale,
};
