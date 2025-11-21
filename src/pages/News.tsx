import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 2419,
    title: "19/10 – Alcara Li Fusi",
    date: "19 Novembre, 2025",
    categories: ["Alcara Li Fusi", "Eventi", "Ottobre 2025"],
    excerpt: "Domenica 19 Ottobre, presso il Salone San Giovanni di Alcara Li Fusi, si è svolta la...",
    url: "/news/2419",
  },
  {
    id: 2416,
    title: "15/10 – Galati M.",
    date: "19 Novembre, 2025",
    categories: ["Eventi", "Ottobre 2025"],
    excerpt: "Galati Mamertino ha illuminato le sue notti con un evento inedito e suggestivo: la \"Notte...",
    url: "/news/2416",
  },
  {
    id: 2414,
    title: "25/10 – S.Salvatore di F.",
    date: "19 Novembre, 2025",
    categories: ["Eventi", "Ottobre 2025", "San Salvatore di Fitalia"],
    excerpt: "San Salvatore di Fitalia ha celebrato nel weekend la prima edizione di \"Fitalia in Fiore\"...",
    url: "/news/2414",
  },
  {
    id: 2404,
    title: "30/10 – Mirto",
    date: "19 Novembre, 2025",
    categories: ["Eventi", "Mirto", "Ottobre 2025"],
    excerpt: "Si è svolta Venerdì' 7 Novembre, presso la Sala delle Capriate del Palazzo Cupane di Mirto, la decima tappa dell'iniziativa culturale \"I...",
    url: "/news/2404",
  },
  {
    id: 2396,
    title: "19/10 – S. Agata Militello",
    date: "19 Novembre, 2025",
    categories: ["Eventi", "Ottobre 2025", "Sant'Agata Militello"],
    excerpt: "Domenica 19 ottobre alle ore 17:30, il Castello Gallego di Sant'Agata Militello ospiterà la presentazione del romanzo...",
    url: "/news/2396",
  },
  {
    id: 2357,
    title: "23/11 – Capo d'Orlando",
    date: "17 Novembre, 2025",
    categories: ["Capo d'Orlando", "Eventi", "Novembre 2025"],
    excerpt: "Domenica 23 novembre, alle ore 17, la splendida cornice di Villa Piccolo a Capo d'Orlando...",
    url: "/news/2357",
  },
  {
    id: 2335,
    title: "13/10 – Naso",
    date: "8 Novembre, 2025",
    categories: ["Eventi", "Naso", "Ottobre 2025"],
    excerpt: "Lunedì 13 Ottobre (ore 10-13, Book Shop del Teatro Vittorio Emanuele) ci sarà un incontro...",
    url: "/news/2335",
    image: "https://placehold.co/400x500/e2e8f0/64748b?text=Naso",
  },
  {
    id: 2330,
    title: "09/11 – Ficarra",
    date: "8 Novembre, 2025",
    categories: ["Eventi", "Ficarra", "Novembre 2025"],
    excerpt: "Si terrà Domenica 9 Novembre alle ore 16:30, presso la storica Casa della Memoria Giuseppe Tomasi di Lampedusa di Ficarra...",
    url: "/news/2330",
    image: "https://placehold.co/400x600/e2e8f0/64748b?text=Ficarra",
  },
  {
    id: 2326,
    title: "12/08 – Acquedolci",
    date: "8 Novembre, 2025",
    categories: ["Acquedolci", "Agosto 2025", "Eventi"],
    excerpt: "L'evento viene organizzato dal Comune di Acquedolci, con il patrocinio della Regione Siciliana, e la collaborazione dell'Associazione Mediterraneo e...",
    url: "/news/2326",
    image: "https://placehold.co/300x400/e2e8f0/64748b?text=Acquedolci",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Simple Header */}
        <div className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold mb-2">Nebrodi Tour News</h1>
        </div>

        {/* News List - Minimal Design */}
        <div className="space-y-6">
          {newsData.map((article) => (
            <Link key={article.id} to={article.url}>
              <div className="border-b pb-6 hover:bg-accent/5 transition-colors cursor-pointer p-4 -mx-4">
                <div className="flex gap-4">
                  {article.image && (
                    <div className="flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-24 h-24 object-cover bg-muted"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <div className="text-sm text-muted-foreground mb-2">
                      {article.date}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {article.categories.join(", ")}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {article.excerpt}
                    </p>
                    <div className="mt-2">
                      <span className="text-sm text-primary hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default News;