import { NativeModule, requireNativeModule } from 'expo-modules-core';
import { ExpoAiContextShieldModuleEvents } from './ExpoAiContextShield.types';

declare class ExpoAiContextShieldModule extends NativeModule<ExpoAiContextShieldModuleEvents> {
  // Defines the native function we created in Kotlin to block screenshots/visual AI
  setVisualSecurity(secure: boolean): void;
}

export default requireNativeModule<ExpoAiContextShieldModule>('ExpoAiContextShield');