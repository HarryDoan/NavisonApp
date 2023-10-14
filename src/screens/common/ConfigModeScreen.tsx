import {Block} from '@components';
import ConfigListChannel from '@components/common/ConfigListChannel';
import HeaderCommon from '@components/common/HeaderCommon';
import {COLORS} from '@theme';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ConfigModeScreen = ({route}: any) => {
  const {item, mode} = route?.params;
  const rewriteData = item?.map((item: any, index: number) => {
    return {...item, order: index + 1};
  });

  const [title, setTitle] = useState<string | number>(item?.title || 'none');

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
          data={rewriteData}
          handleChangeTitle={handleConfig}
        />
      </Block>
    </LinearGradient>
  );
};

export default ConfigModeScreen;
