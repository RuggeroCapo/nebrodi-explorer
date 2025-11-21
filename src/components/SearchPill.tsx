import { useState } from "react";
import { Search } from "lucide-react";
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
  "Sagre", "Trekking", "Arte", "Musica", "Teatro", 
  "Enogastronomia", "Artigianato", "Storia"
];

export const SearchPill = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex items-center bg-card border-2 border-border rounded-full shadow-lg hover:shadow-xl transition-shadow">
        {/* Location */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex-1 flex flex-col items-start px-6 py-4 hover:bg-accent rounded-l-full transition-colors">
              <span className="text-xs font-semibold text-foreground">Dove</span>
              <span className="text-sm text-muted-foreground">
                {selectedLocation || "Cerca destinazioni"}
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

        <div className="w-px h-8 bg-border" />

        {/* Date */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex-1 flex flex-col items-start px-6 py-4 hover:bg-accent transition-colors">
              <span className="text-xs font-semibold text-foreground">Quando</span>
              <span className="text-sm text-muted-foreground">
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

        <div className="w-px h-8 bg-border" />

        {/* Category */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex-1 flex flex-col items-start px-6 py-4 hover:bg-accent transition-colors">
              <span className="text-xs font-semibold text-foreground">Esperienze</span>
              <span className="text-sm text-muted-foreground">
                {selectedCategory || "Sagre, Trekking, Arte..."}
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
        <button className="m-2 w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-colors">
          <Search className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
};
