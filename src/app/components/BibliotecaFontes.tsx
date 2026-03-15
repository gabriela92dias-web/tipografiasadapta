import { Check, Download, FolderTree, Link, Upload, FileText, Code, Package } from 'lucide-react';
import { useState } from 'react';

interface FontInfo {
  nome: string;
  categoria: 'Core' | 'Expressiva';
  subcategoria: string;
  googleFonts: boolean;
  googleFontsUrl?: string;
  alternativeSource?: string;
  pesos?: string;
  formatos: string[];
  quando: string;
  arquivo: string;
}

const FONTES_ADAPTA: FontInfo[] = [
  // CORE (5 fontes)
  {
    nome: 'MuseoModerno',
    categoria: 'Core',
    subcategoria: 'Brand',
    googleFonts: true,
    googleFontsUrl: 'https://fonts.google.com/specimen/MuseoModerno',
    pesos: '100, 200, 300, 400, 500, 600, 700, 800, 900',
    formatos: ['woff2', 'woff', 'ttf'],
    quando: 'Apenas para escrever "ADAPTA" ou palavras institucionais (SAÚDE, ENERGIA, SEGURANÇA)',
    arquivo: 'MuseoModerno-VariableFont.ttf'
  },
  {
    nome: 'Crimson Pro',
    categoria: 'Core',
    subcategoria: 'Editorial Serif',
    googleFonts: true,
    googleFontsUrl: 'https://fonts.google.com/specimen/Crimson+Pro',
    pesos: '200, 300, 400, 500, 600, 700, 800, 900',
    formatos: ['woff2', 'woff', 'ttf'],
    quando: 'Textos longos, artigos revista VerdeVox, editorial, conteúdo premium',
    arquivo: 'CrimsonPro-VariableFont.ttf'
  },
  {
    nome: 'DM Sans',
    categoria: 'Core',
    subcategoria: 'UI/Interface',
    googleFonts: true,
    googleFontsUrl: 'https://fonts.google.com/specimen/DM+Sans',
    pesos: '100, 200, 300, 400, 500, 600, 700, 800, 900, 1000',
    formatos: ['woff2', 'woff', 'ttf'],
    quando: 'Interface digital, UI, aplicativo, site, formulários, navegação',
    arquivo: 'DMSans-VariableFont.ttf'
  },
  {
    nome: 'DM Mono',
    categoria: 'Core',
    subcategoria: 'Técnico/Dados',
    googleFonts: true,
    googleFontsUrl: 'https://fonts.google.com/specimen/DM+Mono',
    pesos: '300, 400, 500',
    formatos: ['woff2', 'woff', 'ttf'],
    quando: 'Código, dosagens, dados técnicos, tabelas científicas, números',
    arquivo: 'DMMono-Regular.ttf'
  },
  {
    nome: 'Nunito',
    categoria: 'Core',
    subcategoria: 'Friendly/Warmth',
    googleFonts: true,
    googleFontsUrl: 'https://fonts.google.com/specimen/Nunito',
    pesos: '200, 300, 400, 500, 600, 700, 800, 900, 1000',
    formatos: ['woff2', 'woff', 'ttf'],
    quando: 'Acolhimento, FAQ, mensagens friendly, onboarding, tutoriais',
    arquivo: 'Nunito-VariableFont.ttf'
  },
  
  // EXPRESSIVAS (4 fontes)
  {
    nome: 'Urbanist',
    categoria: 'Expressiva',
    subcategoria: 'Display Versátil',
    googleFonts: true,
    googleFontsUrl: 'https://fonts.google.com/specimen/Urbanist',
    pesos: '100, 200, 300, 400, 500, 600, 700, 800, 900',
    formatos: ['woff2', 'woff', 'ttf'],
    quando: 'Outdoor, capas revista, eventos (corporativo + ativismo), campanhas, hero sections',
    arquivo: 'Urbanist-VariableFont.ttf'
  },
  {
    nome: 'Allura',
    categoria: 'Expressiva',
    subcategoria: 'Manuscrita Chique',
    googleFonts: true,
    googleFontsUrl: 'https://fonts.google.com/specimen/Allura',
    pesos: '400 (Regular)',
    formatos: ['woff2', 'woff', 'ttf'],
    quando: 'Assinaturas médicas/profissionais, mensagens fundadores, convites VIP, notas editoriais',
    arquivo: 'Allura-Regular.ttf'
  },
  {
    nome: 'Ofissina',
    categoria: 'Expressiva',
    subcategoria: 'Casual Regional',
    googleFonts: false,
    alternativeSource: 'Offside (similar no Google Fonts) ou buscar Ofissina em sites de fontes brasileiras',
    pesos: '400 (Regular)',
    formatos: ['woff2', 'woff', 'ttf', 'otf'],
    quando: 'Tirinhas adultas/regionais ("tio careta"), embalagens "Feito no Brasil", brasilidade',
    arquivo: 'Ofissina-Regular.otf'
  },
  {
    nome: 'Bolupisang',
    categoria: 'Expressiva',
    subcategoria: 'Casual Universal',
    googleFonts: false,
    alternativeSource: 'Indie Flower (similar no Google Fonts) ou buscar Bolupisang em font repositories',
    pesos: '400 (Regular)',
    formatos: ['woff2', 'woff', 'ttf'],
    quando: 'Tirinhas dia a dia, CTAs simpáticos ("Assine newsletter"), conteúdo playful universal',
    arquivo: 'Bolupisang-Regular.ttf'
  }
];

