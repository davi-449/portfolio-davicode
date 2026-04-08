# Research: Monochrome Precision — DaviCode Portfolio (2026)

## 1. O Diagnóstico: "Frankenstein Visual"
- **Mistura de Geometrias:** Bordas originais (`rounded-3xl` ou similares) colidindo com as novas quinas secas (`rounded-none`).
- **Ruído Cromático:** Emerald Green (`primary`) misturado com o Roxo (`accent`) original.
- **Excesso de Escala:** Tipografia de `15vw` em uma estrutura que não estava preparada para esse peso.

## 2. A Solução: "The Silver Ratio"
- **Paleta:** Branco (texto principal), Cinza 400 (corpo), Prata (bordas de 0.5px) e Preto 950 (fundo). Zero cores extras.
- **Geometria Mestre:** Unificar todos os `rounded` para um padrão único (ex: `rounded-lg` / `8px`).
- **Tipografia:** Voltar ao minimalismo funcional. Headlines com `text-6xl` a `text-8xl` no máximo, com `font-semibold` (mais elegante que o `black`).
- **Materiais:** Apenas alumínio escovado e vidro translúcido sutil.

## 3. Auditoria de Limpeza
- Remover todas as variáveis `primary` (Emerald) do `tailwind.config.js`.
- Remover a `ArchitectHero` exagerada.
- Criar a nova `SilverHero` (minimalista, elegante).
- Limpar `index.css` de animações frenéticas.
