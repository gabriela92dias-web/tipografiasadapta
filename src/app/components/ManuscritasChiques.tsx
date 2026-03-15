import { Check, X, AlertCircle, Sparkles, Heart } from 'lucide-react';

interface ManuscritaOption {
  name: string;
  fontFamily: string;
  googleFont: string;
  personalidade: string;
  harmoniza: boolean;
  pros: string[];
  contras: string[];
  exemplos: {
    medico: string;
    fundador: string;
    carta: string;
  };
  score: number;
}

const MANUSCRITAS_CHIQUES: ManuscritaOption[] = [
  {
    name: 'Allura',
    fontFamily: 'Allura',
    googleFont: 'https://fonts.googleapis.com/css2?family=Allura&display=swap',
    personalidade: 'Elegante, loops sofisticados, fluida',
    harmoniza: true,
    pros: [
      'Muito sofisticada e elegante',
      'Harmoniza com Crimson Pro (ambas clássicas)',
      'Legível em tamanhos médios',
      'Transmite profissionalismo warm'
    ],
    contras: [
      'Loops muito elaborados podem dificultar leitura pequena',
      'Precisa espaço (não compacta)'
    ],
    exemplos: {
      medico: 'Dr. Carlos Mendes, CRM 12345',
      fundador: 'Com carinho, Maria Oliveira',
      carta: 'Obrigado por fazer parte desta jornada.'
    },
    score: 9
  },
  {
    name: 'Great Vibes',
    fontFamily: 'Great Vibes',
    googleFont: 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap',
    personalidade: 'Clássica, formal, menos playful',
    harmoniza: true,
    pros: [
      'Manuscrita clássica profissional',
      'Ótima legibilidade',
      'Estilo formal que transmite confiança',
      'Compacta (economiza espaço)'
    ],
    contras: [
      'Pode ser "genérica" (muito usada em convites)',
      'Menos personalidade única'
    ],
    exemplos: {
      medico: 'Dr. Carlos Mendes, CRM 12345',
      fundador: 'Com carinho, Maria Oliveira',
      carta: 'Obrigado por fazer parte desta jornada.'
    },
    score: 8
  },
  {
    name: 'Parisienne',
    fontFamily: 'Parisienne',
    googleFont: 'https://fonts.googleapis.com/css2?family=Parisienne&display=swap',
    personalidade: 'Francesa elegante, vertical, sofisticada',
    harmoniza: true,
    pros: [
      'Elegância francesa sofisticada',
      'Vertical elegante (não muito inclinada)',
      'Única e memorável',
      'Transmite luxo discreto'
    ],
    contras: [
      'Pode ser difícil ler em tamanhos pequenos',
      'Estilo muito específico (pode não servir todos contextos)'
    ],
    exemplos: {
      medico: 'Dr. Carlos Mendes, CRM 12345',
      fundador: 'Com carinho, Maria Oliveira',
      carta: 'Obrigado por fazer parte desta jornada.'
    },
    score: 8
  },
  {
    name: 'Alex Brush',
    fontFamily: 'Alex Brush',
    googleFont: 'https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap',
    personalidade: 'Brush script sofisticada, orgânica',
    harmoniza: true,
    pros: [
      'Brush natural e orgânica',
      'Sofisticada mas não rígida',
      'Combina bem com conceito cannabis (orgânico)',
      'Boa legibilidade'
    ],
    contras: [
      'Pode ser casual demais para contextos formais',
      'Estilo brush pode competir com energia craft'
    ],
    exemplos: {
      medico: 'Dr. Carlos Mendes, CRM 12345',
      fundador: 'Com carinho, Maria Oliveira',
      carta: 'Obrigado por fazer parte desta jornada.'
    },
    score: 7
  },
  {
    name: 'Tangerine',
    fontFamily: 'Tangerine',
    googleFont: 'https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap',
    personalidade: 'Delicada, leve, 2 pesos disponíveis',
    harmoniza: true,
    pros: [
      '2 pesos (regular + bold) = versatilidade',
      'Delicada e leve',
      'Ótima para assinaturas discretas',
      'Economiza espaço'
    ],
    contras: [
      'Muito delicada (pode perder impacto)',
      'Regular é muito leve (precisa usar bold)',
      'Menos personalidade única'
    ],
    exemplos: {
      medico: 'Dr. Carlos Mendes, CRM 12345',
      fundador: 'Com carinho, Maria Oliveira',
      carta: 'Obrigado por fazer parte desta jornada.'
    },
    score: 7
  },
  {
    name: 'Mayonice (atual)',
    fontFamily: 'Mayonice',
    googleFont: '',
    personalidade: 'Manuscrita pessoal, única, assinatura',
    harmoniza: false,
    pros: [
      'Já detectada no sistema',
      'Personalidade única'
    ],
    contras: [
      'Muito casual/playful',
      'Não harmoniza com Crimson Pro (elegância clássica)',
      'Difícil legibilidade em pequeno'
    ],
    exemplos: {
      medico: 'Dr. Carlos Mendes, CRM 12345',
      fundador: 'Com carinho, Maria Oliveira',
      carta: 'Obrigado por fazer parte desta jornada.'
    },
    score: 5
  }
];

