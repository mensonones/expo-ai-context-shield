import ExpoModulesCore
import UIKit

class ExpoAiContextShieldView: ExpoView {
  // The trick: UITextField with password field hides content from the system
  private let textField = UITextField()
  private let containerView = UIView()

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    
    textField.isSecureTextEntry = true
    textField.isUserInteractionEnabled = false // We don't want the keyboard to open
    
    // We get the View layer that iOS uses to hide the password
    if let secureContainer = textField.subviews.first(where: { type(of: $0).description().contains("CanvasView") }) {
        secureContainer.isUserInteractionEnabled = true
        addSubview(secureContainer)
        secureContainer.addSubview(containerView)
        
        // Constraints to fill everything
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

  // On iOS, Expo throws the children (Text, Image) inside the default subview.
  // We need to move them to our protected containerView.
  override func insertSubview(_ view: UIView, at index: Int) {
    if view === textField.subviews.first || view === containerView {
        super.insertSubview(view, at: index)
    } else {
        containerView.insertSubview(view, at: index)
    }
  }
}