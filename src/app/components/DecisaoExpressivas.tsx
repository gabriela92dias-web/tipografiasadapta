import { Sparkles, Check, AlertCircle, Heart, Zap, Globe, Mic, User, ArrowRight, Calendar, PartyPopper, Megaphone, Users } from 'lucide-react';

interface ExpressivaCandidata {
  name: string;
  status: 'detectada' | 'nao-detectada';
  categoria: string;
  personalidade: string;
  momentosDeUso: string[];
  contextos: string[];
  exemplosReais: string[];
  exemplo: string;
  fontFamily: string;
  unicidade: string;
}

const CANDIDATAS: ExpressivaCandidata[] = [
  {
    name: 'FOMO',
    status: 'detectada',
    categoria: 'Ativismo & Impacto',
    personalidade: 'Energética, stencil, industrial, all-caps',
    momentosDeUso: [
      '🗓️ Dia da Luta Antiproibicionista',
      '🗓️ Marcha da Maconha',
      '🗓️ Campanhas de descriminalização',
      '🗓️ Manifestos políticos',
      '🗓️ Greves/protestos relacionados'
    ],
    contextos: [
      'Outdoors políticos',
      'Cartazes de protesto',
      'Posts ativismo Instagram',
      'Call-to-action urgente',
      'Eventos políticos/manifestações'
    ],
    exemplosReais: [
      'CANNABIS É REMÉDIO, NÃO CRIME',
      'LIBERDADE PARA CULTIVAR',
      'BASTA DE PROIBIÇÃO'
    ],
    exemplo: 'CANNABIS É REMÉDIO',
    fontFamily: 'FOMO',
    unicidade: '✅ CONFIRMADA — Única com energia stencil/protesto'
  },
  {
    name: 'Allura',
    status: 'nao-detectada',
    categoria: 'Manuscrita Chique',
    personalidade: 'Elegante, loops sofisticados, clássica',
    momentosDeUso: [
      '🗓️ Assinaturas médicas profissionais',
      '🗓️ Mensagens de fundadores',
      '🗓️ Cartas de fim de ano',
      '🗓️ Convites VIP/corporativos',
      '🗓️ Notas editoriais revista VerdeVox'
    ],
    contextos: [
      'Assinaturas de cartas formais',
      'Mensagens pessoais liderança',
      'Notas do editor',
      'Convites exclusivos',
      'Agradecimentos institucionais'
    ],
    exemplosReais: [
      'Dr. Carlos Mendes, CRM 12345',
      'Com carinho, Maria Oliveira',
      'Obrigado por fazer parte desta jornada.'
    ],
    exemplo: 'Com carinho, Equipe ADAPTA',
    fontFamily: 'Allura',
    unicidade: '✅ CONFIRMADA — Substitui Mayonice, harmoniza com Crimson Pro'
  },
  {
    name: 'Urbanist',
    status: 'detectada',
    categoria: 'Display Moderno',
    personalidade: 'Geométrica cosmopolita, versátil, 18 pesos',
    momentosDeUso: [
      '🗓️ Lançamento de produtos',
      '🗓️ Eventos corporativos',
      '🗓️ Conferências científicas',
      '🗓️ Capas revista VerdeVox',
      '🗓️ Campanhas outdoor (sempre)'
    ],
    contextos: [
      'Hero sections site',
      'Títulos grandes',
      'Outdoor/mídia externa',
      'Eventos formais',
      'Campanhas publicitárias',
      'Capas revista'
    ],
    exemplosReais: [
      'REVOLUÇÃO VERDE',
      'ADAPTA 2025: CIÊNCIA & CUIDADO',
      'CONFERÊNCIA CANNABIS MEDICINAL'
    ],
    exemplo: 'REVOLUÇÃO VERDE',
    fontFamily: 'Urbanist',
    unicidade: '✅ CONFIRMADA — Display versátil 18 pesos, cosmopolita/moderna'
  },
  {
    name: 'Ofissina',
    status: 'detectada',
    categoria: 'Brazilidade Autêntica',
    personalidade: 'Regional, brasileira, autêntica, orgânica',
    momentosDeUso: [
      '🗓️ 7 de Setembro (independência BR)',
      '🗓️ Festas Juninas (eventos regionais)',
      '🗓️ Eventos locais/comunidade',
      '🗓️ Matérias sobre cultivo brasileiro',
      '🗓️ Parcerias com produtores locais'
    ],
    contextos: [
      'Conteúdo regional/local',
      'Histórias brasileiras específicas',
      'Eventos de comunidade',
      'Parcerias locais',
      'Matérias culturais BR'
    ],
    exemplosReais: [
      'Da terra à cura: jornada brasileira',
      'Cultivado com amor em Minas Gerais',
      'Raízes da nossa terra'
    ],
    exemplo: 'Da terra à cura: jornada brasileira',
    fontFamily: 'Ofissina',
    unicidade: '⚠️ DISCUTÍVEL — Bolupisang também é orgânica/artesanal. Qual usar quando?'
  },
  {
    name: 'Bolupisang',
    status: 'detectada',
    categoria: 'Craft Artesanal',
    personalidade: 'Playful, artesanal, craft, 6 alternativas por letra',
    momentosDeUso: [
      '🗓️ Workshops/oficinas',
      '🗓️ Eventos educativos informais',
      '🗓️ Lançamento linha craft/artesanal',
      '🗓️ Feiras/mercados locais',
      '🗓️ Embalagens produtos artesanais'
    ],
    contextos: [
      'Embalagens craft',
      'Produtos artesanais',
      'Workshops',
      'Eventos informais',
      'Materiais educativos playful'
    ],
    exemplosReais: [
      'Workshop Cultivo em Casa',
      'Feira Orgânica ADAPTA',
      'Edição Artesanal Limitada'
    ],
    exemplo: 'Hello World',
    fontFamily: 'Bolupisang',
    unicidade: '⚠️ DISCUTÍVEL — Ofissina também é orgânica/brasileira. Quando usar qual?'
  }
];

