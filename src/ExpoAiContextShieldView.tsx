import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
import { ExpoAiContextShieldViewProps } from './ExpoAiContextShield.types';

const NativeView = requireNativeViewManager('ExpoAiContextShield');

export default function ExpoAiContextShieldView(props: ExpoAiContextShieldViewProps) {
  const { isSensitive = false, style, children } = props;

  // On Android, the NativeView (Kotlin) will apply FLAG_SECURE as soon as the component is mounted with isSensitive={true}
  return (
    <NativeView isSensitive={isSensitive} style={[{ flex: 1 }, style]}>
      {children}
    </NativeView>
  );
}