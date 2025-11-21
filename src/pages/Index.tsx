import { useState } from "react";
import { Header } from "@/components/Header";
import { EventCard } from "@/components/EventCard";
import { MapView } from "@/components/MapView";
import { SearchPill, SearchFilters } from "@/components/SearchPill";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";
import heroImage from "@/assets/nebrodi-hero.png";

const events = [
  {
    id: 1,
    image: "https://placehold.co/600x400",
    title: "Sagra del Suino Nero dei Nebrodi",
    location: "Cesarò, Messina",
    date: "15 Ottobre 2024",
    category: "Sagre",
    featured: true,
  },

  {
    id: 3,
    image: "https://placehold.co/600x400",
    title: "Jazz Festival Costa Tirrenica",
    location: "Capo d'Orlando",
    date: "20 Luglio 2024",
    category: "Musica",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400",
    title: "Festa della Provola dei Nebrodi",
    location: "San Fratello",
    date: "5 Settembre 2024",
    category: "Enogastronomia",
  },

  {
    id: 6,
    image: "https://placehold.co/600x400",
    title: "Festival dell'Arte Contemporanea",
    location: "Mistretta",
    date: "1-3 Giugno 2024",
    category: "Arte",
  },
  {
    id: 7,
    image: "https://placehold.co/600x400",
    title: "Fiera del Libro di Catania",
    location: "Catania",
    date: "12 Ottobre 2024",
    category: "Cultura",
  },
  {
    id: 8,
    image: "https://placehold.co/600x400",
    title: "Maratona di Palermo",
    location: "Palermo",
    date: "3 Novembre 2024",
    category: "Sport",
  },
  {
    id: 9,
    image: "https://placehold.co/600x400",
    title: "Sagra del Pistacchio di Bronte",
    location: "Bronte",
    date: "20 Agosto 2024",
    category: "Enogastronomia",
  },
];

const Index = () => {
  const [showMobileMap, setShowMobileMap] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleSearch = (filters: SearchFilters) => {
    const { location, category } = filters;

    const filtered = events.filter((event) => {
      const matchLocation = location
        ? event.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchCategory = category
        ? event.category.toLowerCase() === category.toLowerCase()
        : true;

      return matchLocation && matchCategory;
    });

    setFilteredEvents(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img
          src={heroImage}
          alt="Nebrodi Mountains"
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div className="container mx-auto max-w-6xl text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Scopri i Monti Nebrodi
            </h1>
            <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              Eventi, sagre e cultura nel cuore verde della Sicilia
            </p>
          </div>
        </div>

        {/* Search Pill positioned at bottom of hero */}
        <div className="absolute -bottom-10 left-0 right-0 z-10">
          <SearchPill onSearch={handleSearch} />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Events Grid */}
          <div className="w-full lg:w-[60%]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Esperienze da vivere
              </h2>
              <p className="text-muted-foreground">
                {filteredEvents.length} eventi disponibili
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </div>

          {/* Desktop Map */}
          <div className="hidden lg:block lg:w-[40%]">
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