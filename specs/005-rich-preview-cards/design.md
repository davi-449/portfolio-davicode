# Design — 005: Rich Preview Cards

## Token de Referência (sem mudanças no design system)
- `accent`: `#7c6aff`
- `surface.1`: `#111118`
- `surface.2`: `#1a1a28`
- `text.muted`: `#6b6b8a`
- `border`: `rgba(124,106,255,0.15)`

---

## Componente: `StackCard.tsx` — Reescrita Completa

### Estrutura HTML do Card

```tsx
<motion.div className="rounded-2xl overflow-hidden border border-accent/15 bg-surface-1 shadow-2xl">
  
  {/* ZONA 1 — URL Bar */}
  <div className="flex items-center gap-3 px-4 py-3 bg-surface-2 border-b border-border">
    {/* Traffic lights (cosmético, não funcionals) */}
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
    </div>
    {/* URL field */}
    <div className="flex-1 flex items-center gap-2 bg-surface-1/60 rounded-lg px-3 py-1.5 border border-border">
      <span className="text-base leading-none">{project.favicon}</span>  
      <span className="font-mono text-xs text-text-muted truncate flex-1">{domain}</span>
      <ExternalLink className="w-3 h-3 text-text-muted/50 flex-shrink-0" />
    </div>
  </div>

  {/* ZONA 2 — Screenshot */}
  <div className="aspect-[16/9] w-full overflow-hidden bg-surface-2">
    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
  </div>

  {/* ZONA 3 — Metadata Footer */}
  <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-surface-2/50">
    <span className="font-semibold text-sm text-white truncate pr-4">{project.title}</span>
    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted whitespace-nowrap">{project.category}</span>
  </div>

</motion.div>
```

### Props Adicionais
```ts
interface Project {
  // ...existentes
  favicon: string; // emoji do nicho: "🦷", "🔧", "🐾", "📸"
}
```
→ Adicionar campo `favicon` em `projects.ts` para cada projeto.

### Extração do Domínio
```ts
const domain = project.url
  ? new URL(project.url).hostname
  : 'davicode.me';
```

---

## Componente: `StackSection.tsx` — Mudanças de Layout

### Info Panel — Animação Vertical
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={active.id}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
  >
    {/* conteúdo do info panel */}
  </motion.div>
</AnimatePresence>
```

### Dots — À direita do deck

```
[DECK DE CARDS] [DOTS]
```

```tsx
{/* Dots à direita do deck */}
<div className="flex flex-col gap-2 items-center">
  {projects.map((_, i) => (
    <motion.div
      key={i}
      animate={{
        height: i === activeIndex ? 40 : i === activeIndex - 1 || i === activeIndex + 1 ? 16 : 8,
        backgroundColor: i === activeIndex ? '#7c6aff' : 'rgba(124,106,255,0.2)',
        boxShadow: i === activeIndex ? '0 0 8px rgba(124,106,255,0.7)' : 'none'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="w-[4px] rounded-full cursor-pointer"
      onClick={() => navigateTo(i)}
    />
  ))}
</div>
```

### Layout Direito Atualizado

```
Coluna direita:
┌─────────────────────────────────────────┬───┐
│                                         │ • │ ← dot inativo
│         RICH PREVIEW CARD               │ ┃ │ ← dot ATIVO (pill)
│         (max-w-[560px])                 │ • │ ← dot inativo
│                                         │ • │
└─────────────────────────────────────────┴───┘
```

---

## Arquivos a Criar/Modificar

| Arquivo | Ação |
|---|---|
| `src/components/ui/StackCard.tsx` | REESCREVER — Rich Preview Card com 3 zonas |
| `src/components/sections/StackSection.tsx` | MODIFICAR — dots à direita do deck + animação vertical no info panel |
| `src/data/projects.ts` | MODIFICAR — adicionar campo `favicon: string` em todos os 11 projetos |
