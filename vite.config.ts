import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import reactSwc from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [process.env.VITE_MODE === 'swc' ? reactSwc() : react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('views/images') || id.includes('views/icons/languages')) {
            // return btoa(`views/${id.split('views/')[1]}-${id.split('/').pop()}`);
            return `${id
              .split('/')
              .pop()
              .replace(/\.[tj]sx?$/gi, '')
              .toLowerCase()}`;
          }
          // if (id.includes('node_modules')) {
          //   // Return the directory name under node_modules
          //   return id.toString().split('node_modules/')[1].split('/')[0];
          // }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Adjust the chunk size limit
  },
});
