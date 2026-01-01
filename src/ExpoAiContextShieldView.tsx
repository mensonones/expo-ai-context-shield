import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
import { ExpoAiContextShieldViewProps } from './ExpoAiContextShield.types';

const NativeView = requireNativeViewManager('ExpoAiContextShield');

export default function ExpoAiContextShieldView(props: ExpoAiContextShieldViewProps) {
  const { isSensitive = false, style, children } = props;

  return (
    <NativeView 
      isSensitive={isSensitive} 
      collapsable={false}
      style={style} 
    >
      {children}
    </NativeView>
  );
}