import { 
  ShoppingBag, 
  Box, 
  FileText, 
  Scissors, 
  Tag, 
  Package, 
  Layers,
  Sparkles,
  Printer
} from "lucide-react";

// Bag type options
export const bagTypeOptions = [
  { 
    id: "sem-enobrecimento", 
    label: "Sacolas sem enobrecimento",
    description: "Simples, funcionais e econômicas."
  },
  { 
    id: "enobrecidas", 
    label: "Sacolas enobrecidas",
    description: "Acabamentos premium que valorizam a marca."
  }
];

// Paper type options for bags without finishing
export const bagPaperOptionsSimple = [
  { id: "kraft", label: "Kraft" },
  { id: "branco", label: "Branco" }
];

// Paper type options for premium bags
export const bagPaperOptionsPremium = [
  { id: "kraft", label: "Kraft" },
  { id: "branco", label: "Branco" },
  { id: "especial", label: "Especial" }
];

// Handle type options for simple bags
export const bagHandleOptionsSimple = [
  { id: "papel-torcido", label: "Papel torcido" },
  { id: "cordao", label: "Cordão" },
  { id: "fita", label: "Fita" },
  { id: "flat", label: "Flat" }
];

// Handle type options for premium bags
export const bagHandleOptionsPremium = [
  { id: "cordao", label: "Cordão" },
  { id: "fita", label: "Fita" },
  { id: "papel", label: "Papel" },
  { id: "flat", label: "Flat" }
];

// Finishing options for premium bags (multi-select)
export const bagFinishingOptions = [
  { id: "hot-stamping", label: "Hot stamping" },
  { id: "relevo", label: "Relevo" },
  { id: "laminacao", label: "Laminação" },
  { id: "verniz-localizado", label: "Verniz localizado" }
];

// Box type options
export const boxTypeOptions = [
  { 
    id: "simples", 
    label: "Caixas simples",
    description: "Funcionais, econômicas e ideais para alto volume."
  },
  { 
    id: "enobrecidas", 
    label: "Caixas enobrecidas",
    description: "Soluções premium para valorização da marca."
  }
];

// Box structure options for simple boxes
export const boxStructureOptionsSimple = [
  { id: "automontavel", label: "Caixa automontável" },
  { id: "tampa-solta", label: "Caixa com tampa (tampa solta)" },
  { id: "gaveta", label: "Caixa tipo gaveta" },
  { id: "padrao", label: "Caixa padrão (colagem simples)" }
];

// Box structure options for premium boxes
export const boxStructureOptionsPremium = [
  { id: "tampa-fundo", label: "Caixa com tampa e fundo" },
  { id: "gaveta-premium", label: "Caixa gaveta premium" }
];

// Paper options for simple boxes
export const boxPaperOptionsSimple = [
  { id: "kraft", label: "Kraft" },
  { id: "branco", label: "Branco" },
  { id: "outro", label: "Outro" }
];

// Paper options for premium boxes
export const boxPaperOptionsPremium = [
  { id: "couche", label: "Couchê" },
  { id: "triplex", label: "Cartão triplex" },
  { id: "especial", label: "Papel especial" }
];

// Printing options for simple boxes
export const boxPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "simples", label: "Impressão simples (1 cor)" },
  { id: "offset", label: "Impressão offset" }
];

// Finishing options for premium boxes (multi-select)
export const boxFinishingOptions = [
  { id: "hot-stamping", label: "Hot stamping" },
  { id: "relevo", label: "Relevo" },
  { id: "verniz-localizado", label: "Verniz localizado" },
  { id: "laminacao", label: "Laminação fosca ou brilho" }
];

// Extra options for premium boxes (multi-select)
export const boxExtraOptions = [
  { id: "berco-interno", label: "Berço interno" },
  { id: "papel-seda", label: "Papel de seda interno" },
  { id: "enchimento", label: "Enchimento / proteção" }
];

// ========================
// ENVELOPE OPTIONS
// ========================

// Envelope type options
export const envelopeTypeOptions = [
  { 
    id: "simples", 
    label: "Envelope simples",
    description: "Funcional, econômico e ideal para alto volume."
  },
  { 
    id: "enobrecido", 
    label: "Envelope enobrecido",
    description: "Mais sofisticação para valorizar a experiência do cliente."
  }
];

// Envelope format options for simple envelopes
export const envelopeFormatOptionsSimple = [
  { id: "tradicional", label: "Envelope tradicional" },
  { id: "com-aba", label: "Envelope com aba" },
  { id: "com-visor", label: "Envelope com visor" },
  { id: "tipo-pasta", label: "Envelope tipo pasta" }
];

