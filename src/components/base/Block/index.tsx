import {
  handleFlex,
  handleFlexGrow,
  handleFlexShrink,
  handleRound,
  handleSquare,
} from '../../shared';
import styles from './styles';
import {hs, hScale} from '@utils/responses';
import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewProps, StyleProp} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface BlockProps extends ViewProps {
  // layout
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  row?: boolean;
  column?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  spaceEvenly?: boolean;
  wrap?: boolean;
  rowCenter?: boolean;
  columnCenter?: boolean;
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  justifyStart?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  overflow?: 'visible' | 'hidden' | 'scroll';
  alignSelfStretch?: boolean;
  alignSelfStart?: boolean;
  alignSelfEnd?: boolean;
  alignSelfCenter?: boolean;
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
  borderDashed?: boolean;
  borderDotted?: boolean;
  translateY?: number;
  safePaddingAreaTop?: boolean;
  safeMarginAreaTop?: boolean;
  safePaddingAreaBottom?: boolean;
  safeMarginAreaBottom?: boolean;
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
  // shadow
  shadow1?: boolean;
  shadow2?: boolean;
  shadow3?: boolean;
  shadow4?: boolean;
  shadow5?: boolean;
  onLayout?: (event: any) => void;
  children?: ReactNode;
}

const Block = ({
  flex,
  flexGrow,
  flexShrink,
  row,
  column,
  spaceBetween,
  spaceAround,
  spaceEvenly,
  wrap,
  rowCenter,
  columnCenter,
  alignStart,
  alignCenter,
  alignEnd,
  justifyStart,
  justifyCenter,
  justifyEnd,
  overflow,
  alignSelfStretch,
  alignSelfStart,
  alignSelfEnd,
  alignSelfCenter,
  zIndex,
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
  borderDashed,
  borderDotted,
  translateY,
  safePaddingAreaTop,
  safeMarginAreaTop,
  safePaddingAreaBottom,
  safeMarginAreaBottom,
  width,
  height,
  maxWidth,
  maxHeight,
  square,
  round,
  relative,
  absolute,
  absoluteFillObject,
  top,
  left,
  right,
  bottom,
  backgroundColor,
  borderColor,
  color,
  opacity,
  shadow1,
  shadow2,
  shadow3,
  shadow4,
  shadow5,
  onLayout,
  style,
  children,
  ...rest
}: BlockProps) => {
  const insets = useSafeAreaInsets();

  const customStyles: StyleProp<any> = StyleSheet.flatten([
    // layout
    flex && handleFlex(flex),
    flexShrink && handleFlexShrink(flexShrink),
    flexGrow && handleFlexGrow(flexGrow),
    row && {flexDirection: 'row'},
    column && {flexDirection: 'column'},
    spaceBetween && {justifyContent: 'space-between'},
    spaceAround && {justifyContent: 'space-around'},
    spaceEvenly && {justifyContent: 'space-evenly'},
    wrap && {flexWrap: 'wrap'},
    rowCenter && styles.rowCenter,
    columnCenter && styles.columnCenter,
    alignStart && {alignItems: 'flex-start'},
    alignCenter && {alignItems: 'center'},
    alignEnd && {alignItems: 'flex-end'},
    justifyStart && {justifyContent: 'flex-start'},
    justifyCenter && {justifyContent: 'center'},
    justifyEnd && {justifyContent: 'flex-end'},
    overflow && {overflow},
    alignSelfStart && {alignSelf: 'flex-start'},
    alignSelfEnd && {alignSelf: 'flex-end'},
    alignSelfCenter && {alignSelf: 'center'},
    alignSelfStretch && {alignSelf: 'stretch'},
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
    borderDashed && {borderStyle: 'dashed'},
    borderDotted && {borderStyle: 'dotted'},
    translateY && {transform: [{translateY: hs(translateY)}]},
    safePaddingAreaTop && {paddingTop: insets.top},
    safeMarginAreaTop && {marginTop: insets.top},
    safePaddingAreaBottom && {paddingBottom: insets.bottom},
    safeMarginAreaBottom && {marginBottom: insets.bottom},
    // width, height
    width !== undefined && {width: hScale(width)},
    height !== undefined && {height: hScale(height)},
    maxWidth !== undefined && {maxWidth: hScale(maxWidth)},
    maxHeight !== undefined && {maxHeight},
    round && handleRound(hs(round)),
    square && handleSquare(hs(square)),
    // position
    relative && {position: 'relative'},
    absolute && {position: 'absolute'},
    absoluteFillObject && styles.absoluteFillObject,
    top !== undefined && {top: hScale(top)},
    right !== undefined && {right: hScale(right)},
    bottom !== undefined && {bottom: hScale(bottom)},
    left !== undefined && {left: hScale(left)},
    // color
    backgroundColor && {backgroundColor},
    borderColor && {borderColor},
    color && {color},
    opacity !== undefined && {opacity},
    // shadow
    shadow1 && styles.shadow1,
    shadow2 && styles.shadow2,
    shadow3 && styles.shadow3,
    shadow4 && styles.shadow4,
    shadow5 && styles.shadow5,

    StyleSheet.flatten(style),
  ]);

  return (
    <View style={customStyles} onLayout={onLayout} {...rest}>
      {children}
    </View>
  );
};

export default Block;
