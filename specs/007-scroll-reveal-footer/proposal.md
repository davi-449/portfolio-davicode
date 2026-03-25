# Spec 007 - Scroll Reveal Typography & Premium Footer

## Contexto
O usuário solicitou um upgrade no portfólio `portfolio-davicode`, adicionando uma nova seção imediatamente após os projetos (Deck Animation) e introduzindo um novo rodapé premium, inspirados na referência visual de `angelocicchiello.dev`. O objetivo é manter a consistência do background (estrelas e gradiente noturno do Midnight Forge) e elevar a imersão com animações ao rolar a página.

## Requisitos Core
1. **Scroll Reveal Typography (About/Philosophy):** 
   - Uma seção de texto gigante cujo preenchimento (cor/opacidade) é revelado dinamicamente conforme o usuário realiza o scroll pela página (animação amarrada à posição do scroll).
2. **Premium CTA Card:**
   - Um card de "Call to Action" destacado, no estilo *glassmorphism*, convidando o visitante para um projeto ("Let's work together" / "Il tuo progetto...").
3. **Huge Marquee Footer:**
   - O rodapé deve conter um texto gigantesco em movimento perpétuo (Marquee), cortado na base da tela, criando uma fundação visual forte.
   - Links sociais/contato organizados acima do Marquee de forma minimalista.
4. **Continuidade de Background:**
   - As novas seções devem repousar sobre o fundo existente, garantindo que o Hero Background (partículas/estrelas) não seja quebrado bruscamente.

## User Stories
- **Como visitante**, quero ser surpreendido ao ler a filosofia/resumo do desenvolvedor, onde as palavras se acendem conforme eu rolo para baixo, tornando a leitura engajadora.
- **Como potencial cliente**, quero ver uma chamada para ação clara e estilosa no final da página, facilitando o contato via email ou WhatsApp.
- **Como fã de design**, quero ver o rodapé da página terminar de forma dramática com tipografia imensa.

## Critérios de Aceite
- A tipografia de revelação funciona suavemente tanto no Desktop quanto no Mobile, variando o tamanho da fonte (`font-size`) adequadamente.
- O texto acompanha milimétricamente a inércia do scroll da janela (sem delays artificiais pesados).
- O CTA flutua e exibe hover states Premium (brilho, scaling).
- O letreiro (Marquee) no Footer não causa scroll horizontal indesejado no mobile (`overflow-hidden`).
