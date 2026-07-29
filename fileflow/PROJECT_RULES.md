# FileFlow Project Rules & Standards

This document establishes strict design, architectural, and engineering rules for all contributors working on FileFlow.

---

## 🎨 Design System & UI Rules

1. **Aesthetics Standard**: Every page must feel premium and state-of-the-art. Inspired by Apple, Linear, and Vercel.
2. **Glassmorphism**: Use the pre-configured `.glass` and `.glass-card` classes for panels, cards, and navigation. Do not use flat opaque gray boxes.
3. **Color Palette**:
   - Primary Accent: Blue (`#2563eb` light / `#3b82f6` dark)
   - Background: Pure White (`#ffffff`) in Light Mode / Rich Dark (`#09090b`) in Dark Mode
   - Secondary: Muted Zinc (`#f4f4f5` light / `#18181b` dark)
4. **Typography**: Always use `Inter` font. Do not fallback to default browser sans-serif fonts.
5. **Iconography**: Use `Lucide React` icons exclusively. Keep icon sizing consistent (`h-4 w-4` for standard buttons, `h-6 w-6` for section headers).
6. **Responsiveness**: All components must be tested for Mobile (<640px), Tablet (640px-1024px), and Desktop (>1024px).

---

## 💻 Code Quality & TypeScript Rules

1. **Strict TypeScript**: Never use `any`. Always define explicit interfaces or use types exported from `src/types/index.ts`.
2. **Component Architecture**: Keep components focused. Feature-based components belong in `src/components/{feature}`, shared UI in `src/components/shared`.
3. **Import Aliases**: Always use `@/*` relative imports. Do not use long `../../..` paths.
4. **Clean Architecture**: Business logic belongs in hooks (`src/hooks`) or utility libraries (`src/lib`), never inside presentation components.
5. **Icon & Symbol Links**: File references in markdown documentation must use full `file://` scheme clickable links.

---

## 🔌 Converter Development Rules

1. **Isolation**: Every converter must be self-contained within its category folder under `src/converters/`.
2. **No Monolithic Logic**: Never write `if/else` checks for 50 different file types in a single router. Always use `converterRegistry.get(toolId)`.
3. **Error Handling**: Converters must catch execution errors gracefully and return a `ConvertResult` with `success: false` and a clear error message.
