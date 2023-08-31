import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns:{
        app:'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
      },
      maxWidth: {
        app: '700px',
      },
      colors: {
        diego: '#8257e5',
      },
    },
  },
  plugins: [],
}
export default config
