# Set Peru Blog (es un clon de Astro-Theme-Yi) [Astro-Theme-YI](https://github.com/cirry/astro-yi.git)

[[English]](./README.md) | [[简体中文]](./README-ZH-CN.md)

Demo：[Astro-Theme-Yi](https://astro-yi-nu.vercel.app/)

Un tema de blog de Astro enfocado en el contenido, Yi, en chino, significa rápido y conciso.

![](https://astro-yi.obs.cn-east-3.myhuaweicloud.com/9.png)

![](https://astro-yi.obs.cn-east-3.myhuaweicloud.com/1.png)

![](https://astro-yi.obs.cn-east-3.myhuaweicloud.com/8.png)

### 🔥 Características

- [x] Soporte para páginas de GitHub.
- [x] Compatible con visualización en múltiples plataformas.
- [x] Compatible con modo oscuro.
- [x] Compatible con Memos.
- [x] Compatible con i18n.
- [x] Funcionalidad de búsqueda.
- [x] Optimizado para SEO.
- [x] Compatible con sitemap y RSS.
- [x] Compatible con borradores de artículos.
- [x] Compatible con comentarios Waline/Giscus.
- [x] Carga diferida y escalado de imágenes.
- [x] Compatible con enlaces permanentes fijos para artículos.
- [x] Compatible con Meriand.
- [x] Compatible con MathJax.
- [x] Compatible con código expresivo.

......

### Despliegue en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https%3A%2F%2Fgithub.com%2Fcirry%2Fastro-yi)

¡Pruébalo! Haz clic en el botón de arriba y podrás desplegar con un solo clic.

### 👨🏻‍💻 Instalación Manual

Se recomienda usar `nodejs >= 18`，`pnpm >= 8`。

```bash
git clone https://github.com/cirry/astro-yi.git
cd astro-yi
npm install -g pnpm # instalar pnpm
pnpm i  # instala las dependencias
npm run dev # vista previa, inicia el servidor local en localhost:4321
```

```bash
npm run build # construye tu sitio de producción en ./dist
```

Después de completar el empaquetado, sube la carpeta `dist` al directorio del servidor web.

### Despliegue en GitHub Pages

En /src/consts.ts, modifica el contenido del campo `site`:

```js
export const site = {
  // ...
  url: "https://cirry.github.io", // requerido, origen del sitio web
  baseUrl: "/yi.github.io", // Al usar GitHubPages, debes ingresar el nombre del repositorio comenzando con '/'
  // ...
};
```

## Configuración

El único archivo de configuración para este blog es: `src/consts.ts`, puedes realizar algunas modificaciones según tus necesidades.

```ts
/**
 * title {string} título del sitio web
 * favicon {string} URL del favicon del sitio web
 * description {string} descripción del sitio web
 * author {string} autor
 * avatar {string} Avatar usado en el perfil
 * motto {string} usado en el perfil
 * url {string} Enlace del sitio web
 * baseUrl {string} Al usar GitHubPages, debes ingresar el nombre del repositorio
 * recentBlogSize {number} Número de artículos recientes mostrados en la barra lateral
 * archivePageSize {number} Número de artículos en las páginas de archivo
 * postPageSize {number} Número de artículos en las páginas de blog
 * feedPageSize {number} Número de artículos en las páginas de feed
 * beian {string} Política china
 */
export const site = {
  title: "Astro Tema Yi",
  favicon: "/favicon.svg",
  description: "¡Bienvenido a mi sitio web de blog independiente!",
  author: "xxxxx",
  avatar: "/avatar.png",
  motto: "Sigue avanzando.",
  url: "https://astro-yi-nu.vercel.app",
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: "",
};

/**
 * lang {string} Idioma predeterminado del sitio web: Inglés
 * codeFoldingStartLines {number} predeterminado 16
 * memosUrl {string} URL del servidor de memos
 * memosUsername {string} nombre de usuario de memos
 * memosPageSize {number} 10
 */
export const config = {
  lang: "es", // Inglés: en | 简体中文: zh-cn | 繁體中文: zh-Hant | cs
  codeFoldingStartLines: 16, // Necesita reiniciar el proyecto para que surta efecto

  // configuración de memos
  memosUrl: "", // https://xxxx.xxx.xx
  memosUsername: "", // nombre de usuario
  memosPageSize: 10, // número
};

/**
 * Navegador
 */
export const categories = [
  {
    name: "Inicio",
    iconClass: "ri-home-4-line",
    href: "/",
  },
  {
    name: "Blog",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  {
    name: "Feed",
    iconClass: "ri-lightbulb-flash-line",
    href: "/feed/1",
  },
  {
    name: "Archivo",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  {
    name: "Mensaje",
    iconClass: "ri-chat-1-line",
    href: "/message/",
  },
  {
    name: "Buscar",
    iconClass: "ri-search-line",
    href: "/search",
  },
  {
    name: "Más",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: "Acerca de",
        iconClass: "ri-information-line",
        href: "/about",
      },
      {
        name: "Amigos",
        iconClass: "ri-user-5-line",
        href: "/friends",
        target: "_self", // _self | _blank
      },
    ],
  },
];

/**
 * Dirección de enlaces personales
 */
export const infoLinks = [
  {
    icon: "ri-telegram-fill",
    name: "telegram",
    outlink: "xxxxxxx",
  },
  {
    icon: "ri-twitter-fill",
    name: "twitter",
    outlink: "xxxxxxx",
  },
  {
    icon: "ri-instagram-fill",
    name: "instagram",
    outlink: "xxxxxxx",
  },
  {
    icon: "ri-github-fill",
    name: "github",
    outlink: "https://github.com/cirry",
  },
  {
    icon: "ri-mail-fill",
    name: "xxxxxxx@gmail.com",
    outlink: "mailto:xxxxxxx@gmail.com",
  },
  {
    icon: "ri-rss-fill",
    name: "rss",
    outlink: "https://xxxxx.com/rss.xml",
  },
];

/**
 * Función de donación
 * Por favor, reemplaza la imagen y el enlace de PayPal antes de usar.
 * enable {boolean}
 * tip {string}
 */
export const donate = {
  enable: false,
  tip: "¡Gracias por el café! ☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png",
  paypalUrl: "https://paypal.me/xxxxxxxx",
};

/**
 * Página de enlaces de amigos
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks = [
  {
    name: "Blog de Cirry",
    url: "https://cirry.cn",
    avatar: "https://cirry.cn/avatar.png",
    description: "desarrollo frontend",
  },
];

/**
 * Función de comentarios
 * enable {boolean}
 * type {string} Actualmente se admiten giscus y waline.
 * walineConfig.serverUrl {string} enlace del servidor
 * walineConfig.pageSize {number} número de comentarios por página. predeterminado 10
 * walineConfig.wordLimit {number} Límite de palabras de comentarios. Cuando se llena un solo número, es el número máximo de palabras de comentarios. Sin límite cuando se establece en 0
 * walineConfig.count {number} número de comentarios recientes
 * walineConfig.pageview {boolean} mostrar el número de vistas de página y comentarios del artículo
 * walineConfig.reaction {string | string[]} Agregar función de interacción de emoji al artículo
 * walineConfig.requiredMeta {string[]} Establecer campos obligatorios, predeterminado anónimo
 */
export const comment = {
  enable: false,
  type: "giscus", // waline | giscus,
  walineConfig: {
    serverUrl: "https://xxxxx.xxxxx.app",
    lang: "es",
    pageSize: 20,
    wordLimit: "",
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ["nick", "mail"],
    whiteList: ["/message/", "/friends/"],
  },

  // configuración de giscus
  giscusConfig: {
    "data-repo": "xxxxxxx",
    "data-repo-id": "xxxxxx",
    "data-category": "Announcements",
    "data-category-id": "xxxxxxxxx",
    "data-mapping": "pathname",
    "data-strict": "0",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "bottom",
    "data-theme": "light",
    "data-lang": "xxxxxxxxxxx",
    crossorigin: "anonymous",
  },
};

/**
 * Configuración de la función de análisis
 *
 * Este archivo centraliza la configuración de análisis para la aplicación.
 * Define y exporta la configuración predeterminada para Umami y Google Analytics.
 */
export const analytics: AnalyticsConfig = {
  enable: false,
  umamiConfig: {
    enable: false,
    id: "",
    url: "",
  },
  gaConfig: {
    enable: false,
    id: "",
  },
  busuanzi: false,
};
```

Por favor, modifica la configuración de tu sitio web, configuración del sistema de comentarios, imagen de la función de apreciación, enlaces de información personal y, por supuesto, también puedes modificar otros contenidos de configuración.

### Escribir un blog

Con el tema Yi, todo lo que necesitas hacer es crear un nuevo documento md en `src/content/blog` y estarás listo para comenzar a escribir tu blog.

De acuerdo con el estándar de documentos Markdown de Astro, cada documento debe tener su propia información de frontmatter y agregar `---` como el principio y el final del encabezado del documento en md para marcar el frontmatter, lo que nos brinda mucha comodidad:

1. Por ejemplo, si queremos agregar etiquetas y categorías a un documento o destacar algunos documentos, podemos agregar algunos atributos al documento en Frontmatter, como `tags`, `sticky`, etc.

2. Por ejemplo, para evitar usar chino como la ruta y el nombre del archivo del blog, podemos establecer `title` como el título del documento md en chino, y el nombre del archivo en inglés con `-` como el símbolo de conexión de palabras.

En Astro-Yi, necesitas establecer dos propiedades importantes: **title** y **date**, el siguiente es el ejemplo más simple de configuración de frontmatter para un documento Md:

```yaml
---
title: Mostrar imágenes
date: 2024-03-05
---
```

Si sientes que esto no es suficiente, Yi también proporciona más propiedades para que las uses, este es un ejemplo completo:

```yaml
---
title: Mostrar imágenes
description: Mostrar imágenes
date: 2024-03-05
tags: [astro]
category: astro
sticky: 100  // Peso superior del documento, cuanto mayor sea el número, mayor será el peso
slug: poema/ci // Enlace permanente al documento
mathjax: false // habilitar visualización de fórmulas
mermaid: false // habilitar mermaid
draft: false
toc: true
donate: false
comment: false
ogImage: https://xxxxx/xxxxx/xxxxx // imagen de portada
---
```

### Escribir un feed

Con el tema Yi, todo lo que necesitas hacer es crear un nuevo documento md en `src/content/feed` y estarás listo para comenzar a escribir.

El frontmatter de feed necesita establecer una propiedad importante **date**, el resto de los atributos son opcionales.

```yaml
---
date: 2024-03-20
---
```

### Modificar íconos

Todos los íconos en el blog utilizan la biblioteca de íconos de código abierto [remixicon](https://remixicon.cn/), puedes reemplazar tus íconos favoritos por ti mismo.

### Nota

En el archivo `astro.config.js` en el directorio raíz, se recomienda modificar la propiedad `site` para generar correctamente el mapa del sitio.

```js
export default defineConfig({
  site: "https://xxxx.com", // Modifica a la dirección de tu propio sitio web
  // ...
});
```

Agrega una línea a la ruta de tu archivo sitemap al final del archivo robots.txt en el directorio público.

```text
Sitemap: [blog-url]/sitemap-0.xml
// ps：Sitemap: https://astro-yi-nu.vercel.app/sitemap-0.xml
```
