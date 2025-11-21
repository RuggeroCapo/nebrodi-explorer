import { Header } from "@/components/Header";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sagraImage from "@/assets/sagra-suino.jpg";
import argimuscoImage from "@/assets/argimusco.jpg";
import jazzImage from "@/assets/jazz-festival.jpg";

const news = [
  {
    id: 1,
    title: "Nuovo sentiero inaugurato al Lago Biviere",
    excerpt: "Un percorso naturalistico di 5km permette ora di esplorare completamente il perimetro del lago, con punti panoramici mozzafiato.",
    date: "15 Maggio 2024",
    category: "Territorio",
    image: argimuscoImage,
    featured: true,
  },
  {
    id: 2,
    title: "Sagra del Suino Nero: record di presenze",
    excerpt: "Oltre 5000 visitatori hanno partecipato all'edizione 2023 della sagra più amata dei Nebrodi, degustando prodotti tipici e specialità locali.",
    date: "12 Maggio 2024",
    category: "Eventi",
    image: sagraImage,
  },
  {
    id: 3,
    title: "Jazz Festival conferma le date estive",
    excerpt: "Annunciato il programma del festival jazz che animerà Capo d'Orlando per tre serate di musica di qualità.",
    date: "8 Maggio 2024",
    category: "Musica",
    image: jazzImage,
  },
  {
    id: 4,
    title: "Nasce il Consorzio della Provola dei Nebrodi",
    excerpt: "Produttori locali si uniscono per tutelare e promuovere il famoso formaggio tipico della zona.",
    date: "3 Maggio 2024",
    category: "Enogastronomia",
    image: sagraImage,
  },
  {
    id: 5,
    title: "Scoperta archeologica all'Argimusco",
    excerpt: "Nuovi ritrovamenti confermano l'importanza storica del sito megalitico siciliano.",
    date: "28 Aprile 2024",
    category: "Cultura",
    image: argimuscoImage,
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Newspaper className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              News e Aggiornamenti
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resta aggiornato su eventi, novità e iniziative che animano 
              il territorio dei Monti Nebrodi.
            </p>
          </div>

          {/* Featured Article */}
          {news[0].featured && (
            <Card className="mb-12 overflow-hidden hover:shadow-lg transition-shadow bg-card border-border">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto relative overflow-hidden">
                  <img
                    src={news[0].image}
                    alt={news[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-4 w-fit">
                    In Evidenza
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {news[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {news[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{news[0].date}</span>
                    </div>
                    <Button variant="ghost" className="group">
                      Leggi di più
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.slice(1).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-border group cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
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

export default News;