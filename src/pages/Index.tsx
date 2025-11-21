import { useState } from "react";
import { Header } from "@/components/Header";
import { EventCard } from "@/components/EventCard";
import { MapView } from "@/components/MapView";
import { SearchPill, SearchFilters } from "@/components/SearchPill";
import heroImage from "@/assets/nebrodi-hero.png";
import { events } from "@/data/events";
import { X } from "lucide-react";

const Index = () => {
  const [showMobileMap, setShowMobileMap] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [currentFilters, setCurrentFilters] = useState<SearchFilters>({
    location: "",
    date: undefined,
    category: "",
  });

  const handleSearch = (filters: SearchFilters) => {
    const { location, category, date } = filters;

    const filtered = events.filter((event) => {
      const matchLocation = location
        ? event.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchCategory = category
        ? event.category.toLowerCase() === category.toLowerCase()
        : true;

      // Parse event date string (format: "DD Month YYYY" or "DD-DD Month YYYY")
      let matchDate = true;
      if (date) {
        const eventDateStr = event.date;
        const monthMap: { [key: string]: number } = {
          'gennaio': 0, 'febbraio': 1, 'marzo': 2, 'aprile': 3,
          'maggio': 4, 'giugno': 5, 'luglio': 6, 'agosto': 7,
          'settembre': 8, 'ottobre': 9, 'novembre': 10, 'dicembre': 11
        };

        // Extract the first date from range (e.g., "1-3 Febbraio 2026" -> "1")
        const dateMatch = eventDateStr.match(/^(\d+)/);
        const monthMatch = eventDateStr.match(/([a-zà-ù]+)\s+(\d{4})/i);

        if (dateMatch && monthMatch) {
          const day = parseInt(dateMatch[1]);
          const month = monthMap[monthMatch[1].toLowerCase()];
          const year = parseInt(monthMatch[2]);

          const eventDate = new Date(year, month, day);
          eventDate.setHours(0, 0, 0, 0);

          const filterDate = new Date(date);
          filterDate.setHours(0, 0, 0, 0);

          // Check if event date is equal to or after the filter date
          matchDate = eventDate >= filterDate;
        }
      }

      return matchLocation && matchCategory && matchDate;
    });

    setFilteredEvents(filtered);
    setCurrentFilters(filters);
  };

  const clearFilter = (filterType: keyof SearchFilters) => {
    const newFilters = { ...currentFilters, [filterType]: filterType === 'date' ? undefined : '' };
    handleSearch(newFilters);
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-16 pb-24 sm:pb-28 md:pb-32">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-white mb-4 sm:mb-6 tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] leading-tight [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
              Scopri i Monti Nebrodi
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] px-2 mb-6 md:mb-0 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_70%)]">
            "Scoprire nuovi luoghi, farsi trasportare da forti emozioni e conoscere la nostra storia. Questo è Nebrodi Tour."
            </p>
            
            {/* Mobile Search Button - positioned below hero text */}
            <div className="md:hidden mt-6 w-full max-w-md mx-auto">
              <SearchPill onSearch={handleSearch} />
            </div>
          </div>
        </div>

        {/* Desktop Search Pill positioned at bottom of hero */}
        <div className="hidden md:block absolute -bottom-6 sm:-bottom-8 md:-bottom-10 left-0 right-0 z-10 px-4 sm:px-6">
          <SearchPill onSearch={handleSearch} />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Events Grid */}
          <div className="w-full lg:w-[60%]">
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  i prossimi eventi da vivere
                </h2>

                {currentFilters.location && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    a {currentFilters.location}
                    <button
                      onClick={() => clearFilter('location')}
                      className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                      aria-label="Clear location filter"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}

                {currentFilters.date && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    a partire dal {new Date(currentFilters.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                    <button
                      onClick={() => clearFilter('date')}
                      className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                      aria-label="Clear date filter"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}

                {currentFilters.category && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    di {currentFilters.category}
                    <button
                      onClick={() => clearFilter('category')}
                      className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                      aria-label="Clear category filter"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-muted-foreground">
                {filteredEvents.length} eventi disponibili
              </p>
            </div>

            {/* Mobile Segmented Toggle Control */}
            <div className="lg:hidden mb-6 -mx-4 px-4 py-3 bg-background">
              <div className="flex items-center justify-center p-1 bg-gray-100 rounded-full w-full max-w-xs mx-auto">
                <button
                  onClick={() => setShowMobileMap(false)}
                  className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                    !showMobileMap
                      ? "bg-white shadow-sm font-bold text-foreground"
                      : "bg-transparent text-gray-500"
                  }`}
                >
                  Elenco
                </button>
                <button
                  onClick={() => setShowMobileMap(true)}
                  className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                    showMobileMap
                      ? "bg-white shadow-sm font-bold text-foreground"
                      : "bg-transparent text-gray-500"
                  }`}
                >
                  Mappa
                </button>
              </div>
            </div>

            {/* Mobile: Show Map or List based on toggle */}
            {showMobileMap ? (
              <div className="lg:hidden h-[calc(100vh-300px)] min-h-[400px]">
                <MapView />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            )}
          </div>

          {/* Desktop Map */}
          <div className="hidden lg:block lg:w-[40%]">
            <MapView />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