const QUESTOES_DECISAO = [
  {
    titulo: 'FOMO vs Urbanist — Outdoor/Evento?',
    dilema: 'Ambas podem ser display em outdoors/eventos. Quando usar qual?',
    resposta: 'FOMO = eventos POLÍTICOS/ativistas. Urbanist = eventos CORPORATIVOS/científicos.',
    decisao: '✅ MANTER AMBAS',
    status: 'resolvido',
    color: 'emerald'
  },
  {
    titulo: 'Cause vs Nunito — Depoimentos/Warmth?',
    dilema: 'Cause manuscrita emocional vs Nunito friendly. Redundância?',
    resposta: 'NUNITO (Core) resolve warmth com melhor legibilidade. Cause = manuscrita, difícil de ler.',
    decisao: '✅ ELIMINAR CAUSE',
    status: 'resolvido',
    color: 'emerald'
  },
  {
    titulo: 'Mayonice vs Allura — Manuscrita Chique?',
    dilema: 'Mayonice atual vs Allura (Google Fonts). Qual harmoniza melhor com sistema?',
    resposta: 'ALLURA harmoniza perfeitamente com Crimson Pro (elegância clássica). Mayonice = muito casual, não combina com serif elegante.',
    decisao: '✅ SUBSTITUIR Mayonice → Allura',
    status: 'resolvido',
    color: 'emerald'
  },
  {
    titulo: 'Ofissina vs Bolupisang — Orgânica/Craft?',
    dilema: 'Ambas orgânicas, artesanais, brasileiras. Overlap?',
    resposta: 'Ofissina = brazilidade CULTURAL (eventos locais). Bolupisang = craft ARTESANAL (produtos/workshops).',
    decisao: '⚠️ DECIDIR — Precisa das duas?',
    status: 'pendente',
    color: 'amber'
  }
];

const CALENDARIO_EXEMPLO = [
  {
    mes: 'Janeiro',
    eventos: [
      { nome: 'Lançamento Produto 2025', fonte: 'Urbanist', tipo: 'corporativo' }
    ]
  },
  {
    mes: 'Março',
    eventos: [
      { nome: 'Dia Mundial da Saúde Mental', fonte: 'Nunito', tipo: 'emocional' },
      { nome: 'Depoimentos de Pacientes', fonte: 'Nunito', tipo: 'friendly-warm' }
    ]
  },
  {
    mes: 'Maio',
    eventos: [
      { nome: 'Marcha da Maconha', fonte: 'FOMO', tipo: 'ativismo' }
    ]
  },
  {
    mes: 'Junho',
    eventos: [
      { nome: 'Festa Junina Comunitária', fonte: 'Ofissina', tipo: 'regional' },
      { nome: 'Workshop Cultivo', fonte: 'Bolupisang', tipo: 'craft' }
    ]
  },
  {
    mes: 'Setembro',
    eventos: [
      { nome: '7 de Setembro (Independência)', fonte: 'Ofissina', tipo: 'regional' }
    ]
  },
  {
    mes: 'Novembro',
    eventos: [
      { nome: 'Conferência Cannabis Científica', fonte: 'Urbanist', tipo: 'corporativo' }
    ]
  },
  {
    mes: 'Dezembro',
    eventos: [
      { nome: 'Mensagens de Fim de Ano', fonte: 'Nunito', tipo: 'friendly-warm' }
    ]
  }
];

