import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
/*https://stackoverflow.com/questions/68241263/absolute-path-not-working-in-vite-project-react-ts 
https://stackoverflow.com/questions/74686369/absolute-import`npx -is-not-working-in-react-vite-js
*/

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:[
      {find: '@', replacement:'./src'},
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@styles', replacement: '/src/styles' },

    ],
    
  },
  
  plugins: [react(), tsconfigPaths()],
  
  
})




/**
 * "paths": {
      "@assets/*": ["./assets/*"],
      "@components/*": ["./components/*"],
      "@config/*": ["./config/*"],
      "@hooks/*": ["./hooks/*"],
      "@ioc/*": ["./ioc/*"],
      "@pages/*": ["./pages/*"],
      "@utils/*": ["./utils/*"]
    },
 */