// Envelope format options for premium envelopes
export const envelopeFormatOptionsPremium = [
  { id: "aba-lateral", label: "Envelope com aba lateral" },
  { id: "pasta-premium", label: "Envelope tipo pasta premium" },
  { id: "fechamento-especial", label: "Envelope com fechamento especial" }
];

// Paper options for simple envelopes
export const envelopePaperOptionsSimple = [
  { id: "kraft", label: "Kraft" },
  { id: "branco", label: "Branco" },
  { id: "outro", label: "Outro" }
];

// Paper options for premium envelopes
export const envelopePaperOptionsPremium = [
  { id: "couche", label: "Couchê" },
  { id: "especial", label: "Papel especial" },
  { id: "cartao", label: "Papel cartão" }
];

// Printing options for simple envelopes
export const envelopePrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "simples", label: "Impressão simples (1 cor)" },
  { id: "offset", label: "Impressão offset" }
];

// Finishing options for premium envelopes (multi-select)
export const envelopeFinishingOptions = [
  { id: "hot-stamping", label: "Hot stamping" },
  { id: "relevo", label: "Relevo" },
  { id: "verniz-localizado", label: "Verniz localizado" },
  { id: "laminacao", label: "Laminação fosca ou brilho" }
];

// Closure options for premium envelopes
export const envelopeClosureOptions = [
  { id: "sem-fechamento", label: "Sem fechamento" },
  { id: "aba-simples", label: "Aba simples" },
  { id: "fita-adesiva", label: "Fita adesiva" }
];

// ========================
// PAPEL DE SEDA OPTIONS
// ========================

// Papel de seda type options
export const papelSedaTypeOptions = [
  { id: "branco", label: "Papel de seda branco" },
  { id: "colorido", label: "Papel de seda colorido" },
  { id: "personalizado", label: "Papel de seda personalizado" }
];

// Papel de seda printing options
export const papelSedaPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "1-cor", label: "Impressão 1 cor" },
  { id: "multicores", label: "Impressão multicores" }
];

// Papel de seda application options
export const papelSedaApplicationOptions = [
  { id: "protecao", label: "Proteção do produto" },
  { id: "envolvimento", label: "Envolvimento para apresentação" },
  { id: "unboxing", label: "Experiência de unboxing" }
];

// ========================
// ETIQUETA OPTIONS
// ========================

// Etiqueta type options
export const etiquetaTypeOptions = [
  { id: "adesiva", label: "Etiqueta adesiva" },
  { id: "amarracao", label: "Etiqueta para amarração" },
  { id: "promocional", label: "Etiqueta promocional" },
  { id: "informativa", label: "Etiqueta informativa" }
];

// Etiqueta material options
export const etiquetaMaterialOptions = [
  { id: "couche", label: "Papel couchê" },
  { id: "offset", label: "Papel offset" },
  { id: "kraft", label: "Papel kraft" }
];

// Etiqueta printing options
export const etiquetaPrintingOptions = [
  { id: "1-cor", label: "1 cor" },
  { id: "multicor", label: "Multicor" },
  { id: "sem-impressao", label: "Sem impressão" }
];

// Etiqueta finishing options (multi-select)
export const etiquetaFinishingOptions = [
  { id: "verniz", label: "Verniz" },
  { id: "laminacao", label: "Laminação" },
  { id: "corte-especial", label: "Corte especial" },
  { id: "sem-acabamento", label: "Sem acabamento" }
];

// ========================
// TAG OPTIONS
// ========================

// Tag type options
export const tagTypeOptions = [
  { id: "simples", label: "Tag simples" },
  { id: "personalizada", label: "Tag personalizada" },
  { id: "promocional", label: "Tag promocional" }
];

// Tag material options
export const tagMaterialOptions = [
  { id: "cartao", label: "Papel cartão" },
  { id: "especial", label: "Papel especial" },
  { id: "kraft", label: "Kraft" }
];

// Tag printing options
export const tagPrintingOptions = [
  { id: "1-cor", label: "1 cor" },
  { id: "multicor", label: "Multicor" }
];

// Tag finishing options (multi-select)
export const tagFinishingOptions = [
  { id: "furo-simples", label: "Furo simples" },
  { id: "hot-stamping", label: "Hot stamping" },
  { id: "relevo", label: "Relevo" },
  { id: "verniz-localizado", label: "Verniz localizado" },
  { id: "sem-acabamento", label: "Sem acabamento" }
];

