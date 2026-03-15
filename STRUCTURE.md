# 📁 Estrutura de Arquivos — ADAPTA Fonts

Esta é a estrutura completa de pastas e arquivos para o repositório de fontes ADAPTA.

## 🏗️ Árvore de Diretórios

```
adapta-fonts/
│
├── 📄 README.md                    # Documentação principal
├── 📄 LICENSE.md                   # Informações de licenças
├── 📄 STRUCTURE.md                 # Este arquivo (guia da estrutura)
├── 📄 GUIDE-DOWNLOAD.md            # Guia: como baixar as fontes
├── 📄 GUIDE-USAGE.md               # Guia: como usar as fontes
├── 📄 .gitignore                   # Arquivos ignorados pelo Git
│
├── 📄 fonts.css                    # CSS principal com @font-face
│
├── 📁 core/                        # Fontes CORE (5 fontes)
│   │
│   ├── 📁 museomoderno/
│   │   ├── MuseoModerno-VariableFont.woff2
│   │   ├── MuseoModerno-VariableFont.woff
│   │   ├── MuseoModerno-VariableFont.ttf
│   │   ├── 📄 FONT-INFO.md         # Info específica da fonte
│   │   └── 📄 LICENSE.txt          # Licença OFL específica
│   │
│   ├── 📁 crimson-pro/
│   │   ├── CrimsonPro-VariableFont.woff2
│   │   ├── CrimsonPro-VariableFont.woff
│   │   ├── CrimsonPro-VariableFont.ttf
│   │   ├── 📄 FONT-INFO.md
│   │   └── 📄 LICENSE.txt
│   │
│   ├── 📁 dm-sans/
│   │   ├── DMSans-VariableFont.woff2
│   │   ├── DMSans-VariableFont.woff
│   │   ├── DMSans-VariableFont.ttf
│   │   ├── 📄 FONT-INFO.md
│   │   └── 📄 LICENSE.txt
│   │
│   ├── 📁 dm-mono/
│   │   ├── DMMono-Light.woff2
│   │   ├── DMMono-Light.woff
│   │   ├── DMMono-Light.ttf
│   │   ├── DMMono-Regular.woff2
│   │   ├── DMMono-Regular.woff
│   │   ├── DMMono-Regular.ttf
│   │   ├── DMMono-Medium.woff2
│   │   ├── DMMono-Medium.woff
│   │   ├── DMMono-Medium.ttf
│   │   ├── 📄 FONT-INFO.md
│   │   └── 📄 LICENSE.txt
│   │
│   └── 📁 nunito/
│       ├── Nunito-VariableFont.woff2
│       ├── Nunito-VariableFont.woff
│       ├── Nunito-VariableFont.ttf
│       ├── 📄 FONT-INFO.md
│       └── 📄 LICENSE.txt
│
├── 📁 expressivas/                 # Fontes EXPRESSIVAS (4 fontes)
│   │
│   ├── 📁 urbanist/
│   │   ├── Urbanist-VariableFont.woff2
│   │   ├── Urbanist-VariableFont.woff
│   │   ├── Urbanist-VariableFont.ttf
│   │   ├── 📄 FONT-INFO.md
│   │   └── 📄 LICENSE.txt
│   │
│   ├── 📁 allura/
│   │   ├── Allura-Regular.woff2
│   │   ├── Allura-Regular.woff
│   │   ├── Allura-Regular.ttf
│   │   ├── 📄 FONT-INFO.md
│   │   └── 📄 LICENSE.txt
│   │
│   ├── 📁 ofissina/
│   │   ├── Ofissina-Regular.woff2
│   │   ├── Ofissina-Regular.woff
│   │   ├── Ofissina-Regular.otf    # ou .ttf
│   │   ├── 📄 FONT-INFO.md
│   │   └── 📄 LICENSE.txt          # ⚠️ Verificar licença original
│   │
│   └── 📁 bolupisang/
│       ├── Bolupisang-Regular.woff2
│       ├── Bolupisang-Regular.woff
│       ├── Bolupisang-Regular.ttf
│       ├── 📄 FONT-INFO.md
│       └── 📄 LICENSE.txt          # ⚠️ Verificar licença original
│
├── 📁 docs/                        # Documentação adicional
│   ├── 📄 brand-guidelines.md      # Regras de uso (MuseoModerno, etc.)
│   ├── 📄 font-pairing.md          # Guia de combinações de fontes
│   ├── 📄 accessibility.md         # Guia de acessibilidade
│   ├── 📄 performance.md           # Otimização de performance
│   └── 📁 examples/
│       ├── example-logo.html
│       ├── example-editorial.html
│       ├── example-ui.html
│       └── example-display.html
│
├── 📁 samples/                     # Amostras visuais
│   ├── specimen-museomoderno.pdf
│   ├── specimen-crimson-pro.pdf
│   ├── specimen-dm-sans.pdf
│   ├── specimen-dm-mono.pdf
│   ├── specimen-nunito.pdf
│   ├── specimen-urbanist.pdf
│   ├── specimen-allura.pdf
│   ├── specimen-ofissina.pdf
│   └── specimen-bolupisang.pdf
│
└── 📁 utils/                       # Ferramentas úteis (opcional)
    ├── 📄 convert-fonts.sh         # Script para conversão TTF → WOFF2/WOFF
    ├── 📄 subset-fonts.sh          # Script para subset de fontes
    └── 📄 validate-fonts.sh        # Validar formatos e integridade
```

---

## 📝 Descrição dos Arquivos Principais

### Raiz do Repositório

