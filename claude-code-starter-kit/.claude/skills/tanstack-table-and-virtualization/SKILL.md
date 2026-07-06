---
name: tanstack-table-and-virtualization
description: Design and review large data tables using TanStack Table and virtualization. This skill helps build tables that support server‑side operations, sorting, filtering, pagination, selection, row actions and efficient rendering for huge datasets.
---

# TanStack Table & Virtualization

## Purpose

TanStack Table is a headless table engine for React. It provides state and hooks for column definitions, sorting, filtering, pagination, faceting, column visibility and selection but no UI. This skill guides you to design tables that handle large datasets, integrate with server APIs via TanStack Query, manage table state with Jotai or URL, and render efficiently using virtualization. It relies on TanStack’s docs noting that the package has no built‑in virtualization【949994982524675†L586-L590】 and that virtualization is a layout problem requiring scroll math, measurement, overscan and container ownership【172589116611369†L414-L479】.

## When to Use

- Building or refactoring a table with sorting, filtering, faceting or pagination.
- Displaying thousands of rows or many columns.
- Handling server‑side operations for large datasets.
- Adding row selection, bulk actions or column pinning.

## What It Does

1. **Chooses table engine.** Decide whether TanStack Table is appropriate (headless, custom UI) or whether MUI Data Grid Pro is better (built‑in UI and virtualization). For custom UI with complex requirements, choose TanStack Table.
2. **Designs column definitions.** Define each column’s header, accessor, cell renderer, sorting and filtering. Keep column definitions outside of the page component to memoise them.
3. **Plans table state.** Use TanStack Table state for sorting, filtering, pagination, row selection and column visibility. Store table state in Jotai or URL when it needs to persist across components or reloads. Do not store server data in Jotai.
4. **Plans server interactions.** For large datasets, implement server‑side pagination, sorting and filtering. Query keys must include all variables to cache correctly【444413767954226†L489-L601】. Invalidate queries properly when filters change【835040861778263†L492-L567】.
5. **Implements virtualization.** TanStack Table does not include virtualization, so integrate with TanStack Virtual or react‑window【949994982524675†L586-L590】. Virtualization requires scroll math, measurement, overscan and container management【172589116611369†L414-L479】. Plan row and column virtualization: set item sizes, overscan (extra items rendered offscreen), and container height. Avoid using autoHeight when row virtualization is enabled【478895645327076†L114-L126】.
6. **Adds row actions and selection.** Use TanStack Table’s row selection API for checkboxes; implement column for row actions (edit, view, delete). Bulk actions should operate via React Query mutations and invalidate the relevant queries.
7. **Handles empty, loading and error states.** Show a spinner or skeleton while loading; show a message when no data; display a friendly error when a query fails【94744529534805†L28-L41】.
8. **Adds accessibility and performance.** Ensure table is keyboard navigable; use ARIA roles for interactive elements; memoise rows and cells to prevent unnecessary re‑renders.

## What It Must Not Do

- Do not render thousands of DOM rows without virtualization.
- Do not perform heavy filtering/sorting in the client for huge datasets; prefer server‑side operations.
- Do not mix UI state and server data in the same atom or state object.
- Do not enable row virtualization with `autoHeight` in MUI Data Grid; virtualization is disabled with `autoHeight`【478895645327076†L114-L126】.
- Do not create column definitions inside render functions; memoise them outside to avoid re‑renders.

## Required Context

- API endpoints for list data, filters and sorting.
- Data model and column definitions.
- UI requirements: which columns are visible, resizable, sortable or filterable.
- Performance requirements (expected number of rows).

## Procedure

1. **Confirm the table use case.** Identify the number of rows, columns and operations (sort/filter/paginate/selection). Decide if TanStack Table or MUI Data Grid is more appropriate.
2. **Define column definitions.** Write an array of column definitions with headers, accessors and cell renderers. Memoise this array.
3. **Design table state.** Use TanStack Table’s controlled state for sorting, filtering, pagination and selection. Store this state in Jotai or URL when appropriate.
4. **Implement server interactions.** Write query hooks (using React Query) that take filters, sorting and pagination. Ensure query keys include all variables【444413767954226†L489-L601】. Invalidate queries correctly【835040861778263†L492-L567】.
5. **Integrate virtualization.** Wrap the table body with `Virtualizer` from TanStack Virtual. Set `getScrollElement`, `estimateSize`, `overscan`. For columns, apply column virtualization if necessary. Provide a fixed height container; avoid `autoHeight`【478895645327076†L114-L126】.
6. **Add row actions and selection.** Use TanStack Table’s row selection API; implement action buttons; handle server mutations with optimistic updates and rollback【476674860429372†L489-L661】.
7. **Implement UI states.** Render skeleton or spinner while loading; show “No data” when the query returns an empty array; display error message with retry option on failure【94744529534805†L28-L41】.
8. **Test.** Ensure the table works with large datasets, filters and sorting; verify virtualization works; measure performance.

## Expected Output

Return a design document detailing column definitions, state structure, query keys, server interactions, virtualization plan, UI states, actions and performance considerations. Include open questions and recommended libraries. Do not implement code.

## Safety Rules

- Never expose sensitive data in table cells.
- Do not create virtualization that disables accessibility (e.g., remove ARIA roles).
- Do not store server data in Jotai or local state.