// Tag cord options
export const tagCordOptions = [
  { id: "sem-cordao", label: "Sem cordão" },
  { id: "algodao", label: "Cordão algodão" },
  { id: "sintetico", label: "Cordão sintético" },
  { id: "fita", label: "Fita" }
];

// ========================
// SACO OPTIONS
// ========================

// Saco type options
export const sacoTypeOptions = [
  { id: "fundo-quadrado", label: "Saco fundo quadrado" },
  { id: "fundo-v", label: "Saco fundo V" }
];

// Saco material options
export const sacoMaterialOptions = [
  { id: "kraft-natural", label: "Papel kraft natural" },
  { id: "branco", label: "Papel branco" },
  { id: "outro", label: "Outro" }
];

// Saco barrier options
export const sacoBarrierOptions = [
  { id: "nao", label: "Não" },
  { id: "gordura", label: "Sim – resistência à gordura" },
  { id: "gordura-umidade", label: "Sim – resistência à gordura e umidade" }
];

// Saco printing options
export const sacoPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "1-cor", label: "Impressão 1 cor" },
  { id: "multicores", label: "Impressão multicores" }
];

// Saco application options
export const sacoApplicationOptions = [
  { id: "paes", label: "Pães" },
  { id: "lanches", label: "Lanches" },
  { id: "doces", label: "Doces" },
  { id: "farmacia", label: "Produtos de farmácia" },
  { id: "outros-alimentos", label: "Outros alimentos" }
];

// ========================
// PAPEL BARREIRA OPTIONS
// ========================

// Papel barreira protection type options
export const papelBarreiraProtectionOptions = [
  { id: "gordura", label: "Contra gordura" },
  { id: "gordura-umidade", label: "Contra gordura e umidade" },
  { id: "contato-alimento", label: "Contato direto com alimento" }
];

// Papel barreira format options
export const papelBarreiraFormatOptions = [
  { id: "folhas", label: "Folhas" },
  { id: "bobina", label: "Bobina" }
];

// Papel barreira printing options
export const papelBarreiraPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "1-cor", label: "Impressão 1 cor" },
  { id: "multicores", label: "Impressão multicores" }
];

// Papel barreira application options
export const papelBarreiraApplicationOptions = [
  { id: "hamburguer", label: "Hambúrguer" },
  { id: "lanches", label: "Lanches" },
  { id: "alimentos-geral", label: "Alimentos em geral" },
  { id: "restaurante", label: "Restaurante" }
];

// ========================
// GUARDANAPO OPTIONS
// ========================

// Guardanapo type options
export const guardanapoTypeOptions = [
  { id: "simples", label: "Guardanapo simples" },
  { id: "personalizado", label: "Guardanapo personalizado" }
];

// ========================
// PAPEL WRAP OPTIONS
// ========================

// Papel wrap type options
export const papelWrapTypeOptions = [
  { id: "sem-barreira", label: "Sem barreira" },
  { id: "barreira-gordura", label: "Com barreira contra gordura" },
  { id: "barreira-gordura-umidade", label: "Com barreira contra gordura e umidade" }
];

// Papel wrap format options
export const papelWrapFormatOptions = [
  { id: "folhas", label: "Folhas individuais" },
  { id: "bobina", label: "Bobina" }
];

// Papel wrap printing options
export const papelWrapPrintingOptions = [
  { id: "sem-impressao", label: "Sem impressão" },
  { id: "1-cor", label: "Impressão 1 cor" },
  { id: "multicores", label: "Impressão multicores" }
];

// Papel wrap application options
export const papelWrapApplicationOptions = [
  { id: "hamburguer", label: "Hambúrguer" },
  { id: "sanduiches", label: "Sanduíches" },
  { id: "porcoes", label: "Porções" },
  { id: "doces", label: "Doces" }
];

