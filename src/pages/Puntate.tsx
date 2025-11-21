import { Header } from "@/components/Header";
import { Play, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


const episodes = [
  {
    id: 1,
    title: "Città di Naso",
    description: "Un piccolo borgo, a strapiombo sul mare, che trasuda di storia e cultura. Uno straordinario percorso naturalistico che porta alla \"Grotta del diavolo\" ma anche la sentita fede nei confronti del santo patrono, San Cono. La sua storia, i suoi miracoli e la cripta con la grotta dove il monaco è stato rinvenuto senza vita.",
    duration: "30:00",
    season: 1,
    episode: 1,
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Capo d'Orlando",
    description: "Visitiamo insieme una delle mete turistiche più rinomate della Sicilia. Un mare fantastico, un paesaggio mozzafiato e grande tradizione eno gastronomica e dolciaria. Tra porto e Villa Piccolo un viaggio meraviglioso che strizza l'occhio anche al passato.",
    duration: "30:00",
    season: 1,
    episode: 2,
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "Tortorici",
    description: "Tra storia e cultura, gli antichi mestieri del centro oricense, con particolare attenzione agli importanti musei dedicati alla fotografia, alla raccolta di testi del 500 e all'antropologia. Storici e amministratori raccontano Tortorici e il suo incredibile patrimonio artistico.",
    duration: "30:00",
    season: 1,
    episode: 3,
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    title: "S. Salvatore di Fitalia",
    description: "Arte, cultura, tradizione ed eccellenze enogastronomiche raccontate attraverso la descrizione del museo diffuso all'aperto e quello dedicato alla tradizione religiosa siciliana. Panorami mozzafiato tra natura e sport, con la \"Rocca di Pietra Giuda\" e le mountain bike in giro per il territorio.",
    duration: "30:00",
    season: 1,
    episode: 4,
    image: "https://placehold.co/600x400",
  },
];

const Puntate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Le Puntate
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guarda le nostre puntate dedicate ai tesori nascosti dei Monti Nebrodi.
              Storie, tradizioni e paesaggi mozzafiato.
            </p>
          </div>

          {/* Episodes Grid */}
          <div className="space-y-6">
            {episodes.map((episode) => (
              <Card key={episode.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-border">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-80 aspect-video md:aspect-auto relative overflow-hidden group">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center group-hover:bg-secondary/50 transition-colors">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="bg-accent text-accent-foreground">
                            Stagione {episode.season}, Ep. {episode.episode}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {episode.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {episode.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Puntate;