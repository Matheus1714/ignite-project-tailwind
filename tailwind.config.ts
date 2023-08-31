import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      maxWidth:{
        app: '700px'
      },
      colors: {
        diego: '#8257e5',
      }
    },
  },
  plugins: [],
}
export default config
