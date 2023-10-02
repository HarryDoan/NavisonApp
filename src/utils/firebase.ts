import {firebase} from '@react-native-firebase/database';

const url = '';

const rulePath = '';

const RTDatabase = firebase.app().database(url).ref(`${rulePath}`);

// export const userChatRooms = firebase
//   .app()
//   .database(url)
//   .ref(`${rulePath}/userChatRooms`);

export default RTDatabase;
