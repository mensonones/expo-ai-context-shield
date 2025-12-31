import * as React from 'react';

import { ExpoAiContextShieldViewProps } from './ExpoAiContextShield.types';

export default function ExpoAiContextShieldView(props: ExpoAiContextShieldViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
