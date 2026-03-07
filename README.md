<div align="center">

# BMI Calculator

**A modern, responsive Body Mass Index calculator built with React & TypeScript**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://bmi-calculator-rho-gray.vercel.app/)

<br/>

<img src="assets/screenshot.png" alt="BMI Calculator Screenshot" width="420" />

</div>

---

## Features

| Feature | Description |
|---|---|
| **Real-time Calculation** | BMI updates instantly as you adjust weight and height |
| **Metric & Imperial** | Toggle between kg/cm and lbs/ft·in with seamless conversion |
| **BMI Gauge** | Color-coded gradient bar showing where your BMI falls (10–40) |
| **Healthy Weight Range** | Displays target healthy weight range for your height |
| **Dark Mode** | Light/dark theme toggle, persisted across sessions |
| **History Tracking** | Save entries and view a mini SVG chart of your last 10 results |
| **Share** | Copy your BMI result to clipboard with one click |
| **Accessible** | ARIA labels, keyboard navigation, and screen reader support |

---

## Tech Stack

- **React 18** + **TypeScript** — component architecture with strict types
- **CSS Modules** — scoped styles with CSS custom properties for theming
- **SVG** — hand-rolled history chart, zero chart library dependencies
- **localStorage** — persists theme preference, unit mode, and history

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── App/
│   ├── Header/
│   ├── InputSection/
│   ├── HybridInput/
│   ├── ImperialHeightInput/
│   ├── ResultCard/
│   ├── BMIGauge/
│   ├── HealthyRange/
│   ├── ShareButton/
│   ├── HistoryChart/
│   ├── ThemeToggle/
│   └── UnitToggle/
├── context/        # ThemeContext
├── hooks/          # useLocalStorage, useClipboard
├── utils/          # BMI calculation, unit conversion
├── styles/         # Global CSS, variables, animations
└── types/          # Shared TypeScript interfaces
```

---

<div align="center">

Deployed on [Vercel](https://bmi-calculator-rho-gray.vercel.app/)

</div>
