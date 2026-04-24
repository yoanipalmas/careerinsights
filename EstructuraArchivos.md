/src
├── assets/                           # Imágenes, logos, íconos, etc.
│   ├── fonts/                        # Fuentes personalizadas
│   │   └── Chloe-Regular.otf
│   ├── image/                        # Imágenes SVG y PNG
│   │   ├── Seminar-bro.svg
│   │   ├── User research-bro.svg
│   │   ├── Face to face-amico.svg
│   │   ├── Webinar-cuate.svg
│   │   ├── Selecting team-rafiki.svg
│   │   ├── Vision-board-rafiki.svg
│   │   ├── Cohort-analysis-amico.svg
│   │   ├── Analyze-pana.svg
│   │   └── imgBanner.png
│   └── react.svg
│
├── components/                       # Componentes compartidos globales
│   ├── AboutSection.tsx
│   ├── ButtonLink.tsx
│   ├── Footer.tsx
│   ├── GoalsSection.tsx
│   ├── Navbar.tsx
│   ├── NavLink.tsx
│   └── SessionSelector.tsx
│
├── context/                          # Contextos globales
│   ├── AuthContext.tsx               # Estado de autenticación (login/logout)
│   └── AuthProvider.tsx
│
├── features/                         # Features o módulos específicos
│   ├── components/                   # Componentes específicos de features
│   │   └── HeroBanner.tsx
│   ├── data/                         # Archivos de datos estáticos y configuraciones
│   │   ├── navItems.ts               # Ítems de navegación del navbar
│   │   └── questions.ts              # Preguntas o estructura de test CHASIDE
│   ├── pages/                        # Vistas/páginas relacionadas con features
│   │   └── Test.tsx
│   └── types.tsx                     # Interfaces y tipos del dominio
│
├── pages/                            # Páginas principales
│   └── Home.tsx                      # Página principal (landing page)
│
├── routes/                           # Definición de rutas SPA
│   └── Routes.tsx
│
├── styles/                           # Estilos globales y fuentes
│   ├── fonts.css
│   └── index.css
│
├── main.tsx                          # Entry point con Context Providers
├── vite-env.d.ts                     # Configuración global de TS
└── index.html                        # HTML base de la app
