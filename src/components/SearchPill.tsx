import { useState } from "react";
import { Search } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
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
  const [dialogOpen, setDialogOpen] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState<SearchFilters>({
    location: "",
    date: undefined,
    category: "",
  });

  const hasAppliedFilters = Boolean(
    appliedFilters.location || appliedFilters.date || appliedFilters.category
  );

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
    setDialogOpen(false);
  };


  // Render the full search form
  const renderSearchForm = () => (
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
            <span className="text-xs font-semibold text-foreground">A partire dal</span>
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

      {/* Search Button */}
      <button
        className="mx-2 my-2 sm:m-2 w-[calc(100%-1rem)] sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center gap-2 transition-colors flex-shrink-0 bg-primary hover:bg-primary/90"
        onClick={handleSearch}
        aria-label="Search"
      >
        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
        <span className="sm:hidden text-primary-foreground font-semibold">Cerca</span>
      </button>
    </div>
  );


  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Applied Filters Display */}
      {hasAppliedFilters && (
        <div className="flex flex-wrap items-center gap-2 text-sm text-foreground">
          <span>I prossimi eventi da vivere</span>
          {appliedFilters.location && (
            <>
              <span>a</span>
              <div className="inline-flex items-center gap-1 bg-primary/20 hover:bg-primary/30 rounded-full px-3 py-1 transition-colors">
                <span className="font-medium">{appliedFilters.location}</span>
              </div>
            </>
          )}
          {appliedFilters.date && (
            <>
              <span>il</span>
              <div className="inline-flex items-center gap-1 bg-primary/20 hover:bg-primary/30 rounded-full px-3 py-1 transition-colors">
                <span className="font-medium">{appliedFilters.date.toLocaleDateString("it-IT")}</span>
              </div>
            </>
          )}
          {appliedFilters.category && (
            <>
              <span>di tipo</span>
              <div className="inline-flex items-center gap-1 bg-primary/20 hover:bg-primary/30 rounded-full px-3 py-1 transition-colors">
                <span className="font-medium">{appliedFilters.category}</span>
              </div>
            </>
          )}
        </div>
      )}

      {/* Mobile: Compact Search Button */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <button className="md:hidden w-full bg-white rounded-full shadow-lg px-4 py-3 flex items-center gap-3 hover:shadow-xl transition-shadow">
            <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <span className="text-sm text-gray-500 flex-1 text-left">
              Cerca eventi, date o luoghi...
            </span>
          </button>
        </DialogTrigger>
        <DialogPortal>
          {/* Custom glassmorphic overlay with reduced opacity and backdrop blur */}
          <DialogOverlay className="bg-black/40 backdrop-blur-sm" />
          {/* Custom glassmorphic content */}
          <DialogPrimitive.Content
            className={cn(
              "fixed left-[50%] top-[50%] z-50 max-w-md w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] bg-white/10 backdrop-blur-xl border-0 shadow-2xl p-0 rounded-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
            )}
          >
            <div className="p-4">
              {renderSearchForm()}
            </div>
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>

      {/* Desktop: Full Search Form */}
      <div className="hidden md:block">
        {renderSearchForm()}
      </div>
    </div>
  );
};
