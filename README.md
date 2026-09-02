# TERRA

Landing page inmersiva sobre el cuidado del planeta: sus causas, los datos detrás de la crisis climática y qué se puede hacer al respecto. Video de fondo a pantalla completa, tarjetas con efecto "liquid glass" y datos ambientales verificados con fuentes oficiales (ONU, OMS, IPCC, IRENA/Ember).

## Sobre el proyecto

TERRA presenta en una sola página:

- Un **hero** con el mensaje central y llamados a la acción.
- Una **franja de estadísticas** clave: concentración de CO₂, deforestación anual, muertes por contaminación del aire y escasez de agua.
- Una sección de **causas** (grid tipo bento) que explica seis fuerzas detrás de la crisis ambiental: cambio climático, deforestación, contaminación plástica, pérdida de biodiversidad, escasez de agua y contaminación del aire.
- Un bloque de **esperanza**, con el avance de las energías renovables.
- Una sección de **acción**, con pasos concretos que cualquier persona puede tomar.
- Un **footer** con navegación, enlaces y redes sociales.

Todo el contenido está en español y las cifras citan su fuente al pie de la sección de causas.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) sobre [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- [motion](https://motion.dev/) (`motion/react`) para las animaciones de entrada y scroll
- [lucide-react](https://lucide.dev/) para los íconos

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` (o el puerto que indique la terminal).

Otros comandos disponibles:

```bash
npm run build    # compila TypeScript y genera el build de producción en dist/
npm run preview  # sirve el build de producción localmente
npm run lint     # corre Oxlint
```

## Estructura

```
src/
├── App.tsx      # toda la página: hero, estadísticas, causas, acción y footer
├── index.css    # Tailwind, la fuente personalizada y el efecto .liquid-glass
└── main.tsx     # punto de entrada de React
```

## Fuentes de los datos

- [Naciones Unidas — noticias sobre microplásticos](https://news.un.org/es/story/2025/06/1539146)
- [PINCC UNAM — temperatura global 2025](https://www.pincc.unam.mx/la-temperatura-global-registrada-en-2025-evidencia-que-ya-se-ha-rebasado-el-umbral-de-1-5oc-y-sugiere-que-los-2oc-se-alcanzarian-en-el-2040/)
- [Ecoticias — deforestación mundial 2024](https://www.ecoticias.com/medio-ambiente/deforestacion-perdido-81-millones-hectareas-bosque-mundo-2024-forest-declaration-assessment-partners)
- [Naciones Unidas — el agua y la crisis climática](https://www.un.org/es/climatechange/science/climate-issues/water)
- [Diario Libre — contaminación del aire (OMS)](https://www.diariolibre.com/planeta/medioambiente/2025/03/27/oms-contaminacion-del-aire-causa-siete-millones-de-muertes-anuales/3050118)
- [Ember — Global Electricity Review 2025](https://ember-energy.org/es/analisis/global-electricity-review-2025/)
- [Naciones Unidas — pérdida de biodiversidad](https://www.un.org/es/climatechange/science/climate-issues/biodiversity)
