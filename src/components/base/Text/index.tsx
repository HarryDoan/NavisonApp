import React, {ReactNode} from 'react';
import {StyleSheet, Text as RNText, TextStyle, StyleProp} from 'react-native';

interface Props {
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  zIndex?: number;
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
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  opacity?: number;
  medium?: boolean;
  light?: boolean;
  regular?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  center?: boolean;
  right?: boolean;
  fontSize?: number;
  italic?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
  underlineLineThrough?: boolean;
  includeFontPadding?: boolean;
  lineHeight?: number;
  numberOfLines?: number;
  style?: StyleProp<any>;
  children?: ReactNode;
}

const Text = ({
  alignSelf,
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
  borderTopLeftRadius,
  borderTopRightRadius,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  width,
  height,
  maxWidth,
  maxHeight,
  backgroundColor,
  borderColor,
  color,
  opacity,
  medium,
  light,
  regular,
  semiBold,
  bold,
  center,
  right,
  fontSize,
  italic,
  uppercase,
  lowercase,
  capitalize,
  underline,
  lineThrough,
  underlineLineThrough,
  includeFontPadding = false,
  lineHeight,
  numberOfLines,
  style,
  children,
  ...rest
}: Props) => {
  const customStyles: StyleProp<TextStyle>[] = StyleSheet.flatten([
    {color: color},
    // layout
    alignSelf && {alignSelf},
    zIndex && {zIndex},
    // size
    padding && {padding: padding},
    margin && {margin: margin},
    paddingVertical && {paddingVertical: paddingVertical},
    paddingHorizontal && {paddingHorizontal: paddingHorizontal},
    marginVertical && {marginVertical: marginVertical},
    marginHorizontal && {marginHorizontal: marginHorizontal},
    paddingTop && {paddingTop: paddingTop},
    paddingRight && {paddingRight: paddingRight},
    paddingBottom && {paddingBottom: paddingBottom},
    paddingLeft && {paddingLeft: paddingLeft},
    marginTop && {marginTop: marginTop},
    marginRight && {marginRight: marginRight},
    marginBottom && {marginBottom: marginBottom},
    marginLeft && {marginLeft: marginLeft},
    radius && {borderRadius: radius},
    borderTopLeftRadius && {borderTopLeftRadius: borderTopLeftRadius},
    borderTopRightRadius && {borderTopRightRadius: borderTopRightRadius},
    borderWidth && {borderWidth: borderWidth},
    borderTopWidth && {borderTopWidth: borderTopWidth},
    borderRightWidth && {borderRightWidth: borderRightWidth},
    borderBottomWidth && {borderBottomWidth: borderBottomWidth},
    borderLeftWidth && {borderLeftWidth: borderLeftWidth},
    // width, height
    width && {width: width},
    height && {height: height},
    maxWidth && {maxWidth: maxWidth},
    maxHeight && {maxHeight: maxHeight},
    // color
    backgroundColor && {backgroundColor: backgroundColor},
    borderColor && {borderColor: borderColor},
    opacity !== undefined && {opacity},
    // font
    light && {fontWeight: '300'},
    regular && {fontWeight: '400'},
    medium && {fontWeight: '500'},
    semiBold && {fontWeight: '600'},
    bold && {fontWeight: '700'},
    // text style
    center && {textAlign: 'center'},
    right && {textAlign: 'right'},
    fontSize && {fontSize: fontSize},
    uppercase && {textTransform: 'uppercase'},
    lowercase && {textTransform: 'lowercase'},
    capitalize && {textTransform: 'capitalize'},
    underline && {textDecorationLine: 'underline'},
    lineThrough && {textDecorationLine: 'line-through'},
    underlineLineThrough && {textDecorationLine: 'underline line-through'},
    includeFontPadding && {includeFontPadding},
    lineHeight && {lineHeight: lineHeight},
    style,
  ]);

  return (
    <RNText {...rest} style={customStyles} numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
};

export default Text;
