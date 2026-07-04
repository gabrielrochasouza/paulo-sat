
# PAULO SAT — Design System

## O que é isto
Design system derivado do site institucional do **PAULO SAT**, um técnico independente de
instalação e manutenção de antenas (SKY, OI, Claro TV) na região Sul Fluminense (RJ). O
projeto original é um único arquivo HTML de landing page, fornecido em
`uploads/paulo-sat-landing.html` — essa é a única fonte de contexto disponível (não há
Figma, codebase de produto ou guia de marca separado).

A paleta original do site usava azul + laranja/âmbar. A pedido do usuário, este sistema
**recodifica as cores primárias para Azul, Azul Escuro, Amarelo e Branco**, mantendo a
estrutura, tom de voz e layout do site original.

## Fontes
- `uploads/paulo-sat-landing.html` — landing page completa (nav, hero, stats, dores,
  solução, benefícios, oferta, FAQ, CTA final, footer, botão flutuante de WhatsApp).
- Nenhum logo, ícone proprietário ou guia de marca foi fornecido — o "logo" no site é um
  SVG simples (duas curvas + um ponto, representando sinal de antena) desenhado inline;
  foi preservado como está, apenas recolorido para a nova paleta.

## Índice deste projeto
- `styles.css` — entry point (apenas `@import`s).
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — fundações.
- `guidelines/*.html` — specimen cards (cores, tipografia, espaçamento, marca).
- `components/core/` — `Button.jsx`, `Tag.jsx`, `Card.jsx`, `Accordion.jsx`,
  `StatItem.jsx`, `IconBadge.jsx`, `NavBar.jsx` (+ `.d.ts` e `.prompt.md` de cada um).
- `assets/` — mark do PAULO SAT (SVG) recolorido.
- `ui_kits/landing/` — recriação completa da landing page com a nova paleta.
- `SKILL.md` — versão portátil para uso em Claude Code.

## Fundamentos de conteúdo
- **Idioma**: Português do Brasil, informal-profissional. Frases curtas, diretas, sem
  jargão técnico desnecessário.
- **Pessoa**: fala com "você" (nunca "tu" ou formal "o senhor"). Ex.: *"Você não corre o
  risco de pagar duas vezes"*.
- **Tom**: empático com a dor do cliente ("TV sem sinal é sempre na pior hora"), depois
  resolutivo e confiante ("Resolvido do jeito certo, na primeira visita"). Não usa
  superlativos vazios ("o melhor", "único") — prefere fatos concretos (marcas atendidas,
  região, forma de pagamento).
- **CTAs**: sempre orientados a ação via WhatsApp — "Chamar no WhatsApp", "Quero sinal de
  volta". Consistentemente o verbo vem antes do benefício.
- **Emoji**: uso raro e funcional, só como glifo utilitário (📞 antes do telefone no CTA
  final) — não há emoji decorativo em títulos ou corpo de texto.
- **Estrutura de títulos**: kicker curto em caixa alta (`Reconhece a situação?`) + heading
  de impacto em Space Grotesk + parágrafo de apoio em Inter.

## Fundamentos visuais
- **Cor**: sistema de 4 cores primárias — Azul (`--blue-500`), Azul Escuro
  (`--blue-900`/`--blue-700`), Amarelo (`--yellow-500`), Branco. O azul escuro carrega
  seções de destaque (hero, painel de solução, CTA final); o azul médio é usado para
  ícones, links e texto de marca sobre branco; o amarelo é reservado exclusivamente para
  ações primárias (botões CTA) e pequenos destaques (ponto do eyebrow, ícone do prato de
  antena) — nunca como cor de texto de corpo ou fundo grande, para manter alto contraste.
- **Tipografia**: par de duas fontes. **Space Grotesk** (500–700) para headlines, brand
  wordmark e preços — geométrica, confiante. **Inter** (400–700) para corpo, botões,
  labels — extremamente legível em telas pequenas. Máximo de 2 famílias, sem itálico.
- **Gradientes**: usados com moderação, só em painéis grandes de destaque (hero, bloco
  solução, CTA final) — sempre um radial azul-escuro → azul-médio, nunca multicolor e
  nunca envolvendo o amarelo (o amarelo permanece sólido, nunca em gradiente).
- **Cantos**: arredondados generosamente. Pills (`radius-pill`, 999px) em botões/tags;
  `radius-lg`/`radius-xl` (20–28px) em cards e painéis grandes.
- **Cards**: fundo branco, borda 1px `--color-border` (azul-escuro a 12% de opacidade),
  sombra suave só no hover (`--shadow-card`), leve `translateY` no hover — nunca sombra
  pesada em repouso.
- **Blur/transparência**: nav usa `backdrop-filter: blur(10px)` sobre branco 85% opaco —
  único uso de blur no sistema. Painéis sobre o hero escuro usam branco a 8–16% de
  opacidade para criar profundidade sutil (ex. cartão da antena).
- **Animação**: transições curtas (150–250ms, ease). Hover em botões = leve
  `translateY(-1px a -2px)` + sombra mais forte. Sem bounce, sem spring. O único efeito
  contínuo é o pulso de "sinal" (anéis SVG expandindo/desvanecendo) no hero — respeita
  `prefers-reduced-motion`.
- **Layout**: container central `max-width: 1120px`. Seções alternam fundo branco e
  painéis coloridos "flutuantes" com `border-radius` grande e margem lateral — não faixas
  full-bleed coloridas.
- **Imagens**: nenhuma foto foi fornecida; toda ilustração é SVG line-art simples (prato
  de antena, LNB, sinal). Não há fotografia de produto/equipe no site original — se
  criarem novas seções, usar placeholders listrados com texto explicativo, nunca gerar
  fotos falsas.

## Iconografia
- Não há biblioteca de ícones ou sprite no projeto original — todos os ícones são SVGs
  inline desenhados à mão (círculo com alerta, seta diagonal, escudo, coração/localização,
  cartão, caixa de TV, pessoas). Foram preservados como estão nos componentes
  (`IconBadge`), recoloridos para a paleta azul/amarelo.
- Único ícone de marca externa reconhecível: o glifo de WhatsApp (botão flutuante e CTAs).
  Mantido como referência funcional ao canal de contato real do negócio — não é um
  logotipo de marca sendo recriado como identidade própria do PAULO SAT.
- Recomendação para expansão futura: se novos ícones forem necessários, usar um set CDN de
  stroke simples (ex. Lucide) no mesmo peso de traço (2px) dos ícones atuais.

## Cores fora do padrão observadas
Nenhuma — a nova paleta (azul, azul escuro, amarelo, branco) substitui integralmente o
laranja/âmbar do arquivo original. Nenhum outro tom foi introduzido.
