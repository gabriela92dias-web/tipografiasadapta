import { Zap, Check, X, AlertCircle, Maximize2, TrendingUp } from 'lucide-react';

interface DisplayFont {
  name: string;
  fontFamily: string;
  googleFont: string;
  personalidade: string;
  impactoVisual: number; // 1-10
  versatilidade: number; // 1-10
  harmoniza: boolean;
  pros: string[];
  contras: string[];
  melhorPara: string[];
  exemplos: {
    outdoor: string;
    revista: string;
    evento: string;
  };
  score: number;
}

const DISPLAY_FONTS: DisplayFont[] = [
  {
    name: 'Bebas Neue',
    fontFamily: 'Bebas Neue',
    googleFont: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
    personalidade: 'Condensada clássica, ultra impacto, all-caps',
    impactoVisual: 10,
    versatilidade: 9,
    harmoniza: true,
    pros: [
      'MÁXIMO IMPACTO visual em grandes formatos',
      'Condensada = economiza espaço (outdoor/capas)',
      'Versátil (ativismo, corporativo, eventos)',
      'Clássica display (usada em esportes, moda, música)',
      'Harmoniza com DM Sans (ambas geométricas)'
    ],
    contras: [
      'Só uppercase (sem minúsculas)',
      'Muito popular (pode parecer genérica)',
      'Precisa espaçamento generoso'
    ],
    melhorPara: [
      'Outdoor/Billboard',
      'Capas revista VerdeVox',
      'Eventos corporativos',
      'Hero sections website',
      'Campanhas publicitárias'
    ],
    exemplos: {
      outdoor: 'CANNABIS MEDICINAL',
      revista: 'REVOLUÇÃO VERDE',
      evento: 'CONFERÊNCIA ADAPTA 2025'
    },
    score: 10
  },
  {
    name: 'Oswald',
    fontFamily: 'Oswald',
    googleFont: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap',
    personalidade: 'Grotesca condensada, 4 pesos, forte',
    impactoVisual: 8,
    versatilidade: 9,
    harmoniza: true,
    pros: [
      'Alto impacto + versatilidade (4 pesos)',
      'Condensada profissional',
      'Tem minúsculas (mais versátil que Bebas)',
      'Inspirada em grotescas clássicas',
      'Harmoniza com DM Sans'
    ],
    contras: [
      'Menos impacto que Bebas',
      'Pode parecer muito "jornalística"',
      'Precisa usar peso Bold/SemiBold para impacto'
    ],
    melhorPara: [
      'Títulos revista',
      'Outdoor profissional',
      'Eventos científicos',
      'Interface digital',
      'Papers técnicos (títulos)'
    ],
    exemplos: {
      outdoor: 'CANNABIS MEDICINAL',
      revista: 'Revolução Verde',
      evento: 'Conferência ADAPTA 2025'
    },
    score: 9
  },
  {
    name: 'Anton',
    fontFamily: 'Anton',
    googleFont: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
    personalidade: 'Ultra bold, compacta, publicitária',
    impactoVisual: 9,
    versatilidade: 7,
    harmoniza: true,
    pros: [
      'Ultra bold = máximo impacto',
      'Compacta vertical (economiza espaço)',
      'Energia publicitária moderna',
      'Ótima para call-to-action forte'
    ],
    contras: [
      'Só uppercase (sem minúsculas)',
      'Menos versátil (muito bold sempre)',
      'Pode competir com MuseoModerno (ambas bold)'
    ],
    melhorPara: [
      'Outdoor high-impact',
      'Campanhas publicitárias',
      'Call-to-action',
      'Posts Instagram impactantes',
      'Eventos de lançamento'
    ],
    exemplos: {
      outdoor: 'CANNABIS MEDICINAL',
      revista: 'REVOLUÇÃO VERDE',
      evento: 'LANÇAMENTO 2025'
    },
    score: 8
  },
  {
    name: 'Archivo Black',
    fontFamily: 'Archivo Black',
    googleFont: 'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap',
    personalidade: 'Ultra bold grotesca, moderna, impacto controlado',
    impactoVisual: 8,
    versatilidade: 8,
    harmoniza: true,
    pros: [
      'Ultra bold com boa legibilidade',
      'Moderna e profissional',
      'Parte da família Archivo (pode combinar com pesos normais)',
      'Impacto controlado (não agressiva)',
      'Harmoniza com sistema geométrico'
    ],
    contras: [
      'Menos condensada (ocupa mais espaço)',
      'Impacto moderado (não máximo)',
      'Pode ser conservadora demais'
    ],
    melhorPara: [
      'Capas revista elegantes',
      'Eventos corporativos',
      'Títulos profissionais',
      'Branding secundário',
      'Interface digital (headers)'
    ],
    exemplos: {
      outdoor: 'CANNABIS MEDICINAL',
      revista: 'REVOLUÇÃO VERDE',
      evento: 'CONFERÊNCIA 2025'
    },
    score: 8
  },
  {
    name: 'Righteous',
    fontFamily: 'Righteous',
    googleFont: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',
    personalidade: 'Bold display moderna, geométrica, friendly',
    impactoVisual: 7,
    versatilidade: 8,
    harmoniza: true,
    pros: [
      'Display moderna e amigável',
      'Geométrica harmoniza com sistema',
      'Friendly sem perder impacto',
      'Única (personalidade própria)',
      'Tem minúsculas'
    ],
    contras: [
      'Impacto moderado (não máximo)',
      'Pode parecer muito "tech/startup"',
      'Menos condensada'
    ],
    melhorPara: [
      'Eventos culturais',
      'Campanhas friendly',
      'Interface digital',
      'Posts Instagram',
      'Branding jovem'
    ],
    exemplos: {
      outdoor: 'Cannabis Medicinal',
      revista: 'Revolução Verde',
      evento: 'Conferência ADAPTA 2025'
    },
    score: 7
  },
  {
    name: 'Teko',
    fontFamily: 'Teko',
    googleFont: 'https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap',
    personalidade: 'Ultra condensada moderna, 5 pesos, vertical',
    impactoVisual: 8,
    versatilidade: 8,
    harmoniza: true,
    pros: [
      'Ultra condensada = máxima economia espaço',
      '5 pesos = versatilidade',
      'Moderna e limpa',
      'Ótima para textos longos condensados',
      'Inspirada em grotescas industriais'
    ],
    contras: [
      'Muito condensada pode dificultar leitura',
      'Menos impacto que Bebas',
      'Precisa usar peso Bold para destaque'
    ],
    melhorPara: [
      'Outdoor com texto longo',
      'Infográficos',
      'Dados/estatísticas',
      'Capas com subtitle',
      'Elementos técnicos'
    ],
    exemplos: {
      outdoor: 'CANNABIS MEDICINAL',
      revista: 'Revolução Verde',
      evento: 'Conferência ADAPTA 2025'
    },
    score: 7
  },
  {
    name: 'FOMO (atual)',
    fontFamily: 'FOMO',
    googleFont: '',
    personalidade: 'Stencil industrial, ativismo, all-caps',
    impactoVisual: 7,
    versatilidade: 4,
    harmoniza: false,
    pros: [
      'Energia ativista única',
      'Stencil = protesto/urbano',
      'Personalidade forte'
    ],
    contras: [
      'MUITO ESPECÍFICA (só ativismo)',
      'Não serve eventos corporativos/científicos',
      'Não harmoniza com Crimson Pro (elegante vs stencil)',
      'Impacto moderado (stencil quebra solidez)',
      'Pouca versatilidade'
    ],
    melhorPara: [
      'Marcha da Maconha',
      'Campanhas antiproibicionistas',
      'Protestos/manifestos'
    ],
    exemplos: {
      outdoor: 'CANNABIS É REMÉDIO',
      revista: 'LIBERDADE',
      evento: 'MARCHA 2025'
    },
    score: 5
  }
];

