// Nuxt配置
export default defineNuxtConfig({
    // 关闭Are you interested in participating的提示
    telemetry: false,
    // 设置默认开发服务的端口
    devServer: {
        host: "0.0.0.0",
        port: 8080
    },
    // 是否开启服务端渲染
    ssr: false,
    // 设置全局SEO(head头部的相关内容)
    app: {
        head: {
            title: "Nuxt 3 App",
            viewport: "width-device-width，initial-scale=1",
            charset: "utf-8",
            meta: [
                { name: "description", content: "A Nuxt 3 template" }
            ],
            link: [
                { rel: 'icon', type: "image/x-icon", href: "/favicon.ico"}
            ],
        }
    }
})
