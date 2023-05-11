# 个性化Nuxt 3模板

## 前言

由于网络环境原因，以下命令不可用，所以，
我把模板单独拿出来，以后就不使用命令初始化了。

~~~shell
# 用不了，因为网络环境特殊
npx nuxi init <project-name>
~~~

主要原因是链接：
~~~
https://raw.githubusercontent.com/nuxt/starter/templates/templates/v3.json
~~~
访问模板的时候，被`raw.githubusercontent.com`墙了。

所以，通过魔法，直接打开该json，可以得到：
~~~json
{
    "name": "v3",
    "defaultDir": "nuxt-app",
    "url": "https://nuxt.com",
    "tar": "https://codeload.github.com/nuxt/starter/tar.gz/refs/heads/v3"
}
~~~

这样，直接访问
[https://codeload.github.com/nuxt/starter/tar.gz/refs/heads/v3](https://codeload.github.com/nuxt/starter/tar.gz/refs/heads/v3)
就可以下载模板

## 个性化模板配置

**2023.3.28 更新**

### app.vue默认使用路由入口

~~~html
<template>
  <div>
    <!-- 路由入口 -->
    <NuxtPage />
  </div>
</template>

~~~

### 默认提供pages文件夹，里面写好了index.vue(路由根路径)

~~~html
<template>
    <!-- Nuxt 3默认欢迎页 -->
    <NuxtWelcome/>
</template>
~~~

### 默认提供assets和components文件夹

assets文件夹用于存放图片，字体等静态资源
components文件夹用于存放普通Vue组件(非路由组件)



### nuxt配置，这里展示完整的nuxt配置

~~~js
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
            // 设置<html lang="zh-CN">
            htmlAttrs: {
                lang: "zh-CN"
            },
            title: "Nuxt 3 App",
            viewport: "width-device-width, initial-scale=1",
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
~~~

同时，我喜欢用serve作为开发模式的运行命令，所以修改`package.json`
~~~json
{
    "scripts": {
        "serve": "nuxt dev",
    }
}
~~~