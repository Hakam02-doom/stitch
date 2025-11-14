# Propertunity Dashboard

A modern Next.js application with Tailwind CSS for the Propertunity dashboard.

## 📁 Project Structure

```
stitch/
├── app/                          # Next.js App Router directory
│   ├── components/              # React components
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   └── Footer.tsx       # Footer component
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx        # Hero section
│   │   │   ├── RealtorServices.tsx
│   │   │   ├── ProfessionalServices.tsx
│   │   │   └── Stories.tsx
│   │   └── ui/                  # Reusable UI components
│   │       ├── Button.tsx       # Button component
│   │       ├── Card.tsx         # Card component
│   │       └── Stars.tsx        # Star rating component
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── constants/                   # Constants and static data
│   └── data.ts                  # Property, service, and story data
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper functions (formatCurrency, truncateText, etc.)
├── types/                       # TypeScript type definitions
│   └── index.ts                 # Shared types (Property, Service, Story)
├── public/                      # Static assets
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies

```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## 📦 Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first CSS framework

## 🎨 Features

- ✅ Modern, responsive design
- ✅ Dark mode support
- ✅ TypeScript for type safety
- ✅ Organized component structure
- ✅ Reusable UI components
- ✅ Utility functions
- ✅ Centralized data management

## 📝 Code Organization

### Components

- **Layout Components** (`app/components/layout/`) - Header, Footer
- **Section Components** (`app/components/sections/`) - Page sections (Hero, RealtorServices, etc.)
- **UI Components** (`app/components/ui/`) - Reusable UI elements (Button, Card, Stars)

### Data Management

- All static data is stored in `constants/data.ts`
- Type definitions in `types/index.ts`
- Utility functions in `lib/utils.ts`

### UI Components

- `Button` - Reusable button with variants (primary, secondary, outline)
- `Card` - Card container component
- `Stars` - Star rating display component

## 🔧 Configuration

### Tailwind CSS

Custom theme colors and settings are configured in `tailwind.config.ts`:
- Primary color: `#00AFE9`
- Background colors for light/dark modes
- Custom font family (Inter)

### Next.js

Image domains are configured in `next.config.ts` for external image optimization.

## 📄 License

Private project - All rights reserved.
