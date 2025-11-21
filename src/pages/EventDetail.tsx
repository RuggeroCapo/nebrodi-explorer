import { Header } from "@/components/Header";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/events";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-24 sm:pt-28 pb-8 max-w-4xl">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Evento non trovato</h1>
            <Link to="/" className="text-primary hover:underline">
              ← Torna agli eventi
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 pt-24 sm:pt-28 pb-8 max-w-4xl">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna agli eventi
        </Link>

        {/* Event Image */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Event Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {event.category}
          </Badge>
          <h1 className="text-4xl font-serif font-bold mb-4">{event.title}</h1>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <span className="text-lg">{event.location}</span>
            <span>{event.date}</span>
          </div>
        </div>

        {/* Event Description */}
        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed">{event.description}</p>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;

