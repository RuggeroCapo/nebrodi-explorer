import { useState } from "react";
import { Header } from "@/components/Header";
import { EventCard } from "@/components/EventCard";
import { MapView } from "@/components/MapView";
import { SearchPill, SearchFilters } from "@/components/SearchPill";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";
import heroImage from "@/assets/nebrodi-hero.png";
import { events } from "@/data/events";

const Index = () => {
  const [showMobileMap, setShowMobileMap] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [currentFilters, setCurrentFilters] = useState<SearchFilters>({
    location: "",
    date: undefined,
    category: "",
  });

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
    setCurrentFilters(filters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[550px] md:h-[600px]">
        <img
          src={heroImage}
          alt="Nebrodi Mountains"
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-16 pb-24 sm:pb-28 md:pb-32">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-white mb-4 sm:mb-6 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight">
              Scopri i Monti Nebrodi
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] px-2">
            "Scoprire nuovi luoghi, farsi trasportare da forti emozioni e conoscere la nostra storia. Questo è Nebrodi Tour."
            </p>
          </div>
        </div>

        {/* Search Pill positioned at bottom of hero */}
        <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 left-0 right-0 z-10 px-4 sm:px-6">
          <SearchPill onSearch={handleSearch} />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Events Grid */}
          <div className="w-full lg:w-[60%]">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                {currentFilters.location
                  ? `i prossimi eventi da vivere a "${currentFilters.location}"`
                  : "i prossimi eventi da vivere"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {filteredEvents.length} eventi disponibili
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 xl:hidden rounded-full shadow-lg px-5 sm:px-6 py-2.5 sm:py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 z-40"
        onClick={() => setShowMobileMap(!showMobileMap)}
      >
        <Map className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        <span className="text-sm sm:text-base">Mappa</span>
      </Button>
    </div>
  );
};

export default Index;