| Arquivo | Descrição |
|---------|-----------|
| `README.md` | Documentação principal com overview do sistema, instalação e uso |
| `LICENSE.md` | Informações sobre licenças de todas as fontes |
| `STRUCTURE.md` | Este arquivo — mapa da estrutura de pastas |
| `GUIDE-DOWNLOAD.md` | Guia passo a passo para baixar todas as fontes |
| `GUIDE-USAGE.md` | Guia de uso com exemplos de código |
| `.gitignore` | Arquivos e pastas ignorados pelo Git |
| `fonts.css` | CSS com todas as declarações @font-face |

### Pasta `core/`

Contém as **5 fontes Core** do sistema ADAPTA:
- MuseoModerno (Brand)
- Crimson Pro (Editorial)
- DM Sans (UI)
- DM Mono (Técnico)
- Nunito (Friendly)

**Cada subpasta contém:**
- Arquivos de fonte em 3 formatos: `.woff2`, `.woff`, `.ttf` (ou `.otf`)
- `FONT-INFO.md` — informações específicas da fonte
- `LICENSE.txt` — licença SIL OFL 1.1

### Pasta `expressivas/`

Contém as **4 fontes Expressivas** do sistema ADAPTA:
- Urbanist (Display)
- Allura (Manuscrita)
- Ofissina (Casual Regional)
- Bolupisang (Casual Universal)

**Estrutura igual à pasta `core/`**

### Pasta `docs/`

Documentação adicional e guias avançados:
- **brand-guidelines.md** — Regras críticas (ex: MuseoModerno só para "ADAPTA")
- **font-pairing.md** — Como combinar fontes do sistema
- **accessibility.md** — Boas práticas de acessibilidade
- **performance.md** — Otimização de carregamento
- **examples/** — Exemplos HTML de uso

### Pasta `samples/`

Specimens visuais em PDF mostrando:
- Todos os caracteres de cada fonte
- Pesos disponíveis
- Exemplos de uso em diferentes tamanhos

### Pasta `utils/`

Scripts bash (opcional) para:
- Converter TTF → WOFF2/WOFF
- Criar subsets de fontes (reduzir tamanho)
- Validar integridade dos arquivos

---

## 🚀 Como Criar Esta Estrutura

### Passo 1: Criar Pastas

```bash
# Na raiz do projeto
mkdir -p core/{museomoderno,crimson-pro,dm-sans,dm-mono,nunito}
mkdir -p expressivas/{urbanist,allura,ofissina,bolupisang}
mkdir -p docs/examples
mkdir -p samples
mkdir -p utils
```

### Passo 2: Baixar e Organizar Fontes

1. **Google Fonts (7 fontes):**
   - Baixe: MuseoModerno, Crimson Pro, DM Sans, DM Mono, Nunito, Urbanist, Allura
   - Extraia os arquivos `.ttf`
   - Coloque nas respectivas pastas

2. **Fontes Especiais (2 fontes):**
   - Encontre Ofissina e Bolupisang em font repositories
   - Coloque nas pastas `expressivas/ofissina/` e `expressivas/bolupisang/`

### Passo 3: Converter para Web Fonts

Use [Transfonter.org](https://transfonter.org) ou scripts bash:

```bash
# Exemplo com fonttools (Python)
# Instalar: pip install fonttools brotli

# Converter TTF → WOFF2
for file in *.ttf; do
  fonttools ttLib.woff2 compress "$file"
done

# Converter TTF → WOFF
for file in *.ttf; do
  sfnt2woff "$file"
done
```

### Passo 4: Copiar Arquivos de Documentação

Copie os arquivos:
- `README.md`
- `LICENSE.md`
- `fonts.css`
- `.gitignore`

### Passo 5: Inicializar Git e Fazer Push

```bash
git init
git add .
git commit -m "feat: Initial commit - ADAPTA fonts system (9 fonts)"
git branch -M main
git remote add origin https://github.com/SEU-USERNAME/adapta-fonts.git
git push -u origin main
```

---

## 📦 Tamanho Estimado

| Categoria | Fontes | Formatos | Tamanho Aprox. |
|-----------|--------|----------|----------------|
| Core | 5 | WOFF2 + WOFF + TTF | ~2-3 MB |
| Expressivas | 4 | WOFF2 + WOFF + TTF | ~1-2 MB |
| **TOTAL** | **9** | **27-36 arquivos** | **~3-5 MB** |

💡 **Dica:** Inclua apenas WOFF2 + WOFF para reduzir o tamanho em ~40%

---

## ✅ Checklist de Organização

- [ ] Criar estrutura de pastas completa
- [ ] Baixar todas as 9 fontes (7 do Google Fonts + 2 especiais)
- [ ] Converter todas para WOFF2 e WOFF
- [ ] Organizar fontes nas pastas corretas
- [ ] Copiar arquivos de documentação (README, LICENSE, fonts.css)
- [ ] Criar arquivo .gitignore
- [ ] Adicionar FONT-INFO.md em cada pasta de fonte
- [ ] Adicionar LICENSE.txt em cada pasta de fonte
- [ ] (Opcional) Gerar specimens em PDF
- [ ] (Opcional) Criar exemplos HTML
- [ ] Inicializar repositório Git
- [ ] Fazer commit e push para GitHub

---

## 🔗 Próximos Passos

Depois de criar a estrutura:

1. **Testar:** Abra `fonts.css` em um HTML de teste
2. **Documentar:** Complete os FONT-INFO.md de cada fonte
3. **Publicar:** Push para GitHub e ativar GitHub Pages (opcional)
4. **CDN:** Configure GitHub Pages como CDN para as fontes

---

**Estrutura criada para ADAPTA — Sistema Tipográfico v1.0.0**  
📅 15 de março de 2026
