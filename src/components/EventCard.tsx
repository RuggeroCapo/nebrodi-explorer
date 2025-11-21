import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  image: string;
  title: string;
  location: string;
  date: string;
  category: string;
  featured?: boolean;
}

export const EventCard = ({ 
  image, 
  title, 
  location, 
  date, 
  category, 
  featured = false 
}: EventCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300 bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            In evidenza
          </Badge>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg text-foreground line-clamp-2 flex-1">
            {title}
          </h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span>{date}</span>
          </div>
        </div>

        <Badge variant="secondary" className="bg-accent text-accent-foreground">
          {category}
        </Badge>
      </div>
    </Card>
  );
};