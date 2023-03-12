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
模板默认在安装依赖和运行的时候，总会提示
~~~
Are you interested in participating?
~~~

很烦人，所以通过在nuxt.config.ts中配置
~~~typescript
export default defineNuxtConfig({
    // 关闭Are you interested in participating的提示
    telemetry: false
})
~~~
即可.

同时，我喜欢用serve作为开发模式的运行命令，所以修改`package.json`
~~~json
{
    "scripts": {
        "serve": "nuxt dev",
    }
}
~~~