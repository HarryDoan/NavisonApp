import Router from './Router';
import {
  createNavigationContainerRef,
  NavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const rootNavigate = (
  rootName: string,
  screenName: string,
  screenParams?: object,
): void => {
  navigationRef.navigate(rootName, {
    screen: screenName,
    params: screenParams,
  });
};
interface Root {
  goBack: () => void;
  navigate: (screenName: string, screenParams?: object) => void;
}

interface RootContainer {
  navigate: (screenName: string, screenParams?: object) => void;
}

export const root: Root = {
  goBack: () => navigationRef.goBack(),
  navigate: (screenName, screenParams) => {
    navigationRef.navigate(screenName, screenParams);
  },
};

export const authRoot: RootContainer = {
  navigate: (screenName, screenParams) => {
    rootNavigate(Router.AUTH_CONTAINER, screenName, screenParams);
  },
};

export const bottomRoot: RootContainer = {
  navigate: (screenName, screenParams) => {
    rootNavigate(Router.BOTTOM_CONTAINER, screenName, screenParams);
  },
};

export const commonRoot: RootContainer = {
  navigate: (screenName, screenParams) => {
    rootNavigate(Router.COMMON_CONTAINER, screenName, screenParams);
  },
};

export function reset(index: number, name: string): void {
  navigationRef.current?.reset({
    index,
    routes: [{name}],
  });
}
