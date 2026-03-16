import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ClipboardList, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SummaryItem {
  label: string;
  value: string | string[];
}

interface FlowLiveSummaryProps {
  items: SummaryItem[];
  isComplete: boolean;
  onSubmit: () => void;
}

export function FlowLiveSummary({ items, isComplete, onSubmit }: FlowLiveSummaryProps) {
  const hasItems = items.length > 0;

  return (
    <div className="bg-muted rounded-2xl p-6 md:p-8 sticky top-32">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <ClipboardList className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-foreground text-lg">
            Resumo da seleção
          </h3>
          <p className="text-xs text-muted-foreground">
            {hasItems ? `${items.length} ${items.length === 1 ? "item selecionado" : "itens selecionados"}` : "Nenhuma seleção ainda"}
          </p>
        </div>
      </div>

      <div className="space-y-3 min-h-[120px]">
        {!hasItems && (
          <p className="text-sm text-muted-foreground italic py-4 text-center">
            Selecione um produto para começar
          </p>
        )}
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10, height: 0 }}
              animate={{ opacity: 1, x: 0, height: "auto" }}
              exit={{ opacity: 0, x: 10, height: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <span className="text-muted-foreground">{item.label}:</span>{" "}
                <span className="font-medium text-foreground">
                  {Array.isArray(item.value) ? item.value.join(", ") : item.value}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {isComplete && hasItems && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 pt-6 border-t border-border"
        >
          <Button
            variant="cta"
            size="lg"
            className="w-full"
            onClick={onSubmit}
          >
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
