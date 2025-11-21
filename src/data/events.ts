export interface Event {
  id: number;
  image: string;
  title: string;
  location: string;
  date: string;
  category: string;
  featured?: boolean;
  description?: string;
}

export const events: Event[] = [
  {
    id: 1,
    image: "https://placehold.co/600x400",
    title: "Sagra del Suino Nero dei Nebrodi",
    location: "Cesarò, Messina",
    date: "15 Ottobre 2024",
    category: "Sagre",
    featured: true,
    description: "Una celebrazione della tradizione culinaria dei Nebrodi con il prelibato suino nero. Un evento imperdibile per gli amanti della gastronomia siciliana, con degustazioni, stand gastronomici e intrattenimento musicale.",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400",
    title: "Jazz Festival Costa Tirrenica",
    location: "Capo d'Orlando",
    date: "20 Luglio 2024",
    category: "Musica",
    description: "Un festival di musica jazz che anima le serate estive della costa tirrenica. Artisti nazionali e internazionali si esibiscono in uno scenario unico tra mare e monti.",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400",
    title: "Festa della Provola dei Nebrodi",
    location: "San Fratello",
    date: "5 Settembre 2024",
    category: "Enogastronomia",
    description: "Celebrazione del formaggio tipico dei Nebrodi, la provola. Un evento dedicato alla tradizione casearia locale con dimostrazioni, degustazioni e vendita di prodotti tipici.",
  },
  {
    id: 6,
    image: "https://placehold.co/600x400",
    title: "Festival dell'Arte Contemporanea",
    location: "Mistretta",
    date: "1-3 Giugno 2024",
    category: "Arte",
    description: "Mostre, installazioni e performance di artisti contemporanei nel suggestivo borgo di Mistretta. Un viaggio tra arte e cultura nel cuore dei Nebrodi.",
  },
  {
    id: 7,
    image: "https://placehold.co/600x400",
    title: "Fiera del Libro di Catania",
    location: "Catania",
    date: "12 Ottobre 2024",
    category: "Cultura",
    description: "La più importante manifestazione culturale della Sicilia orientale. Incontri con autori, presentazioni di libri e laboratori per bambini e ragazzi.",
  },
  {
    id: 8,
    image: "https://placehold.co/600x400",
    title: "Maratona di Palermo",
    location: "Palermo",
    date: "3 Novembre 2024",
    category: "Sport",
    description: "Una corsa attraverso le strade del centro storico di Palermo. Percorsi per tutti: maratona, mezza maratona e 10 km. Un evento sportivo che unisce passione e turismo.",
  },
  {
    id: 9,
    image: "https://placehold.co/600x400",
    title: "Sagra del Pistacchio di Bronte",
    location: "Bronte",
    date: "20 Agosto 2024",
    category: "Enogastronomia",
    description: "La sagra più dolce dei Nebrodi. Celebrazione del pistacchio di Bronte DOP con stand gastronomici, dolci tradizionali e prodotti tipici a base di pistacchio.",
  },
];

