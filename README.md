# GP Construction & Landscaping

Landing page estatica para una empresa de construccion y jardineria.

Incluye:
- Seccion hero con llamada a la accion.
- Secciones de servicios, proyectos, testimonios y contacto.
- Modal para solicitar cotizacion.
- Animaciones de reveal, counters y cursor personalizado.
- Diseno responsive para escritorio y movil.

## Estructura del proyecto

```text
GP construction/
├─ src/
│  ├─ index.html
│  ├─ style.css
│  └─ main.js
└─ README.md
```

## Requisitos

- Navegador moderno (Chrome, Edge, Firefox).
- Opcional: extension Live Server de VS Code para desarrollo.

## Como inicializar y correr el proyecto

1. Abre la carpeta del proyecto en VS Code.
2. Entra a la carpeta `src`.
3. Abre `index.html` en el navegador.

Opciones rapidas:

- Opcion A (doble clic): abrir `src/index.html`.
- Opcion B (VS Code + Live Server): clic derecho en `src/index.html` y luego "Open with Live Server".

## Inicializar Git correctamente

Si quieres que el repo este en la raiz del proyecto (`GP construction`):

```bash
cd "C:/Users/User/Desktop/GP construction"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL_DE_TU_REPO>
git push -u origin main
```

### Error comun: `src refspec main does not match any`

Ese error casi siempre significa que:
- Todavia no existe ningun commit.
- O no estas en la rama `main`.

Solucion:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

## Personalizacion basica

- Texto y secciones: editar `src/index.html`.
- Estilos y colores: editar `src/style.css`.
- Interacciones y animaciones: editar `src/main.js`.

## Licencia

Uso interno / privado del proyecto.
