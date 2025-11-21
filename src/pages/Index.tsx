import { useState } from "react";
import { Header } from "@/components/Header";
import { EventCard } from "@/components/EventCard";
import { MapView } from "@/components/MapView";
import { SearchPill } from "@/components/SearchPill";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";
import sagraImage from "@/assets/sagra-suino.jpg";
import argimuscoImage from "@/assets/argimusco.jpg";
import jazzImage from "@/assets/jazz-festival.jpg";
import heroImage from "@/assets/nebrodi-hero.jpg";

const events = [
  {
    id: 1,
    image: sagraImage,
    title: "Sagra del Suino Nero dei Nebrodi",
    location: "Cesarò, Messina",
    date: "15 Ottobre 2024",
    category: "Sagre",
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
    image: jazzImage,
    title: "Jazz Festival Costa Tirrenica",
    location: "Capo d'Orlando",
    date: "20 Luglio 2024",
    category: "Musica",
  },
  {
    id: 4,
    image: sagraImage,
    title: "Festa della Provola dei Nebrodi",
    location: "San Fratello",
    date: "5 Settembre 2024",
    category: "Enogastronomia",
  },
  {
    id: 5,
    image: argimuscoImage,
    title: "Escursione al Lago Biviere",
    location: "Cesarò",
    date: "Every Weekend",
    category: "Trekking",
  },
  {
    id: 6,
    image: jazzImage,
    title: "Festival dell'Arte Contemporanea",
    location: "Mistretta",
    date: "1-3 Giugno 2024",
    category: "Arte",
  },
];

const Index = () => {
  const [showMobileMap, setShowMobileMap] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src={heroImage}
          alt="Nebrodi Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/95" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div className="container mx-auto max-w-6xl text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-card mb-6 drop-shadow-lg" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.3)' }}>
              Scopri i Monti Nebrodi
            </h1>
            <p className="text-base md:text-lg text-card/90 max-w-2xl mx-auto drop-shadow-md">
              Eventi, sagre, trekking e cultura nel cuore verde della Sicilia
            </p>
          </div>
        </div>
        
        {/* Search Pill positioned at bottom of hero */}
        <div className="absolute bottom-8 left-0 right-0">
          <SearchPill />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Events Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Esperienze da vivere
              </h2>
              <p className="text-muted-foreground">
                {events.length} eventi disponibili
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>

          {/* Desktop Map */}
          <div className="hidden xl:block w-[40%]">
            <MapView />
          </div>
        </div>
      </main>

      {/* Mobile Map FAB */}
      <Button
        className="fixed bottom-6 left-1/2 -translate-x-1/2 xl:hidden rounded-full shadow-lg px-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"
        onClick={() => setShowMobileMap(!showMobileMap)}
      >
        <Map className="w-4 h-4 mr-2" />
        Mappa
      </Button>
    </div>
  );
};

export default Index;