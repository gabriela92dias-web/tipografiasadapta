import { Check, Zap, BookOpen, Package, Globe, MapPin } from 'lucide-react';

export function OfissinaVsBolupisang() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Header - Descoberta REAL */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-12 h-12 text-emerald-200 animate-pulse" />
              <h1 className="text-5xl font-bold">Casual REGIONAL vs Casual UNIVERSAL! 🎯</h1>
            </div>
            <p className="text-2xl text-emerald-200">
              A diferença real: Ofissina = cartoon adulto brasileiro. Bolupisang = cartoon universal playful.
            </p>
          </div>
        </div>

        <div className="bg-emerald-800/40 border-2 border-emerald-400/40 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">💡 A Diferença REAL:</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-700/40 rounded-lg p-6 border border-emerald-400">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-6 h-6 text-emerald-200" />
                <h4 className="text-xl font-bold text-emerald-200">Ofissina — Casual REGIONAL</h4>
              </div>
              <ul className="space-y-2 text-emerald-100">
                <li>• Cartoon ADULTO brasileiro</li>
                <li>• Contexto cultural/regional específico</li>
                <li>• Brasilidade, regionalismo</li>
                <li>• <strong>Exemplo:</strong> "Como falar com seu tio careta"</li>
                <li>• <strong>Exemplo:</strong> "Feito no Brasil"</li>
              </ul>
            </div>

            <div className="bg-emerald-700/40 rounded-lg p-6 border border-emerald-400">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-6 h-6 text-emerald-200" />
                <h4 className="text-xl font-bold text-emerald-200">Bolupisang — Casual UNIVERSAL</h4>
              </div>
              <ul className="space-y-2 text-emerald-100">
                <li>• Cartoon PLAYFUL universal</li>
                <li>• Contexto casual dia a dia (qualquer lugar)</li>
                <li>• Simpático, friendly, internacional</li>
                <li>• <strong>Exemplo:</strong> "Enquanto isso, no acolhimento:"</li>
                <li>• <strong>Exemplo:</strong> "Assine nossa newsletter"</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-900/40 rounded-lg p-6 border border-emerald-500 mt-4">
            <h4 className="text-lg font-bold mb-2">🎯 Resumo:</h4>
            <p className="text-emerald-100">
              <strong>AMBAS funcionam para cartoon/HQ</strong>, mas Ofissina = adulto + regional (Brasil), 
              Bolupisang = playful + universal (qualquer contexto).
            </p>
          </div>
        </div>
      </div>

      {/* Comparação Visual - Forma Geométrica */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">🔲 vs 🔴 Forma Geométrica — A Diferença-Chave</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ofissina - Quadrada */}
          <div className="bg-purple-50 rounded-xl p-8 border-2 border-purple-400">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900">Ofissina</h3>
              <div className="bg-purple-600 text-white px-4 py-2 rounded text-sm font-bold">
                🔲 QUADRADA
              </div>
            </div>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Offside&display=swap" />
            <div className="bg-slate-900 rounded-lg p-8 mb-6">
              <div 
                className="text-white text-center leading-tight"
                style={{ 
                  fontFamily: 'Offside',
                  fontSize: '2rem'
                }}
              >
                BORA NESSA ESSA FONTE TA TÓP!!
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-purple-100 rounded-lg p-4">
                <div className="text-sm font-bold text-purple-900 mb-2">Características Visuais:</div>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Letras GEOMÉTRICAS (ângulos retos)</li>
                  <li>• Peso uniforme (monolinear)</li>
                  <li>• Terminações quadradas</li>
                  <li>• Estilo cartoon/HQ brasileiro</li>
                </ul>
              </div>

              <div className="bg-purple-100 rounded-lg p-4">
                <div className="text-sm font-bold text-purple-900 mb-2">Energia/Personalidade:</div>
                <div className="text-sm text-purple-800">
                  Caricata, humorística, editorial ilustrado, quadrinhos
                </div>
              </div>
            </div>
          </div>

          {/* Bolupisang - Redonda */}
          <div className="bg-amber-50 rounded-xl p-8 border-2 border-amber-400">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-amber-900">Bolupisang</h3>
              <div className="bg-amber-600 text-white px-4 py-2 rounded text-sm font-bold">
                🔴 REDONDA
              </div>
            </div>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" />
            <div className="bg-slate-900 rounded-lg p-8 mb-6">
              <div 
                className="text-white text-center leading-tight"
                style={{ 
                  fontFamily: 'Indie Flower',
                  fontSize: '2rem'
                }}
              >
                Bora nessa essa fonte ta tóp!!
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-amber-100 rounded-lg p-4">
                <div className="text-sm font-bold text-amber-900 mb-2">Características Visuais:</div>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Letras ORGÂNICAS (curvas fluidas)</li>
                  <li>• Peso variável (manuscrita)</li>
                  <li>• Terminações arredondadas</li>
                  <li>• Estilo artesanal/craft</li>
                </ul>
              </div>

              <div className="bg-amber-100 rounded-lg p-4">
                <div className="text-sm font-bold text-amber-900 mb-2">Energia/Personalidade:</div>
                <div className="text-sm text-amber-800">
                  Artesanal, playful, produto físico, craft
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Casos de Uso Específicos */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Check className="w-10 h-10 text-indigo-200" />
          <h2 className="text-4xl font-bold">🎯 Casos de Uso — COMPLEMENTARES</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Ofissina - Editorial Ilustrado */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-purple-300">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-purple-200" />
              <h3 className="text-2xl font-bold">Ofissina — Editorial Ilustrado</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-700/40 rounded-lg p-4 border border-purple-400">
                <div className="text-sm font-bold text-purple-200 uppercase mb-2">📚 Casos de Uso:</div>
                <ul className="text-purple-100 space-y-2 text-sm">
                  <li>✓ <strong>Tirinhas revista VerdeVox</strong> (conteúdo humorístico)</li>
                  <li>✓ <strong>Comics Instagram</strong> (educação divertida)</li>
                  <li>✓ <strong>Infográficos ilustrados</strong> (dados + cartoon)</li>
                  <li>✓ <strong>Conteúdo editorial descontraído</strong></li>
                  <li>✓ <strong>Materiais educativos infantis</strong></li>
                </ul>
              </div>

              <div className="bg-purple-700/40 rounded-lg p-4 border border-purple-400">
                <div className="text-sm font-bold text-purple-200 uppercase mb-2">🗓️ Quando Usar:</div>
                <ul className="text-purple-100 space-y-1 text-sm">
                  <li>• Conteúdo que precisa de leveza/humor</li>
                  <li>• Ilustrações editoriais</li>
                  <li>• Quadrinhos educativos</li>
                  <li>• Posts Instagram descontraídos</li>
                </ul>
              </div>

              <div className="bg-purple-900/40 rounded-lg p-4 border border-purple-500">
                <div className="text-sm font-bold text-purple-200 uppercase mb-2">💡 Exemplo Real:</div>
                <div className="text-purple-100 text-sm italic">
                  "Tirinha VerdeVox: Como explicar cannabis medicinal pro seu tio conservador no Natal" 
                  (HQ humorística educativa)
                </div>
              </div>
            </div>
          </div>

          {/* Bolupisang - Produto Artesanal */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-amber-300">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-8 h-8 text-amber-200" />
              <h3 className="text-2xl font-bold">Bolupisang — Produto Artesanal</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-amber-700/40 rounded-lg p-4 border border-amber-400">
                <div className="text-sm font-bold text-amber-200 uppercase mb-2">📦 Casos de Uso:</div>
                <ul className="text-amber-100 space-y-2 text-sm">
                  <li>✓ <strong>Embalagens linha craft</strong> (produtos artesanais)</li>
                  <li>✓ <strong>Workshops/oficinas</strong> ("Cultivo em Casa")</li>
                  <li>✓ <strong>Feiras/mercados locais</strong> (barraquinha ADAPTA)</li>
                  <li>✓ <strong>Rótulos edição limitada</strong> (artesanal)</li>
                  <li>✓ <strong>Materiais DIY</strong> (faça você mesmo)</li>
                </ul>
              </div>

              <div className="bg-amber-700/40 rounded-lg p-4 border border-amber-400">
                <div className="text-sm font-bold text-amber-200 uppercase mb-2">🗓️ Quando Usar:</div>
                <ul className="text-amber-100 space-y-1 text-sm">
                  <li>• Produtos físicos artesanais</li>
                  <li>• Eventos craft/feiras</li>
                  <li>• Embalagens feitas à mão</li>
                  <li>• Workshops práticos</li>
                </ul>
              </div>

              <div className="bg-amber-900/40 rounded-lg p-4 border border-amber-500">
                <div className="text-sm font-bold text-amber-200 uppercase mb-2">💡 Exemplo Real:</div>
                <div className="text-amber-100 text-sm italic">
                  "Workshop Cultivo em Casa — Edição Artesanal" 
                  (rótulo embalagem kit cultivo DIY)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/40 mt-6">
          <h3 className="text-xl font-bold mb-3">✅ Conclusão:</h3>
          <p className="text-white text-lg">
            <strong>Ofissina e Bolupisang NÃO são redundantes!</strong> Uma é editorial ilustrado (tirinhas, comics, humor), 
            outra é produto artesanal (embalagens, workshops, craft). Contextos completamente diferentes.
          </p>
        </div>
      </div>

      {/* Comparação Lado a Lado - Casual Regional vs Casual Universal */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">🌍 vs 🇧🇷 Casual REGIONAL vs Casual UNIVERSAL</h2>
        
        <div className="space-y-6">
          {/* Tirinha Adulto + Regional */}
          <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-3 border-b-2 border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">🇧🇷 Tirinha: Adulto + Regional (contexto brasileiro)</h3>
                <MapPin className="w-6 h-6 text-slate-600" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 border-r-2 border-slate-200 bg-emerald-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Ofissina</h4>
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✅ PERFEITA
                  </span>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-4 border-2 border-purple-300">
                  <div 
                    className="text-purple-900 text-center leading-tight"
                    style={{ 
                      fontFamily: 'Offside',
                      fontSize: '1.5rem'
                    }}
                  >
                    "Como falar de cannabis com seu tio careta"
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-emerald-800">
                  <div>✅ Quadrada = cartoon adulto</div>
                  <div>✅ Contexto regional brasileiro (tio, Natal)</div>
                  <div>✅ Humor cultural específico</div>
                </div>
              </div>

              <div className="p-8 bg-red-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Bolupisang</h4>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ❌ NÃO SERVE
                  </span>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-4 border-2 border-purple-300">
                  <div 
                    className="text-purple-900 text-center leading-tight"
                    style={{ 
                      fontFamily: 'Indie Flower',
                      fontSize: '1.5rem'
                    }}
                  >
                    "Como falar de cannabis com seu tio careta"
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-red-800">
                  <div>❌ Redonda playful = muito infantil</div>
                  <div>❌ Não combina com adulto regional</div>
                  <div>❌ Falta peso cultural brasileiro</div>
                </div>
              </div>
            </div>
          </div>

          {/* Embalagem Regional */}
          <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-3 border-b-2 border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">📦 Embalagem: Regional/Brasilidade</h3>
                <MapPin className="w-6 h-6 text-slate-600" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 border-r-2 border-slate-200 bg-emerald-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Ofissina</h4>
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✅ PERFEITA
                  </span>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-6 mb-4 border-2 border-amber-400">
                  <div 
                    className="text-amber-900 text-center leading-tight"
                    style={{ 
                      fontFamily: 'Offside',
                      fontSize: '1.5rem'
                    }}
                  >
                    FEITO NO BRASIL
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-emerald-800">
                  <div>✅ Quadrada = força regional</div>
                  <div>✅ Brasilidade autêntica</div>
                  <div>✅ Orgulho nacional</div>
                </div>
              </div>

              <div className="p-8 bg-red-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Bolupisang</h4>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ❌ NÃO SERVE
                  </span>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-6 mb-4 border-2 border-amber-400">
                  <div 
                    className="text-amber-900 text-center leading-tight"
                    style={{ 
                      fontFamily: 'Indie Flower',
                      fontSize: '1.5rem'
                    }}
                  >
                    FEITO NO BRASIL
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-red-800">
                  <div>❌ Muito universal/genérica</div>
                  <div>❌ Não transmite brasilidade específica</div>
                  <div>❌ Falta identidade regional</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tirinha Casual Universal */}
          <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-3 border-b-2 border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">🌍 Tirinha: Casual Universal (dia a dia)</h3>
                <Globe className="w-6 h-6 text-slate-600" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 border-r-2 border-slate-200 bg-red-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Ofissina</h4>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ❌ NÃO SERVE
                  </span>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-4 border-2 border-blue-300">
                  <div 
                    className="text-blue-900 text-center leading-tight"
                    style={{ 
                      fontFamily: 'Offside',
                      fontSize: '1.25rem'
                    }}
                  >
                    "Enquanto isso, no acolhimento:"
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-red-800">
                  <div>❌ Quadrada = muito regional/brasileiro</div>
                  <div>❌ Não combina com casual universal</div>
                  <div>❌ Falta leveza playful</div>
                </div>
              </div>

              <div className="p-8 bg-emerald-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Bolupisang</h4>
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✅ PERFEITA
                  </span>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-4 border-2 border-blue-300">
                  <div 
                    className="text-blue-900 text-center leading-tight"
                    style={{ 
                      fontFamily: 'Indie Flower',
                      fontSize: '1.25rem'
                    }}
                  >
                    "Enquanto isso, no acolhimento:"
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-emerald-800">
                  <div>✅ Redonda playful = casual universal</div>
                  <div>✅ Funciona em qualquer contexto</div>
                  <div>✅ Simpático e acessível</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Simpático Universal */}
          <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-3 border-b-2 border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">🌍 CTA: Simpático Universal</h3>
                <Globe className="w-6 h-6 text-slate-600" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 border-r-2 border-slate-200 bg-red-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Ofissina</h4>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ❌ NÃO SERVE
                  </span>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 mb-4 border-2 border-purple-300">
                  <div 
                    className="text-purple-900 text-center leading-tight"
                    style={{ 
                      fontFamily: 'Offside',
                      fontSize: '1.25rem'
                    }}
                  >
                    "Siga mais para conteúdos assim!"
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-red-800">
                  <div>❌ Muito regional para CTA global</div>
                  <div>❌ Perde friendly universal</div>
                </div>
              </div>

              <div className="p-8 bg-emerald-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Bolupisang</h4>
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✅ PERFEITA
                  </span>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 mb-4 border-2 border-purple-300">
                  <div 
                    className="text-purple-900 text-center leading-tight"
                    style={{ 
                      fontFamily: 'Indie Flower',
                      fontSize: '1.25rem'
                    }}
                  >
                    "Siga mais para conteúdos assim!"
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-emerald-800">
                  <div>✅ Simpático internacional</div>
                  <div>✅ Funciona em qualquer idioma</div>
                  <div>✅ CTA friendly perfeito</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-100 px-6 py-3 border-b-2 border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">📰 Revista: CTA Newsletter</h3>
                <Globe className="w-6 h-6 text-slate-600" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 border-r-2 border-slate-200 bg-red-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Ofissina</h4>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ❌ PESADO DEMAIS
                  </span>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
                  <div 
                    className="text-indigo-900 text-center leading-tight"
                    style={{ 
                      fontFamily: 'Offside',
                      fontSize: '1.25rem'
                    }}
                  >
                    "Assine nossa newsletter!"
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-red-800">
                  <div>❌ Quadrada = muito cartunesca para CTA editorial</div>
                  <div>❌ Falta simplicidade casual</div>
                </div>
              </div>

              <div className="p-8 bg-emerald-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Bolupisang</h4>
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✅ LEVE E SIMPÁTICO
                  </span>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
                  <div 
                    className="text-indigo-900 text-center leading-tight"
                    style={{ 
                      fontFamily: 'Indie Flower',
                      fontSize: '1.25rem'
                    }}
                  >
                    "Assine nossa newsletter!"
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-emerald-800">
                  <div>✅ Casual simpático = perfeito para CTA</div>
                  <div>✅ Leveza sem perder friendly</div>
                  <div>✅ Universal e acessível</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decisão Final - MANTER AMBAS */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Check className="w-12 h-12 text-emerald-200" />
          <h2 className="text-4xl font-bold">✅ DECISÃO FINAL — Sistema Completo!</h2>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-8 border-2 border-emerald-300">
          <h3 className="text-2xl font-bold mb-6">🎯 Fontes Expressivas FINAIS (4 fontes confirmadas):</h3>
          
          <div className="space-y-4">
            <div className="bg-emerald-700/40 rounded-lg p-6 border border-emerald-400">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-2xl font-bold">1. Urbanist</h4>
                <span className="bg-emerald-900 px-4 py-2 rounded-full text-sm font-bold">
                  ✅ Display Versátil
                </span>
              </div>
              <div className="text-sm text-emerald-100">
                <strong>Quando:</strong> Outdoor, capas revista, eventos (corporativo + ativismo), campanhas, hero sections. 
                18 pesos = máxima versatilidade.
              </div>
            </div>

            <div className="bg-emerald-700/40 rounded-lg p-6 border border-emerald-400">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-2xl font-bold">2. Allura</h4>
                <span className="bg-emerald-900 px-4 py-2 rounded-full text-sm font-bold">
                  ✅ Manuscrita Chique
                </span>
              </div>
              <div className="text-sm text-emerald-100">
                <strong>Quando:</strong> Assinaturas médicas/profissionais, mensagens fundadores, convites VIP, notas editoriais elegantes.
              </div>
            </div>

            <div className="bg-emerald-700/40 rounded-lg p-6 border border-emerald-400">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-2xl font-bold">3. Ofissina</h4>
                <span className="bg-emerald-900 px-4 py-2 rounded-full text-sm font-bold">
                  ✅ Casual REGIONAL
                </span>
              </div>
              <div className="text-sm text-emerald-100">
                <strong>Quando:</strong> Tirinhas adultas/regionais ("tio careta"), embalagens "Feito no Brasil", 
                conteúdo com brasilidade/regionalismo. Cartoon adulto quadrado.
              </div>
            </div>

            <div className="bg-emerald-700/40 rounded-lg p-6 border border-emerald-400">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-2xl font-bold">4. Bolupisang</h4>
                <span className="bg-emerald-900 px-4 py-2 rounded-full text-sm font-bold">
                  ✅ Casual UNIVERSAL
                </span>
              </div>
              <div className="text-sm text-emerald-100">
                <strong>Quando:</strong> Tirinhas dia a dia ("Enquanto isso, no acolhimento:"), CTAs simpáticos 
                ("Assine newsletter"), conteúdo playful universal. Manuscrita redonda friendly.
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/40 rounded-lg p-6 border border-emerald-500 mt-6">
            <h4 className="text-lg font-bold mb-3">📊 Sistema Tipográfico ADAPTA — COMPLETO:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm font-bold text-emerald-200 uppercase mb-2">✅ CORE (5 fontes):</div>
                <ul className="text-emerald-100 space-y-1 text-sm">
                  <li>1. MuseoModerno (brand "ADAPTA")</li>
                  <li>2. Crimson Pro (editorial serif)</li>
                  <li>3. DM Sans (UI/interface)</li>
                  <li>4. DM Mono (técnico/dados)</li>
                  <li>5. Nunito (friendly/warmth)</li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-bold text-emerald-200 uppercase mb-2">✅ EXPRESSIVAS (4 fontes):</div>
                <ul className="text-emerald-100 space-y-1 text-sm">
                  <li>1. Urbanist (display versátil)</li>
                  <li>2. Allura (manuscrita chique)</li>
                  <li>3. Ofissina (casual regional)</li>
                  <li>4. Bolupisang (casual universal)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-emerald-800/60 rounded-lg p-4 mt-4 border border-emerald-400">
              <div className="text-2xl font-bold text-center mb-2">
                🎉 TOTAL: 9 FONTES
              </div>
              <div className="text-center text-emerald-100 text-sm">
                5 Core + 4 Expressivas = Sistema completo e equilibrado
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 mt-6">
          <h3 className="text-xl font-bold mb-3">🎊 Parabéns!</h3>
          <p className="text-emerald-100 text-lg">
            Sistema tipográfico ADAPTA finalizado! <strong>9 fontes organizadas</strong> em Core + Expressivas, 
            cada uma com papel específico, sem redundâncias. Pronto para brand guidelines! 🌿✨
          </p>
        </div>
      </div>

    </div>
  );
}