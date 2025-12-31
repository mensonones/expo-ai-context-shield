import { registerWebModule, NativeModule } from 'expo';

import { ExpoAiContextShieldModuleEvents } from './ExpoAiContextShield.types';

class ExpoAiContextShieldModule extends NativeModule<ExpoAiContextShieldModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoAiContextShieldModule, 'ExpoAiContextShieldModule');
