import * as React from 'react';
import { View } from 'react-native';
import { ExpoAiContextShieldViewProps } from './ExpoAiContextShield.types';

export default function ExpoAiContextShieldView(props: ExpoAiContextShieldViewProps) {
  const { isSensitive, style, children, ...viewProps } = props;

  return (
    <View style={[{ flex: 1 }, style]} {...viewProps}>
      {children}
    </View>
  );
}