export function ManuscritasChiques() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl p-10 text-white">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-10 h-10 text-pink-200" />
              <h1 className="text-5xl font-bold">Manuscritas Chiques — Alternativas</h1>
            </div>
            <p className="text-xl text-pink-200">
              Qual fonte manuscrita elegante harmoniza melhor com o sistema ADAPTA?
            </p>
          </div>
        </div>

        <div className="bg-pink-800/30 border border-pink-400/30 rounded-xl p-6">
          <p className="text-pink-100 text-lg mb-4">
            <strong>Questão:</strong> Mayonice funciona para assinaturas profissionais? 
            Ou existe alternativa mais chique que harmonize melhor com Crimson Pro + DM Sans?
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-bold text-pink-200 uppercase mb-1">Sistema Core</div>
              <div className="text-2xl font-bold text-white">5 fontes</div>
              <div className="text-sm text-pink-200">Crimson Pro + DM</div>
            </div>
            <div>
              <div className="text-sm font-bold text-pink-200 uppercase mb-1">Manuscrita Atual</div>
              <div className="text-2xl font-bold text-white">Mayonice</div>
              <div className="text-sm text-pink-200">Muito casual?</div>
            </div>
            <div>
              <div className="text-sm font-bold text-pink-200 uppercase mb-1">Alternativas</div>
              <div className="text-2xl font-bold text-white">5 opções</div>
              <div className="text-sm text-pink-200">Google Fonts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Critérios de Harmonização */}
      <div className="bg-indigo-50 border-2 border-indigo-400 rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold text-indigo-900">🎯 O que significa "harmonizar"?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-indigo-300">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">✅ Harmoniza com Sistema ADAPTA:</h3>
            <ul className="space-y-2 text-indigo-800">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Elegância clássica</strong> (combina com Crimson Pro serif)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Profissionalismo warm</strong> (medicinal + humano)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Legibilidade</strong> em tamanhos pequenos (assinaturas)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Sofisticação discreta</strong> (não competir com MuseoModerno)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-300">
            <h3 className="text-xl font-bold text-red-900 mb-4">❌ Não harmoniza:</h3>
            <ul className="space-y-2 text-red-800">
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Muito playful/casual</strong> (quebra credibilidade médica)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Ornamentação excessiva</strong> (competir com brand font)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Ilegível</strong> em contextos profissionais</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span><strong>Estilo conflitante</strong> (ex: brush craft vs serif clássica)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparação Visual - Ranking */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Ranking — Manuscritas Chiques</h2>
        
        <p className="text-slate-600 mb-8">
          Comparação visual lado-a-lado. Todas as fontes testadas nos 3 contextos principais: 
          assinatura médica, mensagem fundador, carta de fim de ano.
        </p>

        <div className="space-y-6">
          {MANUSCRITAS_CHIQUES.sort((a, b) => b.score - a.score).map((font, idx) => (
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
                        <Sparkles className="w-4 h-4" />
                        RECOMENDADA ⭐
                      </span>
                    )}
                    
                    {font.name === 'Mayonice (atual)' && (
                      <span className="bg-slate-600 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                        ATUAL
                      </span>
                    )}
                  </div>
                  
                  <div className="text-sm text-slate-600 mb-2">{font.personalidade}</div>
                </div>

                <div className="text-right">
                  <div className={`text-5xl font-bold ${
                    font.score >= 8 ? 'text-emerald-600' : 
                    font.score >= 6 ? 'text-amber-600' : 'text-red-600'
                  }`}>
                    {font.score}/10
                  </div>
                  <div className="text-xs text-slate-500 uppercase">Score</div>
                </div>
              </div>

              {/* Exemplos visuais - 3 contextos */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {/* Contexto 1: Médico */}
                <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
                  <div className="text-xs font-bold text-slate-500 uppercase mb-3">
                    Assinatura Médica
                  </div>
                  {font.googleFont && (
                    <link rel="stylesheet" href={font.googleFont} />
                  )}
                  <div 
                    className="text-lg mb-2"
                    style={{ fontFamily: font.fontFamily }}
                  >
                    {font.exemplos.medico}
                  </div>
                  <div className="text-xs text-slate-600">
                    {font.harmoniza ? '✅ Profissional' : '❌ Muito casual'}
                  </div>
                </div>

                {/* Contexto 2: Fundador */}
                <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
                  <div className="text-xs font-bold text-slate-500 uppercase mb-3">
                    Mensagem Fundador
                  </div>
                  <div 
                    className="text-lg mb-2"
                    style={{ fontFamily: font.fontFamily }}
                  >
                    {font.exemplos.fundador}
                  </div>
                  <div className="text-xs text-slate-600">
                    {font.harmoniza ? '✅ Warm + profissional' : '❌ Não transmite confiança'}
                  </div>
                </div>

                {/* Contexto 3: Carta */}
                <div className="bg-white rounded-lg p-4 border-2 border-slate-200">
                  <div className="text-xs font-bold text-slate-500 uppercase mb-3">
                    Carta de Fim de Ano
                  </div>
                  <div 
                    className="text-base mb-2"
                    style={{ fontFamily: font.fontFamily }}
                  >
                    {font.exemplos.carta}
                  </div>
                  <div className="text-xs text-slate-600">
                    {font.harmoniza ? '✅ Elegante' : '❌ Incompatível'}
                  </div>
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

      {/* Comparação Direta com Sistema ADAPTA */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-10 h-10 text-indigo-200" />
          <h2 className="text-4xl font-bold">🎨 Harmonização com Sistema ADAPTA</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Comparação 1: Allura */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/30">
            <h3 className="text-2xl font-bold mb-4">✅ Allura (Recomendada)</h3>
            
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xs text-indigo-200 mb-1">Crimson Pro (Core)</div>
                <div className="text-lg" style={{ fontFamily: 'Crimson Pro' }}>
                  Cannabis medicinal de qualidade
                </div>
              </div>
              
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Allura&display=swap" />
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xs text-indigo-200 mb-1">Allura (Manuscrita)</div>
                <div className="text-lg" style={{ fontFamily: 'Allura' }}>
                  Com carinho, Equipe ADAPTA
                </div>
              </div>

              <div className="bg-emerald-500/30 border border-emerald-400 rounded-lg p-3 mt-4">
                <div className="text-sm font-bold text-emerald-100">
                  ✅ Harmonizam perfeitamente — ambas elegantes e clássicas
                </div>
              </div>
            </div>
          </div>

          {/* Comparação 2: Mayonice */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/30">
            <h3 className="text-2xl font-bold mb-4">⚠️ Mayonice (Atual)</h3>
            
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xs text-indigo-200 mb-1">Crimson Pro (Core)</div>
                <div className="text-lg" style={{ fontFamily: 'Crimson Pro' }}>
                  Cannabis medicinal de qualidade
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xs text-indigo-200 mb-1">Mayonice (Manuscrita)</div>
                <div className="text-lg" style={{ fontFamily: 'Mayonice' }}>
                  Com carinho, Equipe ADAPTA
                </div>
              </div>

              <div className="bg-red-500/30 border border-red-400 rounded-lg p-3 mt-4">
                <div className="text-sm font-bold text-red-100">
                  ❌ Conflito de estilo — Crimson é formal, Mayonice é casual
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recomendação Final */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-10 h-10 text-emerald-200" />
          <h2 className="text-4xl font-bold">💡 Recomendação Final</h2>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-8 border-2 border-emerald-300">
          <h3 className="text-3xl font-bold mb-4">🏆 Substituir Mayonice por Allura</h3>
          
          <div className="space-y-4 text-emerald-50 text-lg">
            <p>
              <strong>Allura</strong> é a manuscrita chique que melhor harmoniza com o sistema ADAPTA:
            </p>
            
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                <span>Elegância clássica compatível com <strong>Crimson Pro</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                <span>Profissionalismo warm (medicinal + humano)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                <span>Serve assinaturas médicas, mensagens de fundadores, cartas VIP</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                <span>Sofisticada sem competir com <strong>MuseoModerno</strong></span>
              </li>
            </ul>

            <div className="bg-emerald-700/40 rounded-lg p-4 mt-6 border border-emerald-400">
              <div className="text-sm font-bold text-emerald-100 mb-2">📋 Ação:</div>
              <p className="text-emerald-100">
                Substituir <code className="bg-emerald-900/50 px-2 py-1 rounded">Mayonice</code> por <code className="bg-emerald-900/50 px-2 py-1 rounded">Allura</code> no sistema final. 
                Google Font: <code className="bg-emerald-900/50 px-2 py-1 rounded text-xs">family=Allura</code>
              </p>
            </div>
          </div>
        </div>

        {/* Alternativas caso Allura não funcione */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 mt-6">
          <h3 className="text-xl font-bold mb-3">🔄 Alternativas (caso Allura não funcione):</h3>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="font-bold">2º Great Vibes</div>
              <div className="text-sm text-emerald-200">Clássica formal (8/10)</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="font-bold">3º Parisienne</div>
              <div className="text-sm text-emerald-200">Francesa elegante (8/10)</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="font-bold">4º Alex Brush</div>
              <div className="text-sm text-emerald-200">Brush orgânica (7/10)</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
