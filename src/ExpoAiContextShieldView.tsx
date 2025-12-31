import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoAiContextShieldViewProps } from './ExpoAiContextShield.types';

const NativeView: React.ComponentType<ExpoAiContextShieldViewProps> =
  requireNativeView('ExpoAiContextShield');

export default function ExpoAiContextShieldView(props: ExpoAiContextShieldViewProps) {
  return <NativeView {...props} />;
}
