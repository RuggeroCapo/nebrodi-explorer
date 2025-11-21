import { Header } from "@/components/Header";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const newsData = [
    {
        id: 2419,
        title: "19/10 – Alcara Li Fusi",
        date: "19 Novembre, 2025",
        categories: ["Alcara Li Fusi", "Eventi", "Ottobre 2025"],
        excerpt: "Domenica 19 Ottobre, presso il Salone San Giovanni di Alcara Li Fusi, si è svolta la...",
    },
    {
        id: 2416,
        title: "15/10 – Galati M.",
        date: "19 Novembre, 2025",
        categories: ["Eventi", "Ottobre 2025"],
        excerpt: "Galati Mamertino ha illuminato le sue notti con un evento inedito e suggestivo: la \"Notte...",
    },
    {
        id: 2414,
        title: "25/10 – S.Salvatore di F.",
        date: "19 Novembre, 2025",
        categories: ["Eventi", "Ottobre 2025", "San Salvatore di Fitalia"],
        excerpt: "San Salvatore di Fitalia ha celebrato nel weekend la prima edizione di \"Fitalia in Fiore\"...",
    },
    {
        id: 2404,
        title: "30/10 – Mirto",
        date: "19 Novembre, 2025",
        categories: ["Eventi", "Mirto", "Ottobre 2025"],
        excerpt: "Si è svolta Venerdì' 7 Novembre, presso la Sala delle Capriate del Palazzo Cupane di Mirto, la decima tappa dell'iniziativa culturale \"I...",
    },
    {
        id: 2396,
        title: "19/10 – S. Agata Militello",
        date: "19 Novembre, 2025",
        categories: ["Eventi", "Ottobre 2025", "Sant'Agata Militello"],
        excerpt: "Domenica 19 ottobre alle ore 17:30, il Castello Gallego di Sant'Agata Militello ospiterà la presentazione del romanzo...",
    },
    {
        id: 2357,
        title: "23/11 – Capo d'Orlando",
        date: "17 Novembre, 2025",
        categories: ["Capo d'Orlando", "Eventi", "Novembre 2025"],
        excerpt: "Domenica 23 novembre, alle ore 17, la splendida cornice di Villa Piccolo a Capo d'Orlando...",
    },
    {
        id: 2335,
        title: "13/10 – Naso",
        date: "8 Novembre, 2025",
        categories: ["Eventi", "Naso", "Ottobre 2025"],
        excerpt: "Lunedì 13 Ottobre (ore 10-13, Book Shop del Teatro Vittorio Emanuele) ci sarà un incontro...",
    },
    {
        id: 2330,
        title: "09/11 – Ficarra",
        date: "8 Novembre, 2025",
        categories: ["Eventi", "Ficarra", "Novembre 2025"],
        excerpt: "Si terrà Domenica 9 Novembre alle ore 16:30, presso la storica Casa della Memoria Giuseppe Tomasi di Lampedusa di Ficarra...",
    },
    {
        id: 2326,
        title: "12/08 – Acquedolci",
        date: "8 Novembre, 2025",
        categories: ["Acquedolci", "Agosto 2025", "Eventi"],
        excerpt: "L'evento viene organizzato dal Comune di Acquedolci, con il patrocinio della Regione Siciliana, e la collaborazione dell'Associazione Mediterraneo e...",
    },
];

const NewsDetail = () => {
    const { id } = useParams();
    const article = newsData.find((item) => item.id === Number(id));

    if (!article) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <main className="container mx-auto px-4 pt-24 sm:pt-28 pb-8 max-w-4xl">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
                        <Link to="/news" className="text-primary hover:underline">
                            ← Back to News
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
                    to="/news"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to News
                </Link>

                {/* Article Header */}
                <div className="mb-8 border-b pb-6">
                    <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                    <div className="text-sm text-muted-foreground mb-2">
                        {article.date}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        {article.categories.join(", ")}
                    </div>
                </div>

                {/* Article Content - Lorem Ipsum */}
                <div className="prose prose-slate max-w-none">
                    <p className="text-lg mb-6">{article.excerpt}</p>

                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>

                    <p className="mb-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Dettagli dell'Evento</h2>

                    <p className="mb-4">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                    </p>

                    <p className="mb-4">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum quia dolor sit amet, consectetur, adipisci velit.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Informazioni Pratiche</h2>

                    <p className="mb-4">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                        dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia
                        animi, id est laborum et dolorum fuga.
                    </p>

                    <p className="mb-4">
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                        tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod maxime placeat facere possimus, omnis voluptas
                        assumenda est, omnis dolor repellendus.
                    </p>

                    <p className="mb-4">
                        Temporibus autem quibusdam et aut officiis debitis aut rerum
                        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
                        delectus, ut aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default NewsDetail;
