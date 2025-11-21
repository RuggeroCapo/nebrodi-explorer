import { Header } from "@/components/Header";
import { EventCard } from "@/components/EventCard";
import { Calendar as CalendarIcon } from "lucide-react";
import sagraImage from "@/assets/sagra-suino.jpg";
import argimuscoImage from "@/assets/argimusco.jpg";
import jazzImage from "@/assets/jazz-festival.jpg";

const upcomingEvents = [
  {
    id: 1,
    image: jazzImage,
    title: "Jazz Festival Costa Tirrenica",
    location: "Capo d'Orlando",
    date: "20 Luglio 2024",
    category: "Musica",
    featured: true,
  },
  {
    id: 2,
    image: argimuscoImage,
    title: "Tramonto sui Megaliti dell'Argimusco",
    location: "Montalbano Elicona",
    date: "10 Agosto 2024",
    category: "Trekking",
  },
  {
    id: 3,
    image: sagraImage,
    title: "Festa della Provola dei Nebrodi",
    location: "San Fratello",
    date: "5 Settembre 2024",
    category: "Enogastronomia",
  },
  {
    id: 4,
    image: sagraImage,
    title: "Sagra del Suino Nero dei Nebrodi",
    location: "Cesarò, Messina",
    date: "15 Ottobre 2024",
    category: "Sagre",
  },
];

const Calendario = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <CalendarIcon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Calendario Feste
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scopri tutti gli eventi, sagre e manifestazioni culturali nei Monti Nebrodi. 
              Non perdere le tradizioni più autentiche della Sicilia.
            </p>
          </div>

          {/* Events by Month */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                Estate 2024
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.slice(0, 2).map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                Autunno 2024
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.slice(2).map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calendario;