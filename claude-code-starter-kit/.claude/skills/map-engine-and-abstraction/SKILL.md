---
name: map-engine-and-abstraction
description: Design and build a reusable map engine using OpenLayers (or similar) with a projection of EPSG:4326, and create high‑level abstractions so feature developers can add layers, controls and interactions without understanding mapping internals.
---

# Map Engine & Abstraction

## Purpose

Many applications require geospatial visualisation. OpenLayers is a powerful map library that supports EPSG:4326 (WGS 84) coordinates【185735763165509†L45-L51】 and provides layers, sources, interactions and overlays. This skill helps you create a `MapCore` abstraction that encapsulates OpenLayers complexity, so developers can add domain‑specific map features through a simple API. It ensures the map performs well at scale and is easy to extend.

## When to Use

- When adding map functionality (points, markers, polylines, polygons, heatmaps, clustering).
- When implementing geospatial dashboards or location‑based filters.
- When designing a reusable map component for multiple features.
- When performance or coordinate system considerations are critical.

## What It Does

1. **Selects projection.** Choose a coordinate reference system. For most apps, use EPSG:4326 (geographic coordinates) or an appropriate projection; OpenLayers supports EPSG:4326 out of the box【185735763165509†L45-L51】.
2. **Creates MapCore.** Implement a React component (e.g. `MapProvider` and `MapView`) that initializes an OpenLayers map with view, layers and controls. Provide context or hooks (e.g. `useMap`) to interact with the map instance.
3. **Defines layer API.** Create high‑level functions to add/remove layers: base layers (tiles), vector layers, cluster layers, heatmaps. Each layer accepts configuration (source URL, style, zIndex) and optional data refresh functions.
4. **Defines source API.** Provide functions to create sources: XYZ tiles, WMS, vector sources, vector tiles. Expose methods to update features and to apply filters.
5. **Adds interactions & controls.** Provide reusable interactions: selection, hover, click, drag, draw. Add controls: zoom, scale line, legend, layer toggle, geolocation. Expose events to application code.
6. **Supports overlays.** Provide API to add popups/tooltips anchored to coordinates or features.
7. **Handles performance.** Use strategies like clustering, vector tiles, and simplification for large feature sets. Avoid adding thousands of individual features without clustering or tiling. Use `renderMode: 'image'` or WebGL where appropriate. Keep map re-renders minimal by managing state outside of React when possible.
8. **Abstracts domain logic.** Do not allow feature code to call OpenLayers internals directly. Provide domain‑specific helpers (e.g. `addOrdersLayer(orders)`) that internally use the layer API.
9. **Exposes configuration.** Let the map core accept props for initial center, zoom, and projection. Provide callback props for selection or view changes.

## What It Must Not Do

- Do not scatter OpenLayers initialisation across many components.
- Do not store map instance in global state; use context or refs.
- Do not mix map rendering logic with business logic; keep a clean API.
- Do not skip performance considerations when dealing with large datasets.
- Do not use unsupported projections without configuring the projection properly.
- Do not assume screen pixel size matches coordinate units; always transform coordinates when necessary.

## Required Context

- Figma or design requirements for the map.
- Data sources and update frequency.
- Feature requirements (e.g. markers, clustering, overlays).
- Performance constraints (e.g. number of features).

## Procedure

1. **Gather requirements.** Determine what map functionality is needed (layers, interactions, overlays) and how data will be provided.
2. **Choose projection.** Select EPSG:4326 or another projection; ensure OpenLayers is configured accordingly【185735763165509†L45-L51】.
3. **Create MapCore component.** Set up OpenLayers map in a React component; pass in view parameters; expose context/hook.
4. **Define APIs.** Implement functions to add/remove layers and sources; implement interactions and overlays; document each API.
5. **Implement performance features.** Use clustering or vector tiles for large datasets; avoid unnecessary re-renders; manage heavy computations outside React.
6. **Write examples/tests.** Demonstrate how to create a layer, add data, listen for events and clean up. Provide tests for map initialization and interactions.
7. **Document usage.** Include usage in `docs/MAP_GUIDE.md` with examples and diagrams.

## Expected Output

Return a design document describing the map core abstraction: projection, MapProvider component, layer/source APIs, interactions, overlays, performance strategies and sample usage. Do not implement code.

## Safety Rules

- Do not use external map tiles or APIs that require secret keys without proper security.
- Do not leak user location data or sensitive coordinates.
- Ensure proper copyright attribution if using third‑party tile servers.