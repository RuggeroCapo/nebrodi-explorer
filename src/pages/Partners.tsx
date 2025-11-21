import { Header } from "@/components/Header";
import { Handshake, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const partners = [
  {
    id: 1,
    name: "Parco dei Nebrodi",
    description: "Ente Parco Regionale dei Nebrodi, custode del patrimonio naturalistico dell'area protetta.",
    website: "parcodeinebrodi.it",
    category: "Istituzionale",
  },
  {
    id: 2,
    name: "Pro Loco Cesarò",
    description: "Associazione per la promozione del territorio e delle tradizioni locali di Cesarò.",
    website: "prolocoCesaro.it",
    category: "Associazioni",
  },
  {
    id: 3,
    name: "Ristorante Il Focolare",
    description: "Cucina tradizionale nebroidea con prodotti tipici locali e stagionali.",
    website: "ristoranteilfocolare.com",
    category: "Ristorazione",
  },
  {
    id: 4,
    name: "Agriturismo Monte Soro",
    description: "Ospitalità autentica ai piedi del Monte Soro, con vista mozzafiato sui Nebrodi.",
    website: "agriturismoMontesoro.it",
    category: "Ospitalità",
  },
  {
    id: 5,
    name: "Guide Naturalistiche Nebrodi",
    description: "Escursioni guidate, trekking e attività outdoor alla scoperta dei Monti Nebrodi.",
    website: "guidenebrodi.com",
    category: "Turismo",
  },
  {
    id: 6,
    name: "Consorzio Suino Nero",
    description: "Consorzio di tutela e valorizzazione del Suino Nero dei Nebrodi DOP.",
    website: "suinonero-nebrodi.it",
    category: "Produttori",
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              I Nostri Partners
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaboriamo con le migliori realtà del territorio per promuovere 
              e valorizzare i Monti Nebrodi e le sue tradizioni.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <Card key={partner.id} className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                        {partner.category}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full justify-between group">
                    <span>{partner.website}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-8 bg-accent rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Vuoi diventare partner?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Se rappresenti un'attività, un'associazione o un ente che opera nel territorio 
              dei Nebrodi, contattaci per collaborare insieme.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contattaci
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Partners;