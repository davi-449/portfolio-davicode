# Proposal: Stack Layout Fix & Proportions Overhaul (006)

## Contexto e Objetivo
Após o lançamento da spec 005 (Rich Preview Cards), o layout do empilhamento apresentou quebras pontuais:
1. **Mobile:** O card de informação está sobrepondo (overlapping) o card de mockup visual. Além disso, a ordem está inversa da ideal (Painel primeiro, Mockup depois).
2. **Desktop:** O card de mockup ficou muito "acanhado"/pequeno em relação à grande área útil do monitor, perdendo o impacto majestoso que o estilo "Apple Wallet" deveria ter.

O objetivo desta especificação é redesenhar as réguas de flexbox/grid do `StackSection` e os limitadores do `StackCard` para garantir um layout imponente no Desktop e usabilidade livre de cortes no Mobile.

## Requisitos (Requirements)

### Mobile (Responsividade até 1024px)
- **Carga Visual:** O Mockup (Deck de cartas) DEVE vir primeiro (em cima), e o Card de Informações deve vir depois (em baixo).
- **Proporção:** O Deck de cartas ter espaço suficiente de altura (min 45% da tela) para não ser esmagado.
- **Espaçamento:** Garantir que o painel de info não suba (overlap) em cima do Deck. Remover margens excessivas do padding Y.

### Desktop (A partir de 1024px / lg)
- **Escala Máxima:** O Deck deve utilizar no mínimo 60% da largura do grid (proporção assimétrica, ex: 4 colunas info / 8 colunas deck, ou larguras flex), permitindo que o mockup do Safari fique gigante.
- **Altura Total:** A pilha de cartas deve se esticar naturalmente no eixo Y, ocupando o máximo da altura da `lg` column.
- **Dots de Navegação:** Manter o acordeão à direita perfeitamente alinhado verticalmente com as cartas, num gap lateral harmonioso.

## User Stories
1. **Como usuário de smartphone**, quero ver primeiro a captura de tela do projeto e rolar para ler o texto abaixo, para ter um apelo visual imediato.
2. **Como usuário de desktop**, quero que a "janela macOS" do site portfólio tome uma parte majestosa do monitor para que eu possa notar os mínimos detalhes das interfaces.

## Critérios de Aceite
- Nenhuma sobreposição indevida entre Info Panel e o Deck no Mobile (mesmo simulando no DevTools "iPhone SE").
- No Mobile, `StackCard` vem fisicamente no painel superior da tela, e as informações ficam alocadas abaixo.
- Expandido limite de largura do `StackCard` no Desktop, sem quebrar o aspect-ratio 16:9 da imagem.
- Build TS compilando com zero erros.
