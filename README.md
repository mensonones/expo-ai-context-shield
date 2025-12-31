# 🛡️ Expo AI Context Shield

**The ultimate privacy layer for Expo apps. Protect sensitive UI from AI vision, Screen Captures, and System Intelligence.**

In 2025/2026, OS-level AI (like Google’s Gemini Nano and Samsung’s Galaxy AI) can "read" your app's screen to provide context. While helpful, this poses a massive privacy risk for apps handling bank balances, health data, or private credentials.

`expo-ai-context-shield` provides a **granular security boundary** that makes your content invisible to AI OCR and screen capture tools without compromising user experience.

---

## 🚀 Key Features

* **AI Vision Blocking:** Prevents on-device AI (Circle to Search, Smart Selection) from indexing your UI.
* **Hardware-Level Security:** Leverages Android's `FLAG_SECURE` and iOS's `isSecureTextEntry` trick for 100% reliable blocking.
* **Granular Protection:** Don't block your whole app; only shield the components that actually contain sensitive data.
* **Zero Performance Overhead:** Pure native implementation with no background listeners or heavy wrappers.

---

## 📦 Installation

```bash
npx expo install expo-ai-context-shield

```

---

## 💡 Why this module?

### The Privacy Risk in the Gen-AI Era

You might think: *"If the user triggered the AI, they know what they are doing"*. In reality, the risk is more subtle:

* **Context Leakage:** When a user uses *Circle to Search* to identify a shoe, the AI captures the **entire screen**. If a bank balance or CPF is visible next to it, that sensitive data is sent to AI servers as "context".
* **Activity Logs:** AI assistant captures are often saved in the user's account history (Google/Samsung/Apple). Without protection, your app's private data ends up stored permanently in third-party logs.
* **Always-on Snapshots:** Features like "Recall" or "System Timelines" take periodic screenshots of the screen. This module ensures your app is a "black hole" in those automated captures.

### Comparison

| Feature | Standard View | `FLAG_SECURE` (Full App) | **AI Context Shield** |
| --- | --- | --- | --- |
| Protects against AI | ❌ | ✅ | ✅ |
| Allows screenshots | ✅ | ❌ | **Only on non-sensitive parts** |
| UX Friendly | ✅ | ❌ | ✅ |
| OCR Resistant | ❌ | ✅ | ✅ |

---

## 🛠 Usage

Simply wrap your sensitive components with the `AiContextShield`.

```tsx
import { AiContextShield } from 'expo-ai-context-shield';
import { Text, View } from 'react-native';

export default function SensitiveScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Public information (visible to AI)</Text>

      {/* This part will be blacked out in screenshots and invisible to Gemini/Galaxy AI */}
      <AiContextShield isSensitive={true} style={{ padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Balance: $1,250,000.00
        </Text>
      </AiContextShield>
    </View>
  );
}

```

---

## 🏥 Common Use Cases

| Industry | What to protect? |
| --- | --- |
| **Fintech** | Account balances, Credit Card numbers, CVV, QR Codes. |
| **Healthcare** | Patient names, diagnoses, exam results. |
| **Messaging** | Private chat content, self-destructing photos. |
| **Auth** | Recovery keys, 2FA codes, temporary passwords. |

---

## ⚙️ API Reference

### `AiContextShield` (Component)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **`isSensitive`** | `boolean` | `false` | When `true`, enables hardware-level protection. |
| **`style`** | `ViewStyle` | `undefined` | Standard React Native styles. |
| **`children`** | `ReactNode` | `required` | The content you want to shield. |

---

## 📱 Platform Implementation

* **Android (API 29+):** Uses `IMPORTANT_FOR_CONTENT_CAPTURE_NO_EXCLUDE_DESCENDANTS` to block data indexing and `FLAG_SECURE` to block visual pixel capture. Tested on Samsung S23/S24 (Galaxy AI) and Pixel 8/9 (Gemini).
* **iOS (13.4+):** Implements a hidden `UITextField` canvas layer trick. The system treats the view as a secure password field, automatically stripping it from the screen buffer during capture.
* **Web:** Transparent fallback. Renders a standard `View` to maintain layout consistency.

---

## 🤝 Contributing

We are looking for help with:

* Improving the instance counter for `FLAG_SECURE` on Android.
* iOS screenshot detection events.

1. Fork the repo.
2. Install dependencies: `npm install`.
3. Test in the example app: `cd example && npx expo run:android`.

---

## 📄 License

MIT © @mensonones