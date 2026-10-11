export const env = {
  IS_CAPACITOR: typeof document !== 'undefined' && document.querySelector('meta[name="capacitor"]') !== null,
  IS_IOS: typeof navigator !== 'undefined' && /iPhone|iPad|iPod/.test(navigator.userAgent),
  IS_ANDROID: typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent),
  API_BASE: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080'
}

if (typeof document !== 'undefined' && env.IS_CAPACITOR) {
  document.documentElement.classList.add('app')
}
