import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import path from 'path'

const viteConfig: UserConfig = {
  plugins: [
      vue()
  ],
  base: './',
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build: {
    //outDir: 'static',
    lib: {
      entry: path.resolve(__dirname, 'src/components/flow/index.ts'),
      name: 'PandaFlow',
      fileName: (format) => `pandaflow.${format}.ts`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue','vue-router'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }

  },
};

export default viteConfig;
