# Product

## Register

brand

## Users

Mecânicos e entusiastas automotivos que querem entrar, evoluir ou se atualizar na profissão — do iniciante buscando uma primeira formação séria ao profissional em atuação buscando diagnóstico avançado, elétrica ou injeção eletrônica. Chegam via redes sociais/indicação buscando um curso prático e uma comunidade de verdade, não um diploma burocrático. O job a ser feito em qualquer página do site é claro: entender se aquela rota/curso serve para o momento de carreira da pessoa e se inscrever com confiança.

## Product Purpose

Site institucional + catálogo de landing pages (ELPs) para os cursos e workshops da Rota do Mecânico (diagnóstico avançado, rede CAN, multímetro, injeção eletrônica, troca de óleo de câmbio automático, Auto Divas Experience). Existe para converter interesse em matrícula, comunicando prática real, professores nomeados, parceiros de oficina e pertencimento a uma comunidade — não para vender uma transformação de vida abstrata. Sucesso é a pessoa certa reconhecer sua rota e se inscrever ou preencher o formulário de lead com clareza sobre o que vai aprender.

## Brand Personality

Técnica, direta, comunitária. Fala como quem já está na oficina, não como curso online genérico: sem gatilho mental, contador de urgência ou promessa de "transformar sua vida". O vínculo emocional vem de pertencimento a um grupo que compartilha a mesma paixão (motores, ferramentas, diagnóstico, tecnologia) e da confiança de que "aqui ninguém caminha sozinho". Nomeia professores e oficinas parceiras reais em vez de depoimentos genéricos.

## Anti-references

Estética de infoproduto genérico: contadores de urgência, gatilhos mentais agressivos, linguagem de "mude de vida agora", provas sociais vagas/inventadas. Também evitar tom de escola técnica burocrática (formal, distante, sem identidade). O sistema visual atual (preto/grafite/dourado, Inter + Oswald) já está estabelecido e deve ser preservado, não redesenhado do zero.

## Design Principles

- Prática antes de promessa: mostrar o que a pessoa vai fazer com as mãos (ferramenta, equipamento, procedimento), não uma promessa emocional abstrata.
- Pessoas reais, não avatares de marketing: professores, oficinas parceiras e depoimentos devem ser nomeados e verificáveis; nunca inventar dado comercial (data, vaga, investimento) — marcar "A confirmar" até chegar dado real.
- Uma rota por pessoa: cada ELP é auto-suficiente (problema → solução → público → prática → professor → CTA) para que quem chegar por anúncio segmentado encontre resposta direta, sem depender de navegar o site inteiro.
- Comunidade como diferencial, não decoração: "ninguém caminha sozinho" deve aparecer como estrutura (grupos de estudo, rede de oficinas parceiras, professores acessíveis), não só como frase de efeito.
- Consistência de dados sobre customização visual: novas ELPs seguem o shape de dados já estabelecido (`coursePages`, `CoursePage` genérico) em vez de layouts one-off por curso.

## Accessibility & Inclusion

WCAG 2.1 AA como referência padrão (sem requisito adicional específico de usuário). Manter o que já está implementado e validado em `design-qa.md`: skip link, `aria-expanded`/`aria-controls` no menu mobile, `aria-pressed` nos filtros de curso, foco visível (`:focus-visible`), validação nativa de formulário com `aria-live` no estado de sucesso, FAQ com `<details>/<summary>` nativo.
