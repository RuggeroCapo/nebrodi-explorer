import { MapPin } from "lucide-react";

export const MapView = () => {
  return (
    <div className="sticky top-24 h-[calc(100vh-8rem)] bg-accent rounded-lg overflow-hidden border border-border">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-foreground">Mappa Interattiva</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              La mappa mostrerà la posizione degli eventi nella regione dei Nebrodi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};