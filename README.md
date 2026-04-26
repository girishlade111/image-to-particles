# Retro Shader Studio

<p align="center">
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel" alt="Deployed on Vercel" />
  <img src="https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js" alt="Built with Next.js" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

> A modern web application that transforms images into interactive halftone particle effects with real-time mouse interaction.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Controls Reference](#controls-reference)
- [Project Stats](#project-stats)

---

## Overview

**Retro Shader Studio** is a creative tool that converts any image into a mesmerizing halftone particle visualization. Users can upload their own images and watch as they're transformed into thousands of interactive dots that respond to mouse movement with physics-based animations.

The application uses HTML5 Canvas for rendering and implements custom physics simulations to create organic, fluid particle interactions. The halftone effect preserves image details while creating a unique retro-aesthetic visual experience.

---

## Features

### Core Functionality
- **Image Upload** — Drag & drop or browse to upload any image (PNG, JPG, GIF, WEBP)
- **Halftone Conversion** — Real-time conversion of images to particle dots based on brightness
- **Interactive Particles** — Particles react to mouse movement with physics-based repulsion
- **Download Output** — Export your creation as a high-quality PNG image

### Visual Effects
- **Dynamic Repulsion** — Particles are pushed away as mouse moves across the canvas
- **Smooth Return** — Particles gradually return to their original positions with configurable speed
- **Twinkle Effect** — Brightness animation on particles affected by mouse proximity
- **Accent Coloring** — Random dots highlighted in a custom accent color
- **Size Variation** — Organic dot sizing for more natural appearance
- **Contrast Adjustment** — Pre-processing controls for better detail preservation

### Interactive Controls
- **Real-time Sliders** — All parameters adjustable with instant visual feedback
- **Color Picker** — Custom accent color selection for personalized visuals
- **Hover Interaction** — Move mouse over canvas to trigger particle animations
- **Responsive Canvas** — Automatically scales to fit within display constraints

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15.5.4 |
| **Language** | TypeScript |
| **UI Library** | React 19.1.0 |
| **Styling** | Tailwind CSS 4.1.9 |
| **Components** | Radix UI (14 components) |
| **Icons** | Lucide React |
| **Forms** | React Hook Form + Zod |
| **Build Tool** | pnpm |
| **Deployment** | Vercel |

### Key Dependencies
- `@radix-ui/react-slider` — Slider controls
- `@radix-ui/react-label` — Form labels
- `@radix-ui/react-card` — Card container
- `tailwindcss-animate` — CSS animation utilities
- `class-variance-authority` — Component variant generation

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/image-to-particles.git
cd image-to-particles

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Linting

```bash
# Run ESLint
pnpm lint
```

---

## Configuration

### Environment Variables

The project uses Next.js defaults. No additional environment variables are required for local development.

### Canvas Configuration

The canvas renders at a maximum resolution of **720x480** while preserving aspect ratio. Device pixel ratio (DPR) is automatically handled for crisp rendering on retina displays.

### Default Parameters

| Parameter | Default Value | Range |
|-----------|---------------|-------|
| Halftone Size | 4px | 2–12 |
| Contrast | 1.5x | 0.5–2.0 |
| Mouse Radius | 100px | 50–300 |
| Repulsion Strength | 1.0x | 0.1–2.0 |
| Return Speed | 0.3 | 0.05–0.3 |
| Accent Color | `#00d9ff` | Hex color |
| Accent Probability | 3% | 0–10% |
| Size Variation | 30% | 0–50% |

---

## Controls Reference

### Halftone Dot Size
- **Range:** 2–12 pixels
- **Effect:** Controls the granularity of the particle grid. Larger values create fewer, larger dots for a more retro look; smaller values create more detail.

### Contrast
- **Range:** 0.5x–2.0x
- **Effect:** Adjusts image contrast before processing. Higher values create more dramatic brightness differences, improving dot visibility in low-contrast images.

### Size Variation
- **Range:** 0–50%
- **Effect:** Adds random size variation to dots for a more organic, less uniform appearance. Creates a natural, hand-crafted feel.

### Mouse Impact Radius
- **Range:** 50–300 pixels
- **Effect:** Defines the area around the cursor that influences particles. Larger radii create more dramatic visual effects.

### Repulsion Strength
- **Range:** 0.1x–2.0x
- **Effect:** Controls how forcefully particles are pushed away by mouse movement. Higher values create more dramatic displacement.

### Return Speed
- **Range:** 5–30%
- **Effect:** How quickly particles return to their original positions. Lower values create smoother, more gradual animations.

### Accent Color
- **Type:** Color picker
- **Effect:** Sets the color for randomly selected accent dots. Click the color swatch to open the picker.

### Accent Probability
- **Range:** 0–10%
- **Effect:** Controls the likelihood of dots being colored with the accent color instead of white. Only affects brighter dots (>150 brightness).

---

## Project Stats

```
File Structure:
├── app/                      # Next.js App Router
│   ├── page.tsx             # Main application page
│   ├── layout.tsx           # Root layout
│   └── globals.css           # Global styles
├── components/              # React components
│   ├── image-canvas.tsx     # Canvas rendering & physics
│   ├── image-uploader.tsx  # Image upload handling
│   ├── effect-controls.tsx  # Control panel UI
│   └── ui/                  # Radix UI components
├── lib/                     # Utility functions
│   ├── noise.ts             # Perlin noise generation
│   └── utils.ts             # Helper functions
├── public/                  # Static assets
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript config
├── next.config.mjs          # Next.js config
├── postcss.config.mjs       # PostCSS config
└── tailwind.config.ts       # Tailwind config
```

### Build Scripts
- `pnpm dev` — Start development server
- `pnpm build` — Create production build
- `pnpm start` — Run production server
- `pnpm lint` — Run code linting

---

## License

MIT License — Feel free to use this project for personal or commercial purposes.

---

## Credits

Default sample image: GitHub avatar (loaded from external URL)

Built with [v0](https://v0.app) and deployed on [Vercel](https://vercel.com)