"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Tobias Larsson/";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center text-center px-5">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center">
        {/* <h1 className="text-5xl font-bold text-blue-400 mb-3">&lt;Tobias Larsson/&gt;</h1> */}
        <h1 className="text-5xl font-bold text-blue-400 mb-3">
          &lt;{text}&gt;<span className="animate-pulse">_</span>
        </h1>
        <p className="text-lg text-gray-400">
          Systemutvecklare • Java • JavaScript
        </p>
        <a
          href="#projects"
          className="mt-8 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Se mina projekt
        </a>
      </section>

      {/* Projekt */}
      <section id="projects" className="max-w-4xl w-full py-16">
        <h2 className="text-3xl font-semibold text-blue-400 mb-8 border-b border-gray-700 pb-2">
          🚀 Projekt
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Wordle-klon"
            description="React, Node.js, TypeScript, MongoDB"
            link="https://wordle-game-git-main-tobias-larssons-projects.vercel.app/"
          />
          <ProjectCard
            title="Kino-webbplats som grupparbete"
            description="Node.js REST API & CMS-integration"
            link="https://kino-project-nextjs.vercel.app/"
          />
          <ProjectCard
            title="Dungeon Crawler"
            description="Java"
            link="https://github.com/Tobias-hubs/dungeon-crawler"
          />
           <ProjectCard
            title="Hacker Escape Room"
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
        <p className="text-gray-400 leading-relaxed">
          Jag heter Tobias Larsson och är systemutvecklare med fokus på Java och JavaScript. Jag bygger allt från frontend i React/TypeScript till backend i Node.js och Spring Boot, med databaser i SQL och MONGODB. Jag gillar att förstå helheten och skapa lösningar som är både skalbara och lätta att vidareutveckla.
        </p>
        <a
  href="/CV-Tobias-Larsson.pdf"
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
          href="mailto:tobbe-larsson@hotmail.com"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Skicka e-post
        </a>
      </section>

      <footer className="text-center text-gray-600 py-6 text-sm border-t border-gray-800 w-full">
        © 2025 Tobias | Byggd med ❤️ och Next.js
      </footer>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-[#161b22] p-5 rounded shadow hover:shadow-blue-500/20 transition text-left">
      <h3 className="text-xl font-bold text-blue-300 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      <a href={link} className="text-blue-400 hover:underline">
        🔗 Visa projekt
      </a>
    </div>
  );
}
