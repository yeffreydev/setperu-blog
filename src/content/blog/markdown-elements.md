---
title: "Un post de elementos de Markdown"
description: "Este post es para probar y listar una serie de diferentes elementos de markdown"
date: 2024-03-19
tags: ["prueba", "markdown"]
---

## Este es un encabezado H2

### Este es un encabezado H3

#### Este es un encabezado H4

##### Este es un encabezado H5

###### Este es un encabezado H6

## Reglas horizontales

---

---

---

## Énfasis

**Este es un texto en negrita**

_Este es un texto en cursiva_

~~Tachado~~

## Citas

"Citas dobles" y 'citas simples'

## Citas en bloque

> Las citas en bloque también pueden anidarse...
>
> > ...usando signos de mayor que adicionales uno junto al otro...

## Referencias

Un ejemplo que contiene una referencia clicable[^1] con un enlace a la fuente.

Segundo ejemplo que contiene una referencia[^2] con un enlace a la fuente.

[^1]: Primera nota al pie de referencia con un enlace de retorno al contenido.
[^2]: Segunda referencia con un enlace.

Si revisas este ejemplo en `src/content/post/markdown-elements/index.md`, notarás que las referencias y el encabezado "Notas al pie" se agregan al final de la página a través del plugin [remark-rehype](https://github.com/remarkjs/remark-rehype#options).

## Listas

No ordenadas

- Crea una lista comenzando una línea con `+`, `-` o `*`
- Las sublistas se hacen al indentar 2 espacios:
  - Cambiar el carácter del marcador fuerza el inicio de una nueva lista:
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- ¡Muy fácil!

Ordenadas

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. Puedes usar números secuenciales...
5. ...o mantener todos los números como `1.`

Comenzar la numeración con un desplazamiento:

57. foo
1. bar

## Código

Código en línea `code`

Código indentado

    // Algunos comentarios
    línea 1 de código
    línea 2 de código
    línea 3 de código

Bloques de código "cercados"

```
Texto de ejemplo aquí...
```

Resaltado de sintaxis

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

### Ejemplos expresivos de código

Agregar un título

```js title="file.js"
console.log("Ejemplo de título");
```

Un terminal bash

```bash
echo "Un ejemplo de terminal base"
```

Resaltando líneas de código

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log("esta línea está marcada como eliminada");
  // Esta línea y la siguiente están marcadas como insertadas
  console.log("esta es la segunda línea insertada");

  return "esta línea usa el marcador predeterminado neutral";
}
```

[Expressive Code](https://expressive-code.com/) puede hacer mucho más de lo que se muestra aquí, e incluye muchas [personalizaciones](https://expressive-code.com/reference/configuration/).

## Tablas

| Opción | Descripción                                                                               |
| ------ | ----------------------------------------------------------------------------------------- |
| data   | ruta a los archivos de datos para proporcionar los datos que se pasarán a las plantillas. |
| engine | motor que se usará para procesar las plantillas. Handlebars es el predeterminado.         |
| ext    | extensión que se usará para los archivos de destino.                                      |

Columnas alineadas a la derecha

| Opción |                                                                               Descripción |
| -----: | ----------------------------------------------------------------------------------------: |
|   data | ruta a los archivos de datos para proporcionar los datos que se pasarán a las plantillas. |
| engine |         motor que se usará para procesar las plantillas. Handlebars es el predeterminado. |
|    ext |                                      extensión que se usará para los archivos de destino. |

## Enlaces

[Contenido de markdown-it](https://markdown-it.github.io/)
