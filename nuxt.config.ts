// https://nuxt.com/docs/api/configuration/nuxt-config
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
    // 设置全局头部
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width-device-width，initial-scale=1"},
        ],
        link: [
            { rel: 'icon', type: "image/x-icon", href: "/favicon.ico"}
        ]
    }
})
