# Prompts de imagens IA — Site Rota do Mecânico

Gerar via **OpenRouter**, modelo **`google/gemini-2.5-flash-image`** (Nano Banana, não-Pro).
Escopo: 8 cenas (hero, comunidade e 1 por curso). **Fora do escopo:** fotos de professores (`public/assets/professores/`) e logos de parceiros (`public/assets/parceiros/` — marcas reais, nunca gerar por IA).

## Configuração técnica

- **Aspect ratio:** 16:9 em todas (pedir no prompt; o modelo entrega ~1344×768).
- **Pós-processamento:** redimensionar para **1600×900** e **800×450** e converter para `.webp` (padrão atual do site):
  ```bash
  sips --resampleWidth 1600 cena.png --out cena-1600.png && cwebp -q 80 cena-1600.png -o cena-1600.webp
  sips --resampleWidth 800  cena.png --out cena-800.png  && cwebp -q 80 cena-800.png  -o cena-800.webp
  ```
- **Nomenclatura** (sufixos `-800`/`-1600.webp`, em `public/assets/`):
  - Existentes (substituição direta, sem mexer em código): `hero-workshop`, `course-diagnostics`, `community-workshop`
  - Novas: `course-multimetro`, `course-injecao`, `course-rede-can`, `course-cambio-atf`, `course-auto-divas`
- **Mapeamento no código:** cards e ELPs resolvem imagens via `heroImageBase` (`src/App.jsx:175`). As 5 imagens novas exigem adicionar entradas nesse mapa e trocar as referências nos cards/ELPs — etapa posterior, depois das imagens aprovadas.
- Heros e fundos recebem overlay preto 94%→72% por cima — a cena pode ter áreas escuras, mas precisa de highlights fortes o bastante para não virar breu.

## Bloco de coerência (base de todos os prompts)

Todas as cenas acontecem **na mesma oficina-escola** e com **a mesma fotografia**, para o site parecer um espaço real único. Este parágrafo abre todos os prompts (já está embutido em cada bloco abaixo):

> Documentary editorial photograph inside a modern Brazilian automotive training workshop. Dark graphite-gray walls, matte black tool cabinets and steel workbenches, clean light-gray epoxy floor, a car raised on a two-post lift in the background. Lighting: cool white overhead LED panels mixed with warm golden practical work lights that leave amber highlights on metal surfaces. The people are real everyday Brazilians of mixed ages and skin tones, with authentic faces and natural imperfect features — not models — wearing plain dark navy or black polo shirts and mechanic work uniforms with no logos or lettering. Shot on a 35mm lens at f/2.8, shallow depth of field, candid unposed moment, nobody looking at the camera, realistic color grade with deep blacks and warm golden highlights, subtle film grain. Wide 16:9 landscape format.

E todos terminam com a mesma linha de negativos:

> Avoid: any readable text, letters, numbers or logos anywhere (screens, shirts, walls, signs); stock-photo posed smiles or people looking at the camera; plastic-perfect skin; oversaturated HDR look; extra or deformed fingers or hands.

---

## 1. `hero-workshop` — Hero da home / manifesto

**Uso:** hero da home, card "Profissionais de oficina", fundo da seção manifesto. **Enquadramento:** plano aberto (estabelece o espaço).

```
Documentary editorial photograph inside a modern Brazilian automotive training workshop. Dark graphite-gray walls, matte black tool cabinets and steel workbenches, clean light-gray epoxy floor, a car raised on a two-post lift in the background. Lighting: cool white overhead LED panels mixed with warm golden practical work lights that leave amber highlights on metal surfaces. The people are real everyday Brazilians of mixed ages and skin tones, with authentic faces and natural imperfect features — not models — wearing plain dark navy or black polo shirts and mechanic work uniforms with no logos or lettering. Shot on a 35mm lens at f/2.8, shallow depth of field, candid unposed moment, nobody looking at the camera, realistic color grade with deep blacks and warm golden highlights, subtle film grain. Wide 16:9 landscape format.

Scene: wide establishing shot of a hands-on training session. In the mid-ground, an instructor in his mid-40s leans over the open engine bay of a modern hatchback, pointing at a component while three students of different ages gather around watching closely. A steel workbench with hand tools and a work light sits in the foreground slightly out of focus; the car on the lift and tool cabinets fill the background. Balanced composition with breathing room across the frame, suitable for a dark text overlay.

Avoid: any readable text, letters, numbers or logos anywhere (screens, shirts, walls, signs); stock-photo posed smiles or people looking at the camera; plastic-perfect skin; oversaturated HDR look; extra or deformed fingers or hands.
```

