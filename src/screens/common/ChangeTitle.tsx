import {Block, FormInput, Text} from '@components';
import HeaderCommon from '@components/common/HeaderCommon';
import React, {useState} from 'react';

const ChangeTitle = ({route}: any) => {
  const {item} = route?.params;
  const [title, setTitle] = useState<string | number>(item?.title || 'value 1');
  return (
    <Block>
      <HeaderCommon title={`Change Title ${item?.name}`} />
      <Block paddingVertical={15}>
        <FormInput setValue_1={setTitle} value_1={title} />
      </Block>
    </Block>
  );
};

export default ChangeTitle;
