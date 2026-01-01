package expo.modules.aishield

import android.view.WindowManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoAiContextShieldModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoAiContextShield")

    Events("onScreenshotDetected")

    Function("setVisualSecurity") { secure: Boolean ->
      ExpoAiContextShieldView.updateWindowSecurity(appContext, if (secure) 1 else -1)
    }

    View(ExpoAiContextShieldView::class) {
      Prop("isSensitive") { view: ExpoAiContextShieldView, isSensitive: Boolean ->
        view.setSensitive(isSensitive)
      }
    }
  }
}