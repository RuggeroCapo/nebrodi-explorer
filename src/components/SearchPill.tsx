import { useState } from "react";
import { Search, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const municipalities = [
  "Cesarò", "San Fratello", "Caronia", "Capizzi", "Troina",
  "Mistretta", "Nicosia", "Longi", "Alcara li Fusi", "Capo d'Orlando"
];

const categories = [
  "Sagre", "Arte", "Musica", "Teatro",
  "Enogastronomia", "Artigianato", "Storia"
];

export interface SearchFilters {
  location: string;
  date: Date | undefined;
  category: string;
}

interface SearchPillProps {
  onSearch?: (filters: SearchFilters) => void;
}

export const SearchPill = ({ onSearch }: SearchPillProps) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCategory, setSelectedCategory] = useState("");

  const [appliedFilters, setAppliedFilters] = useState<SearchFilters>({
    location: "",
    date: undefined,
    category: "",
  });

  const isDirty =
    selectedLocation !== appliedFilters.location ||
    selectedDate?.getTime() !== appliedFilters.date?.getTime() ||
    selectedCategory !== appliedFilters.category;

  const hasAppliedFilters = Boolean(
    appliedFilters.location || appliedFilters.date || appliedFilters.category
  );

  const showClear = !isDirty && hasAppliedFilters;

  const handleSearch = () => {
    const newFilters = {
      location: selectedLocation,
      date: selectedDate,
      category: selectedCategory,
    };
    setAppliedFilters(newFilters);
    if (onSearch) {
      onSearch(newFilters);
    }
  };

  const handleClear = () => {
    const emptyFilters = {
      location: "",
      date: undefined,
      category: "",
    };
    setSelectedLocation("");
    setSelectedDate(undefined);
    setSelectedCategory("");
    setAppliedFilters(emptyFilters);
    if (onSearch) {
      onSearch(emptyFilters);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white/25 backdrop-blur-2xl border border-white/30 rounded-2xl sm:rounded-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden" style={{ backdropFilter: "blur(20px)" }}>
        {/* Location */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex-1 flex flex-col items-start px-4 sm:px-6 py-3 sm:py-4 hover:bg-white/20 rounded-t-2xl sm:rounded-t-none sm:rounded-l-full transition-colors min-w-0">
              <span className="text-xs font-semibold text-foreground">Dove</span>
              <span className="text-xs sm:text-sm text-muted-foreground truncate w-full">
                {selectedLocation || "Cerca nei comuni"}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0 bg-popover z-50">
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

        <div className="hidden sm:block w-px h-8 bg-white/20" />
        <div className="sm:hidden w-full h-px bg-white/20" />

        {/* Date */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex-1 flex flex-col items-start px-4 sm:px-6 py-3 sm:py-4 hover:bg-white/20 transition-colors min-w-0">
              <span className="text-xs font-semibold text-foreground">Quando</span>
              <span className="text-xs sm:text-sm text-muted-foreground truncate w-full">
                {selectedDate ? selectedDate.toLocaleDateString("it-IT") : "Aggiungi date"}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-popover z-50" align="center">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>

        <div className="hidden sm:block w-px h-8 bg-white/20" />
        <div className="sm:hidden w-full h-px bg-white/20" />

        {/* Category */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex-1 flex flex-col items-start px-4 sm:px-6 py-3 sm:py-4 hover:bg-white/20 transition-colors min-w-0">
              <span className="text-xs font-semibold text-foreground">Eventi</span>
              <span className="text-xs sm:text-sm text-muted-foreground truncate w-full">
                {selectedCategory || "Sagre, Arte, Musica..."}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0 bg-popover z-50">
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

        {/* Search / Clear Button */}
        <button
          className={`m-2 sm:m-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${showClear
              ? "bg-red-500 hover:bg-red-600"
              : "bg-primary hover:bg-primary/90"
            }`}
          onClick={showClear ? handleClear : handleSearch}
          aria-label={showClear ? "Clear filters" : "Search"}
        >
          {showClear ? (
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          ) : (
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
          )}
        </button>
      </div>
    </div>
  );
};
