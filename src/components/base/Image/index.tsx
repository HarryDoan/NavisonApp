import styles from './styles';
import {
  handleFlex,
  handleFlexGrow,
  handleFlexShrink,
  handleRound,
  handleSquare,
} from '@components/shared';
import {hScale, hs} from '@utils/responses';
import React, {ReactNode} from 'react';
import {StyleSheet, ImageURISource, StyleProp} from 'react-native';
import FastImage, {ResizeMode} from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ImageProps {
  // layout
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  row?: boolean;
  column?: boolean;
  space?: string;
  wrap?: boolean;
  rowCenter?: boolean;
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  justifyStart?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  overflow?: string;
  alignSelf?: string;
  zIndex?: number;
  // size
  padding?: number;
  margin?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  radius?: number;
  borderTopRadius?: number;
  borderBottomRadius?: number;
  borderLeftRadius?: number;
  borderRightRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  translateY?: number;
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
  // width, height
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  square?: number;
  round?: number;
  // position
  relative?: boolean;
  absolute?: boolean;
  absoluteFillObject?: boolean;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  // color
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  opacity?: number;
  tintColor?: string;
  // shadow
  shadow1?: boolean;
  shadow2?: boolean;
  shadow3?: boolean;

  source: ImageURISource | string | any;
  resizeMode?: ResizeMode;
  style?: StyleProp<any>;
  children?: ReactNode;
}

const Image = ({
  // layout
  flex,
  flexGrow,
  flexShrink,
  row,
  column,
  space,
  wrap,
  rowCenter,
  alignStart,
  alignCenter,
  alignEnd,
  justifyStart,
  justifyCenter,
  justifyEnd,
  overflow,
  alignSelf,
  zIndex,
  // size
  padding,
  margin,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingVertical,
  paddingHorizontal,
  marginVertical,
  marginHorizontal,
  radius,
  borderTopRadius,
  borderBottomRadius,
  borderLeftRadius,
  borderRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  translateY,
  safeAreaTop,
  safeAreaBottom,
  // width, height
  width = 100,
  height = 100,
  maxWidth,
  maxHeight,
  square,
  round,
  // position
  relative,
  absolute,
  absoluteFillObject,
  top,
  left,
  right,
  bottom,
  // color
  backgroundColor,
  borderColor,
  color,
  opacity,
  tintColor,
  // shadow
  shadow1,
  shadow2,
  shadow3,

  source,
  resizeMode = 'contain',
  style,
  ...rest
}: ImageProps) => {
  const insets = useSafeAreaInsets();

  const customStyles = StyleSheet.flatten([
    // layout
    flex && handleFlex(flex),
    flexShrink && handleFlexShrink(flexShrink),
    flexGrow && handleFlexGrow(flexGrow),
    row && {flexDirection: 'row'},
    column && {flexDirection: 'column'},
    space && {justifyContent: `space-${space}`},
    wrap && {flexWrap: 'wrap'},
    rowCenter && styles.rowCenter,
    alignStart && {alignItems: 'flex-start'},
    alignCenter && {alignItems: 'center'},
    alignEnd && {alignItems: 'flex-end'},
    justifyStart && {justifyContent: 'flex-start'},
    justifyCenter && {justifyContent: 'center'},
    justifyEnd && {justifyContent: 'flex-end'},
    overflow && {overflow},
    alignSelf && {alignSelf},
    zIndex && {zIndex},
    // size
    padding && {padding: hs(padding)},
    margin && {margin: hs(margin)},
    paddingVertical && {paddingVertical: hs(paddingVertical)},
    paddingHorizontal && {paddingHorizontal: hs(paddingHorizontal)},
    marginVertical && {marginVertical: hs(marginVertical)},
    marginHorizontal && {marginHorizontal: hs(marginHorizontal)},
    paddingTop && {paddingTop: hs(paddingTop)},
    paddingRight && {paddingRight: hs(paddingRight)},
    paddingBottom && {paddingBottom: hs(paddingBottom)},
    paddingLeft && {paddingLeft: hs(paddingLeft)},
    marginTop && {marginTop: hs(marginTop)},
    marginRight && {marginRight: hs(marginRight)},
    marginBottom && {marginBottom: hs(marginBottom)},
    marginLeft && {marginLeft: hs(marginLeft)},
    radius && {borderRadius: hs(radius)},
    borderTopRadius && {
      borderTopLeftRadius: hs(borderTopRadius),
      borderTopRightRadius: hs(borderTopRadius),
    },
    borderBottomRadius && {
      borderBottomLeftRadius: hs(borderBottomRadius),
      borderBottomRightRadius: hs(borderBottomRadius),
    },
    borderLeftRadius && {
      borderTopLeftRadius: hs(borderLeftRadius),
      borderBottomLeftRadius: hs(borderLeftRadius),
    },
    borderRightRadius && {
      borderTopRightRadius: hs(borderRightRadius),
      borderBottomRightRadius: hs(borderRightRadius),
    },
    borderTopLeftRadius && {borderTopLeftRadius: hs(borderTopLeftRadius)},
    borderTopRightRadius && {borderTopRightRadius: hs(borderTopRightRadius)},
    borderBottomLeftRadius && {
      borderBottomLeftRadius: hs(borderBottomLeftRadius),
    },
    borderBottomRightRadius && {
      borderBottomRightRadius: hs(borderBottomRightRadius),
    },
    borderWidth && {borderWidth: hs(borderWidth)},
    borderTopWidth && {borderTopWidth: hs(borderTopWidth)},
    borderRightWidth && {borderRightWidth: hs(borderRightWidth)},
    borderBottomWidth && {borderBottomWidth: hs(borderBottomWidth)},
    borderLeftWidth && {borderLeftWidth: hs(borderLeftWidth)},
    translateY && {transform: [{translateY: hs(translateY)}]},
    safeAreaTop && {paddingTop: insets.top},
    safeAreaBottom && {paddingTop: insets.bottom},
    // width, height
    width != null && {width: hScale(width)},
    height != null && {height: hScale(height)},
    maxWidth && {maxWidth: hScale(maxWidth)},
    maxHeight && {maxHeight},
    round && handleRound(hs(round)),
    square && handleSquare(hs(square)),
    // position
    relative && {position: 'relative'},
    absolute && {position: 'absolute'},
    top != null && {top: hScale(top)},
    right != null && {right: hScale(right)},
    bottom != null && {bottom: hScale(bottom)},
    left != null && {left: hScale(left)},
    // color
    backgroundColor && {
      backgroundColor: backgroundColor,
    },
    borderColor && {borderColor: borderColor},
    color && {color: color},
    opacity != null && {opacity},
    // shadow
    shadow1 && styles.shadow1,
    shadow2 && styles.shadow2,
    shadow3 && styles.shadow3,
    StyleSheet.flatten(style),
  ]);

  return (
    <FastImage
      {...rest}
      style={customStyles}
      source={source}
      resizeMode={resizeMode}
      tintColor={tintColor}
    />
  );
};

export default Image;
