
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface EventCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  date: string;
  category: string;
  featured?: boolean;
}

export const EventCard = ({
  id,
  image,
  title,
  location,
  date,
  category,
  featured = false
}: EventCardProps) => {
  return (
    <Link to={`/events/${id}`}>
      <Card className="group cursor-pointer overflow-hidden border-white/40 hover:border-white/60 hover:shadow-2xl transition-all duration-500 bg-white/60 backdrop-blur-xl rounded-[2rem]">
      <div className="p-3">
        <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] shadow-sm group-hover:shadow-md transition-all duration-500">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 space-y-3">
        <div className="space-y-2">
          <Badge variant="secondary" className="bg-white/50 hover:bg-white/80 text-foreground/80 backdrop-blur-sm border border-white/20 transition-colors duration-300 mb-2">
            {category}
          </Badge>

          <h3 className="font-serif text-2xl text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <div className="flex flex-col gap-1 text-sm text-muted-foreground/80 font-medium">
            <span className="flex items-center gap-1">
              {location}
            </span>
            <span className="text-muted-foreground/60">{date}</span>
          </div>
        </div>
      </div>
    </Card>
    </Link>
  );
};