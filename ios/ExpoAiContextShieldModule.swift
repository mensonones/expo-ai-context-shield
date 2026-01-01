import ExpoModulesCore

public class ExpoAiContextShieldModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoAiContextShield")

    OnStartObserving {
      NotificationCenter.default.addObserver(
        forName: UIApplication.userDidTakeScreenshotNotification,
        object: nil,
        queue: .main
      ) { _ in
        self.sendEvent("onScreenshotDetected")
      }
    }

    View(ExpoAiContextShieldView.self) {
      Prop("isSensitive") { (view: ExpoAiContextShieldView, isSensitive: Bool) in
        view.setSensitive(isSensitive)
      }
    }
  }
}