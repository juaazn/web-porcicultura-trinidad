import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare({ mode: 'advanced' }),

  vite: {
    build : {
      minify: false
    }
  }
})
