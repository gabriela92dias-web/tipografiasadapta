import { Check, Zap, Lightbulb, Star } from 'lucide-react';

export function UrbanistResolve() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Epifania! */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="w-12 h-12 text-emerald-200 animate-pulse" />
              <h1 className="text-5xl font-bold">Urbanist JÁ Substitui FOMO! ✅</h1>
            </div>
            <p className="text-2xl text-emerald-200">
              Você estava certo — não precisamos de Bebas/Anton. Urbanist resolve tudo!
            </p>
          </div>
        </div>

        <div className="bg-emerald-800/40 border-2 border-emerald-400/40 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">💡 Por que Urbanist > FOMO:</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-emerald-200 mb-3">❌ FOMO — Limitações:</h4>
              <ul className="space-y-2 text-emerald-100">
                <li>• Versatilidade BAIXA (só ativismo)</li>
                <li>• Não serve corporativo/científico</li>
                <li>• Impacto moderado (stencil)</li>
                <li>• ~3 eventos/ano</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-emerald-200 mb-3">✅ Urbanist — Resolve:</h4>
              <ul className="space-y-2 text-emerald-100">
                <li>• Versatilidade ALTA (todos contextos)</li>
                <li>• Serve ativismo + corporativo + cultural</li>
                <li>• 18 pesos = máxima flexibilidade</li>
                <li>• ~20+ eventos/ano</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Comparação Visual FOMO vs Urbanist */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">👁️ FOMO vs Urbanist — Mesmos Contextos</h2>
        
        <div className="space-y-8">
          {/* Contexto 1: Outdoor */}
          <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-3 border-b-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">📍 Outdoor / Billboard</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* FOMO */}
              <div className="p-8 border-r-2 border-slate-200 bg-red-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">FOMO (atual)</h4>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ❌ ELIMINAR
                  </span>
                </div>
                
                <div className="bg-slate-900 rounded-lg p-8 mb-4">
                  <div className="text-white text-center text-4xl leading-tight" style={{ fontFamily: 'FOMO' }}>
                    CANNABIS MEDICINAL
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-red-800">
                  <div>❌ Impacto moderado (stencil quebra solidez)</div>
                  <div>❌ Só funciona em protesto/ativismo</div>
                  <div>❌ Não serve eventos corporativos</div>
                </div>
              </div>

              {/* Urbanist */}
              <div className="p-8 bg-emerald-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Urbanist</h4>
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✅ JÁ APROVADA
                  </span>
                </div>
                
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&display=swap" />
                <div className="bg-slate-900 rounded-lg p-8 mb-4">
                  <div className="text-white text-center text-4xl leading-tight" style={{ fontFamily: 'Urbanist', fontWeight: 900 }}>
                    CANNABIS MEDICINAL
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-emerald-800">
                  <div>✅ Alto impacto (peso 900 = ultra bold)</div>
                  <div>✅ Funciona ativismo + corporativo</div>
                  <div>✅ 18 pesos = versatilidade máxima</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contexto 2: Capa Revista */}
          <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-3 border-b-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">📰 Capa Revista VerdeVox</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* FOMO */}
              <div className="p-8 border-r-2 border-slate-200 bg-red-50">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-8 mb-4 border-2 border-purple-300">
                  <div className="text-purple-900 text-center text-3xl leading-tight" style={{ fontFamily: 'FOMO' }}>
                    REVOLUÇÃO VERDE
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-red-800">
                  <div>❌ Stencil não combina com elegância editorial</div>
                  <div>❌ Limitada a capas de ativismo</div>
                </div>
              </div>

              {/* Urbanist */}
              <div className="p-8 bg-emerald-50">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-8 mb-4 border-2 border-purple-300">
                  <div className="text-purple-900 text-center text-3xl leading-tight" style={{ fontFamily: 'Urbanist', fontWeight: 800 }}>
                    REVOLUÇÃO VERDE
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-emerald-800">
                  <div>✅ Geométrica moderna = elegância cosmopolita</div>
                  <div>✅ Funciona em todas capas (ativismo + ciência)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contexto 3: Evento Científico */}
          <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-3 border-b-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">🔬 Conferência Científica</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* FOMO */}
              <div className="p-8 border-r-2 border-slate-200 bg-red-50">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-8 mb-4 border-2 border-indigo-300">
                  <div className="text-indigo-900 text-center text-2xl leading-tight" style={{ fontFamily: 'FOMO' }}>
                    CONFERÊNCIA ADAPTA 2025
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-red-800">
                  <div>❌ Stencil não transmite credibilidade científica</div>
                  <div>❌ NÃO FUNCIONA em eventos corporativos</div>
                </div>
              </div>

              {/* Urbanist */}
              <div className="p-8 bg-emerald-50">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-8 mb-4 border-2 border-indigo-300">
                  <div className="text-indigo-900 text-center text-2xl leading-tight" style={{ fontFamily: 'Urbanist', fontWeight: 700 }}>
                    CONFERÊNCIA ADAPTA 2025
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-emerald-800">
                  <div>✅ Moderna profissional = credibilidade</div>
                  <div>✅ FUNCIONA PERFEITAMENTE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contexto 4: Marcha/Ativismo (único onde FOMO funcionava) */}
          <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-3 border-b-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">✊ Marcha da Maconha / Ativismo</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* FOMO */}
              <div className="p-8 border-r-2 border-slate-200 bg-amber-50">
                <div className="bg-slate-900 rounded-lg p-8 mb-4">
                  <div className="text-white text-center text-3xl leading-tight" style={{ fontFamily: 'FOMO' }}>
                    LIBERDADE PARA CULTIVAR
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-amber-800">
                  <div>✅ Energia stencil protesto (funciona aqui)</div>
                  <div>⚠️ Mas LIMITADA só a este contexto</div>
                </div>
              </div>

              {/* Urbanist */}
              <div className="p-8 bg-emerald-50">
                <div className="bg-slate-900 rounded-lg p-8 mb-4">
                  <div className="text-white text-center text-3xl leading-tight" style={{ fontFamily: 'Urbanist', fontWeight: 900 }}>
                    LIBERDADE PARA CULTIVAR
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-emerald-800">
                  <div>✅ Ultra bold (peso 900) = impacto igual</div>
                  <div>✅ TAMBÉM FUNCIONA + versátil em outros contextos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Urbanist — 18 Pesos = Máxima Versatilidade */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Star className="w-10 h-10 text-indigo-200" />
          <h2 className="text-4xl font-bold">⚡ Urbanist — 18 Pesos = Superpoder</h2>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-8 border-2 border-indigo-300">
          <h3 className="text-2xl font-bold mb-6">Por que 18 pesos é melhor que Bebas/Anton:</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-indigo-700/40 rounded-lg p-6 border border-indigo-400">
              <div className="text-sm font-bold text-indigo-200 uppercase mb-2">Peso 100-300</div>
              <div className="text-4xl mb-3" style={{ fontFamily: 'Urbanist', fontWeight: 200 }}>Light</div>
              <div className="text-sm text-indigo-100">Elegância editorial, subtítulos</div>
            </div>

            <div className="bg-indigo-700/40 rounded-lg p-6 border border-indigo-400">
              <div className="text-sm font-bold text-indigo-200 uppercase mb-2">Peso 400-600</div>
              <div className="text-4xl mb-3" style={{ fontFamily: 'Urbanist', fontWeight: 500 }}>Medium</div>
              <div className="text-sm text-indigo-100">Corpo texto, UI, interface</div>
            </div>

            <div className="bg-indigo-700/40 rounded-lg p-6 border border-indigo-400">
              <div className="text-sm font-bold text-indigo-200 uppercase mb-2">Peso 700-900</div>
              <div className="text-4xl mb-3" style={{ fontFamily: 'Urbanist', fontWeight: 900 }}>Black</div>
              <div className="text-sm text-indigo-100">OUTDOOR, IMPACTO MÁXIMO</div>
            </div>
          </div>

          <div className="bg-indigo-900/40 rounded-lg p-6 border border-indigo-500">
            <h4 className="text-lg font-bold mb-3">💡 Resultado:</h4>
            <p className="text-indigo-100 text-lg">
              <strong>Bebas/Anton</strong> só têm 1 peso cada (sempre ultra bold ou sempre condensada). 
              <strong>Urbanist</strong> tem 18 pesos = adapta-se a QUALQUER contexto (delicado a ultra impacto).
            </p>
          </div>
        </div>
      </div>

      {/* Decisão Final */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Check className="w-12 h-12 text-emerald-200" />
          <h2 className="text-4xl font-bold">✅ Decisão Final — Sistema Completo</h2>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-8 border-2 border-emerald-300">
          <h3 className="text-2xl font-bold mb-6">🎯 Fontes Expressivas FINAIS (4 fontes):</h3>
          
          <div className="space-y-4">
            <div className="bg-emerald-700/40 rounded-lg p-6 border border-emerald-400">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-2xl font-bold">1. Urbanist</h4>
                <span className="bg-emerald-900 px-4 py-2 rounded-full text-sm font-bold">
                  ✅ SUBSTITUI FOMO
                </span>
              </div>
              <div className="text-sm text-emerald-100 mb-3">
                <strong>Categoria:</strong> Display Moderna Versátil
              </div>
              <div className="text-sm text-emerald-100">
                <strong>Quando:</strong> Outdoor, capas revista, eventos (corporativos + ativistas), campanhas, hero sections
              </div>
            </div>

            <div className="bg-emerald-700/40 rounded-lg p-6 border border-emerald-400">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-2xl font-bold">2. Allura</h4>
                <span className="bg-emerald-900 px-4 py-2 rounded-full text-sm font-bold">
                  ✅ SUBSTITUI MAYONICE
                </span>
              </div>
              <div className="text-sm text-emerald-100 mb-3">
                <strong>Categoria:</strong> Manuscrita Chique
              </div>
              <div className="text-sm text-emerald-100">
                <strong>Quando:</strong> Assinaturas médicas, mensagens fundadores, convites VIP, notas editoriais
              </div>
            </div>

            <div className="bg-emerald-700/40 rounded-lg p-6 border border-emerald-400">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-2xl font-bold">3. Ofissina</h4>
                <span className="bg-amber-500 px-4 py-2 rounded-full text-sm font-bold">
                  ⚠️ PENDENTE
                </span>
              </div>
              <div className="text-sm text-emerald-100 mb-3">
                <strong>Categoria:</strong> Brazilidade Autêntica
              </div>
              <div className="text-sm text-emerald-100">
                <strong>Quando:</strong> 7 de Setembro, festas juninas, eventos regionais, matérias cultivo brasileiro
              </div>
            </div>

            <div className="bg-emerald-700/40 rounded-lg p-6 border border-emerald-400">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-2xl font-bold">4. Bolupisang</h4>
                <span className="bg-amber-500 px-4 py-2 rounded-full text-sm font-bold">
                  ⚠️ PENDENTE
                </span>
              </div>
              <div className="text-sm text-emerald-100 mb-3">
                <strong>Categoria:</strong> Craft Artesanal
              </div>
              <div className="text-sm text-emerald-100">
                <strong>Quando:</strong> Workshops, produtos artesanais, feiras locais, embalagens craft
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/40 rounded-lg p-6 border border-emerald-500 mt-6">
            <h4 className="text-lg font-bold mb-3">📋 Sistema Tipográfico ADAPTA Final:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm font-bold text-emerald-200 uppercase mb-2">✅ CORE (5 fontes):</div>
                <ul className="text-emerald-100 space-y-1 text-sm">
                  <li>• MuseoModerno (brand "ADAPTA")</li>
                  <li>• Crimson Pro (editorial serif)</li>
                  <li>• DM Sans (UI/interface)</li>
                  <li>• DM Mono (técnico/dados)</li>
                  <li>• Nunito (friendly/warmth)</li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-bold text-emerald-200 uppercase mb-2">🎨 EXPRESSIVAS:</div>
                <ul className="text-emerald-100 space-y-1 text-sm">
                  <li>✅ Urbanist (display versátil)</li>
                  <li>✅ Allura (manuscrita chique)</li>
                  <li>⚠️ Ofissina (brazilidade) — decidir</li>
                  <li>⚠️ Bolupisang (craft) — decidir</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 mt-6">
          <h3 className="text-xl font-bold mb-3">🎯 Próximo Passo:</h3>
          <p className="text-emerald-100 text-lg">
            <strong>Única pendência:</strong> Ofissina vs Bolupisang — manter ambas (brazilidade cultural + craft artesanal) 
            ou escolher apenas uma?
          </p>
        </div>
      </div>

    </div>
  );
}
