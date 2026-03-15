// Database técnico completo das fontes ADAPTA

export interface TypeCharacteristics {
  name: string;
  category: 'core' | 'expressive';
  
  // Classificação primária
  classification: 'serif' | 'sans-serif' | 'display' | 'script' | 'monospace';
  
  // Sub-classificação
  subclass: 
    | 'geometric-sans' 
    | 'humanist-sans' 
    | 'grotesque-sans'
    | 'transitional-serif'
    | 'oldstyle-serif'
    | 'slab-serif'
    | 'display-sans'
    | 'display-serif'
    | 'script-casual'
    | 'all-caps'
    | 'monospace';
  
  // Anatomia estrutural
  width: 'condensed' | 'regular' | 'extended';
  weightsAvailable: number[]; // 100-900
  contrast: 'low' | 'medium' | 'high'; // contraste entre hastes
  xHeight: 'low' | 'medium' | 'high'; // altura-x relativa
  
  // Características técnicas
  hasItalic: boolean;
  hasSmallCaps: boolean;
  tabularFigures: boolean; // números de largura fixa
  
  // Casos de uso primários
  useCases: Array<'display' | 'heading' | 'body' | 'ui' | 'data' | 'decorative' | 'editorial'>;
  
  // Performance
  readabilityScore: number; // 1-10 para texto longo
  screenOptimized: boolean;
  printOptimized: boolean;
  
  // Metadados
  licensingIssue?: string;
  similarTo?: string[]; // nomes de outras fontes no sistema que são similares
}

export const fontDatabase: TypeCharacteristics[] = [
  // ═══════════════════════════════════════════════════════════
  // CORE FONTS
  // ═══════════════════════════════════════════════════════════
  {
    name: 'MuseoModerno',
    category: 'core',
    classification: 'sans-serif',
    subclass: 'display-sans',
    width: 'regular',
    weightsAvailable: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    contrast: 'medium',
    xHeight: 'medium',
    hasItalic: false,
    hasSmallCaps: false,
    tabularFigures: false,
    useCases: ['display', 'heading'],
    readabilityScore: 6,
    screenOptimized: true,
    printOptimized: true,
    similarTo: []
  },
  {
    name: 'Montserrat',
    category: 'core',
    classification: 'sans-serif',
    subclass: 'geometric-sans',
    width: 'regular',
    weightsAvailable: [300, 400, 500, 600, 700],
    contrast: 'low',
    xHeight: 'high',
    hasItalic: true,
    hasSmallCaps: false,
    tabularFigures: true,
    useCases: ['heading', 'ui', 'body', 'data'],
    readabilityScore: 9,
    screenOptimized: true,
    printOptimized: true,
    similarTo: ['SUSE'] // ambas geometric sans
  },
  {
    name: 'Glacial Indifference',
    category: 'core',
    classification: 'sans-serif',
    subclass: 'humanist-sans',
    width: 'regular',
    weightsAvailable: [400, 700], // CDN Fonts limitado
    contrast: 'low',
    xHeight: 'high',
    hasItalic: true,
    hasSmallCaps: false,
    tabularFigures: false,
    useCases: ['body', 'ui', 'data'],
    readabilityScore: 10,
    screenOptimized: true,
    printOptimized: true,
    similarTo: []
  },
  {
    name: 'Cormorant Garamond',
    category: 'core',
    classification: 'serif',
    subclass: 'transitional-serif',
    width: 'regular',
    weightsAvailable: [400, 500, 600, 700],
    contrast: 'high',
    xHeight: 'medium',
    hasItalic: true,
    hasSmallCaps: false,
    tabularFigures: false,
    useCases: ['editorial', 'heading', 'display'],
    readabilityScore: 8,
    screenOptimized: false,
    printOptimized: true,
    similarTo: []
  },
  
  // ═══════════════════════════════════════════════════════════
  // EXPRESSIVAS
  // ═══════════════════════════════════════════════════════════
  {
    name: 'All Caps',
    category: 'expressive',
    classification: 'sans-serif',
    subclass: 'all-caps',
    width: 'extended',
    weightsAvailable: [400],
    contrast: 'low',
    xHeight: 'high',
    hasItalic: false,
    hasSmallCaps: false,
    tabularFigures: false,
    useCases: ['display', 'decorative'],
    readabilityScore: 3,
    screenOptimized: false,
    printOptimized: true,
    similarTo: []
  },
  {
    name: 'Cause',
    category: 'expressive',
    classification: 'script',
    subclass: 'script-casual',
    width: 'regular',
    weightsAvailable: [400],
    contrast: 'medium',
    xHeight: 'low',
    hasItalic: false,
    hasSmallCaps: false,
    tabularFigures: false,
    useCases: ['decorative', 'heading'],
    readabilityScore: 4,
    screenOptimized: false,
    printOptimized: true,
    similarTo: ['Mayonice'] // ambas script/decorativas
  },
  {
    name: 'SUSE',
    category: 'expressive',
    classification: 'sans-serif',
    subclass: 'geometric-sans',
    width: 'regular',
    weightsAvailable: [400, 500, 600, 700, 800],
    contrast: 'low',
    xHeight: 'high',
    hasItalic: false,
    hasSmallCaps: false,
    tabularFigures: false,
    useCases: ['heading', 'display', 'ui'],
    readabilityScore: 8,
    screenOptimized: true,
    printOptimized: true,
    similarTo: ['Montserrat'] // ambas geometric sans
  },
  {
    name: 'Ofissina',
    category: 'expressive',
    classification: 'sans-serif',
    subclass: 'humanist-sans',
    width: 'regular',
    weightsAvailable: [400],
    contrast: 'low',
    xHeight: 'medium',
    hasItalic: false,
    hasSmallCaps: false,
    tabularFigures: false,
    useCases: ['heading', 'decorative'],
    readabilityScore: 6,
    screenOptimized: true,
    printOptimized: true,
    similarTo: []
  },
  {
    name: 'Mayonice',
    category: 'expressive',
    classification: 'script',
    subclass: 'script-casual',
    width: 'regular',
    weightsAvailable: [400],
    contrast: 'high',
    xHeight: 'low',
    hasItalic: false,
    hasSmallCaps: false,
    tabularFigures: false,
    useCases: ['decorative'],
    readabilityScore: 2,
    screenOptimized: false,
    printOptimized: true,
    similarTo: ['Cause'] // ambas script
  },
  {
    name: 'Fomo',
    category: 'expressive',
    classification: 'sans-serif',
    subclass: 'display-sans',
    width: 'regular',
    weightsAvailable: [400],
    contrast: 'low',
    xHeight: 'medium',
    hasItalic: false,
    hasSmallCaps: false,
    tabularFigures: false,
    useCases: ['display', 'decorative'],
    readabilityScore: 5,
    screenOptimized: true,
    printOptimized: true,
    licensingIssue: '⚠️ Apenas uso pessoal - Requer licença comercial',
    similarTo: []
  }
];

