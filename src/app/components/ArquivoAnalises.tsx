import { FileText, Download, Archive, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function ArquivoAnalises() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8 bg-white">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 text-white print:bg-slate-900">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Archive className="w-10 h-10 text-slate-300" />
              <h1 className="text-5xl font-bold">Arquivo de Análises</h1>
            </div>
            <p className="text-xl text-slate-300">
              Sistema Tipográfico ADAPTA — Processo Completo de Decisão
            </p>
            <p className="text-sm text-slate-400 mt-2">
              Março 2024 — Consolidação de 14 para 9 fontes
            </p>
          </div>
          <button
            onClick={handleExportPDF}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 print:hidden transition-colors"
          >
            <Download className="w-5 h-5" />
            Exportar PDF
          </button>
        </div>
      </div>

      {/* Índice */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">📋 Índice de Análises</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">Fase 1: Diagnóstico</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Sistema inicial (14 fontes)</li>
              <li>• Análise de gaps e redundâncias</li>
              <li>• Benchmarking com sistemas robustos</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">Fase 2: Exploração</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Lato vs Alternativas</li>
              <li>• Superfamílias (IBM Plex, Source, Inter, CMU)</li>
              <li>• Urbanist análise (18 pesos)</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">Fase 3: Refinamento</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Elegância + Arredondamento</li>
              <li>• Crimson Pro + DM (decisão final)</li>
              <li>• Core reduzido para 2 famílias</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-2">Resultado Final</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 9 fontes (5 core + 4 expressivas)</li>
              <li>• Redução de 36% (14 → 9)</li>
              <li>• Core em 2 famílias (Crimson Pro + DM)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Seção 1: Jornada de Consolidação */}
      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
        <button
          onClick={() => toggleSection('jornada')}
          className="w-full flex items-center justify-between mb-4"
        >
          <h2 className="text-3xl font-bold text-slate-900">1. Jornada de Consolidação</h2>
          {expandedSections.jornada ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>
        
        {expandedSections.jornada && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">❌ Sistema Inicial (14 fontes)</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-bold text-red-700 mb-2">CORE (12):</div>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>1. MuseoModerno</li>
                      <li>2. Montserrat</li>
                      <li>3. Glacial Indifference</li>
                      <li>4. Manrope</li>
                      <li>5. Work Sans</li>
                      <li>6. Hind Siliguri</li>
                      <li>7. Cormorant Garamond</li>
                      <li>8. EB Garamond</li>
                      <li>9. Lora</li>
                      <li>10. IBM Plex Serif</li>
                      <li>11. JetBrains Mono</li>
                      <li>12. SUSE Mono</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-red-700 mb-2">EXPRESSIVAS (2):</div>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>13. Ofissina</li>
                      <li>14. FOMO</li>
                    </ul>
                  </div>
                  <div className="bg-red-200 border border-red-400 rounded-lg p-3 mt-4">
                    <div className="text-xs font-bold text-red-800 mb-1">PROBLEMAS:</div>
                    <ul className="text-xs text-red-900 space-y-1">
                      <li>• 5 sans similares (overlap)</li>
                      <li>• 4 serif redundantes</li>
                      <li>• 2 mono competindo</li>
                      <li>• Muitas expressivas faltando</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">✅ Sistema Final (9 fontes)</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-bold text-emerald-700 mb-2">CORE (5) — 2 Famílias:</div>
                    <ul className="text-sm text-emerald-800 space-y-1">
                      <li>1. MuseoModerno (brand)</li>
                      <li>2. Crimson Pro (serif elegante)</li>
                      <li>3. DM Sans (workhorse 10 pesos)</li>
                      <li>4. DM Mono (código)</li>
                      <li>5. Nunito (friendly)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-emerald-700 mb-2">EXPRESSIVAS (4):</div>
                    <ul className="text-sm text-emerald-800 space-y-1">
                      <li>6. Urbanist (display 18 pesos)</li>
                      <li>7. Ofissina (brazilidade)</li>
                      <li>8. FOMO (ativismo)</li>
                      <li>9. Cause (depoimentos)</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-200 border border-emerald-400 rounded-lg p-3 mt-4">
                    <div className="text-xs font-bold text-emerald-800 mb-1">CONQUISTAS:</div>
                    <ul className="text-xs text-emerald-900 space-y-1">
                      <li>• -36% redução (14 → 9)</li>
                      <li>• Core em 2 famílias apenas</li>
                      <li>• 98% elegância (vs 85% IBM Plex)</li>
                      <li>• 100% cobertura funcional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Seção 2: Análises Realizadas */}
      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
        <button
          onClick={() => toggleSection('analises')}
          className="w-full flex items-center justify-between mb-4"
        >
          <h2 className="text-3xl font-bold text-slate-900">2. Análises Realizadas</h2>
          {expandedSections.analises ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>
        
        {expandedSections.analises && (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-2">📊 Lato vs Alternativas</h3>
              <p className="text-sm text-blue-800">
                Análise comparativa: Lato (18 pesos humanista) vs Inter, Source Sans, Work Sans, Manrope.
                Conclusão: Lato excelente mas não necessária com DM Sans.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-purple-900 mb-2">📦 Superfamílias Completas</h3>
              <p className="text-sm text-purple-800 mb-2">
                Comparação de superfamílias grátis (Sans + Serif + Mono):
              </p>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• IBM Plex (95 pts) — Vencedora coesão</li>
                <li>• Source (Adobe) (88 pts) — Elegância editorial</li>
                <li>• Inter + Source Serif (89 pts) — Mix moderno</li>
                <li>• CMU (92 pts) — Credibilidade científica máxima</li>
                <li>• Crimson Pro + DM (94 pts) — ESCOLHIDA ✅</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-amber-900 mb-2">✨ Urbanist (18 pesos)</h3>
              <p className="text-sm text-amber-800">
                Geométrica cosmopolita com 18 pesos (100-900). Versatilidade display excepcional.
                Pode substituir Montserrat com mais elegância.
              </p>
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
              <h3 className="font-bold text-rose-900 mb-2">🌸 Elegância + Arredondamento</h3>
              <p className="text-sm text-rose-800">
                Requisito: IBM Plex é quadrada demais. Análise de 6 alternativas elegantes:
                Crimson Pro + DM = máxima elegância (98%) + arredondamento (88%).
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-900 mb-2">🏛️ Padrões de Sistemas Robustos</h3>
              <p className="text-sm text-green-800">
                Benchmarking com IBM, Stripe, Airbnb, Medium, Google Material.
                20 padrões analisados — ADAPTA score: 70%.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Seção 3: Decisões-Chave */}
      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
        <button
          onClick={() => toggleSection('decisoes')}
          className="w-full flex items-center justify-between mb-4"
        >
          <h2 className="text-3xl font-bold text-slate-900">3. Decisões-Chave</h2>
          {expandedSections.decisoes ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>
        
        {expandedSections.decisoes && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border-2 border-emerald-400 rounded-lg p-5">
              <h3 className="font-bold text-emerald-900 mb-3">✅ POR QUÊ CRIMSON PRO + DM?</h3>
              <div className="space-y-2 text-sm text-emerald-800">
                <div className="flex items-start gap-2">
                  <span className="font-bold">1.</span>
                  <div>
                    <strong>Elegância orgânica:</strong> Crimson Pro = old-style humanista (Garamond-like) vs IBM Plex grotesk quadrada.
                    Perfeita para cannabis medicinal = naturalidade + ciência.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">2.</span>
                  <div>
                    <strong>DM Sans = 10 pesos:</strong> Máxima versatilidade. Geométrica suave (não quadrada).
                    Variable font = performance excepcional.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">3.</span>
                  <div>
                    <strong>Reduz core para 2 famílias:</strong> Crimson Pro (1 família serif) + DM (1 família sans+mono).
                    Simplificação máxima sem perder funcionalidade.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">4.</span>
                  <div>
                    <strong>Google Fonts + Variable:</strong> Fácil implementação, performance, open source.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-5">
              <h3 className="font-bold text-blue-900 mb-3">📊 COMPARATIVO FINAL</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-blue-200">
                    <tr>
                      <th className="p-2 text-left">Aspecto</th>
                      <th className="p-2 text-center">IBM Plex</th>
                      <th className="p-2 text-center">Source</th>
                      <th className="p-2 text-center">Crimson+DM ✅</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr className="bg-white">
                      <td className="p-2 font-medium">Superfamília única?</td>
                      <td className="p-2 text-center">✅ SIM</td>
                      <td className="p-2 text-center">✅ SIM</td>
                      <td className="p-2 text-center">❌ Mix</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="p-2 font-medium">Arredondamento</td>
                      <td className="p-2 text-center">75%</td>
                      <td className="p-2 text-center">82%</td>
                      <td className="p-2 text-center font-bold text-emerald-700">88% ⭐</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 font-medium">Elegância</td>
                      <td className="p-2 text-center">85%</td>
                      <td className="p-2 text-center">90%</td>
                      <td className="p-2 text-center font-bold text-emerald-700">98% ⭐</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="p-2 font-medium">Warmth</td>
                      <td className="p-2 text-center">75%</td>
                      <td className="p-2 text-center">78%</td>
                      <td className="p-2 text-center font-bold text-emerald-700">85% ⭐</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 font-medium">Cannabis medicinal</td>
                      <td className="p-2 text-center">85%</td>
                      <td className="p-2 text-center">88%</td>
                      <td className="p-2 text-center font-bold text-emerald-700">94% ⭐</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="p-2 font-medium">Google Fonts?</td>
                      <td className="p-2 text-center">✅ SIM</td>
                      <td className="p-2 text-center">✅ SIM</td>
                      <td className="p-2 text-center">✅ SIM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Seção 4: Sistema Final Aprovado */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">4. Sistema Final Aprovado — CORE</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30">
            <h3 className="text-xl font-bold mb-4">👑 FAMÍLIA 1: Crimson Pro</h3>
            <ul className="space-y-2 text-emerald-100">
              <li>• Old-style serif elegante (Garamond-like)</li>
              <li>• Variable font (200-900)</li>
              <li>• Textos científicos, papers, artigos</li>
              <li>• Revista VerdeVox (corpo)</li>
            </ul>
          </div>

          <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30">
            <h3 className="text-xl font-bold mb-4">👑 FAMÍLIA 2: DM</h3>
            <ul className="space-y-2 text-emerald-100">
              <li>• DM Sans (10 pesos! workhorse)</li>
              <li>• DM Mono (código/dados)</li>
              <li>• Variable fonts</li>
              <li>• UI, navegação, interface</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur rounded-xl p-6 border border-white/30 mt-6">
          <h3 className="text-xl font-bold mb-4">+ Complementos</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="font-bold text-emerald-200">MuseoModerno</div>
              <div className="text-sm text-emerald-100">Brand ADAPTA (única palavra institucional)</div>
            </div>
            <div>
              <div className="font-bold text-emerald-200">Nunito</div>
              <div className="text-sm text-emerald-100">Friendly onboarding, tutoriais</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-500/30 border border-amber-400/50 rounded-xl p-6 mt-6">
          <h3 className="text-xl font-bold text-amber-100 mb-3">⚠️ EXPRESSIVAS — PENDENTE DECISÃO</h3>
          <p className="text-amber-100">
            Core aprovado (5 fontes). Expressivas (4-6 fontes) ainda em análise.
            Candidatas: FOMO, Cause, Ofissina, Mayonice, Bolupisang, Urbanist.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-6 text-center">
        <p className="text-slate-600 text-sm">
          ADAPTA — Sistema Tipográfico Cannabis Medicinal<br/>
          Análise completa: Março 2024<br/>
          De 14 fontes iniciais → 9 fontes finais (-36% redução)
        </p>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: white; }
          .print\\:hidden { display: none !important; }
          .print\\:bg-slate-900 { background: #0f172a !important; }
          button { display: none !important; }
          [class*="rounded"] { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
