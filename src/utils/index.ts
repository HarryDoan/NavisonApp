import database from '@react-native-firebase/database';

export const ESP_URL = 'http://192.168.4.1';
export const fetchDataFromFirebase = (
  ref: any,
  successCallback: any,
  errorCallback?: any,
) => {
  database()
    .ref(`/users/user_1/${ref}`)
    .on(
      'value',
      (snapshot: any) => {
        if (snapshot.exists()) {
          successCallback(snapshot.val());
        } else {
          console.log('Data not found');
        }
      },
      (error: any) => {
        console.error('Firebase error:', error);
        errorCallback(error);
      },
    );
};
