import ExpoModulesCore

public class ExpoAiContextShieldModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoAiContextShield")

    // Screenshot Listener for iOS (Optional, but useful for your event)
    OnStartObserving {
      NotificationCenter.default.addObserver(
        forName: UIApplication.userDidTakeScreenshotNotification,
        object: nil,
        queue: .main
      ) { _ in
        self.sendEvent("onScreenshotDetected")
      }
    }

    // Registers the View
    View(ExpoAiContextShieldView.self) {
      // On iOS, protection is physical by the component, 
      // so the isSensitive prop serves more for logical control if necessary.
      Prop("isSensitive") { (view: ExpoAiContextShieldView, isSensitive: Boolean) in
        // The protection logic on iOS is inherent to the use of the secure UITextField
      }
    }
  }
}