// Flow step definitions
export type FlowStep = 
  | "segment"
  | "product"
  // Bag steps
  | "bag-type"
  | "bag-paper-simple"
  | "bag-handle-simple"
  | "bag-finishing"
  | "bag-paper-premium"
  | "bag-handle-premium"
  // Box steps
  | "box-type"
  | "box-structure-simple"
  | "box-paper-simple"
  | "box-printing"
  | "box-structure-premium"
  | "box-paper-premium"
  | "box-finishing"
  | "box-extras"
  // Envelope steps
  | "envelope-type"
  | "envelope-format-simple"
  | "envelope-paper-simple"
  | "envelope-printing"
  | "envelope-format-premium"
  | "envelope-paper-premium"
  | "envelope-finishing"
  | "envelope-closure"
  // Papel de seda steps
  | "papel-seda-type"
  | "papel-seda-printing"
  | "papel-seda-application"
  // Etiqueta steps
  | "etiqueta-type"
  | "etiqueta-material"
  | "etiqueta-printing"
  | "etiqueta-finishing"
  // Tag steps
  | "tag-type"
  | "tag-material"
  | "tag-printing"
  | "tag-finishing"
  | "tag-cord"
  // Saco steps
  | "saco-type"
  | "saco-material"
  | "saco-barrier"
  | "saco-printing"
  | "saco-application"
  // Papel barreira steps
  | "papel-barreira-protection"
  | "papel-barreira-format"
  | "papel-barreira-printing"
  | "papel-barreira-application"
  // Guardanapo steps
  | "guardanapo-type"
  // Papel wrap steps
  | "papel-wrap-type"
  | "papel-wrap-format"
  | "papel-wrap-printing"
  | "papel-wrap-application"
  // Final step
  | "confirmation";

export interface SelectionState {
  segment: string | null;
  product: string | null;
  // Bag selections
  bagType: string | null;
  bagPaper: string | null;
  bagHandle: string | null;
  bagFinishing: string[];
  // Box selections
  boxType: string | null;
  boxStructure: string | null;
  boxPaper: string | null;
  boxPrinting: string | null;
  boxFinishing: string[];
  boxExtras: string[];
  // Envelope selections
  envelopeType: string | null;
  envelopeFormat: string | null;
  envelopePaper: string | null;
  envelopePrinting: string | null;
  envelopeFinishing: string[];
  envelopeClosure: string | null;
  // Papel de seda selections
  papelSedaType: string | null;
  papelSedaPrinting: string | null;
  papelSedaApplication: string | null;
  // Etiqueta selections
  etiquetaType: string | null;
  etiquetaMaterial: string | null;
  etiquetaPrinting: string | null;
  etiquetaFinishing: string[];
  // Tag selections
  tagType: string | null;
  tagMaterial: string | null;
  tagPrinting: string | null;
  tagFinishing: string[];
  tagCord: string | null;
  // Saco selections
  sacoType: string | null;
  sacoMaterial: string | null;
  sacoBarrier: string | null;
  sacoPrinting: string | null;
  sacoApplication: string | null;
  // Papel barreira selections
  papelBarreiraProtection: string | null;
  papelBarreiraFormat: string | null;
  papelBarreiraPrinting: string | null;
  papelBarreiraApplication: string | null;
  // Guardanapo selections
  guardanapoType: string | null;
  // Papel wrap selections
  papelWrapType: string | null;
  papelWrapFormat: string | null;
  papelWrapPrinting: string | null;
  papelWrapApplication: string | null;
}

export const initialSelectionState: SelectionState = {
  segment: null,
  product: null,
  // Bag
  bagType: null,
  bagPaper: null,
  bagHandle: null,
  bagFinishing: [],
  // Box
  boxType: null,
  boxStructure: null,
  boxPaper: null,
  boxPrinting: null,
  boxFinishing: [],
  boxExtras: [],
  // Envelope
  envelopeType: null,
  envelopeFormat: null,
  envelopePaper: null,
  envelopePrinting: null,
  envelopeFinishing: [],
  envelopeClosure: null,
  // Papel de seda
  papelSedaType: null,
  papelSedaPrinting: null,
  papelSedaApplication: null,
  // Etiqueta
  etiquetaType: null,
  etiquetaMaterial: null,
  etiquetaPrinting: null,
  etiquetaFinishing: [],
  // Tag
  tagType: null,
  tagMaterial: null,
  tagPrinting: null,
  tagFinishing: [],
  tagCord: null,
  // Saco
  sacoType: null,
  sacoMaterial: null,
  sacoBarrier: null,
  sacoPrinting: null,
  sacoApplication: null,
  // Papel barreira
  papelBarreiraProtection: null,
  papelBarreiraFormat: null,
  papelBarreiraPrinting: null,
  papelBarreiraApplication: null,
  // Guardanapo
  guardanapoType: null,
  // Papel wrap
  papelWrapType: null,
  papelWrapFormat: null,
  papelWrapPrinting: null,
  papelWrapApplication: null
};