## 2. `community-workshop` — Comunidade / CTAs finais

**Uso:** seção comunidade da home, cards de público ("Transição de carreira", "Oficinas parceiras"), fundo do CTA final e do fechamento das ELPs. **Enquadramento:** plano médio-aberto, clima de troca entre colegas.

```
Documentary editorial photograph inside a modern Brazilian automotive training workshop. Dark graphite-gray walls, matte black tool cabinets and steel workbenches, clean light-gray epoxy floor, a car raised on a two-post lift in the background. Lighting: cool white overhead LED panels mixed with warm golden practical work lights that leave amber highlights on metal surfaces. The people are real everyday Brazilians of mixed ages and skin tones, with authentic faces and natural imperfect features — not models — wearing plain dark navy or black polo shirts and mechanic work uniforms with no logos or lettering. Shot on a 35mm lens at f/2.8, shallow depth of field, candid unposed moment, nobody looking at the camera, realistic color grade with deep blacks and warm golden highlights, subtle film grain. Wide 16:9 landscape format.

Scene: a group of six auto repair professionals — men and women, ages ranging from mid-20s to late-50s — gathered around a steel workbench after a class, talking shop in a relaxed way. One holds a disassembled part, another gestures mid-conversation, a couple of them laugh naturally at something being said. Coffee cups and hand tools on the bench. The mood is genuine camaraderie between colleagues who respect each other, not a posed team photo.

Avoid: any readable text, letters, numbers or logos anywhere (screens, shirts, walls, signs); stock-photo posed smiles or people looking at the camera; plastic-perfect skin; oversaturated HDR look; extra or deformed fingers or hands.
```

## 3. `course-diagnostics` — Diagnóstico Avançado (Workshop 8h + Curso 27h)

**Uso:** cards e heros das duas ELPs de Diagnóstico, hero da página `/cursos`. **Conteúdo do curso:** scanner como ferramenta de análise, multímetro, osciloscópio, casos reais. **Enquadramento:** plano médio, foco na dupla instrutor + aluno com o scanner.

```
Documentary editorial photograph inside a modern Brazilian automotive training workshop. Dark graphite-gray walls, matte black tool cabinets and steel workbenches, clean light-gray epoxy floor, a car raised on a two-post lift in the background. Lighting: cool white overhead LED panels mixed with warm golden practical work lights that leave amber highlights on metal surfaces. The people are real everyday Brazilians of mixed ages and skin tones, with authentic faces and natural imperfect features — not models — wearing plain dark navy or black polo shirts and mechanic work uniforms with no logos or lettering. Shot on a 35mm lens at f/2.8, shallow depth of field, candid unposed moment, nobody looking at the camera, realistic color grade with deep blacks and warm golden highlights, subtle film grain. Wide 16:9 landscape format.

Scene: an instructor holds a professional rugged diagnostic scan tool tablet connected by a cable to the OBD-II port under the dashboard of a modern car with its hood open. Standing right beside him, a younger student leans in to study the screen, which glows with abstract colorful live-data gauges and graph lines (no readable text). The instructor points at the screen with his other hand mid-explanation. The open engine bay is visible at the edge of the frame, a digital multimeter resting on the fender cover.

Avoid: any readable text, letters, numbers or logos anywhere (screens, shirts, walls, signs); stock-photo posed smiles or people looking at the camera; plastic-perfect skin; oversaturated HDR look; extra or deformed fingers or hands.
```

## 4. `course-multimetro` — Curso Multímetro (10h, iniciante)

**Uso:** card e hero da ELP Multímetro. **Conteúdo do curso:** tensão/corrente/resistência, continuidade, teste de sensores na bancada, acompanhamento próximo do instrutor. **Enquadramento:** mais fechado, mãos e bancada em primeiro plano.

