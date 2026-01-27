import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Users, Heart, Award } from "lucide-react";

export default function TrabalheConoscoPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Trabalhe <span className="text-primary">Conosco</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Conheça as atuais oportunidades disponíveis para trabalhar na Printbag
            </p>
            
            <Button variant="cta" size="xl" asChild>
              <a 
                href="https://grupoweisul.vagas.solides.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver Vagas Disponíveis
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Ambiente Inclusivo
              </h3>
              <p className="text-muted-foreground text-sm">
                Valorizamos a diversidade e promovemos um ambiente onde todos podem crescer juntos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Oportunidades Justas
              </h3>
              <p className="text-muted-foreground text-sm">
                Trabalhamos continuamente para oferecer oportunidades justas e valorizar talentos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Crescimento Profissional
              </h3>
              <p className="text-muted-foreground text-sm">
                Investimos no desenvolvimento de nossos colaboradores e em suas carreiras.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12 border border-border">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 text-center">
                Declaração de Transparência e Igualdade Salarial
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
                Na Printbag, acreditamos que sustentabilidade também é responsabilidade social. 
                Por isso, acompanhamos e divulgamos relatórios oficiais de igualdade salarial 
                entre mulheres e homens, reforçando nosso compromisso com a transparência, 
                a diversidade e o respeito às pessoas. Trabalhamos continuamente para oferecer 
                oportunidades justas, valorizar talentos e promover um ambiente inclusivo, 
                onde todos possam crescer juntos.
              </p>

              <div className="flex justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a 
                    href="/documents/relatorio-igualdade-salarial.pdf" 
                    download="Relatorio-Igualdade-Salarial-Printbag.pdf"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Baixar Relatório na Íntegra
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
