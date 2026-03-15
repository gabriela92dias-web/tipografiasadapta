import { AlertCircle, Zap, Eye, MessageSquare } from 'lucide-react';

interface CriterioComparacao {
  aspecto: string;
  bebas: {
    nota: number;
    descricao: string;
    visual: string;
  };
  anton: {
    nota: number;
    descricao: string;
    visual: string;
  };
  vencedor: 'bebas' | 'anton' | 'empate';
}

const CRITERIOS: CriterioComparacao[] = [
  {
    aspecto: 'Impacto Visual Máximo',
    bebas: {
      nota: 10,
      descricao: 'Condensada vertical = altura máxima, dominância total',
      visual: 'CANNABIS'
    },
    anton: {
      nota: 9,
      descricao: 'Ultra bold = peso máximo, solidez extrema',
      visual: 'CANNABIS'
    },
    vencedor: 'bebas'
  },
  {
    aspecto: 'Economia de Espaço (Outdoor)',
    bebas: {
      nota: 10,
      descricao: 'Condensada = cabe mais texto em menos espaço',
      visual: 'MEDICINAL'
    },
    anton: {
      nota: 7,
      descricao: 'Mais larga = ocupa mais espaço horizontal',
      visual: 'MEDICINAL'
    },
    vencedor: 'bebas'
  },
  {
    aspecto: 'Peso/Presença Visual',
    bebas: {
      nota: 7,
      descricao: 'Condensada = menos massa, mais altura',
      visual: 'ADAPTA'
    },
    anton: {
      nota: 10,
      descricao: 'Ultra bold = massa extrema, solidez total',
      visual: 'ADAPTA'
    },
    vencedor: 'anton'
  },
  {
    aspecto: 'Harmonização com MuseoModerno',
    bebas: {
      nota: 7,
      descricao: 'Ambas condensadas, mas Bebas = mais neutra',
      visual: 'SAÚDE'
    },
    anton: {
      nota: 9,
      descricao: 'Ambas ultra bold, energia similar',
      visual: 'SAÚDE'
    },
    vencedor: 'anton'
  },
  {
    aspecto: 'Versatilidade Contextos',
    bebas: {
      nota: 9,
      descricao: 'Clássica neutra = serve tudo (esportes, moda, música)',
      visual: 'EVENTO'
    },
    anton: {
      nota: 8,
      descricao: 'Publicitária moderna = mais comercial/marketing',
      visual: 'EVENTO'
    },
    vencedor: 'bebas'
  },
  {
    aspecto: 'Legibilidade Distância',
    bebas: {
      nota: 10,
      descricao: 'Condensada limpa = formas abertas, clara',
      visual: 'VERDE'
    },
    anton: {
      nota: 8,
      descricao: 'Ultra bold = fechamento interno pode dificultar',
      visual: 'VERDE'
    },
    vencedor: 'bebas'
  },
  {
    aspecto: 'Personalidade Única',
    bebas: {
      nota: 6,
      descricao: 'MUITO popular = pode parecer genérica',
      visual: 'CULTURA'
    },
    anton: {
      nota: 8,
      descricao: 'Menos comum = mais distintiva',
      visual: 'CULTURA'
    },
    vencedor: 'anton'
  },
  {
    aspecto: 'Elegância (Revista/Editorial)',
    bebas: {
      nota: 8,
      descricao: 'Condensada elegante = editorial clássico',
      visual: 'VERDEVOX'
    },
    anton: {
      nota: 6,
      descricao: 'Ultra bold = pode ser pesada demais',
      visual: 'VERDEVOX'
    },
    vencedor: 'bebas'
  }
];

