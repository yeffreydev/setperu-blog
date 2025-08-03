---
date: 2025-08-03
title: Como ejecutar tu servidor Node.js (o cualquier otro proceso) en segundo plano usando `screen` en un VPS
description: Ejecutar tu servidor Node.js (o cualquier otro proceso) en segundo plano usando `screen` en un VPS
tags: [feature]
category: astro
ogImage: https://astro-yi.obs.cn-east-3.myhuaweicloud.com/avatar.png
---

Para ejecutar tu servidor Node.js (o cualquier otro proceso) en segundo plano usando `screen`, solo sigue estos pasos:

---

## ✅ 1. **Instala `screen` (si no está instalado)**

```bash
sudo apt install screen
```

---

## ✅ 2. **Crea una nueva sesión de `screen`**

```bash
screen -S mi-servidor
```

> Puedes reemplazar `mi-servidor` con el nombre que prefieras.

Esto abrirá una nueva terminal dentro de `screen`.

---

## ✅ 3. **Inicia tu servidor dentro de esa sesión**

Ejemplo con Node.js:

```bash
node app.js
```

O si usas `npm` o `yarn`:

```bash
npm start
# o
yarn start
```

---

## ✅ 4. **Desconéctate de `screen` y deja el proceso corriendo**

Presiona las teclas:

```bash
Ctrl + A, luego suelta y presiona D
```

Esto “desvincula” la sesión de `screen` y deja el servidor corriendo en segundo plano.

---

## 🔄 5. **Volver a entrar a la sesión**

Para listar tus sesiones activas:

```bash
screen -ls
```

Verás algo como:

```
There is a screen on:
    12345.mi-servidor (Detached)
```

Para volver:

```bash
screen -r mi-servidor
```

---

## ❌ 6. **Cerrar la sesión (y detener el servidor)**

Cuando quieras detener el servidor y cerrar la sesión de `screen`:

1. Entra a la sesión:

   ```bash
   screen -r mi-servidor
   ```

2. Detén tu servidor (Ctrl + C)

3. Sal de la terminal de `screen`:

   ```bash
   exit
   ```

---

¿Si deseas que el servidor se inicie automáticamente al arrancar el VPS? En ese caso puedes usar `pm2`, `systemd`, o dejar el `screen` corriendo en el archivo de inicio. Proximamente te mostraré cómo hacer esto.
