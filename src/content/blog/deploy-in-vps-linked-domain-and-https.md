---
date: 2025-08-03
title: Como apuntar un dominio o subdominio como cms.midominio.com a tu VPS en el puerto 3000 u otro con HTTPS (SSL).
description: Esta es una guía paso a paso para apuntar un subdominio como `cms.midominio.com` a tu VPS en el puerto `3000` con HTTPS (SSL).
tags: [feature]
category: astro
ogImage: https://astro-yi.obs.cn-east-3.myhuaweicloud.com/avatar.png
---


Esta es una guía paso a paso para apuntar un subdominio como `cms.midominio.com` a tu VPS en el puerto `3000` con HTTPS (SSL).

---

## ✅ 1. **Configura el subdominio en tu DNS**

Ve a tu proveedor de dominio (ej: GoDaddy, Namecheap, Cloudflare, etc.) y agrega un **registro tipo A**:

* **Tipo**: A
* **Nombre / Subdominio**: `cms`
* **Destino / IP**: La IP pública de tu VPS
* **TTL**: Automático o 300

---

## ✅ 2. **Instala Nginx en el VPS (como proxy reverso)**

```bash
sudo apt update
sudo apt install nginx -y
```

---

## ✅ 3. **Configura un archivo de Nginx para el subdominio**

Crea el archivo de configuración:

```bash
sudo nano /etc/nginx/sites-available/cms.midominio.com
```

Pega esta configuración básica para redirigir HTTPS al puerto 3000:

```nginx
server {
    listen 80;
    server_name cms.midominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Actívalo con un enlace simbólico:

```bash
sudo ln -s /etc/nginx/sites-available/cms.midominio.com /etc/nginx/sites-enabled/
```

---

## ✅ 4. **Instala Certbot y habilita HTTPS gratis con Let's Encrypt**

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Ejecuta el certificado SSL:

```bash
sudo certbot --nginx -d cms.midominio.com
```

✔️ Esto:

* Obtendrá un certificado HTTPS
* Configurará automáticamente Nginx para HTTPS

---

## ✅ 5. **Reinicia Nginx para aplicar cambios**

```bash
sudo systemctl restart nginx
```

---

## 📦 Tu aplicación en Node.js

Asegúrate de que tu app escuche en `localhost:3000` y **no directamente en el puerto 80 o 443**, ya que eso lo gestiona Nginx.

Ejemplo en Node.js/Express:

```js
app.listen(3000, '127.0.0.1', () => {
  console.log('Server on http://localhost:3000');
});
```

---

## 🧪 Verificación

1. Espera que se propague el DNS (normalmente inmediato)
2. Visita: `https://cms.midominio.com`

---

Proximamente te mostraré cómo redireccionar de HTTP a HTTPS.
