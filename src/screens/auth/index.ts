import ForgetPasswordScreen from './ForgetPasswordScreen';
import LoginScreen from './LoginScreen/index';
import OnboardingScreen from './OnboardingScreen/index';
import RegisterScreen from './RegisterScreen/index';
import Router from '@navigation/Router';

export const auth = {
  [Router.ONBOARDING_SCREEN]: OnboardingScreen,
  [Router.LOGIN_SCREEN]: LoginScreen,
  [Router.REGISTER_SCREEN]: RegisterScreen,
  [Router.FORGET_PASSWORD_SCREEN]: ForgetPasswordScreen,
};
