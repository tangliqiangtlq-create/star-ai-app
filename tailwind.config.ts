import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b9d',
        bg: '#0a0a0f'
      }
    }
  },
  plugins: []
}
export default config
