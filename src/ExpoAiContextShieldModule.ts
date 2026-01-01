import { NativeModule, requireNativeModule } from 'expo-modules-core';
import { ExpoAiContextShieldModuleEvents } from './ExpoAiContextShield.types';

declare class ExpoAiContextShieldModule extends NativeModule<ExpoAiContextShieldModuleEvents> {
  setVisualSecurity(secure: boolean): void;
}

export default requireNativeModule<ExpoAiContextShieldModule>('ExpoAiContextShield');