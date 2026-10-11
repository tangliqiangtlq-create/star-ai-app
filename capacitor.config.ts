import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'video.starai.app',
  appName: '榴莲TV',
  webDir: 'out',
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: false
  },
  server: {
    androidScheme: 'https',
    allowNavigation: ['**.starai.video', '**.amazonaws.com', '**.cloudfront.net']
  },
  plugins: {
    SplashScreen: { launchShowDuration: 2000 }
  }
}

export default config