export function BibliotecaFontes() {
  const [etapaAtiva, setEtapaAtiva] = useState<number>(1);

  const fontesCore = FONTES_ADAPTA.filter(f => f.categoria === 'Core');
  const fontesExpressivas = FONTES_ADAPTA.filter(f => f.categoria === 'Expressiva');

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Package className="w-12 h-12 text-indigo-200" />
              <h1 className="text-5xl font-bold">Biblioteca de Fontes ADAPTA 📚</h1>
            </div>
            <p className="text-2xl text-indigo-200">
              Guia completo para baixar, organizar e implementar as 9 fontes do sistema tipográfico
            </p>
          </div>
        </div>

        <div className="bg-indigo-800/40 border-2 border-indigo-400/40 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">📊 Sistema Completo:</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-700/40 rounded-lg p-6 border border-indigo-400">
              <h4 className="text-xl font-bold text-indigo-200 mb-3">Core (5 fontes)</h4>
              <ul className="space-y-1 text-indigo-100 text-sm">
                <li>✓ MuseoModerno</li>
                <li>✓ Crimson Pro</li>
                <li>✓ DM Sans</li>
                <li>✓ DM Mono</li>
                <li>✓ Nunito</li>
              </ul>
            </div>

            <div className="bg-indigo-700/40 rounded-lg p-6 border border-indigo-400">
              <h4 className="text-xl font-bold text-indigo-200 mb-3">Expressivas (4 fontes)</h4>
              <ul className="space-y-1 text-indigo-100 text-sm">
                <li>✓ Urbanist</li>
                <li>✓ Allura</li>
                <li>✓ Ofissina</li>
                <li>✓ Bolupisang</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Etapas de Implementação */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">🎯 Etapas de Implementação</h2>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { num: 1, titulo: 'Download', icone: Download },
            { num: 2, titulo: 'Organização', icone: FolderTree },
            { num: 3, titulo: 'Upload/Hospedagem', icone: Upload },
            { num: 4, titulo: 'Implementação CSS', icone: Code }
          ].map((etapa) => {
            const Icon = etapa.icone;
            return (
              <button
                key={etapa.num}
                onClick={() => setEtapaAtiva(etapa.num)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  etapaAtiva === etapa.num
                    ? 'bg-indigo-600 border-indigo-600 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-400'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${etapaAtiva === etapa.num ? 'text-white' : 'text-indigo-600'}`} />
                <div className="text-sm font-bold">Etapa {etapa.num}</div>
                <div className="text-xs">{etapa.titulo}</div>
              </button>
            );
          })}
        </div>

        {/* Conteúdo das Etapas */}
        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          {etapaAtiva === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Download className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-slate-900">Etapa 1: Download das Fontes</h3>
              </div>

              {/* Core Fonts */}
              <div className="bg-white rounded-xl p-6 border-2 border-emerald-300">
                <h4 className="text-xl font-bold text-emerald-900 mb-4">✅ Core — Google Fonts (FÁCIL)</h4>
                <p className="text-sm text-emerald-800 mb-4">
                  Todas as 5 fontes Core estão disponíveis gratuitamente no Google Fonts
                </p>
                
                <div className="space-y-3">
                  {fontesCore.map((fonte) => (
                    <div key={fonte.nome} className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-emerald-900">{fonte.nome}</div>
                        <div className="text-xs bg-emerald-600 text-white px-2 py-1 rounded">
                          {fonte.subcategoria}
                        </div>
                      </div>
                      <div className="text-xs text-emerald-700 mb-2">
                        <strong>Pesos:</strong> {fonte.pesos}
                      </div>
                      {fonte.googleFontsUrl && (
                        <a 
                          href={fonte.googleFontsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700 transition-colors"
                        >
                          <Link className="w-4 h-4" />
                          Baixar no Google Fonts
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Expressivas Fonts */}
              <div className="bg-white rounded-xl p-6 border-2 border-amber-300">
                <h4 className="text-xl font-bold text-amber-900 mb-4">⚠️ Expressivas — Fontes Especiais</h4>
                
                <div className="space-y-3">
                  {fontesExpressivas.map((fonte) => (
                    <div key={fonte.nome} className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-amber-900">{fonte.nome}</div>
                        <div className="text-xs bg-amber-600 text-white px-2 py-1 rounded">
                          {fonte.subcategoria}
                        </div>
                      </div>
                      
                      {fonte.googleFonts ? (
                        <div className="space-y-2">
                          <div className="text-xs text-emerald-700 font-bold">✅ Disponível no Google Fonts</div>
                          {fonte.googleFontsUrl && (
                            <a 
                              href={fonte.googleFontsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700 transition-colors"
                            >
                              <Link className="w-4 h-4" />
                              Baixar no Google Fonts
                            </a>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="text-xs text-amber-800 font-bold">⚠️ Não disponível no Google Fonts</div>
                          <div className="text-xs text-amber-700">
                            <strong>Alternativa:</strong> {fonte.alternativeSource}
                          </div>
                          <div className="bg-amber-100 rounded p-3 text-xs text-amber-800">
                            <strong>Onde buscar:</strong>
                            <ul className="mt-2 space-y-1 ml-4">
                              <li>• <a href="https://www.dafont.com" target="_blank" className="text-indigo-600 hover:underline">DaFont.com</a></li>
                              <li>• <a href="https://www.1001fonts.com" target="_blank" className="text-indigo-600 hover:underline">1001Fonts.com</a></li>
                              <li>• <a href="https://www.fontsquirrel.com" target="_blank" className="text-indigo-600 hover:underline">FontSquirrel.com</a></li>
                              <li>• <a href="https://fonts.adobe.com" target="_blank" className="text-indigo-600 hover:underline">Adobe Fonts</a> (requer assinatura)</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
                <h4 className="font-bold text-indigo-900 mb-2">💡 Dica: Google Fonts Downloader</h4>
                <p className="text-sm text-indigo-800 mb-3">
                  Para baixar fontes do Google Fonts, clique em "Download family" no canto superior direito da página da fonte.
                  Você receberá um arquivo .zip com todos os pesos em formato .ttf
                </p>
                <p className="text-sm text-indigo-800">
                  <strong>Formatos necessários:</strong> TTF/OTF (fontes originais) + WOFF2/WOFF (para web - podem ser convertidos depois)
                </p>
              </div>
            </div>
          )}

          {etapaAtiva === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <FolderTree className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-slate-900">Etapa 2: Organização de Pastas</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-slate-300">
                <h4 className="text-xl font-bold text-slate-900 mb-4">📁 Estrutura Recomendada:</h4>
                
                <div className="bg-slate-900 rounded-lg p-6 text-emerald-400 font-mono text-sm overflow-x-auto">
                  <pre>{`adapta-fonts/
├── core/
│   ├── museomoderno/
│   │   ├── MuseoModerno-VariableFont.ttf
│   │   ├── MuseoModerno-VariableFont.woff2
│   │   └── MuseoModerno-VariableFont.woff
│   ├── crimson-pro/
│   │   ├── CrimsonPro-VariableFont.ttf
│   │   ├── CrimsonPro-VariableFont.woff2
│   │   └── CrimsonPro-VariableFont.woff
│   ├── dm-sans/
│   │   ├── DMSans-VariableFont.ttf
│   │   ├── DMSans-VariableFont.woff2
│   │   └── DMSans-VariableFont.woff
│   ├── dm-mono/
│   │   ├── DMMono-Regular.ttf
│   │   ├── DMMono-Medium.ttf
│   │   ├── DMMono-Light.ttf
│   │   └── (arquivos .woff2/.woff)
│   └── nunito/
│       ├── Nunito-VariableFont.ttf
│       ├── Nunito-VariableFont.woff2
│       └── Nunito-VariableFont.woff
│
└── expressivas/
    ├── urbanist/
    │   ├── Urbanist-VariableFont.ttf
    │   ├── Urbanist-VariableFont.woff2
    │   └── Urbanist-VariableFont.woff
    ├── allura/
    │   ├── Allura-Regular.ttf
    │   ├── Allura-Regular.woff2
    │   └── Allura-Regular.woff
    ├── ofissina/
    │   ├── Ofissina-Regular.otf (ou .ttf)
    │   ├── Ofissina-Regular.woff2
    │   └── Ofissina-Regular.woff
    └── bolupisang/
        ├── Bolupisang-Regular.ttf
        ├── Bolupisang-Regular.woff2
        └── Bolupisang-Regular.woff`}</pre>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-300">
                <h4 className="font-bold text-amber-900 mb-2">⚠️ Importante: Converter para Web Fonts (WOFF2/WOFF)</h4>
                <p className="text-sm text-amber-800 mb-3">
                  Se você baixou apenas arquivos .ttf ou .otf, precisa convertê-los para WOFF2/WOFF para usar na web.
                </p>
                <p className="text-sm text-amber-800 mb-3">
                  <strong>Ferramentas de conversão gratuitas:</strong>
                </p>
                <ul className="text-sm text-amber-800 space-y-2 ml-6">
                  <li>
                    • <a href="https://transfonter.org" target="_blank" className="text-indigo-600 hover:underline font-bold">
                      Transfonter.org
                    </a> (recomendado - converte + gera CSS automaticamente)
                  </li>
                  <li>
                    • <a href="https://cloudconvert.com/ttf-to-woff2" target="_blank" className="text-indigo-600 hover:underline">
                      CloudConvert.com
                    </a>
                  </li>
                  <li>
                    • <a href="https://onlinefontconverter.com" target="_blank" className="text-indigo-600 hover:underline">
                      OnlineFontConverter.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
                <h4 className="font-bold text-indigo-900 mb-2">💡 Dica: Nomenclatura de Arquivos</h4>
                <p className="text-sm text-indigo-800">
                  Mantenha os nomes consistentes (PascalCase ou kebab-case) para facilitar a implementação no CSS.
                  Exemplo: <code className="bg-indigo-200 px-2 py-1 rounded">MuseoModerno-Bold.woff2</code> ou 
                  <code className="bg-indigo-200 px-2 py-1 rounded ml-2">museo-moderno-bold.woff2</code>
                </p>
              </div>
            </div>
          )}

          {etapaAtiva === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Upload className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-slate-900">Etapa 3: Upload/Hospedagem</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-emerald-300">
                <h4 className="text-xl font-bold text-emerald-900 mb-4">✅ Opção 1: Hospedar no seu próprio servidor</h4>
                <p className="text-sm text-emerald-800 mb-4">
                  <strong>Melhor opção para controle total e performance</strong>
                </p>
                
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200 mb-4">
                  <h5 className="font-bold text-emerald-900 mb-2 text-sm">Onde colocar os arquivos:</h5>
                  <div className="bg-slate-900 rounded p-3 text-emerald-400 font-mono text-xs overflow-x-auto">
                    <pre>{`seu-site.com/
└── assets/
    └── fonts/
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
            └── bolupisang/`}</pre>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <h5 className="font-bold text-emerald-900 mb-2 text-sm">Como fazer upload:</h5>
                  <ul className="text-sm text-emerald-800 space-y-2 ml-6">
                    <li>• <strong>FTP/SFTP:</strong> Use FileZilla, Cyberduck, ou painel do hosting</li>
                    <li>• <strong>Git:</strong> Commit e push para seu repositório (GitHub, GitLab, etc.)</li>
                    <li>• <strong>CMS:</strong> Upload via painel admin (WordPress, etc.)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-indigo-300">
                <h4 className="text-xl font-bold text-indigo-900 mb-4">🌐 Opção 2: Google Fonts (CDN)</h4>
                <p className="text-sm text-indigo-800 mb-4">
                  <strong>Mais fácil, mas limitado às fontes Core disponíveis no Google Fonts</strong>
                </p>
                
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h5 className="font-bold text-indigo-900 mb-2 text-sm">Link único para todas as Core:</h5>
                  <div className="bg-slate-900 rounded p-3 text-emerald-400 font-mono text-xs overflow-x-auto">
                    <pre>{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100..900&family=Crimson+Pro:wght@200..900&family=DM+Sans:wght@100..1000&family=DM+Mono:wght@300;400;500&family=Nunito:wght@200..1000&family=Urbanist:wght@100..900&family=Allura&display=swap" rel="stylesheet">`}</pre>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mt-4">
                  <h5 className="font-bold text-amber-900 mb-2 text-sm">⚠️ Limitação:</h5>
                  <p className="text-sm text-amber-800">
                    <strong>Ofissina e Bolupisang</strong> precisam ser hospedadas no seu servidor, pois não estão no Google Fonts.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-purple-300">
                <h4 className="text-xl font-bold text-purple-900 mb-4">☁️ Opção 3: CDN Especializado (jsDelivr, Bunny Fonts)</h4>
                <p className="text-sm text-purple-800 mb-4">
                  Para fontes não disponíveis no Google Fonts
                </p>
                
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <ul className="text-sm text-purple-800 space-y-2 ml-6">
                    <li>
                      • <a href="https://www.jsdelivr.com" target="_blank" className="text-indigo-600 hover:underline font-bold">
                        jsDelivr
                      </a> - hospedar via GitHub + CDN automático
                    </li>
                    <li>
                      • <a href="https://fonts.bunny.net" target="_blank" className="text-indigo-600 hover:underline font-bold">
                        Bunny Fonts
                      </a> - alternativa ao Google Fonts (GDPR compliant)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {etapaAtiva === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-slate-900">Etapa 4: Implementação CSS</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-emerald-300">
                <h4 className="text-xl font-bold text-emerald-900 mb-4">📝 Arquivo: fonts.css</h4>
                <p className="text-sm text-emerald-800 mb-4">
                  Crie um arquivo <code className="bg-emerald-200 px-2 py-1 rounded">fonts.css</code> com as declarações @font-face
                </p>
                
                <div className="bg-slate-900 rounded-lg p-6 text-emerald-400 font-mono text-xs overflow-x-auto max-h-96">
                  <pre>{`/* ====================================
   ADAPTA - Sistema Tipográfico
   9 fontes: 5 Core + 4 Expressivas
   ==================================== */

/* ========== CORE FONTS ========== */

/* MuseoModerno - Brand */
@font-face {
  font-family: 'MuseoModerno';
  src: url('/assets/fonts/core/museomoderno/MuseoModerno-VariableFont.woff2') format('woff2'),
       url('/assets/fonts/core/museomoderno/MuseoModerno-VariableFont.woff') format('woff');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* Crimson Pro - Editorial Serif */
@font-face {
  font-family: 'Crimson Pro';
  src: url('/assets/fonts/core/crimson-pro/CrimsonPro-VariableFont.woff2') format('woff2'),
       url('/assets/fonts/core/crimson-pro/CrimsonPro-VariableFont.woff') format('woff');
  font-weight: 200 900;
  font-style: normal;
  font-display: swap;
}

/* DM Sans - UI/Interface */
@font-face {
  font-family: 'DM Sans';
  src: url('/assets/fonts/core/dm-sans/DMSans-VariableFont.woff2') format('woff2'),
       url('/assets/fonts/core/dm-sans/DMSans-VariableFont.woff') format('woff');
  font-weight: 100 1000;
  font-style: normal;
  font-display: swap;
}

/* DM Mono - Técnico/Dados */
@font-face {
  font-family: 'DM Mono';
  src: url('/assets/fonts/core/dm-mono/DMMono-Regular.woff2') format('woff2'),
       url('/assets/fonts/core/dm-mono/DMMono-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'DM Mono';
  src: url('/assets/fonts/core/dm-mono/DMMono-Medium.woff2') format('woff2'),
       url('/assets/fonts/core/dm-mono/DMMono-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

/* Nunito - Friendly/Warmth */
@font-face {
  font-family: 'Nunito';
  src: url('/assets/fonts/core/nunito/Nunito-VariableFont.woff2') format('woff2'),
       url('/assets/fonts/core/nunito/Nunito-VariableFont.woff') format('woff');
  font-weight: 200 1000;
  font-style: normal;
  font-display: swap;
}

/* ========== EXPRESSIVAS FONTS ========== */

/* Urbanist - Display Versátil */
@font-face {
  font-family: 'Urbanist';
  src: url('/assets/fonts/expressivas/urbanist/Urbanist-VariableFont.woff2') format('woff2'),
       url('/assets/fonts/expressivas/urbanist/Urbanist-VariableFont.woff') format('woff');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* Allura - Manuscrita Chique */
@font-face {
  font-family: 'Allura';
  src: url('/assets/fonts/expressivas/allura/Allura-Regular.woff2') format('woff2'),
       url('/assets/fonts/expressivas/allura/Allura-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Ofissina - Casual Regional */
@font-face {
  font-family: 'Ofissina';
  src: url('/assets/fonts/expressivas/ofissina/Ofissina-Regular.woff2') format('woff2'),
       url('/assets/fonts/expressivas/ofissina/Ofissina-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Bolupisang - Casual Universal */
@font-face {
  font-family: 'Bolupisang';
  src: url('/assets/fonts/expressivas/bolupisang/Bolupisang-Regular.woff2') format('woff2'),
       url('/assets/fonts/expressivas/bolupisang/Bolupisang-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* ========== CSS VARIABLES ========== */
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
}`}</pre>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-indigo-300">
                <h4 className="text-xl font-bold text-indigo-900 mb-4">🎨 Como usar no HTML/CSS:</h4>
                
                <div className="bg-slate-900 rounded-lg p-6 text-emerald-400 font-mono text-xs overflow-x-auto">
                  <pre>{`/* Importar no início do seu CSS principal */
@import url('./fonts.css');

/* Uso com variáveis CSS */
.brand-title {
  font-family: var(--font-brand);
  font-weight: 700;
}

.article-body {
  font-family: var(--font-editorial);
  font-weight: 400;
}

.ui-button {
  font-family: var(--font-ui);
  font-weight: 600;
}

.signature {
  font-family: var(--font-signature);
}

/* Ou uso direto */
h1.hero {
  font-family: 'Urbanist', sans-serif;
  font-weight: 900;
}

.regional-cartoon {
  font-family: 'Ofissina', cursive;
}

.playful-cta {
  font-family: 'Bolupisang', cursive;
}`}</pre>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 border-2 border-amber-300">
                <h4 className="font-bold text-amber-900 mb-2">⚠️ Importante: font-display: swap</h4>
                <p className="text-sm text-amber-800">
                  A propriedade <code className="bg-amber-200 px-2 py-1 rounded">font-display: swap</code> garante que o texto 
                  seja exibido com uma fonte alternativa enquanto a fonte customizada carrega, melhorando a performance.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Checklist Final */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-12 h-12 text-emerald-200" />
          <h2 className="text-4xl font-bold">✅ Checklist de Implementação</h2>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-8 border-2 border-emerald-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-4">Download & Organização:</h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-emerald-100">Baixei todas as 5 fontes Core do Google Fonts</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-emerald-100">Baixei Urbanist e Allura (Google Fonts)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-emerald-100">Encontrei/baixei Ofissina e Bolupisang</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-emerald-100">Converti todas para WOFF2/WOFF</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-emerald-100">Organizei em pastas (core/expressivas)</span>
              </label>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-4">Upload & Implementação:</h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-emerald-100">Fiz upload para o servidor/CDN</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-emerald-100">Criei arquivo fonts.css com @font-face</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-emerald-100">Importei fonts.css no CSS principal</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-emerald-100">Testei todas as 9 fontes no navegador</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-emerald-100">Documentei casos de uso no brand guidelines</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Catálogo Completo */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">📚 Catálogo Completo — 9 Fontes</h2>
        
        <div className="space-y-6">
          {/* Core */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">CORE (5 fontes)</h3>
            <div className="space-y-3">
              {fontesCore.map((fonte) => (
                <div key={fonte.nome} className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-200">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="font-bold text-emerald-900 text-lg mb-1">{fonte.nome}</div>
                      <div className="text-xs bg-emerald-600 text-white px-2 py-1 rounded inline-block mb-2">
                        {fonte.subcategoria}
                      </div>
                      <div className="text-sm text-emerald-700">
                        <strong>Pesos:</strong> {fonte.pesos}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-emerald-800 mb-2">
                        <strong>Quando usar:</strong> {fonte.quando}
                      </div>
                      <div className="text-xs text-emerald-700">
                        <strong>Arquivo:</strong> <code className="bg-emerald-200 px-2 py-1 rounded">{fonte.arquivo}</code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expressivas */}
          <div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">EXPRESSIVAS (4 fontes)</h3>
            <div className="space-y-3">
              {fontesExpressivas.map((fonte) => (
                <div key={fonte.nome} className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="font-bold text-purple-900 text-lg mb-1">{fonte.nome}</div>
                      <div className="text-xs bg-purple-600 text-white px-2 py-1 rounded inline-block mb-2">
                        {fonte.subcategoria}
                      </div>
                      <div className="text-sm text-purple-700">
                        <strong>Pesos:</strong> {fonte.pesos}
                      </div>
                      {!fonte.googleFonts && (
                        <div className="text-xs text-amber-700 mt-2 bg-amber-100 px-2 py-1 rounded">
                          ⚠️ Não disponível no Google Fonts
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-purple-800 mb-2">
                        <strong>Quando usar:</strong> {fonte.quando}
                      </div>
                      <div className="text-xs text-purple-700">
                        <strong>Arquivo:</strong> <code className="bg-purple-200 px-2 py-1 rounded">{fonte.arquivo}</code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
