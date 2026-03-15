# ⚡ Quick Start — ADAPTA Fonts

Guia rápido de 5 minutos para começar a usar as fontes ADAPTA.

---

## 🎯 Para Desenvolvedores Web

### Opção 1: Google Fonts CDN (Mais Rápido)

Cole este código no `<head>` do seu HTML:

```html
<!-- Google Fonts CDN - 7 das 9 fontes -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100..900&family=Crimson+Pro:wght@200..900&family=DM+Sans:wght@100..1000&family=DM+Mono:wght@300;400;500&family=Nunito:wght@200..1000&family=Urbanist:wght@100..900&family=Allura&display=swap" rel="stylesheet">
```

⚠️ **Atenção:** Ofissina e Bolupisang não estão no Google Fonts. [Veja alternativas](#alternativas-para-ofissina-e-bolupisang).

### Opção 2: Self-Hosting (Controle Total)

1. Clone o repositório:
```bash
git clone https://github.com/SEU-USERNAME/adapta-fonts.git
```

2. Copie a pasta `fonts/` para seu projeto:
```bash
cp -r adapta-fonts/fonts/ ./public/assets/fonts/
cp adapta-fonts/fonts.css ./public/assets/fonts.css
```

3. Importe no HTML:
```html
<link rel="stylesheet" href="/assets/fonts.css">
```

---

## 🎨 Como Usar

### CSS Variables (Recomendado)

```css
/* As variáveis já estão definidas em fonts.css */

/* Logo */
.logo {
  font-family: var(--font-brand);
  font-weight: 900;
}

/* Artigo */
.article {
  font-family: var(--font-editorial);
  font-weight: 400;
}

/* Interface */
.button {
  font-family: var(--font-ui);
  font-weight: 600;
}

/* Dosagem técnica */
.dosage {
  font-family: var(--font-mono);
  font-weight: 400;
}

/* FAQ acolhedor */
.faq {
  font-family: var(--font-friendly);
  font-weight: 400;
}

/* Outdoor */
.hero-title {
  font-family: var(--font-display);
  font-weight: 900;
}
```

### Uso Direto

```css
/* Logo ADAPTA (MuseoModerno) */
.logo {
  font-family: 'MuseoModerno', sans-serif;
  font-weight: 900;
}

/* Artigo de revista (Crimson Pro) */
.article {
  font-family: 'Crimson Pro', serif;
  font-weight: 400;
  line-height: 1.7;
}

/* Interface digital (DM Sans) */
.ui-element {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
}

/* Dosagem técnica (DM Mono) */
.technical-data {
  font-family: 'DM Mono', monospace;
  font-weight: 400;
}

/* Mensagem acolhedora (Nunito) */
.welcome {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
}

/* Outdoor/Hero (Urbanist) */
.hero {
  font-family: 'Urbanist', sans-serif;
  font-weight: 900;
}

/* Assinatura (Allura) */
.signature {
  font-family: 'Allura', cursive;
  font-size: 2rem;
}
```

---

## 🔑 Regras Críticas (Brand Guidelines)

### ⚠️ MuseoModerno — USO RESTRITO

```css
/* ✅ CORRETO - Apenas para "ADAPTA" e palavras institucionais */
.logo {
  font-family: 'MuseoModerno', sans-serif;
}
.logo::after {
  content: "ADAPTA"; /* ✅ OK */
}

.institutional-word {
  font-family: 'MuseoModerno', sans-serif;
}
/* Apenas usar para: SAÚDE, ENERGIA, SEGURANÇA, CONFORTO */

/* ❌ ERRADO - Nunca usar para títulos genéricos */
.page-title {
  font-family: 'MuseoModerno', sans-serif; /* ❌ ERRADO */
}

.product-name {
  font-family: 'MuseoModerno', sans-serif; /* ❌ ERRADO */
}
```

### 🎯 Quando Usar Cada Fonte

| Fonte | Usar para | NÃO usar para |
|-------|-----------|---------------|
| **MuseoModerno** | Logo "ADAPTA", palavras institucionais | Títulos genéricos, textos |
| **Crimson Pro** | Artigos longos, revista | Interface, dados técnicos |
| **DM Sans** | UI, menus, botões | Artigos longos |
| **DM Mono** | Dosagens, código, dados | Textos corridos |
| **Nunito** | FAQ, acolhimento | Dados técnicos |
| **Urbanist** | Outdoor, hero sections | Textos longos |
| **Allura** | Assinaturas, mensagens VIP | Textos corridos |
| **Ofissina** | Tirinhas regionais (BR) | CTAs universais |
| **Bolupisang** | CTAs simpáticos, playful | Humor regional |

---

## 🌐 Alternativas para Ofissina e Bolupisang

Se você ainda não baixou Ofissina e Bolupisang, use estas alternativas do Google Fonts:

```html
<!-- Alternativa para Ofissina -->
<link href="https://fonts.googleapis.com/css2?family=Offside&display=swap" rel="stylesheet">

<!-- Alternativa para Bolupisang -->
<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
```

```css
/* Usar no CSS */
.regional-cartoon {
  font-family: 'Offside', cursive; /* Similar a Ofissina */
}

.playful-cta {
  font-family: 'Indie Flower', cursive; /* Similar a Bolupisang */
}
```

---

## 📱 Exemplo Completo — Landing Page

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ADAPTA — Cannabis Medicinal</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@900&family=Crimson+Pro:wght@400&family=DM+Sans:wght@400;600&family=Urbanist:wght@900&family=Nunito:wght@400&display=swap" rel="stylesheet">
  
  <style>
    body {
      font-family: 'DM Sans', sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
    }
    
    /* Logo */
    .logo {
      font-family: 'MuseoModerno', sans-serif;
      font-weight: 900;
      font-size: 3rem;
      color: #2c5f2d;
    }
    
    /* Hero Title (Urbanist) */
    .hero-title {
      font-family: 'Urbanist', sans-serif;
      font-weight: 900;
      font-size: clamp(2.5rem, 8vw, 5rem);
      line-height: 1.1;
      color: #1a1a1a;
    }
    
    /* Artigo (Crimson Pro) */
    .article {
      font-family: 'Crimson Pro', serif;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.7;
      color: #333;
    }
    
    /* CTA Button (DM Sans) */
    .cta-button {
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      font-size: 1rem;
      padding: 1rem 2rem;
      background: #2c5f2d;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    
    /* FAQ (Nunito) */
    .faq-text {
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: #555;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header>
    <div class="logo">ADAPTA</div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <h1 class="hero-title">
      Cannabis Medicinal<br>
      que Transforma Vidas
    </h1>
    <button class="cta-button">Saiba Mais</button>
  </section>

  <!-- Article Section -->
  <section class="content">
    <article class="article">
      <p>
        A cannabis medicinal representa uma revolução no tratamento de
        diversas condições de saúde. Nossa missão é tornar esse acesso
        mais democrático e seguro para todos.
      </p>
    </article>
  </section>

  <!-- FAQ Section -->
  <section class="faq">
    <h2>Dúvidas Frequentes</h2>
    <div class="faq-text">
      <p>
        Estamos aqui para ajudar! Confira as perguntas mais comuns
        sobre cannabis medicinal e nossos serviços.
      </p>
    </div>
  </section>

</body>
</html>
```

---

## 🚀 Performance Tips

```html
<!-- 1. Preconnect para Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- 2. Carregue apenas os pesos que você usa -->
<!-- ❌ Evite: family=DM+Sans:wght@100..1000 -->
<!-- ✅ Melhor: family=DM+Sans:wght@400;600;700 -->

<!-- 3. Use font-display: swap -->
<!-- Já está configurado em fonts.css -->

<!-- 4. Apenas carregue as fontes que a página usa -->
<!-- Página de artigo → Crimson Pro -->
<!-- Página de UI → DM Sans -->
<!-- Landing page → Urbanist + DM Sans -->
```

---

## ✅ Checklist Rápido

- [ ] ✅ Google Fonts CDN adicionado ao `<head>`
- [ ] ✅ Fontes carregando corretamente (inspecionar DevTools)
- [ ] ✅ Uso correto das variáveis CSS ou nomes das fontes
- [ ] ✅ MuseoModerno APENAS para "ADAPTA" e palavras institucionais
- [ ] ✅ Contraste adequado (WCAG AA)
- [ ] ✅ Tamanhos de texto responsivos (clamp ou media queries)

---

## 📞 Próximos Passos

1. ✅ **Leia:** [README.md](./README.md) — Documentação completa
2. ✅ **Download:** [GUIDE-DOWNLOAD.md](./GUIDE-DOWNLOAD.md) — Como baixar fontes especiais
3. ✅ **Brand Guidelines:** [README.md#brand-guidelines](./README.md#brand-guidelines) — Regras de uso
4. ✅ **Acessibilidade:** Boas práticas de contraste e legibilidade

---

## 🆘 Problemas?

### ❌ Fontes não carregam

```css
/* Verifique no DevTools (F12) → Network → Fonts */
/* Certifique-se que o link do Google Fonts está antes do seu CSS */
```

### ❌ MuseoModerno não aparece

```css
/* Verifique se você usou o peso correto */
.logo {
  font-family: 'MuseoModerno', sans-serif;
  font-weight: 900; /* MuseoModerno precisa de peso 700-900 */
}
```

### ❌ Ofissina/Bolupisang não carregam

```css
/* Use as alternativas do Google Fonts por enquanto */
font-family: 'Offside', cursive; /* Similar a Ofissina */
font-family: 'Indie Flower', cursive; /* Similar a Bolupisang */
```

---

**📅 Última atualização:** 15 de março de 2026  
**🌿 ADAPTA — Sistema Tipográfico v1.0.0**
