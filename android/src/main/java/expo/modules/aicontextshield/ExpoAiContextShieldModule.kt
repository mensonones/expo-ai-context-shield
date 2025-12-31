package expo.modules.aishield

import android.view.WindowManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoAiContextShieldModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoAiContextShield")

    // Events (Keep if using for logs)
    Events("onScreenshotDetected")

    // FUNCTION THAT SOLVES THE S23 FE PROBLEM
    // It prevents ANY AI or Print from "seeing" the app window
    Function("setVisualSecurity") { secure: Boolean ->
      val activity = appContext.currentActivity ?: return@Function
      
      // Running on UI Thread is mandatory to modify the Window
      activity.runOnUiThread {
        if (secure) {
          activity.window.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
        } else {
          activity.window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
        }
      }
    }

    View(ExpoAiContextShieldView::class) {
      Prop("isSensitive") { view: ExpoAiContextShieldView, isSensitive: Boolean ->
        view.setSensitive(isSensitive)
      }
    }
  }
}