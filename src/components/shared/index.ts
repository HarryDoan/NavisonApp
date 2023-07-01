export const handleSquare = (number: number) => {
  return {
    width: number,
    height: number,
  };
};

export const handleRound = (number: number) => {
  return {
    width: number,
    height: number,
    borderRadius: number / 2,
  };
};

export const handleFlex = (flex?: number) => {
  return {
    flex: flex !== undefined ? flex : 1,
  };
};

export const handleFlexShrink = (flexShrink?: number) => {
  return {
    flexShrink: flexShrink !== undefined ? flexShrink : 1,
  };
};

export const handleFlexGrow = (flexGrow?: number) => {
  return {
    flexGrow: flexGrow !== undefined ? flexGrow : 1,
  };
};
