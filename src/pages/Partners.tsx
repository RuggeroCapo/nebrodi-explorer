import { Header } from "@/components/Header";

const partners = [
  {
    name: "RTP",
    logo: "https://www.nebroditour.it/wp-content/uploads/elementor/thumbs/RTP2-r2b6yqov0atma3ml4r5yh98iubqb703z8fqbiryel8.png",
    url: "https://rtp.gazzettadelsud.it/",
  },
  {
    name: "TGS",
    logo: "https://www.nebroditour.it/wp-content/uploads/elementor/thumbs/Logo-TGS-r2b6fg24pqepy9nkswwnsmivuku26oic8xmhvakcbg.png",
    url: "https://tgs.gds.it/",
  },
  {
    name: "Gazzetta del Sud",
    logo: "https://www.nebroditour.it/wp-content/uploads/elementor/thumbs/Gazzetta3-r2b7pz2j0i3one2j40xu7vuaf7i57b80n85r2dksbg.png",
    url: "https://gazzettadelsud.it/",
  },
  {
    name: "BrunoBike",
    logo: "https://www.nebroditour.it/wp-content/uploads/elementor/thumbs/BIKE--r2b7ppo545qtfag6mwvkiy7ohcsh2c6p9xmw9lyq1o.png",
    url: "https://www.facebook.com/p/SSD-BrunoBike-100076401246649/",
  },
  {
    name: "Gruppo Bruno",
    logo: "https://www.nebroditour.it/wp-content/uploads/2025/03/gruppo-bruno.png",
    url: "https://www.gruppobruno.it/",
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 pt-24 sm:pt-28 pb-12">
        <h1 className="text-3xl font-bold mb-8">Partners</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 border border-gray-300 hover:border-gray-400 transition-colors"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto max-h-24 object-contain"
              />
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Partners;