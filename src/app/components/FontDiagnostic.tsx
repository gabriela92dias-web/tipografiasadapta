import { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface FontStatus {
  name: string;
  installed: boolean;
  category: string;
  fallback: string;
}

export function FontDiagnostic() {
  const [fontStatuses, setFontStatuses] = useState<FontStatus[]>([]);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkFonts = async () => {
      // Espera um pouco para garantir que as fontes tentaram carregar
      await new Promise(resolve => setTimeout(resolve, 1000));

      const fontsToCheck = [
        { name: 'FOMO', category: 'Expressiva', fallback: 'sans-serif' },
        { name: 'Bolupisang', category: 'Expressiva', fallback: 'cursive' },
        { name: 'SUSE Mono', category: 'Core', fallback: 'monospace' },
        { name: 'Cause', category: 'Expressiva', fallback: 'cursive' },
        { name: 'Ofissina', category: 'Expressiva', fallback: 'sans-serif' },
        { name: 'Mayonice', category: 'Expressiva', fallback: 'cursive' },
      ];

      const results: FontStatus[] = [];

      for (const font of fontsToCheck) {
        const installed = await isFontAvailable(font.name, font.fallback);
        results.push({
          name: font.name,
          installed,
          category: font.category,
          fallback: font.fallback
        });
      }

      setFontStatuses(results);
      setIsChecking(false);
    };

    checkFonts();
  }, []);

  // Função para detectar se uma fonte está instalada
  const isFontAvailable = (fontName: string, fallbackFont: string): Promise<boolean> => {
    return new Promise((resolve) => {
      // Método 1: FontFaceSet API (mais confiável quando disponível)
      if ('fonts' in document) {
        // @ts-ignore - document.fonts existe mas TypeScript pode não reconhecer
        document.fonts.load(`12px "${fontName}"`).then(
          () => {
            // @ts-ignore
            const hasFont = document.fonts.check(`12px "${fontName}"`);
            if (hasFont) {
              resolve(true);
              return;
            }
            // Se FontFaceSet não detectou, tenta método de medição
            resolveFallbackMethod();
          },
          () => {
            // Se load falhou, tenta método de medição
            resolveFallbackMethod();
          }
        );
      } else {
        // Se FontFaceSet não existe, usa método de medição
        resolveFallbackMethod();
      }

      function resolveFallbackMethod() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        if (!context) {
          resolve(false);
          return;
        }

        // Usa múltiplas strings de teste para maior precisão
        const testStrings = [
          'mmmmmmmmmmlli',
          'ABCDEFGHIJKLM',
          '0123456789',
          'iIl1O0'
        ];
        const testSize = '72px';
        
        let differences = 0;
        
        for (const testString of testStrings) {
          // Mede com fonte fallback
          context.font = `${testSize} ${fallbackFont}`;
          const fallbackWidth = context.measureText(testString).width;
          
          // Mede com fonte desejada
          context.font = `${testSize} "${fontName}", ${fallbackFont}`;
          const testWidth = context.measureText(testString).width;
          
          // Se as larguras são diferentes, conta como diferença
          if (Math.abs(testWidth - fallbackWidth) > 0.5) {
            differences++;
          }
        }
        
        // Se pelo menos 2 das 4 strings mostraram diferença, considera instalada
        resolve(differences >= 2);
      }
    });
  };

  const installedCount = fontStatuses.filter(f => f.installed).length;
  const notInstalledCount = fontStatuses.filter(f => !f.installed).length;

  if (isChecking) {
    return (
      <div className="bg-slate-100 border-2 border-slate-300 rounded-3xl p-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-4 border-slate-300 border-t-emerald-600 rounded-full animate-spin"></div>
          <div className="text-lg font-semibold text-slate-700">Verificando fontes instaladas...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`border-2 rounded-3xl p-8 ${
      notInstalledCount > 0 
        ? 'bg-amber-50 border-amber-300' 
        : 'bg-emerald-50 border-emerald-300'
    }`}>
      <div className="flex items-center gap-3 mb-6">
        {notInstalledCount > 0 ? (
          <AlertCircle className="w-8 h-8 text-amber-600" />
        ) : (
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        )}
        <h2 className={`text-2xl font-bold ${
          notInstalledCount > 0 ? 'text-amber-900' : 'text-emerald-900'
        }`}>
          {notInstalledCount > 0 
            ? '⚠️ Diagnóstico Automático de Fontes'
            : '✅ Todas as Fontes Locais Detectadas!'
          }
        </h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 border-2 border-emerald-300">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <div className="text-sm font-semibold text-emerald-900">INSTALADAS</div>
          </div>
          <div className="text-3xl font-bold text-emerald-600">{installedCount}</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border-2 border-red-300">
          <div className="flex items-center gap-2 mb-1">
            <XCircle className="w-5 h-5 text-red-600" />
            <div className="text-sm font-semibold text-red-900">FALTANDO</div>
          </div>
          <div className="text-3xl font-bold text-red-600">{notInstalledCount}</div>
        </div>
      </div>

      {/* Font List */}
      <div className="space-y-3 mb-6">
        {fontStatuses.map((font) => (
          <div 
            key={font.name}
            className={`bg-white rounded-xl p-4 border-2 transition-all ${
              font.installed 
                ? 'border-emerald-300 shadow-sm' 
                : 'border-red-300 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {font.installed ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                )}
                
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-bold text-slate-900">{font.name}</div>
                    <div className={`text-xs px-2 py-1 rounded ${
                      font.category === 'Expressiva' 
                        ? 'bg-purple-200 text-purple-800'
                        : 'bg-blue-200 text-blue-800'
                    }`}>
                      {font.category}
                    </div>
                  </div>
                  
                  <div className="text-sm text-slate-600">
                    {font.installed ? (
                      <span className="text-emerald-700 font-semibold">✓ Detectada e funcionando</span>
                    ) : (
                      <span className="text-red-700 font-semibold">✗ NÃO instalada (usando fallback: {font.fallback})</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Visual Test */}
              <div className="text-right">
                <div 
                  style={{ fontFamily: `'${font.name}', ${font.fallback}` }}
                  className="text-2xl font-bold"
                >
                  {font.name === 'FOMO' && 'ABCDE'}
                  {font.name === 'Bolupisang' && 'Hello'}
                  {font.name === 'SUSE Mono' && 'Code'}
                  {font.name === 'Cause' && 'Care'}
                  {font.name === 'Ofissina' && 'Brasil'}
                  {font.name === 'Mayonice' && 'Sign'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      {notInstalledCount > 0 && (
        <div className="bg-amber-100 border border-amber-300 rounded-xl p-5">
          <div className="text-sm text-amber-900">
            <strong>💡 Como resolver:</strong><br/>
            <br/>
            <strong>1. Baixa as fontes:</strong><br/>
            {!fontStatuses.find(f => f.name === 'FOMO')?.installed && (
              <>• <strong>FOMO</strong> — Procura no dafont.com ou foundries de design<br/></>
            )}
            {!fontStatuses.find(f => f.name === 'Bolupisang')?.installed && (
              <>• <strong>Bolupisang</strong> — <a href="https://locomotype.com/bolupisang/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">locomotype.com/bolupisang</a><br/></>
            )}
            {!fontStatuses.find(f => f.name === 'SUSE Mono')?.installed && (
              <>• <strong>SUSE Mono</strong> — Procura no Google Fonts ou opensuse.org<br/></>
            )}
            {!fontStatuses.find(f => f.name === 'Cause')?.installed && (
              <>• <strong>Cause</strong> — Fonte local (verifica se tens instalada)<br/></>
            )}
            {!fontStatuses.find(f => f.name === 'Ofissina')?.installed && (
              <>• <strong>Ofissina</strong> — Fonte local (verifica se tens instalada)<br/></>
            )}
            {!fontStatuses.find(f => f.name === 'Mayonice')?.installed && (
              <>• <strong>Mayonice</strong> — Fonte local (verifica se tens instalada)<br/></>
            )}
            <br/>
            <strong>2. Instala no sistema:</strong><br/>
            • Windows: Duplo-clique no .ttf/.otf → "Instalar"<br/>
            • Mac: Duplo-clique → "Instalar Fonte"<br/>
            • Linux: Copia para ~/.fonts/<br/>
            <br/>
            <strong>3. Recarrega a página</strong> (F5 ou Cmd+R)<br/>
            <br/>
            <div className="bg-amber-200 border border-amber-400 rounded-lg p-3 mt-3">
              <strong>⚡ Alternativa:</strong> Se não consegues instalar estas fontes, posso substituí-las por fontes do Google Fonts que funcionam sem instalação. Queres que eu faça isso?
            </div>
          </div>
        </div>
      )}

      {notInstalledCount === 0 && (
        <div className="bg-emerald-100 border border-emerald-300 rounded-xl p-5">
          <div className="text-sm text-emerald-900">
            <strong>🎉 Perfeito!</strong> Todas as fontes locais foram detectadas e estão funcionando corretamente. 
            O sistema tipográfico ADAPTA está 100% operacional!
          </div>
        </div>
      )}
    </div>
  );
}