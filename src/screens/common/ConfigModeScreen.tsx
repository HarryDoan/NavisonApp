import {Block} from '@components';
import ConfigListChannel from '@components/common/ConfigListChannel';
import HeaderCommon from '@components/common/HeaderCommon';
import {COLORS} from '@theme';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ConfigModeScreen = ({route}: any) => {
  const {item, mode} = route?.params;
  // const rewriteData = item?.map((item: any, index: number) => {
  //   return {...item, order: index + 1};
  // });

  const [title, setTitle] = useState<string | number>(item?.title || 'none');
  const [listChannelOfMode, setListChannelOfMode] = useState<any>([]);

  useEffect(() => {
    let filterCondition;
    if (mode === 1) {
      filterCondition = (item: any) => item && item?.mode_1;
    } else if (mode === 2) {
      filterCondition = (item: any) => item && item?.mode_2;
    } else {
      filterCondition = (item: any) => item && item?.mode_3;
    }
    const newList = item?.filter(filterCondition);
    setListChannelOfMode(newList);
  }, [item]);

  const handleConfig = () => {};

  return (
    <LinearGradient
      colors={COLORS.gradient_1}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <HeaderCommon title={`Config Mode ${mode}`} />

      <Block alignSelfCenter paddingTop={15}>
        <ConfigListChannel
          mode={mode}
          data={item}
          listChannelOfMode={listChannelOfMode}
          handleChangeTitle={handleConfig}
        />
      </Block>
    </LinearGradient>
  );
};

export default ConfigModeScreen;
