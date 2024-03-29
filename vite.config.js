import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true,
    hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    // 服务配置
    port: 5002, // 类型： number 指定服务器端口;
    open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    cors: true // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    //proxy look for https://vitejs.cn/config/#server-proxy
    // proxy: {
    //   '/api': {
    //     target: loadEnv(mode, process.cwd()).VITE_APP_PROXY_URL,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  preview: {
    port: 5002,
    host: '0.0.0.0',
    strictPort: true
  },
})