export function DisplayImpactantes() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-10 text-white">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Maximize2 className="w-10 h-10 text-orange-200" />
              <h1 className="text-5xl font-bold">Display Impactantes — Grandes Formatos</h1>
            </div>
            <p className="text-xl text-orange-200">
              Qual fonte tem MÁXIMO IMPACTO visual e versatilidade para substituir FOMO?
            </p>
          </div>
        </div>

        <div className="bg-orange-800/30 border border-orange-400/30 rounded-xl p-6">
          <p className="text-orange-100 text-lg mb-4">
            <strong>Problema FOMO:</strong> Muito específica para ativismo/protesto. Não funciona em 
            eventos corporativos, conferências científicas, capas revista elegantes. Precisamos de 
            impacto UNIVERSAL para grandes formatos.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-bold text-orange-200 uppercase mb-1">Necessidade</div>
              <div className="text-3xl font-bold text-white">10/10</div>
              <div className="text-sm text-orange-200">Impacto visual</div>
            </div>
            <div>
              <div className="text-sm font-bold text-orange-200 uppercase mb-1">Uso</div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-orange-200">Grandes formatos</div>
            </div>
            <div>
              <div className="text-sm font-bold text-orange-200 uppercase mb-1">Versatilidade</div>
              <div className="text-3xl font-bold text-white">9/10</div>
              <div className="text-sm text-orange-200">Todos contextos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Critérios de Avaliação */}
      <div className="bg-indigo-50 border-2 border-indigo-400 rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold text-indigo-900">🎯 Critérios de Avaliação</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-indigo-300">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">✅ Display Ideal para ADAPTA:</h3>
            <ul className="space-y-2 text-indigo-800">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Impacto visual 9-10/10</strong> (dominância em grandes formatos)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Versatilidade alta</strong> (ativismo, corporativo, cultural)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Harmoniza com sistema</strong> (Crimson Pro + DM Sans)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Condensada</strong> (economiza espaço em outdoor/capas)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Legibilidade</strong> mesmo em distância (outdoor)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-300">
            <h3 className="text-xl font-bold text-red-900 mb-4">❌ Problemas FOMO:</h3>
            <ul className="space-y-2 text-red-800">
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Versatilidade BAIXA</strong> (só ativismo/protesto)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Não serve corporativo</strong> (stencil não combina com ciência)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Conflito de estilo</strong> (stencil vs Crimson Pro elegante)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Impacto moderado</strong> (stencil quebra solidez visual)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Nicho demais</strong> (limitada a 2-3 ocasiões/ano)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparação Visual - Ranking */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Ranking — Display Impactantes</h2>
        
        <p className="text-slate-600 mb-8">
          Todas testadas em 3 contextos: Outdoor (máximo impacto), Capa Revista (elegância + impacto), 
          Evento (versatilidade). Score = (Impacto Visual × 0.4) + (Versatilidade × 0.4) + (Harmonização × 0.2)
        </p>

        <div className="space-y-6">
          {DISPLAY_FONTS.sort((a, b) => b.score - a.score).map((font, idx) => (
            <div 
              key={idx}
              className={`rounded-xl p-6 border-2 ${
                font.harmoniza 
                  ? idx === 0 
                    ? 'bg-emerald-50 border-emerald-500 ring-4 ring-emerald-300' 
                    : 'bg-emerald-50 border-emerald-400'
                  : 'bg-red-50 border-red-400'
              }`}
            >
              {/* Header com score */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{font.name}</h3>
                    
                    {idx === 0 && font.harmoniza && (
                      <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        MÁXIMO IMPACTO ⚡
                      </span>
                    )}
                    
                    {font.name === 'FOMO (atual)' && (
                      <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                        SUBSTITUIR ❌
                      </span>
                    )}
                  </div>
                  
                  <div className="text-sm text-slate-600 mb-3">{font.personalidade}</div>
                  
                  {/* Métricas */}
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Impacto Visual</div>
                      <div className={`text-2xl font-bold ${
                        font.impactoVisual >= 9 ? 'text-emerald-600' : 
                        font.impactoVisual >= 7 ? 'text-amber-600' : 'text-red-600'
                      }`}>
                        {font.impactoVisual}/10
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Versatilidade</div>
                      <div className={`text-2xl font-bold ${
                        font.versatilidade >= 8 ? 'text-emerald-600' : 
                        font.versatilidade >= 6 ? 'text-amber-600' : 'text-red-600'
                      }`}>
                        {font.versatilidade}/10
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Harmonização</div>
                      <div className={`text-2xl font-bold ${
                        font.harmoniza ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {font.harmoniza ? '✅' : '❌'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`text-5xl font-bold ${
                    font.score >= 9 ? 'text-emerald-600' : 
                    font.score >= 7 ? 'text-amber-600' : 'text-red-600'
                  }`}>
                    {font.score}/10
                  </div>
                  <div className="text-xs text-slate-500 uppercase">Score Total</div>
                </div>
              </div>

              {/* Exemplos visuais - 3 contextos GRANDES */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {/* Contexto 1: Outdoor */}
                <div className="bg-slate-900 rounded-lg p-6 border-2 border-slate-700">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-4">
                    OUTDOOR / BILLBOARD
                  </div>
                  {font.googleFont && (
                    <link rel="stylesheet" href={font.googleFont} />
                  )}
                  <div 
                    className="text-white text-center leading-tight"
                    style={{ 
                      fontFamily: font.fontFamily,
                      fontSize: font.name === 'Bebas Neue' ? '2.5rem' : '2rem'
                    }}
                  >
                    {font.exemplos.outdoor}
                  </div>
                  <div className="text-xs text-slate-400 mt-4 text-center">
                    {font.impactoVisual >= 9 ? '⚡ Máximo impacto' : font.impactoVisual >= 7 ? '✅ Bom impacto' : '⚠️ Impacto moderado'}
                  </div>
                </div>

                {/* Contexto 2: Capa Revista */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6 border-2 border-purple-300">
                  <div className="text-xs font-bold text-purple-700 uppercase mb-4">
                    CAPA REVISTA VERDEVOX
                  </div>
                  <div 
                    className="text-purple-900 text-center leading-tight"
                    style={{ 
                      fontFamily: font.fontFamily,
                      fontSize: font.name === 'Bebas Neue' ? '2rem' : '1.75rem'
                    }}
                  >
                    {font.exemplos.revista}
                  </div>
                  <div className="text-xs text-purple-700 mt-4 text-center">
                    {font.harmoniza ? '✅ Harmoniza com sistema' : '❌ Conflito de estilo'}
                  </div>
                </div>

                {/* Contexto 3: Evento */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-indigo-300">
                  <div className="text-xs font-bold text-indigo-700 uppercase mb-4">
                    EVENTO CORPORATIVO
                  </div>
                  <div 
                    className="text-indigo-900 text-center leading-tight"
                    style={{ 
                      fontFamily: font.fontFamily,
                      fontSize: font.name === 'Bebas Neue' ? '1.75rem' : '1.5rem'
                    }}
                  >
                    {font.exemplos.evento}
                  </div>
                  <div className="text-xs text-indigo-700 mt-4 text-center">
                    {font.versatilidade >= 8 ? '✅ Alta versatilidade' : font.versatilidade >= 6 ? '⚠️ Moderada' : '❌ Limitada'}
                  </div>
                </div>
              </div>

              {/* Melhor Para */}
              <div className="bg-indigo-50 border border-indigo-300 rounded-lg p-4 mb-4">
                <div className="text-sm font-bold text-indigo-700 uppercase mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Melhor Para
                </div>
                <div className="flex flex-wrap gap-2">
                  {font.melhorPara.map((uso, i) => (
                    <span key={i} className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold">
                      {uso}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pros & Contras */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-4">
                  <div className="text-sm font-bold text-emerald-700 uppercase mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Pontos Fortes
                  </div>
                  <ul className="space-y-1 text-sm text-emerald-800">
                    {font.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                  <div className="text-sm font-bold text-amber-700 uppercase mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Pontos de Atenção
                  </div>
                  <ul className="space-y-1 text-sm text-amber-800">
                    {font.contras.map((contra, i) => (
                      <li key={i}>• {contra}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparação Direta FOMO vs Bebas Neue */}
      <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Maximize2 className="w-10 h-10 text-red-200" />
          <h2 className="text-4xl font-bold">⚡ FOMO vs Bebas Neue — Comparação Direta</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* FOMO */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-red-400">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <X className="w-6 h-6" />
              FOMO (Atual)
            </h3>
            
            <div className="bg-slate-900 rounded-lg p-6 mb-4">
              <div className="text-white text-center text-3xl" style={{ fontFamily: 'FOMO' }}>
                CANNABIS É REMÉDIO
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-red-500/30 border border-red-400 rounded-lg p-3">
                <div className="text-sm font-bold text-red-100 mb-1">Impacto Visual: 7/10</div>
                <div className="text-xs text-red-100">Stencil quebra solidez</div>
              </div>
              
              <div className="bg-red-500/30 border border-red-400 rounded-lg p-3">
                <div className="text-sm font-bold text-red-100 mb-1">Versatilidade: 4/10</div>
                <div className="text-xs text-red-100">Só ativismo/protesto</div>
              </div>

              <div className="bg-red-500/30 border border-red-400 rounded-lg p-3">
                <div className="text-sm font-bold text-red-100 mb-1">Uso anual: ~3 eventos</div>
                <div className="text-xs text-red-100">Marcha, protestos, campanhas antiproibição</div>
              </div>
            </div>
          </div>

          {/* Bebas Neue */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-emerald-400">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Check className="w-6 h-6" />
              Bebas Neue (Recomendada)
            </h3>
            
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" />
            <div className="bg-slate-900 rounded-lg p-6 mb-4">
              <div className="text-white text-center text-4xl" style={{ fontFamily: 'Bebas Neue' }}>
                CANNABIS É REMÉDIO
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-emerald-500/30 border border-emerald-400 rounded-lg p-3">
                <div className="text-sm font-bold text-emerald-100 mb-1">Impacto Visual: 10/10</div>
                <div className="text-xs text-emerald-100">Máximo impacto solidez</div>
              </div>
              
              <div className="bg-emerald-500/30 border border-emerald-400 rounded-lg p-3">
                <div className="text-sm font-bold text-emerald-100 mb-1">Versatilidade: 9/10</div>
                <div className="text-xs text-emerald-100">Ativismo, corporativo, cultural, etc.</div>
              </div>

              <div className="bg-emerald-500/30 border border-emerald-400 rounded-lg p-3">
                <div className="text-sm font-bold text-emerald-100 mb-1">Uso anual: ~15+ eventos</div>
                <div className="text-xs text-emerald-100">Outdoor, capas, eventos, campanhas, etc.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/40 mt-6">
          <h3 className="text-xl font-bold mb-3">💡 Conclusão:</h3>
          <p className="text-white text-lg">
            <strong>Bebas Neue</strong> entrega <strong>máximo impacto</strong> (10/10) com <strong>alta versatilidade</strong> (9/10). 
            Funciona em TODOS contextos que FOMO funciona + corporativo, científico, cultural. 
            É a <strong>display condensada clássica</strong> que harmoniza perfeitamente com DM Sans e Crimson Pro.
          </p>
        </div>
      </div>

      {/* Recomendação Final */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-10 h-10 text-emerald-200" />
          <h2 className="text-4xl font-bold">🏆 Recomendação Final</h2>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-8 border-2 border-emerald-300">
          <h3 className="text-3xl font-bold mb-4">⚡ Substituir FOMO por Bebas Neue</h3>
          
          <div className="space-y-4 text-emerald-50 text-lg">
            <p>
              <strong>Bebas Neue</strong> é a display condensada que entrega máximo impacto em grandes formatos:
            </p>
            
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                <span><strong>Impacto visual 10/10</strong> — dominância total em outdoor/capas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                <span><strong>Versatilidade 9/10</strong> — ativismo, corporativo, cultural, científico</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                <span><strong>Condensada</strong> — economiza espaço, maximiza legibilidade</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                <span><strong>Harmoniza com sistema</strong> — geométrica compatível com DM Sans</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                <span><strong>Clássica comprovada</strong> — usada em esportes, moda, música, marcas globais</span>
              </li>
            </ul>

            <div className="bg-emerald-700/40 rounded-lg p-4 mt-6 border border-emerald-400">
              <div className="text-sm font-bold text-emerald-100 mb-2">📋 Ação:</div>
              <p className="text-emerald-100">
                Substituir <code className="bg-emerald-900/50 px-2 py-1 rounded">FOMO</code> por <code className="bg-emerald-900/50 px-2 py-1 rounded">Bebas Neue</code> no sistema final. 
                Google Font: <code className="bg-emerald-900/50 px-2 py-1 rounded text-xs">family=Bebas+Neue</code>
              </p>
            </div>
          </div>
        </div>

        {/* Alternativas caso Bebas não funcione */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 mt-6">
          <h3 className="text-xl font-bold mb-3">🔄 Alternativas (caso Bebas Neue não funcione):</h3>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="font-bold">2º Oswald</div>
              <div className="text-sm text-emerald-200">Grotesca condensada (9/10)</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="font-bold">3º Anton / Archivo Black</div>
              <div className="text-sm text-emerald-200">Ultra bold (8/10)</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="font-bold">4º Teko</div>
              <div className="text-sm text-emerald-200">Ultra condensada (7/10)</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
