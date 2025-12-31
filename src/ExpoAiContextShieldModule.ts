import { NativeModule, requireNativeModule } from 'expo';

import { ExpoAiContextShieldModuleEvents } from './ExpoAiContextShield.types';

declare class ExpoAiContextShieldModule extends NativeModule<ExpoAiContextShieldModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAiContextShieldModule>('ExpoAiContextShield');