export function DecisaoExpressivas() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 text-white">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-10 h-10 text-purple-200" />
              <h1 className="text-5xl font-bold">Expressivas = Não Improvisar</h1>
            </div>
            <p className="text-xl text-purple-200">
              Ter a fonte certa para cada data comemorativa, evento e ocasião especial
            </p>
          </div>
        </div>

        <div className="bg-purple-800/30 border border-purple-400/30 rounded-xl p-6">
          <p className="text-purple-100 text-lg mb-4">
            <strong>Lógica:</strong> Expressivas não são sobre prioridade de implementação, 
            mas sobre ter opções prontas para eventos/momentos específicos sem precisar 
            improvisar ou usar fonte genérica.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-bold text-purple-200 uppercase mb-1">Core Aprovado</div>
              <div className="text-4xl font-bold text-white">5</div>
              <div className="text-sm text-purple-200">Crimson Pro + DM</div>
            </div>
            <div>
              <div className="text-sm font-bold text-purple-200 uppercase mb-1">Candidatas</div>
              <div className="text-4xl font-bold text-white">6</div>
              <div className="text-sm text-purple-200">Todas detectadas ✓</div>
            </div>
            <div>
              <div className="text-sm font-bold text-purple-200 uppercase mb-1">Questão</div>
              <div className="text-4xl font-bold text-white">?</div>
              <div className="text-sm text-purple-200">Tem overlap real?</div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Core Aprovado */}
      <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <Check className="w-8 h-8 text-emerald-600" />
          <h2 className="text-3xl font-bold text-emerald-900">✅ Core Aprovado (5 fontes)</h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { name: 'MuseoModerno', role: 'Brand' },
            { name: 'Crimson Pro', role: 'Serif elegante' },
            { name: 'DM Sans', role: 'Workhorse 10 pesos' },
            { name: 'DM Mono', role: 'Código' },
            { name: 'Nunito', role: 'Friendly' }
          ].map((font, i) => (
            <div key={i} className="bg-white rounded-lg p-4 border-2 border-emerald-300">
              <div className="text-lg font-bold text-emerald-900">{font.name}</div>
              <div className="text-sm text-emerald-700">{font.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Candidatas Expressivas */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">6 Candidatas Expressivas</h2>
        
        <div className="space-y-6">
          {CANDIDATAS.map((candidata, idx) => (
            <div 
              key={idx}
              className={`rounded-xl p-6 border-2 ${
                candidata.unicidade.includes('ÚNICA') ? 'bg-emerald-50 border-emerald-400' :
                candidata.unicidade.includes('DISCUTÍVEL') ? 'bg-amber-50 border-amber-400' :
                'bg-slate-50 border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{candidata.name}</h3>
                    
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Detectada
                    </span>
                    
                    {candidata.unicidade.includes('ÚNICA') && (
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        PRIORIDADE ALTA
                      </span>
                    )}
                    {candidata.unicidade.includes('DISCUTÍVEL') && (
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        PRIORIDADE MÉDIA
                      </span>
                    )}
                  </div>
                  
                  <div className="text-sm text-slate-600 mb-2">{candidata.categoria}</div>
                  <div className="text-sm text-slate-700 italic mb-3">{candidata.personalidade}</div>
                  
                  {/* Exemplo Visual */}
                  <div className="bg-white rounded-lg p-4 border border-slate-200 mb-4">
                    <div className="text-xs font-bold text-slate-500 uppercase mb-2">Exemplo:</div>
                    <div 
                      className="text-2xl"
                      style={{ fontFamily: candidata.fontFamily }}
                    >
                      {candidata.exemplo}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="text-xs font-bold text-blue-700 uppercase mb-2">Momentos de Uso:</div>
                  <ul className="text-xs text-blue-800 space-y-1">
                    {candidata.momentosDeUso.slice(0, 3).map((use, i) => (
                      <li key={i}>• {use}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="text-xs font-bold text-green-700 uppercase mb-2">Contextos:</div>
                  <ul className="text-xs text-green-800 space-y-1">
                    {candidata.contextos.slice(0, 3).map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="text-xs font-bold text-red-700 uppercase mb-2">Exemplos Reais:</div>
                  <ul className="text-xs text-red-800 space-y-1">
                    {candidata.exemplosReais.slice(0, 3).map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Questões de Decisão */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-10 h-10 text-indigo-200" />
          <h2 className="text-4xl font-bold">Questões de Decisão</h2>
        </div>

        <div className="space-y-6">
          {QUESTOES_DECISAO.map((rec, idx) => (
            <div 
              key={idx}
              className={`bg-white/10 backdrop-blur border border-white/30 rounded-xl p-6 ${
                idx === 0 ? 'ring-4 ring-emerald-400' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{rec.titulo}</h3>
                  {idx === 0 && (
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      RECOMENDADO ⭐
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-white">{rec.decisao}</div>
                  <div className="text-sm text-indigo-200">ação recomendada</div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <div className="text-sm font-bold text-indigo-200 uppercase mb-2">💡 Raciocínio:</div>
                <p className="text-indigo-100">{rec.resposta}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="bg-purple-500 text-white rounded-full px-4 py-2 text-sm font-bold">
                  {rec.fonte}
                </div>
              </div>

              <div className="bg-blue-500/30 border border-blue-400/50 rounded-lg p-4 mt-4">
                <div className="text-xs font-bold text-blue-200 uppercase mb-2">Sistema Completo:</div>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-blue-200 font-bold mb-1">CORE (5):</div>
                    <div className="text-blue-100 text-xs">
                      MuseoModerno, Crimson Pro, DM Sans, DM Mono, Nunito
                    </div>
                  </div>
                  <div>
                    <div className="text-blue-200 font-bold mb-1">EXPRESSIVAS (6):</div>
                    <div className="text-blue-100 text-xs">
                      FOMO, Cause, Urbanist, Ofissina, Mayonice, Bolupisang
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendário de Exemplo */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-7 h-7 text-purple-600" />
          <h2 className="text-3xl font-bold text-slate-900">📅 Calendário 2025 — Quando Usar Qual?</h2>
        </div>

        <p className="text-slate-600 mb-6">
          Exemplo prático: ao longo de um ano, qual fonte serve cada ocasião especial? 
          Se tiver overlap real, aparecerá aqui.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {CALENDARIO_EXEMPLO.map((mes, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-5">
              <h3 className="text-xl font-bold text-purple-900 mb-3">{mes.mes}</h3>
              <div className="space-y-2">
                {mes.eventos.map((evento, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 border border-purple-200">
                    <div className="flex items-center gap-2 mb-1">
                      <PartyPopper className="w-4 h-4 text-purple-600" />
                      <div className="text-sm font-bold text-purple-900">{evento.nome}</div>
                    </div>
                    <div className="flex items-center gap-2 ml-6">
                      <div className="bg-purple-500 text-white rounded-full px-3 py-1 text-xs font-bold">
                        {evento.fonte}
                      </div>
                      <div className="text-xs text-slate-600">{evento.tipo}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-6 mt-6">
          <h3 className="text-lg font-bold text-emerald-900 mb-3">✅ Conclusão do Calendário</h3>
          <p className="text-emerald-800 mb-3">
            <strong>Nunito (Core)</strong> substituiu Cause para warmth/depoimentos. <strong>Allura</strong> substituiu Mayonice para assinaturas chiques.
          </p>
          <p className="text-emerald-800">
            <strong>Única pendência:</strong> Ofissina vs Bolupisang (cultural vs craft) — precisa das duas?
          </p>
        </div>
      </div>

      {/* Próximos Passos */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <ArrowRight className="w-10 h-10 text-indigo-300" />
          <h2 className="text-4xl font-bold">Próximos Passos</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/30">
            <h3 className="text-xl font-bold mb-3">1. Decidir Cenário</h3>
            <p className="text-indigo-100">
              Escolher entre 3 cenários: Mínimo (4 expressivas), Equilibrado (5), ou Completo (6).
              Recomendação: <strong>Mínimo Essencial = 9 fontes totais.</strong>
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/30">
            <h3 className="text-xl font-bold mb-3">2. Finalizar CSS</h3>
            <p className="text-indigo-100">
              Remover fontes não escolhidas do /src/imports/adapta-fonts.css.
              Otimizar imports (subset, font-display).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/30">
            <h3 className="text-xl font-bold mb-3">3. Brand Guidelines</h3>
            <p className="text-indigo-100">
              Criar matriz "Quando Usar Cada Fonte" + hierarquia tipográfica + 
              regras de exclusividade (MuseoModerno só ADAPTA).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/30">
            <h3 className="text-xl font-bold mb-3">4. Testar Touchpoints</h3>
            <p className="text-indigo-100">
              Validar sistema em: website, revista VerdeVox, papers científicos, 
              embalagens, outdoor, app mobile.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}