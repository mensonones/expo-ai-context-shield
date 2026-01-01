import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type ExpoAiContextShieldViewProps = {
  isSensitive?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export type ExpoAiContextShieldModuleEvents = {
  onScreenshotDetected?: () => void;
};