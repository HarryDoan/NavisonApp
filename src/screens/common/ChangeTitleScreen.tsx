import {Block, FormInput, Text} from '@components';
import HeaderCommon from '@components/common/HeaderCommon';
import {root} from '@navigation/NavigationRef';
import database from '@react-native-firebase/database';
import React, {useState} from 'react';

const ChangeTitleScreen = ({route}: any) => {
  const {item} = route?.params;
  const [title, setTitle] = useState<string | number>(item?.title || 'none');

  const handleDone = () => {
    const itemRef = database().ref(`/users/user_1/${item?.name}`);
    itemRef
      .update({
        title: title,
      })
      .then(() => {
        console.log('Data updated.');
        root.goBack();
      })
      .catch(error => console.error('Error updating data:', error));
  };

  return (
    <Block>
      <HeaderCommon title={`${item?.name}`} />
      <Block paddingVertical={15}>
        <FormInput
          handleDone={handleDone}
          setValue_1={setTitle}
          value_1={title}
        />
      </Block>
    </Block>
  );
};

export default ChangeTitleScreen;
