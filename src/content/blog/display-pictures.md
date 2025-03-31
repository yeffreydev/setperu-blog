---
date: 2024-03-24
title: Mostrar imágenes
description: Cómo mostrar imágenes
tags: [feature]
category: astro
ogImage: https://astro-yi.obs.cn-east-3.myhuaweicloud.com/avatar.png
---

### Mostrar enlaces remotos

```md
![](https://astro-yi.obs.cn-east-3.myhuaweicloud.com/avatar.png)
```

![](https://astro-yi.obs.cn-east-3.myhuaweicloud.com/avatar.png)

### Mostrar imágenes locales

```md
![](/avatar.png)
```

![](/avatar.png)

### Personalizar imágenes locales

Usa HTML, establece `style="width: 200px;"`

```html
<img src="/spinner.gif" data-src="/avatar.png" style="width:200px;" />
```

<img src="/spinner.gif" data-src="/avatar.png" style="width:200px;">

### Una fila, dos columnas

```html
<div class="image-cols-2">
  <img
    src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg"
  />
  <img
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg"
  />
</div>
```

<div class="image-cols-2">
    <img src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
    <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg" >
</div>

Para carga diferida: necesitamos ingresar `/spinner.gif` en `src`, y la dirección real de la imagen en `data-src`. Si no deseas usar esta función, simplemente ingresa la dirección real de la imagen en `src`.

### Una fila, tres columnas

```html
<div class="image-cols-3">
  <img
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg"
  />
  <img
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg"
  />
  <img
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg"
  />
</div>
```

<div class="image-cols-3">
    <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
    <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg" >
    <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg" >
</div>

### Una fila, cuatro columnas

```html
<div class="image-cols-4">
  <img
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg"
  />
  <img
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg"
  />
  <img
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg"
  />
  <img
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg"
  />
</div>
```

<div class="image-cols-4">
    <img class="object-fill" src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
    <img class="object-fill" src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg" >
    <img class="object-fill" src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg" >
    <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
</div>

### En realidad, está bien.

Puedes mostrarlo como quieras, solo necesitas saber un poco sobre TailwindCss.

```html
<div class="image-cols-2">
  <img
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg"
  />
  <img
    class="row-span-2"
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-jeffer-berrire-9027257.jpg"
  />
  <img
    src="/spinner.gif"
    data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg"
  />
</div>
```

<div class="image-cols-2">
<img src="/spinner.gif" class="object-fill" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
<img class="row-span-2 object-fill" src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8907866.jpeg">
<img src="/spinner.gif" class="object-fill" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg">
</div>

### Recuerda

El tema proporciona tres clases de estilo simples que puedes usar directamente.

- Una fila y dos columnas: `class="image-cols-2"`.
- Una fila y tres columnas: `class="image-cols-3"`.
- Una fila y cuatro columnas: `class="image-cols-4"`.

Si deseas una visualización más compleja, consulta TailwindCss.
