# 🌿 ADAPTA — Biblioteca de Fontes

> Sistema tipográfico completo para a associação de cannabis medicinal ADAPTA  
> **9 fontes** organizadas em **5 Core** + **4 Expressivas**

![Version](https://img.shields.io/badge/version-1.0.0-green)
![Fonts](https://img.shields.io/badge/fonts-9-blue)
![License](https://img.shields.io/badge/license-see%20individual%20fonts-yellow)

---

## 📚 Índice

- [Visão Geral](#visão-geral)
- [Estrutura do Sistema](#estrutura-do-sistema)
- [Instalação](#instalação)
- [Uso](#uso)
- [Fontes Core](#fontes-core)
- [Fontes Expressivas](#fontes-expressivas)
- [Brand Guidelines](#brand-guidelines)
- [Licenças](#licenças)

---

## 🎯 Visão Geral

O sistema tipográfico ADAPTA foi desenvolvido para equilibrar **aspectos técnicos/medicinais** (confiança e precisão) com **aspectos culturais** (acessibilidade e humanização).

### Sistema Completo:

```
9 FONTES TOTAL
├── 5 CORE (Base do sistema)
│   ├── MuseoModerno (Brand)
│   ├── Crimson Pro (Editorial Serif)
│   ├── DM Sans (UI/Interface)
│   ├── DM Mono (Técnico/Dados)
│   └── Nunito (Friendly/Warmth)
│
└── 4 EXPRESSIVAS (Comunicação especial)
    ├── Urbanist (Display Versátil)
    ├── Allura (Manuscrita Chique)
    ├── Ofissina (Casual Regional)
    └── Bolupisang (Casual Universal)
```

---

## 🏗️ Estrutura do Sistema

### Por Categoria:

#### **CORE** — Fontes do dia a dia
Usadas em 90% dos touchpoints: digital, embalagens, revista, materiais técnicos.

#### **EXPRESSIVAS** — Fontes para momentos especiais
Outdoor, campanhas, eventos, comunicação cultural, tirinhas.

### Por Público:

| Fonte | Com quem fala | Quando usar |
|-------|---------------|-------------|
| **MuseoModerno** | Institucional/Brand | **APENAS** nome "ADAPTA" e palavras institucionais (SAÚDE, ENERGIA, SEGURANÇA) |
| **Crimson Pro** | Leitor atento | Artigos longos, revista VerdeVox, conteúdo premium |
| **DM Sans** | Usuário digital | Interface, UI, site, app, navegação |
| **DM Mono** | Profissional técnico | Dosagens, código, dados científicos, tabelas |
| **Nunito** | Paciente/Novato | FAQ, acolhimento, onboarding, tutoriais |
| **Urbanist** | Público amplo | Outdoor, eventos (corporativo + ativismo), hero sections |
| **Allura** | VIP/Premium | Assinaturas médicas, mensagens fundadores, convites |
| **Ofissina** | Adulto regional | Tirinhas regionais ("tio careta"), brasilidade |
| **Bolupisang** | Casual universal | CTAs simpáticos, tirinhas dia a dia, playful |

---

## 📥 Instalação

### Opção 1: Download e Self-Hosting

1. Clone este repositório:
```bash
git clone https://github.com/SEU-USERNAME/adapta-fonts.git
cd adapta-fonts
```

2. Copie a pasta `fonts/` para seu projeto:
```bash
cp -r fonts/ /caminho/do/seu/projeto/public/assets/fonts/
```

3. Importe o CSS:
```html
<link rel="stylesheet" href="/assets/fonts/fonts.css">
```

### Opção 2: CDN (GitHub Pages)

```html
<link rel="stylesheet" href="https://SEU-USERNAME.github.io/adapta-fonts/fonts.css">
```

### Opção 3: Google Fonts (Core + algumas Expressivas)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100..900&family=Crimson+Pro:wght@200..900&family=DM+Sans:wght@100..1000&family=DM+Mono:wght@300;400;500&family=Nunito:wght@200..1000&family=Urbanist:wght@100..900&family=Allura&display=swap" rel="stylesheet">
```

⚠️ **Atenção:** Ofissina e Bolupisang **não estão** no Google Fonts. Use self-hosting para essas.

---

## 🎨 Uso

### CSS Variables

```css
:root {
  /* Core */
  --font-brand: 'MuseoModerno', sans-serif;
  --font-editorial: 'Crimson Pro', serif;
  --font-ui: 'DM Sans', sans-serif;
  --font-mono: 'DM Mono', monospace;
  --font-friendly: 'Nunito', sans-serif;
  
  /* Expressivas */
  --font-display: 'Urbanist', sans-serif;
  --font-signature: 'Allura', cursive;
  --font-regional: 'Ofissina', cursive;
  --font-playful: 'Bolupisang', cursive;
}
```

### Exemplos Práticos

```css
/* Logo ADAPTA */
.logo {
  font-family: var(--font-brand);
  font-weight: 900;
}

/* Artigo de revista */
.article-body {
  font-family: var(--font-editorial);
  font-weight: 400;
  line-height: 1.7;
}

/* Interface do app */
.button, .menu, .form-label {
  font-family: var(--font-ui);
  font-weight: 500;
}

/* Dosagem técnica */
.dosage-info {
  font-family: var(--font-mono);
  font-weight: 400;
  letter-spacing: 0.05em;
}

/* FAQ acolhedor */
.faq-answer {
  font-family: var(--font-friendly);
  font-weight: 400;
}

/* Outdoor de campanha */
.hero-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(3rem, 10vw, 8rem);
}

/* Assinatura do diretor médico */
.signature {
  font-family: var(--font-signature);
  font-size: 2rem;
}

/* Tirinha regional brasileira */
.comic-regional {
  font-family: var(--font-regional);
  font-size: 1.1rem;
}

/* CTA simpático */
.cta-playful {
  font-family: var(--font-playful);
  font-size: 1.2rem;
}
```

---

## 📖 Fontes CORE

### 1. MuseoModerno
- **Categoria:** Brand
- **Pesos:** 100, 200, 300, 400, 500, 600, 700, 800, 900 (Variable)
- **Fonte:** [Google Fonts](https://fonts.google.com/specimen/MuseoModerno)
- **Quando usar:** 
  - ✅ Escrever "ADAPTA" (logotipo)
  - ✅ Palavras institucionais: SAÚDE, ENERGIA, SEGURANÇA, CONFORTO
  - ❌ **NUNCA** para textos corridos ou títulos genéricos

### 2. Crimson Pro
- **Categoria:** Editorial Serif
- **Pesos:** 200, 300, 400, 500, 600, 700, 800, 900 (Variable)
- **Fonte:** [Google Fonts](https://fonts.google.com/specimen/Crimson+Pro)
- **Quando usar:**
  - Revista VerdeVox (artigos, ensaios)
  - Conteúdo premium/editorial
  - Textos longos que exigem leitura atenta
  - Citações e depoimentos formais

### 3. DM Sans
- **Categoria:** UI/Interface
- **Pesos:** 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 (Variable)
- **Fonte:** [Google Fonts](https://fonts.google.com/specimen/DM+Sans)
- **Quando usar:**
  - Interface digital (site, app)
  - Menus, navegação, botões
  - Formulários, labels
  - Qualquer UI/UX digital

### 4. DM Mono
- **Categoria:** Técnico/Dados
- **Pesos:** 300 (Light), 400 (Regular), 500 (Medium)
- **Fonte:** [Google Fonts](https://fonts.google.com/specimen/DM+Mono)
- **Quando usar:**
  - Dosagens e instruções técnicas
  - Tabelas de dados científicos
  - Código (se aplicável)
  - Números e medições precisas
  - Bulas e informações regulatórias

### 5. Nunito
- **Categoria:** Friendly/Warmth
- **Pesos:** 200, 300, 400, 500, 600, 700, 800, 900, 1000 (Variable)
- **Fonte:** [Google Fonts](https://fonts.google.com/specimen/Nunito)
- **Quando usar:**
  - FAQ e dúvidas frequentes
  - Mensagens de boas-vindas
  - Onboarding de novos pacientes
  - Tutoriais e guias passo a passo
  - Conteúdo acolhedor e empático

---

## 🎭 Fontes EXPRESSIVAS

### 1. Urbanist
- **Categoria:** Display Versátil
- **Pesos:** 100, 200, 300, 400, 500, 600, 700, 800, 900 (Variable)
- **Fonte:** [Google Fonts](https://fonts.google.com/specimen/Urbanist)
- **Quando usar:**
  - Outdoor e mídia externa
  - Capas da revista VerdeVox
  - Eventos (corporativo + ativismo)
  - Hero sections de landing pages
  - Campanhas de comunicação ampla

### 2. Allura
- **Categoria:** Manuscrita Chique
- **Pesos:** 400 (Regular)
- **Fonte:** [Google Fonts](https://fonts.google.com/specimen/Allura)
- **Quando usar:**
  - Assinaturas de médicos/profissionais
  - Mensagens dos fundadores
  - Convites VIP e eventos premium
  - Notas editoriais especiais
  - Certificados e diplomas

### 3. Ofissina
- **Categoria:** Casual Regional (Brasil)
- **Pesos:** 400 (Regular)
- **Fonte:** Fonte especial (não disponível no Google Fonts)
- **Alternativas:** Offside (similar no Google Fonts)
- **Quando usar:**
  - Tirinhas adultas/regionais
  - Contextos "como falar de cannabis com seu tio careta"
  - Embalagens "Feito no Brasil"
  - Comunicação regional brasileira
  - Humor adulto com contexto cultural local

### 4. Bolupisang
- **Categoria:** Casual Universal
- **Pesos:** 400 (Regular)
- **Fonte:** Fonte especial (não disponível no Google Fonts)
- **Alternativas:** Indie Flower (similar no Google Fonts)
- **Quando usar:**
  - Tirinhas do dia a dia
  - CTAs simpáticos ("Assine nossa newsletter!")
  - Mensagens playful universais
  - Conteúdo "enquanto isso, no acolhimento..."
  - Comunicação leve e descontraída

---

## ⚠️ Brand Guidelines — Regras Críticas

### 🚫 NÃO FAZER:

1. **MuseoModerno:**
   - ❌ Usar para títulos genéricos
   - ❌ Usar em textos corridos
   - ❌ Usar em nomes de produtos (use DM Sans)
   - ✅ **APENAS** para "ADAPTA" e palavras institucionais

2. **Misturar fontes cartoon:**
   - ❌ Usar Ofissina para CTAs universais → use Bolupisang
   - ❌ Usar Bolupisang para humor regional → use Ofissina

3. **Performance:**
   - ❌ Carregar todas as 9 fontes em todas as páginas
   - ✅ Carregar apenas as necessárias por página

### ✅ FAZER:

1. **Hierarquia visual clara:**
   - Títulos: Urbanist (display) ou DM Sans (UI)
   - Corpo: Crimson Pro (editorial) ou DM Sans (digital)
   - Dados: DM Mono

2. **Contexto determina a fonte:**
   - Digital/App → DM Sans
   - Revista/Editorial → Crimson Pro
   - Acolhimento → Nunito
   - Outdoor/Evento → Urbanist

3. **Acessibilidade:**
   - Mínimo 16px para textos corridos
   - Contraste adequado (WCAG AA)
   - Nunca usar Allura, Ofissina ou Bolupisang para textos longos

---

## 📄 Licenças

| Fonte | Licença | Uso Comercial | Fonte |
|-------|---------|---------------|-------|
| MuseoModerno | SIL Open Font License 1.1 | ✅ Permitido | Google Fonts |
| Crimson Pro | SIL Open Font License 1.1 | ✅ Permitido | Google Fonts |
| DM Sans | SIL Open Font License 1.1 | ✅ Permitido | Google Fonts |
| DM Mono | SIL Open Font License 1.1 | ✅ Permitido | Google Fonts |
| Nunito | SIL Open Font License 1.1 | ✅ Permitido | Google Fonts |
| Urbanist | SIL Open Font License 1.1 | ✅ Permitido | Google Fonts |
| Allura | SIL Open Font License 1.1 | ✅ Permitido | Google Fonts |
| Ofissina | Verificar licença original | ⚠️ Verificar | Fonte especial |
| Bolupisang | Verificar licença original | ⚠️ Verificar | Fonte especial |

⚠️ **Importante:** Antes de usar comercialmente **Ofissina** e **Bolupisang**, verifique as licenças originais das fontes.

---

## 🤝 Contribuindo

Este é um sistema tipográfico interno da ADAPTA. Para sugestões ou melhorias:

1. Abra uma issue descrevendo o caso de uso
2. Documente qual fonte você sugere e para qual contexto
3. Inclua exemplos visuais se possível

---

## 📞 Contato

**ADAPTA — Associação de Cannabis Medicinal**  
Dúvidas sobre o sistema tipográfico: [seu-email@adapta.com.br]

---

## 📋 Changelog

### v1.0.0 (2026-03-15)
- ✅ Sistema completo com 9 fontes
- ✅ 5 Core: MuseoModerno, Crimson Pro, DM Sans, DM Mono, Nunito
- ✅ 4 Expressivas: Urbanist (substituiu FOMO), Allura, Ofissina, Bolupisang
- ✅ Diferenciação clara entre Ofissina (regional) e Bolupisang (universal)
- ✅ Brand guidelines com regra crítica para MuseoModerno

---

<p align="center">
  <strong>🌿 ADAPTA</strong><br>
  Expandindo fronteiras, cuidando de vidas.
</p>