```
Documentary editorial photograph inside a modern Brazilian automotive training workshop. Dark graphite-gray walls, matte black tool cabinets and steel workbenches, clean light-gray epoxy floor, a car raised on a two-post lift in the background. Lighting: cool white overhead LED panels mixed with warm golden practical work lights that leave amber highlights on metal surfaces. The people are real everyday Brazilians of mixed ages and skin tones, with authentic faces and natural imperfect features — not models — wearing plain dark navy or black polo shirts and mechanic work uniforms with no logos or lettering. Shot on a 35mm lens at f/2.8, shallow depth of field, candid unposed moment, nobody looking at the camera, realistic color grade with deep blacks and warm golden highlights, subtle film grain. Wide 16:9 landscape format.

Scene: close over-the-bench shot of a beginner student's hands carefully touching the red and black probes of a digital multimeter to the terminals of an automotive sensor clamped on a steel workbench. The multimeter display glows softly, slightly out of focus. The instructor stands close on the other side of the bench, one hand gesturing as he guides the measurement, his face softly out of focus in the background. Loose wires, connectors and a car battery share the bench.

Avoid: any readable text, letters, numbers or logos anywhere (screens, shirts, walls, signs); stock-photo posed smiles or people looking at the camera; plastic-perfect skin; oversaturated HDR look; extra or deformed fingers or hands.
```

## 5. `course-injecao` — Curso Injeção Eletrônica (120h)

**Uso:** card e hero da ELP Injeção Eletrônica (hoje usa a foto de grupo — troca prioritária). **Conteúdo do curso:** ECU e gerenciamento do motor, sensores e atuadores, bicos e alimentação, bancada + veículos. **Enquadramento:** plano médio na bancada, componente na mão.

```
Documentary editorial photograph inside a modern Brazilian automotive training workshop. Dark graphite-gray walls, matte black tool cabinets and steel workbenches, clean light-gray epoxy floor, a car raised on a two-post lift in the background. Lighting: cool white overhead LED panels mixed with warm golden practical work lights that leave amber highlights on metal surfaces. The people are real everyday Brazilians of mixed ages and skin tones, with authentic faces and natural imperfect features — not models — wearing plain dark navy or black polo shirts and mechanic work uniforms with no logos or lettering. Shot on a 35mm lens at f/2.8, shallow depth of field, candid unposed moment, nobody looking at the camera, realistic color grade with deep blacks and warm golden highlights, subtle film grain. Wide 16:9 landscape format.

Scene: at a steel workbench, an instructor holds up a fuel injector between his fingers, showing it to two attentive students. On the bench in front of them lies a complete fuel rail with injectors, an engine control unit with its connector, and a wiring harness, all neatly laid out for a lesson on electronic fuel injection. A bare engine block on a stand is visible slightly out of focus beside the bench.

Avoid: any readable text, letters, numbers or logos anywhere (screens, shirts, walls, signs); stock-photo posed smiles or people looking at the camera; plastic-perfect skin; oversaturated HDR look; extra or deformed fingers or hands.
```

## 6. `course-rede-can` — Workshop Rede CAN na Prática (20h)

**Uso:** card e hero da ELP Rede CAN. **Conteúdo do curso:** leitura de sinais CAN no osciloscópio, diagramas e pinagens, tomada OBD, PWM. **Enquadramento:** plano médio, osciloscópio como protagonista.

```
Documentary editorial photograph inside a modern Brazilian automotive training workshop. Dark graphite-gray walls, matte black tool cabinets and steel workbenches, clean light-gray epoxy floor, a car raised on a two-post lift in the background. Lighting: cool white overhead LED panels mixed with warm golden practical work lights that leave amber highlights on metal surfaces. The people are real everyday Brazilians of mixed ages and skin tones, with authentic faces and natural imperfect features — not models — wearing plain dark navy or black polo shirts and mechanic work uniforms with no logos or lettering. Shot on a 35mm lens at f/2.8, shallow depth of field, candid unposed moment, nobody looking at the camera, realistic color grade with deep blacks and warm golden highlights, subtle film grain. Wide 16:9 landscape format.

Scene: two technicians analyze vehicle network communication. An automotive oscilloscope on a cart displays two glowing square-wave signal traces in yellow and cyan against a dark screen (abstract waveforms, no readable text). One technician back-probes a pin on an automotive wiring harness connector with a fine test lead while the other watches the waveform closely. The exposed wiring harness with taped branches runs across the bench, and the open door of a car reveals the diagnostic connector area under the dashboard.

Avoid: any readable text, letters, numbers or logos anywhere (screens, shirts, walls, signs); stock-photo posed smiles or people looking at the camera; plastic-perfect skin; oversaturated HDR look; extra or deformed fingers or hands.
```

## 7. `course-cambio-atf` — Curso Troca de Óleo de Câmbio Automático (9h)

**Uso:** card e hero da ELP Troca de Óleo (hoje usa a foto de scanner). **Conteúdo do curso:** fluidos ATF, procedimento correto, uso da máquina de troca, prática em veículos. **Enquadramento:** plano médio, máquina de ATF conectada ao carro.

