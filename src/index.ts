import ExpoAiContextShieldModule from './ExpoAiContextShieldModule';

export { default as AiContextShield } from './ExpoAiContextShieldView';
export * from './ExpoAiContextShield.types';

// Allows calling setVisualSecurity(true/false) manually outside the component
export const { setVisualSecurity } = ExpoAiContextShieldModule;