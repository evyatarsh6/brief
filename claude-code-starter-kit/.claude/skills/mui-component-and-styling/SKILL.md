---
name: mui-component-and-styling
description: Design and review MUI component usage, theming and styling for consistency, accessibility and performance. Use this skill to build reusable UI components, customise the theme and avoid anti‑patterns.
---

# MUI Component & Styling

## Purpose

Material UI (MUI) provides a comprehensive UI library for React. This skill ensures MUI is used consistently and effectively. It helps customise the theme, create reusable components, follow accessibility guidelines and avoid pitfalls like inline magic values or unbounded DOM virtualisation.

## When to Use

- When designing or reviewing a new component or page layout.
- When customising the app’s look and feel.
- When deciding between MUI’s built‑in components and headless implementations.
- When implementing a data table or grid.

## What It Does

1. **Sets up theming.** Use `ThemeProvider` at the root to inject the theme. Create a custom theme with `createTheme` and override variables such as palette, typography, spacing and component defaults【39404304658691†L76-L99】. Use module augmentation to add custom tokens when needed.
2. **Enforces design tokens.** Use the theme’s spacing and colours instead of hardcoded values. Extract `sx` objects or CSS into files when styles are large. Avoid repeating magic numbers.
3. **Builds reusable components.** Identify patterns (buttons, forms, cards, tables) and encapsulate them into shared components. Accept props for variant, size and style, but avoid mixing domain logic into shared components.
4. **Ensures accessibility.** Provide labels and helper text on inputs; use semantic HTML (e.g. `button`, `nav`); ensure focus and keyboard navigation work; use proper contrast ratios.
5. **Plans data display.** Decide whether to use MUI Data Grid (MUI X) or TanStack Table. Note that MUI Data Grid includes virtualization of rows and columns in its Pro version (up to 100K rows)【478895645327076†L87-L126】. If using Data Grid, configure overscan (rowBufferPx/columnBufferPx) judiciously. For open‑source projects, use TanStack Table with TanStack Virtual or react‑window for virtualization【949994982524675†L586-L590】【172589116611369†L414-L479】.
6. **Customises styling.** Use the `sx` prop for quick styles and styled components or `makeStyles` for complex styling. Avoid deep overrides of MUI internals that could break upgrades. Keep CSS scopes local to components.
7. **Handles performance.** Use virtualization for large lists and tables; avoid autoHeight when using row virtualization【478895645327076†L114-L126】. Memoise columns and static props to prevent re‑renders.
8. **Integrates with Jotai and React Query.** Ensure state and data are passed through props; avoid storing component state in global stores unless necessary.

## What It Must Not Do

- Do not hardcode colours, spacing or sizes; always use theme tokens.
- Do not use MUI just as a CSS framework; use its components properly.
- Do not mix domain logic inside shared UI components.
- Do not rely on MUI Data Grid virtualization if you are not using the Pro tier; it is limited to 100 rows in the open source version【478895645327076†L87-L126】.
- Do not override core MUI CSS classes globally without careful consideration.
- Do not use `table` for large data without virtualization; prefer Data Grid or TanStack Table with virtualization.

## Required Context

- The project’s current theme configuration.
- UI requirements from Figma or design system.
- Existing shared components.
- Current Data Grid or table usage.

## Procedure

1. **Review theme.** Check if a custom theme exists. If not, create one with `createTheme`; set primary/secondary colours, typography, spacing and default props.
2. **Identify reusable patterns.** Look at pages and extract common elements into shared components. Provide well‑typed props for variant, size, colour and callback.
3. **Define data display components.** Decide between MUI Data Grid (with virtualization) or TanStack Table for each table use case. For MUI Data Grid Pro, configure virtualization and overscan; for TanStack Table, plan integration with TanStack Virtual【949994982524675†L586-L590】【172589116611369†L414-L479】.
4. **Implement accessibility.** Ensure forms have labels; interactive elements use proper semantics; keyboard navigation and focus states are handled; ARIA attributes are used when needed.
5. **Avoid magic values.** Use theme values via the `theme` object or `sx` system. Extract complex styles into styled components or CSS files.
6. **Plan performance.** For lists/tables, decide virtualization strategy; avoid autoHeight when using row virtualization【478895645327076†L114-L126】. Memoise columns and static props.
7. **Document custom components.** Provide usage examples and prop tables. Add storybook or MDX if available.

## Expected Output

Return a proposal for theming and component architecture. Include a list of reusable components, a decision table for data display (Data Grid vs TanStack Table), notes on accessibility and performance, and any open questions.

## Safety Rules

- Do not change global CSS unpredictably.
- Do not include secrets or API keys in styles or components.
- Do not bypass MUI accessibility checks.