```
Documentary editorial photograph inside a modern Brazilian automotive training workshop. Dark graphite-gray walls, matte black tool cabinets and steel workbenches, clean light-gray epoxy floor, a car raised on a two-post lift in the background. Lighting: cool white overhead LED panels mixed with warm golden practical work lights that leave amber highlights on metal surfaces. The people are real everyday Brazilians of mixed ages and skin tones, with authentic faces and natural imperfect features — not models — wearing plain dark navy or black polo shirts and mechanic work uniforms with no logos or lettering. Shot on a 35mm lens at f/2.8, shallow depth of field, candid unposed moment, nobody looking at the camera, realistic color grade with deep blacks and warm golden highlights, subtle film grain. Wide 16:9 landscape format.

Scene: an automatic transmission fluid exchange machine — a wheeled service cart with analog gauges and two transparent reservoirs of translucent red ATF fluid — is connected by hoses to the transmission cooler lines of a sedan raised at waist height on the two-post lift. A focused technician crouches beside the machine adjusting a valve while a student observes the fluid moving through the sight glass. Warm work light reflects off the red fluid in the reservoirs.

Avoid: any readable text, letters, numbers or logos anywhere (screens, shirts, walls, signs); stock-photo posed smiles or people looking at the camera; plastic-perfect skin; oversaturated HDR look; extra or deformed fingers or hands.
```

## 8. `course-auto-divas` — Auto Divas Experience (6h)

**Uso:** card e hero da ELP Auto Divas (pendência do AGENTS.md: hoje usa oficina genérica sem o público-alvo). **Conteúdo:** mulheres, funcionamento básico, luzes do painel, manutenção preventiva, clima acolhedor e sem julgamento. **Enquadramento:** plano médio-aberto, grupo em volta do carro; a cena mais luminosa do conjunto, mas na mesma oficina.

```
Documentary editorial photograph inside a modern Brazilian automotive training workshop. Dark graphite-gray walls, matte black tool cabinets and steel workbenches, clean light-gray epoxy floor, a car raised on a two-post lift in the background. Lighting: cool white overhead LED panels mixed with warm golden practical work lights that leave amber highlights on metal surfaces. The people are real everyday Brazilians of mixed ages and skin tones, with authentic faces and natural imperfect features — not models. Shot on a 35mm lens at f/2.8, shallow depth of field, candid unposed moment, nobody looking at the camera, realistic color grade with deep blacks and warm golden highlights, subtle film grain. Wide 16:9 landscape format.

Scene: a welcoming hands-on car care class for women. A confident female instructor in a plain dark polo shirt stands at the open hood of a compact car, holding up the oil dipstick and showing it to a group of four women of different ages and body types dressed in their own casual everyday clothes (plain colors, no logos or lettering). One participant leans in curiously, another holds the hood prop, the mood is warm, engaged and supportive. This scene is slightly brighter and warmer than a technical class, but in the same workshop space.

Avoid: any readable text, letters, numbers or logos anywhere (screens, shirts, walls, signs); stock-photo posed smiles or people looking at the camera; plastic-perfect skin; oversaturated HDR look; extra or deformed fingers or hands.
```

---

## Checklist de revisão pós-geração

- [ ] As 8 cenas parecem **a mesma oficina** (paredes grafite, piso epóxi, luz LED fria + pontos dourados)?
- [ ] Pessoas com aparência real (idades variadas, sem cara de banco de imagem, mãos e dedos corretos)?
- [ ] Nenhum texto/letra/logo legível (telas, camisetas, paredes, placas)?
- [ ] Ferramenta certa por curso (scanner / multímetro / bicos+ECU / osciloscópio / máquina ATF)?
- [ ] Heros (`hero-workshop`, `community-workshop`) aguentam o overlay preto 94%→72% sem virar breu, com espaço para texto?
- [ ] Auto Divas: grupo feminino, clima acolhedor, mesma oficina?

## Próximos passos (após aprovação das imagens)

1. Gerar via OpenRouter (`google/gemini-2.5-flash-image`), 1–3 variações por cena.
2. Converter as aprovadas para `.webp` em 1600×900 e 800×450 (comandos no topo) e salvar em `public/assets/`.
3. As 3 cenas existentes são troca direta de arquivo; para as 5 novas, adicionar entradas em `heroImageBase` (`src/App.jsx:175`) e apontar os cards (`courses`, `App.jsx:78-156`) e ELPs (`image`/`practiceImage` em `coursePages`) para as novas chaves.
