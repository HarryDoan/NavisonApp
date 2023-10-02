import AsyncStorage from '@react-native-async-storage/async-storage';

type Storage = {
  setItem: (key: string, data: string | Record<string, any>) => Promise<void>;
  getItem: <T>(key: string) => Promise<T | null>;
  removeItem: (key: string) => Promise<void>;
};

const Storage: Storage = {
  setItem: async (key, data) => {
    data = typeof data === 'string' ? data : JSON.stringify(data);
    try {
      await AsyncStorage.setItem(key, data);
    } catch (e) {
      console.error(e);
    }
  },

  getItem: async key => {
    try {
      let value: any = await AsyncStorage.getItem(key);
      try {
        return JSON.parse(value) as any;
      } catch (e) {
        return value as any;
      }
    } catch (e) {
      return null;
    }
  },

  removeItem: async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  },
};

export default Storage;
