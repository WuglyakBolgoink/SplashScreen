If you want your app to terminate when the user presses the home button, set the value of <strong>UIApplicationExitsOnSuspend</strong> to <strong>YES</strong> in your app's Info.plist file. If you do this, when the user taps the home button the applicationWillTerminate: method of your app delegate will be called and then your application will terminate.