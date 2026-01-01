import ExpoModulesCore
import UIKit

class ExpoAiContextShieldView: ExpoView {
  private let textField = UITextField()
  private let containerView = UIView()

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    
    textField.isSecureTextEntry = true
    textField.isUserInteractionEnabled = false
    
    if let secureContainer = textField.subviews.first(where: { type(of: $0).description().contains("CanvasView") }) {
        secureContainer.isUserInteractionEnabled = true
        addSubview(secureContainer)
        secureContainer.addSubview(containerView)
        
        secureContainer.translatesAutoresizingMaskIntoConstraints = false
        containerView.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            secureContainer.topAnchor.constraint(equalTo: topAnchor),
            secureContainer.bottomAnchor.constraint(equalTo: bottomAnchor),
            secureContainer.leadingAnchor.constraint(equalTo: leadingAnchor),
            secureContainer.trailingAnchor.constraint(equalTo: trailingAnchor),
            
            containerView.topAnchor.constraint(equalTo: secureContainer.topAnchor),
            containerView.bottomAnchor.constraint(equalTo: secureContainer.bottomAnchor),
            containerView.leadingAnchor.constraint(equalTo: secureContainer.leadingAnchor),
            containerView.trailingAnchor.constraint(equalTo: secureContainer.trailingAnchor)
        ])
    }
  }

  func setSensitive(_ isSensitive: Bool) {
    textField.isSecureTextEntry = isSensitive
  }

  override func insertSubview(_ view: UIView, at index: Int) {
    if view === textField.subviews.first || view === containerView {
        super.insertSubview(view, at: index)
    } else {
        containerView.insertSubview(view, at: index)
    }
  }
}