package expo.modules.aishield

import android.content.Context
import android.os.Build
import android.view.View
import android.view.WindowManager
import android.graphics.Color
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView

class ExpoAiContextShieldView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {

    private var isSensitiveMode: Boolean = false

    companion object {
        private var sensitiveViewsCount = 0

        @Synchronized
        fun updateWindowSecurity(appContext: AppContext, increment: Int) {
            val activity = appContext.currentActivity ?: return
            val oldCount = sensitiveViewsCount
            sensitiveViewsCount = (sensitiveViewsCount + increment).coerceAtLeast(0)
            
            val shouldBeSecure = sensitiveViewsCount > 0
            val wasSecure = oldCount > 0

            if (shouldBeSecure != wasSecure) {
                activity.runOnUiThread {
                    val window = activity.window
                    if (shouldBeSecure) {
                        window.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
                    } else {
                        window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
                    }
                    window.decorView.postInvalidate()
                }
            }
        }
    }

    fun setSensitive(isSensitive: Boolean) {
        if (this.isSensitiveMode == isSensitive) return
        
        if (isAttachedToWindow) {
            updateWindowSecurity(appContext, if (isSensitive) 1 else -1)
        }
        
        this.isSensitiveMode = isSensitive
        
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            importantForContentCapture = if (isSensitive) {
                View.IMPORTANT_FOR_CONTENT_CAPTURE_NO_EXCLUDE_DESCENDANTS
            } else {
                View.IMPORTANT_FOR_CONTENT_CAPTURE_AUTO
            }
        }
        
        importantForAutofill = if (isSensitive) {
            View.IMPORTANT_FOR_AUTOFILL_NO_EXCLUDE_DESCENDANTS
        } else {
            View.IMPORTANT_FOR_AUTOFILL_AUTO
        }

        importantForAccessibility = if (isSensitive) {
            View.IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS
        } else {
            View.IMPORTANT_FOR_ACCESSIBILITY_AUTO
        }

        post {
            requestLayout()
            invalidate()
        }
    }

    init {
        setBackgroundColor(Color.parseColor("#01000000"))
    }

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
        if (isSensitiveMode) {
            updateWindowSecurity(appContext, 1)
        }
    }

    override fun onDetachedFromWindow() {
        if (isSensitiveMode) {
            updateWindowSecurity(appContext, -1)
        }
        super.onDetachedFromWindow()
    }

    override fun onLayout(changed: Boolean, l: Int, t: Int, r: Int, b: Int) {
        super.onLayout(changed, l, t, r, b)
    }
}