// ═══════════════════════════════════════════════════════════
// ANÁLISE DE GAPS - O que falta no sistema
// ═══════════════════════════════════════════════════════════
export interface SystemGap {
  category: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  impact: string;
  suggestions: string[];
}

export const systemGaps: SystemGap[] = [
  {
    category: 'Monospace',
    severity: 'high',
    description: 'Sistema não possui fonte monospace/código',
    impact: 'Impossível exibir código, dados técnicos tabulares, ou IDs de lote com alinhamento preciso',
    suggestions: ['JetBrains Mono', 'Fira Code', 'IBM Plex Mono', 'Roboto Mono']
  },
  {
    category: 'Sans Condensed',
    severity: 'medium',
    description: 'Não há variante condensada para espaços limitados',
    impact: 'Dificuldade em embalagens pequenas, tabelas densas, ou UI com muito texto',
    suggestions: ['Montserrat Condensed', 'Roboto Condensed', 'Barlow Condensed']
  },
  {
    category: 'Slab Serif',
    severity: 'medium',
    description: 'Ausência de serif robusta/mecânica',
    impact: 'Falta opção para comunicação técnica confiável com personalidade',
    suggestions: ['Roboto Slab', 'Zilla Slab', 'Bitter']
  },
  {
    category: 'Weights em Glacial',
    severity: 'high',
    description: 'Glacial apenas em 400 e 700 (CDN Fonts limitado)',
    impact: 'Hierarquia limitada na fonte principal de corpo de texto',
    suggestions: ['Migrar para fonte similar com mais pesos: Inter, Open Sans, Noto Sans']
  },
  {
    category: 'Redundância Geometric Sans',
    severity: 'low',
    description: 'Montserrat e SUSE são muito similares (ambas geometric sans)',
    impact: 'Confusão na escolha, diluição de identidade',
    suggestions: ['Eliminar SUSE, manter apenas Montserrat']
  },
  {
    category: 'Redundância Script',
    severity: 'medium',
    description: 'Cause e Mayonice ambas script/decorativas com uso limitado',
    impact: 'Baixa funcionalidade, uso raramente justificado',
    suggestions: ['Manter apenas Cause (mais versátil), eliminar Mayonice']
  }
];
