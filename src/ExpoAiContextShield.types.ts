import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type ExpoAiContextShieldViewProps = {
  /**
   * If true, the content inside this View will be protected against AIs and visual captures.
   */
  isSensitive?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export type ExpoAiContextShieldModuleEvents = {
  onScreenshotDetected?: () => void;
};