export function BebasVsAnton() {
  const bebasVitorias = CRITERIOS.filter(c => c.vencedor === 'bebas').length;
  const antonVitorias = CRITERIOS.filter(c => c.vencedor === 'anton').length;
  const empates = CRITERIOS.filter(c => c.vencedor === 'empate').length;

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Header - Indecisão */}
      <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-10 text-white">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="w-10 h-10 text-amber-200" />
              <h1 className="text-5xl font-bold">Bebas Neue vs Anton — Comparação Profunda</h1>
            </div>
            <p className="text-xl text-amber-200">
              Você está entre as duas. Vamos dissecar exatamente o que cada uma oferece.
            </p>
          </div>
        </div>

        <div className="bg-amber-800/30 border border-amber-400/30 rounded-xl p-6">
          <p className="text-amber-100 text-lg mb-4">
            <strong>Situação:</strong> Bebas = condensada clássica (altura). Anton = ultra bold (peso). 
            Ambas com máximo impacto, mas estratégias OPOSTAS. Qual serve melhor ADAPTA?
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-bold text-amber-200 uppercase mb-1">Bebas Neue</div>
              <div className="text-3xl font-bold text-white">{bebasVitorias} vitórias</div>
              <div className="text-sm text-amber-200">Condensada vertical</div>
            </div>
            <div>
              <div className="text-sm font-bold text-amber-200 uppercase mb-1">Anton</div>
              <div className="text-3xl font-bold text-white">{antonVitorias} vitórias</div>
              <div className="text-sm text-amber-200">Ultra bold horizontal</div>
            </div>
            <div>
              <div className="text-sm font-bold text-amber-200 uppercase mb-1">Empates</div>
              <div className="text-3xl font-bold text-white">{empates}</div>
              <div className="text-sm text-amber-200">Critérios empatados</div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparação Visual Lado a Lado */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">👁️ Comparação Visual — 8 Critérios</h2>
        
        <p className="text-slate-600 mb-8">
          Cada critério testado com exemplo real. Verde = vencedor, Amarelo = próximo, Vermelho = perde.
        </p>

        <div className="space-y-6">
          {CRITERIOS.map((criterio, idx) => (
            <div key={idx} className="border-2 border-slate-200 rounded-xl overflow-hidden">
              {/* Header do Critério */}
              <div className="bg-slate-100 px-6 py-4 border-b-2 border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">{criterio.aspecto}</h3>
              </div>

              {/* Comparação Lado a Lado */}
              <div className="grid md:grid-cols-2 gap-0">
                {/* Bebas Neue */}
                <div className={`p-6 border-r-2 border-slate-200 ${
                  criterio.vencedor === 'bebas' 
                    ? 'bg-emerald-50' 
                    : criterio.bebas.nota >= 8 
                      ? 'bg-amber-50' 
                      : 'bg-red-50'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-slate-900">Bebas Neue</h4>
                    <div className={`text-3xl font-bold ${
                      criterio.vencedor === 'bebas' 
                        ? 'text-emerald-600' 
                        : criterio.bebas.nota >= 8 
                          ? 'text-amber-600' 
                          : 'text-red-600'
                    }`}>
                      {criterio.bebas.nota}/10
                      {criterio.vencedor === 'bebas' && <span className="ml-2 text-2xl">🏆</span>}
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 mb-4">{criterio.bebas.descricao}</p>

                  {/* Exemplo Visual */}
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" />
                  <div className="bg-slate-900 rounded-lg p-6">
                    <div 
                      className="text-white text-center leading-none"
                      style={{ 
                        fontFamily: 'Bebas Neue',
                        fontSize: '3rem'
                      }}
                    >
                      {criterio.bebas.visual}
                    </div>
                  </div>
                </div>

                {/* Anton */}
                <div className={`p-6 ${
                  criterio.vencedor === 'anton' 
                    ? 'bg-emerald-50' 
                    : criterio.anton.nota >= 8 
                      ? 'bg-amber-50' 
                      : 'bg-red-50'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-slate-900">Anton</h4>
                    <div className={`text-3xl font-bold ${
                      criterio.vencedor === 'anton' 
                        ? 'text-emerald-600' 
                        : criterio.anton.nota >= 8 
                          ? 'text-amber-600' 
                          : 'text-red-600'
                    }`}>
                      {criterio.anton.nota}/10
                      {criterio.vencedor === 'anton' && <span className="ml-2 text-2xl">🏆</span>}
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 mb-4">{criterio.anton.descricao}</p>

                  {/* Exemplo Visual */}
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&display=swap" />
                  <div className="bg-slate-900 rounded-lg p-6">
                    <div 
                      className="text-white text-center leading-none"
                      style={{ 
                        fontFamily: 'Anton',
                        fontSize: '2.5rem'
                      }}
                    >
                      {criterio.anton.visual}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Placar Final */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-10 h-10 text-indigo-200" />
          <h2 className="text-4xl font-bold">📊 Placar Final — 8 Critérios</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bebas Neue */}
          <div className={`rounded-xl p-8 border-2 ${
            bebasVitorias > antonVitorias 
              ? 'bg-emerald-500/30 border-emerald-400' 
              : 'bg-white/10 border-white/20'
          }`}>
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
              Bebas Neue
              {bebasVitorias > antonVitorias && <span className="text-4xl">🏆</span>}
            </h3>
            
            <div className="text-6xl font-bold mb-4">{bebasVitorias}/8</div>
            <div className="text-xl text-indigo-100 mb-6">vitórias</div>

            <div className="space-y-2">
              <div className="text-sm font-bold text-indigo-200 uppercase mb-2">Vence em:</div>
              {CRITERIOS.filter(c => c.vencedor === 'bebas').map((c, i) => (
                <div key={i} className="bg-white/10 rounded px-3 py-2 text-sm">
                  ✓ {c.aspecto}
                </div>
              ))}
            </div>
          </div>

          {/* Anton */}
          <div className={`rounded-xl p-8 border-2 ${
            antonVitorias > bebasVitorias 
              ? 'bg-emerald-500/30 border-emerald-400' 
              : 'bg-white/10 border-white/20'
          }`}>
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-2">
              Anton
              {antonVitorias > bebasVitorias && <span className="text-4xl">🏆</span>}
            </h3>
            
            <div className="text-6xl font-bold mb-4">{antonVitorias}/8</div>
            <div className="text-xl text-indigo-100 mb-6">vitórias</div>

            <div className="space-y-2">
              <div className="text-sm font-bold text-indigo-200 uppercase mb-2">Vence em:</div>
              {CRITERIOS.filter(c => c.vencedor === 'anton').map((c, i) => (
                <div key={i} className="bg-white/10 rounded px-3 py-2 text-sm">
                  ✓ {c.aspecto}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/40 mt-6">
          <h3 className="text-xl font-bold mb-3">💡 Interpretação:</h3>
          <p className="text-white text-lg">
            <strong>Bebas Neue</strong> vence na maioria dos critérios técnicos (economia espaço, legibilidade, versatilidade). 
            <strong>Anton</strong> vence em peso/presença e harmonização com MuseoModerno (ambas ultra bold).
          </p>
        </div>
      </div>

      {/* O que te incomoda em cada uma? */}
      <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-3xl p-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-10 h-10 text-rose-200" />
          <h2 className="text-4xl font-bold">🤔 O que falta em cada uma?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bebas */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Bebas Neue — Possíveis Fricções:</h3>
            <ul className="space-y-3 text-rose-100">
              <li className="flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <span><strong>Muito popular?</strong> Usada em todo lugar (esportes, moda, música). Pode parecer genérica.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <span><strong>Muito neutra?</strong> Clássica pode significar sem personalidade única.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <span><strong>Menos massa?</strong> Condensada tem menos peso visual que Anton ultra bold.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <span><strong>Não harmoniza forte</strong> com MuseoModerno (estilos diferentes).</span>
              </li>
            </ul>
          </div>

          {/* Anton */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Anton — Possíveis Fricções:</h3>
            <ul className="space-y-3 text-rose-100">
              <li className="flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <span><strong>Muito larga?</strong> Ocupa mais espaço horizontal = menos texto em outdoor.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <span><strong>Muito pesada?</strong> Ultra bold pode ser agressiva demais em contextos elegantes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <span><strong>Legibilidade menor</strong> à distância (fechamento interno em ultra bold).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">⚠️</span>
                <span><strong>Menos versátil</strong> em contextos editoriais/elegantes (revista).</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-800/40 rounded-xl p-6 border border-rose-400/40 mt-6">
          <h3 className="text-xl font-bold mb-3">💬 Ajude-me a entender:</h3>
          <div className="space-y-3 text-rose-100 text-lg">
            <p><strong>1.</strong> O que você GOSTA em Bebas? E o que te incomoda?</p>
            <p><strong>2.</strong> O que você GOSTA em Anton? E o que te incomoda?</p>
            <p><strong>3.</strong> Qual critério é MAIS importante? Impacto máximo? Economia espaço? Harmonização com MuseoModerno?</p>
            <p><strong>4.</strong> Você quer display com ALTURA (condensada) ou PESO (ultra bold)?</p>
          </div>
        </div>
      </div>

      {/* Estratégia Alternativa: Usar DUAS? */}
      <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Eye className="w-10 h-10 text-teal-200" />
          <h2 className="text-4xl font-bold">💡 Estratégia Alternativa — Usar DUAS Display?</h2>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-8 border-2 border-teal-300">
          <h3 className="text-2xl font-bold mb-4">🎯 Sistema com 2 Display Complementares:</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-teal-700/40 rounded-lg p-6 border border-teal-400">
              <h4 className="text-xl font-bold mb-3">Bebas Neue — Display Principal</h4>
              <div className="text-sm text-teal-100 mb-4">
                <strong>Quando:</strong> Outdoor, capas revista, eventos corporativos, campanhas grandes
              </div>
              <div className="text-sm text-teal-100">
                <strong>Por quê:</strong> Economia espaço + legibilidade + versatilidade máxima
              </div>
            </div>

            <div className="bg-teal-700/40 rounded-lg p-6 border border-teal-400">
              <h4 className="text-xl font-bold mb-3">Anton — Display Impacto</h4>
              <div className="text-sm text-teal-100 mb-4">
                <strong>Quando:</strong> Posts Instagram, call-to-action, hero sections, lançamentos
              </div>
              <div className="text-sm text-teal-100">
                <strong>Por quê:</strong> Peso visual máximo + harmoniza MuseoModerno + distintiva
              </div>
            </div>
          </div>

          <div className="bg-teal-900/40 rounded-lg p-4 border border-teal-500">
            <p className="text-teal-100">
              <strong>Resultado:</strong> Bebas para "grandes formatos profissionais" + Anton para "high-impact digital/publicitário". 
              Complementares, não redundantes.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 mt-6">
          <h3 className="text-xl font-bold mb-3">⚖️ Problema:</h3>
          <p className="text-teal-100 text-lg">
            Ter DUAS display pode gerar confusão. Brand guidelines precisaria definir claramente quando usar cada uma. 
            Isso adiciona complexidade. Você quer simplicidade (1 display) ou flexibilidade (2 display)?
          </p>
        </div>
      </div>

      {/* Outras Opções Não Testadas */}
      <div className="bg-slate-800 rounded-3xl p-10 text-white">
        <h2 className="text-3xl font-bold mb-6">🔍 Outras Opções — Não Testadas Ainda</h2>
        
        <p className="text-slate-300 mb-6">
          Se nem Bebas nem Anton te ganharam 100%, talvez o problema seja que elas são extremos opostos. 
          Existem outras display fonts que equilibram ALTURA + PESO?
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Oswald</h3>
            <p className="text-sm text-slate-300 mb-3">Grotesca condensada com 4 pesos (meio termo entre Bebas e Anton)</p>
            <div className="text-xs text-slate-400">Já estava no ranking (9/10)</div>
          </div>

          <div className="bg-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Archivo Black</h3>
            <p className="text-sm text-slate-300 mb-3">Ultra bold moderna (peso de Anton, mas menos compacta)</p>
            <div className="text-xs text-slate-400">Já estava no ranking (8/10)</div>
          </div>

          <div className="bg-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Impact</h3>
            <p className="text-sm text-slate-300 mb-3">Clássica condensada bold (equilibra altura + peso)</p>
            <div className="text-xs text-slate-400">Não testada (sistema default)</div>
          </div>
        </div>
      </div>

    </div>
  );
}
