"use client";

import Image from "next/image";

export default function Home() {
 

  return (
    
    <main className="flex flex-col items-center text-center px-5">

<header className="fixed top-0 w-full backdrop-blur border-b border-gray-800 z-50">
  <nav className="max-w-6xl mx-auto flex flex-wrap justify-between items-center p-4 gap-4">
    <span className="font-bold text-blue-400">
      Tobias Larsson
    </span>

    <div className="flex gap-6 text-gray-300">
      <a href="#projects">Projekt</a>
      <a href="#about">Om mig</a>
      <a href="#contact">Kontakt</a>
    </div>
  </nav>
</header>

      {/* Hero */}
      <div className="max-w-4xl w-full">
      <section className="min-h-screen flex flex-col justify-center items-center text-center relative">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/5 blur-[180px]" />
  </div>

  <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
    Portfolio
  </p>

  <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white">
    Tobias Larsson
  </h1>

  <p className="mt-6 text-xl text-gray-300 max-w-2xl leading-relaxed">
    Systemutvecklare inom Java & JavaScript med fokus på fullstackutveckling,
    moderna webbapplikationer och AI-integrerade lösningar.
  </p>

  <div className="flex gap-3 flex-wrap justify-center mt-8">
    {["React", "Next.js", "TypeScript", "Java", "Spring Boot", "MongoDB", "Azure"].map((tech) => (
      <span
        key={tech}
        className="px-4 py-2 rounded-full border border-blue-500/20 bg-[#161b22] text-blue-300 text-sm"
      >
        {tech}
      </span>
    ))}
  </div>

  <div className="flex gap-4 mt-10 flex-wrap justify-center">
    <a
      href="#projects"
      className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all"
    >
      Se projekt
    </a>

    <a
      href="https://github.com/Tobias-hubs"
      target="_blank"
      className="px-6 py-3 border border-gray-700 text-gray-300 rounded-xl hover:border-blue-500 hover:text-white transition-all"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/tobias-larsson-52b5531ba"
      target="_blank"
      className="px-6 py-3 border border-gray-700 text-gray-300 rounded-xl hover:border-blue-500 hover:text-white transition-all"
    >
      LinkedIn
    </a>
  </div>

 
</section>
     </div>

      {/* Projekt */}
      <section id="projects" className="max-w-4xl w-full py-16">
        <h2 className="text-3xl font-semibold text-blue-400 mb-8 border-b border-gray-700 pb-2">
          🚀 Projekt
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 justify-items-center">
          <ProjectCard
            title="Azure document assistant / Internal document assistant"
            src="/Lejon vison Azure document assistant.png"
            description="TypeScript, React, Next.js, Microsoft Azure, OpenAI"
            link="https://github.com/Tobias-hubs/azure-document-assistant/"
            

          />
          <ProjectCard
            title="Wordle-klon"
            src="/Skärmbild 2025-10-28 111747.png"
            description="React, Node.js, TypeScript, MongoDB"
            link="https://wordle-game-git-main-tobias-larssons-projects.vercel.app/"
            size="small"
          />
          <ProjectCard
            title="Kino-webbplats som grupparbete"
            src="/Skärmbild 2025-10-28 114806.png"
            description="Node.js REST API & CMS-integration"
            link="https://kino-project-nextjs.vercel.app/"
            size="large"
          />
          <ProjectCard
            title="Dungeon Crawler CLI"
            src="/Skärmbild 2025-10-28 124839.png"
            description="Java"
            link="https://github.com/Tobias-hubs/dungeon-crawler"
          />
           <ProjectCard
            title="Hacker Escape Room"
            src="/Skärmbild 2025-10-28 123713.png"
            description="JavaScript, SCSS"
            link="https://tobias-hubs.github.io/ESC-Hacker-Escape-Rooms-Tobias/"
          />
           <ProjectCard
            title="Alla Repositories"
            description="JavaScript, TypeScript, Java, Python, CSS, HTML, SCSS"
            link="https://github.com/Tobias-hubs?tab=repositories"
          />
           
        </div>
      </section>

      {/* Om mig */}
      <section id="about" className="max-w-3xl py-16">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6 border-b border-gray-700 pb-2">
          👨‍💻 Om mig
        </h2>
         <p className="text-gray-400 leading-relaxed mb-4">
    Jag är systemutvecklare med fokus på Java och JavaScript och bygger
    fullstackapplikationer med moderna ramverk som React, Next.js och Spring Boot.
  </p>

  <p className="text-gray-400 leading-relaxed mb-4">
    Jag har erfarenhet av att utveckla REST API:er, databashantering i både MongoDB och SQL
    samt integrationer med externa tjänster och molnplattformar som Azure.
  </p>

  <p className="text-gray-400 leading-relaxed mb-4">
    Jag har precis avslutat min utbildning till systemutvecklare (2026) på Lernia Yrkeshögskola
    och har under utbildningen byggt flera projekt inom webbapplikationer, backend-system och AI-integrationer.
  </p>

  <p className="text-gray-400 leading-relaxed">
    Jag trivs bäst när jag får arbeta med hela kedjan — från idé och arkitektur till färdig produkt
    som är redo att användas i verkligheten.
  </p>
        <a
  href="/Tobias Larsson.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
>
  📄 Visa CV
</a>

      </section>

      {/* Kontakt */}
      <section id="contact" className="py-16 w-full bg-[#161b22]">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">
          📬 Kontakt
        </h2>
        <p className="text-gray-400 mb-4">
          Vill du samarbeta eller se mer av mina projekt?
        </p>
        <a
          href="mailto:larsson_tobias@outlook.com"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Skicka e-post
        </a>
      </section>

      <footer className="text-center text-gray-600 py-6 text-sm border-t border-gray-800 w-full">
       Tobias Larsson — Systemutvecklare inom Java & JavaScript
      </footer>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  link,
  src,
  size = "small", 
}: {
  title: string;
  description: string;
  link: string;
  src?: string;
  size?: "small" | "large";
}) {
  const sizeClasses = 
  size === "large" 
  ? "w-full max-w-[400px] h-[250px]" 
    : "w-full max-w-[400px] h-[260px]";
  return (
    <div className="w-full bg-[#161b22] p-5 rounded-xl shadow hover:shadow-blue-500/20 transition text-left">
     <div className="flex flex-col sm:flex-row gap-6">
      <h3 className="text-xl font-bold text-blue-300 mb-4">{title}</h3>
      </div>
        {src && (
        <div className={`w-full ${sizeClasses} mb-5 relative`}>
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            className="rounded object-contain"
          />
        </div>
      )}
      <p className="text-gray-400 text-sm mb-6">{description}</p>
      <a href={link} className="text-blue-400 hover:underline">
        🔗 Visa projekt
      </a>
    </div>
  );
}
