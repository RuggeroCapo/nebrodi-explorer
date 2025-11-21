import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, Menu, MapPin, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const municipalities = [
  "Cesarò", "San Fratello", "Caronia", "Capizzi", "Troina", 
  "Mistretta", "Nicosia", "Longi", "Alcara li Fusi", "Capo d'Orlando"
];

const categories = [
  "Sagre", "Trekking", "Arte", "Musica", "Teatro", 
  "Enogastronomia", "Artigianato", "Storia"
];

export const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden md:block">Nebrodi Tour</span>
          </Link>

          {/* Search Pill - Desktop */}
          <div className="hidden lg:flex items-center bg-card border-2 border-border rounded-full shadow-md hover:shadow-lg transition-shadow max-w-3xl flex-1 mx-8">
            {/* Location */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex-1 flex flex-col items-start px-6 py-3 hover:bg-accent rounded-l-full transition-colors">
                  <span className="text-xs font-semibold text-foreground">Dove</span>
                  <span className="text-sm text-muted-foreground">
                    {selectedLocation || "Cerca destinazioni"}
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-0 bg-popover">
                <div className="max-h-64 overflow-y-auto">
                  {municipalities.map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedLocation(city)}
                      className="w-full text-left px-4 py-2 hover:bg-accent transition-colors text-popover-foreground"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <div className="w-px h-8 bg-border" />

            {/* Date */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex-1 flex flex-col items-start px-6 py-3 hover:bg-accent transition-colors">
                  <span className="text-xs font-semibold text-foreground">Quando</span>
                  <span className="text-sm text-muted-foreground">
                    {selectedDate ? selectedDate.toLocaleDateString("it-IT") : "Aggiungi date"}
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-popover" align="center">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            <div className="w-px h-8 bg-border" />

            {/* Category */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex-1 flex flex-col items-start px-6 py-3 hover:bg-accent transition-colors">
                  <span className="text-xs font-semibold text-foreground">Esperienze</span>
                  <span className="text-sm text-muted-foreground">
                    {selectedCategory || "Sagre, Trekking, Arte..."}
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-0 bg-popover">
                <div className="max-h-64 overflow-y-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className="w-full text-left px-4 py-2 hover:bg-accent transition-colors text-popover-foreground"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Search Button */}
            <button className="m-2 w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-colors">
              <Search className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden flex-1 mx-4">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-card border border-border rounded-full shadow-sm">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Cerca</span>
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Globe className="w-5 h-5" />
            </Button>
            
            <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-card">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link to="/calendario" className="text-lg font-medium hover:text-primary transition-colors">
                    Calendario Feste
                  </Link>
                  <Link to="/puntate" className="text-lg font-medium hover:text-primary transition-colors">
                    Puntate
                  </Link>
                  <Link to="/partners" className="text-lg font-medium hover:text-primary transition-colors">
                    Partners
                  </Link>
                  <Link to="/news" className="text-lg font-medium hover:text-primary transition-colors">
                    News
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};