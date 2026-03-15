# 🚀 Guia de Upload para GitHub — ADAPTA Fonts

Guia completo para criar o repositório GitHub e fazer upload de todas as fontes.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se que você tem:

- [ ] ✅ Todas as 9 fontes baixadas e organizadas (veja `GUIDE-DOWNLOAD.md`)
- [ ] ✅ Fontes convertidas para WOFF2/WOFF
- [ ] ✅ Estrutura de pastas completa (veja `STRUCTURE.md`)
- [ ] ✅ Conta no GitHub ([criar conta](https://github.com/signup))
- [ ] ✅ Git instalado no computador ([baixar Git](https://git-scm.com/downloads))

---

## 🎯 Métodos de Upload

Escolha um dos 3 métodos abaixo:

1. **[GitHub Web Interface](#método-1-github-web-interface-mais-fácil)** — Mais fácil (não precisa de Git instalado)
2. **[GitHub Desktop](#método-2-github-desktop-recomendado)** — Recomendado (interface visual)
3. **[Git CLI](#método-3-git-cli-linha-de-comando)** — Linha de comando (avançado)

---

## Método 1: GitHub Web Interface (Mais Fácil)

### Passo 1: Criar Repositório

1. Acesse https://github.com/new
2. Preencha:
   - **Repository name:** `adapta-fonts`
   - **Description:** "🌿 ADAPTA Typography System — 9 fonts (5 Core + 4 Expressivas) for medicinal cannabis association"
   - **Public** ✅ (ou Private se preferir)
   - **Add a README file** ✅ (marcar)
   - **Add .gitignore:** escolha "None" (vamos adicionar manualmente)
   - **Choose a license:** escolha "None" (temos LICENSE.md customizado)
3. Clique em **"Create repository"**

### Passo 2: Upload de Arquivos

#### 2.1 Upload do README e arquivos raiz

1. Na página do repositório, clique em **"Add file"** → **"Upload files"**
2. Arraste e solte:
   - `README.md` (sobrescrever o existente)
   - `LICENSE.md`
   - `STRUCTURE.md`
   - `GUIDE-DOWNLOAD.md`
   - `GUIDE-GITHUB-UPLOAD.md`
   - `fonts.css`
   - `.gitignore`
3. Adicione mensagem de commit: `docs: Add main documentation and fonts.css`
4. Clique em **"Commit changes"**

#### 2.2 Upload das fontes Core

**Para cada fonte (MuseoModerno, Crimson Pro, DM Sans, DM Mono, Nunito):**

1. Clique em **"Add file"** → **"Upload files"**
2. Na área de upload, **primeiro** digite o caminho da pasta:
   - Digite: `core/museomoderno/` (GitHub cria a pasta automaticamente)
3. Arraste os arquivos da fonte:
   - `MuseoModerno-VariableFont.woff2`
   - `MuseoModerno-VariableFont.woff`
   - `MuseoModerno-VariableFont.ttf`
   - (opcional) `FONT-INFO.md`, `LICENSE.txt`
4. Commit message: `feat: Add MuseoModerno font (Core - Brand)`
5. Clique em **"Commit changes"**
6. **Repita** para as outras 4 fontes Core

💡 **Dica:** Você pode fazer upload de múltiplos arquivos de uma vez. Apenas digite o caminho da pasta antes de arrastar os arquivos.

#### 2.3 Upload das fontes Expressivas

**Para cada fonte (Urbanist, Allura, Ofissina, Bolupisang):**

1. Clique em **"Add file"** → **"Upload files"**
2. Digite o caminho: `expressivas/urbanist/`
3. Arraste os arquivos da fonte
4. Commit message: `feat: Add Urbanist font (Expressivas - Display)`
5. Clique em **"Commit changes"**
6. **Repita** para as outras 3 fontes Expressivas

### Passo 3: Verificar Estrutura

1. Volte para a página principal do repositório
2. Verifique se a estrutura está assim:

```
adapta-fonts/
├── README.md
├── LICENSE.md
├── STRUCTURE.md
├── GUIDE-DOWNLOAD.md
├── GUIDE-GITHUB-UPLOAD.md
├── fonts.css
├── .gitignore
├── core/
│   ├── museomoderno/
│   ├── crimson-pro/
│   ├── dm-sans/
│   ├── dm-mono/
│   └── nunito/
└── expressivas/
    ├── urbanist/
    ├── allura/
    ├── ofissina/
    └── bolupisang/
```

---

## Método 2: GitHub Desktop (Recomendado)

### Passo 1: Instalar GitHub Desktop

1. Baixe: https://desktop.github.com
2. Instale e faça login com sua conta GitHub

### Passo 2: Criar Repositório

1. Abra GitHub Desktop
2. Clique em **"File"** → **"New repository"**
3. Preencha:
   - **Name:** `adapta-fonts`
   - **Description:** "🌿 ADAPTA Typography System — 9 fonts"
   - **Local path:** Escolha onde salvar (ex: `~/Documents/GitHub/`)
   - **Initialize with README** ✅ (marcar)
   - **Git ignore:** None
   - **License:** None
4. Clique em **"Create repository"**

### Passo 3: Organizar Arquivos

1. Abra a pasta do repositório (clique em "Show in Finder/Explorer")
2. Copie toda a estrutura de pastas para dentro:
   ```
   adapta-fonts/          ← Pasta do repositório
   ├── README.md          ← Copie este arquivo (substituir)
   ├── LICENSE.md         ← Copie
   ├── fonts.css          ← Copie
   ├── .gitignore         ← Copie
   ├── core/              ← Copie a pasta inteira
   │   ├── museomoderno/
   │   ├── crimson-pro/
   │   └── ...
   └── expressivas/       ← Copie a pasta inteira
       ├── urbanist/
       └── ...
   ```

### Passo 4: Commit e Push

1. Volte para GitHub Desktop
2. Você verá todos os arquivos na aba **"Changes"**
3. Escreva um commit message:
   ```
   feat: Initial commit - ADAPTA fonts system
   
   - 9 fonts: 5 Core + 4 Expressivas
   - Complete documentation (README, LICENSE, guides)
   - fonts.css with all @font-face declarations
   ```
4. Clique em **"Commit to main"**
5. Clique em **"Publish repository"**
6. Escolha:
   - **Public** ✅ (ou Private)
   - **Keep code private** ❌ (desmarcar se public)
7. Clique em **"Publish repository"**

✅ **Pronto!** Repositório criado e online.

---

## Método 3: Git CLI (Linha de Comando)

### Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Crie o repositório `adapta-fonts` (Public/Private)
3. **NÃO** marque "Add a README file"
4. Clique em **"Create repository"**
5. Copie a URL do repositório (ex: `https://github.com/SEU-USERNAME/adapta-fonts.git`)

### Passo 2: Preparar Pasta Local

```bash
# 1. Navegue até a pasta do projeto
cd /caminho/para/adapta-fonts/

# 2. Verifique se a estrutura está correta
ls -la
# Deve mostrar: README.md, LICENSE.md, fonts.css, core/, expressivas/, etc.

# 3. Inicializar Git
git init

# 4. Adicionar remote (substitua SEU-USERNAME)
git remote add origin https://github.com/SEU-USERNAME/adapta-fonts.git

# 5. Verificar se .gitignore está presente
cat .gitignore
```

### Passo 3: Primeiro Commit

```bash
# 1. Adicionar todos os arquivos
git add .

# 2. Verificar o que será commitado
git status

# 3. Criar commit
git commit -m "feat: Initial commit - ADAPTA fonts system

- 9 fonts: 5 Core + 4 Expressivas
- Complete documentation (README, LICENSE, guides)
- fonts.css with all @font-face declarations
- Organized structure: core/ and expressivas/ folders"

# 4. Renomear branch para 'main' (se necessário)
git branch -M main

# 5. Push para GitHub
git push -u origin main
```

### Passo 4: Verificar Upload

```bash
# Abrir repositório no navegador
open https://github.com/SEU-USERNAME/adapta-fonts
# (no macOS)

# Ou:
xdg-open https://github.com/SEU-USERNAME/adapta-fonts
# (no Linux)

# Ou:
start https://github.com/SEU-USERNAME/adapta-fonts
# (no Windows)
```

---

## ✅ Checklist Pós-Upload

Depois de fazer o upload, verifique:

### Estrutura
- [ ] ✅ Pasta `core/` com 5 subpastas (museomoderno, crimson-pro, dm-sans, dm-mono, nunito)
- [ ] ✅ Pasta `expressivas/` com 4 subpastas (urbanist, allura, ofissina, bolupisang)
- [ ] ✅ Cada subpasta tem os arquivos de fonte (.woff2, .woff, .ttf/.otf)

### Documentação
- [ ] ✅ `README.md` visível na página principal
- [ ] ✅ `LICENSE.md` presente
- [ ] ✅ `STRUCTURE.md` presente
- [ ] ✅ `GUIDE-DOWNLOAD.md` presente
- [ ] ✅ `fonts.css` presente

### Testes
- [ ] ✅ Arquivos aparecem corretamente no GitHub
- [ ] ✅ README renderiza bem (títulos, links, tabelas)
- [ ] ✅ Nenhum erro de upload

---

## 🌐 Ativar GitHub Pages (Opcional - CDN Gratuito)

GitHub Pages permite hospedar as fontes como CDN gratuito.

### Passo a Passo:

1. No repositório GitHub, vá em **"Settings"**
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"**, escolha:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **"Save"**
5. Aguarde 1-2 minutos
6. Acesse: `https://SEU-USERNAME.github.io/adapta-fonts/fonts.css`

### Como usar o CDN:

```html
<!-- No HTML -->
<link rel="stylesheet" href="https://SEU-USERNAME.github.io/adapta-fonts/fonts.css">
```

```css
/* Ou no CSS */
@import url('https://SEU-USERNAME.github.io/adapta-fonts/fonts.css');
```

✅ **Vantagens:**
- CDN gratuito
- HTTPS automático
- Versionamento via Git tags

---

## 🏷️ Criar Release (Opcional)

Releases são versões marcadas do projeto.

### Via Web Interface:

1. No repositório, clique em **"Releases"** (lado direito)
2. Clique em **"Create a new release"**
3. Preencha:
   - **Tag version:** `v1.0.0`
   - **Release title:** `v1.0.0 - Initial Release`
   - **Description:**
     ```markdown
     # 🌿 ADAPTA Fonts v1.0.0
     
     Initial release of the ADAPTA typography system.
     
     ## What's Included
     - ✅ 5 Core fonts (MuseoModerno, Crimson Pro, DM Sans, DM Mono, Nunito)
     - ✅ 4 Expressivas fonts (Urbanist, Allura, Ofissina, Bolupisang)
     - ✅ Complete documentation
     - ✅ fonts.css ready to use
     
     ## Installation
     See [README.md](https://github.com/SEU-USERNAME/adapta-fonts#installation)
     ```
4. (Opcional) Anexe um ZIP com todas as fontes
5. Clique em **"Publish release"**

### Via Git CLI:

```bash
# Criar tag
git tag -a v1.0.0 -m "v1.0.0 - Initial release"

# Push tag
git push origin v1.0.0

# Depois crie a release na web interface
```

---

## 🔒 Tornar Repositório Privado (Se Necessário)

Se você criou como Public mas quer mudar para Private:

1. Vá em **"Settings"** do repositório
2. Role até o final da página
3. Em **"Danger Zone"**, clique em **"Change visibility"**
4. Escolha **"Make private"**
5. Digite o nome do repositório para confirmar

⚠️ **Nota:** Repositórios privados não funcionam com GitHub Pages em contas gratuitas.

---

## 📊 Adicionar README Badges (Opcional)

Adicione badges ao `README.md` para deixar mais profissional:

```markdown
![Version](https://img.shields.io/badge/version-1.0.0-green)
![Fonts](https://img.shields.io/badge/fonts-9-blue)
![License](https://img.shields.io/badge/license-SIL%20OFL%201.1-yellow)
![Status](https://img.shields.io/badge/status-active-success)
```

---

## 🆘 Problemas Comuns

### ❌ "Permission denied (publickey)"

**Solução:**
```bash
# Configurar SSH key ou usar HTTPS
git remote set-url origin https://github.com/SEU-USERNAME/adapta-fonts.git
```

### ❌ "Large files detected"

GitHub tem limite de 100MB por arquivo.

**Solução:**
- Fontes geralmente são < 1MB cada
- Se algum arquivo > 100MB, use Git LFS:
  ```bash
  git lfs install
  git lfs track "*.ttf"
  git lfs track "*.otf"
  ```

### ❌ "Updates were rejected"

**Solução:**
```bash
# Puxar mudanças primeiro
git pull origin main --rebase

# Depois push
git push origin main
```

---

## 📞 Próximos Passos

Após upload bem-sucedido:

1. ✅ Teste o CDN (se ativou GitHub Pages)
2. ✅ Compartilhe o link com a equipe ADAPTA
3. ✅ Adicione CONTRIBUTING.md (se quiser contribuições)
4. ✅ Configure GitHub Actions para validação automática (avançado)

---

## 🔗 Recursos Úteis

- **Git Book:** https://git-scm.com/book/pt-br/v2
- **GitHub Docs:** https://docs.github.com
- **GitHub Desktop:** https://desktop.github.com
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf

---

**📅 Última atualização:** 15 de março de 2026  
**🌿 ADAPTA — Sistema Tipográfico v1.0.0**
