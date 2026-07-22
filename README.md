# Frontend Take-Home: Bundle Builder

React + TypeScript prototype for a multi-step bundle builder with a live review panel.

## Stack

- React 19
- TypeScript
- Zustand (state management)
- Tailwind CSS (utility styling)
- Vite

## Run Locally

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

To run with live API data from json-server, start the API in a second terminal:

```bash
npm run api
```

Then keep `npm run dev` running in the first terminal.

3. Build production bundle

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Implemented Behavior

- 4-step builder accordion with step headers and selected counts.
- Variant-aware quantity management (each variant tracked independently).
- Review panel synced with builder quantities.
- Quantity steppers in both builder cards and review lines stay in sync.
- Dynamic order summary totals (subtotal, compare-at, savings).
- Checkout uses a placeholder popup confirmation.
- Save my system for later persists the configuration to localStorage.
- Reload/return restores saved configuration from localStorage.

## Data Model Notes

- Main catalog data is in [src/data/bundle-data.json](src/data/bundle-data.json).
- Additional review-only seeded items (Sensors, Accessories, Plan) are defined in [src/data/review-seed-items.ts](src/data/review-seed-items.ts).
- Initial state is seeded from those review-only items if no saved localStorage state exists.

## Decisions and Tradeoffs

- I used a local JSON data source (no backend/API) for predictable offline behavior.
- I kept seeded Sensors/Accessories/Plan items review-only to match the current view where those steps do not expose add-controls.
- Checkout intentionally uses a placeholder popup rather than navigation.

## Known Limitations

- Typography can be further tuned against final Figma font metrics if exact webfont files are required.
- The seeded review-only items are static placeholders and can be replaced with API-driven catalog entries in a production setup.
