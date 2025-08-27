const translations = {
  fr: {
    title: "Mon Portfolio",
    nav: { about: "À propos", cv: "CV", games: "Portfolio" },
    about: {
      title: "À propos de moi",
      text: "Je suis designer de jeu vidéo, animé par une passion profonde pour la création et les arts sous toutes leurs formes. Mon parcours est guidé par une curiosité constante, j’adore apprendre, explorer de nouvelles idées et trouver des solutions créatives à des problèmes complexes. Pour moi, chaque projet est une occasion de fusionner technique et imagination, en transformant une simple idée en une expérience interactive unique. Ce qui me motive avant tout, c’est de donner vie à des univers capables de captiver, d’émouvoir et d’inspirer les joueurs. Mon objectif est de créer des expériences qui laissent une empreinte durable dans l’esprit de ceux qui les vivent. Touche à tout et passionné, je joue à une grande variété de jeux et je reste constamment informé des tendances et de l’actualité de l’industrie vidéoludique, ce qui nourrit mon approche créative et ma compréhension des attentes des joueurs."
    },
    cv: {
      title: "Mon CV",
      text: "Voici mon parcours professionnel, mes compétences et mes expériences clés.",
      download: "Télécharger le CV",
      file: "cv-fr.pdf",
      fallback_prefix: "Si le PDF ne s’affiche pas, vous pouvez le ",
      fallback_link: "télécharger ici"
    },
    games: {
      title: "Portfolio",
      text: "Voici une sélection de projets sur lesquels j’ai travaillé."
    },
    projects: {
      actions: { play: "Jouer", code: "Code", trailer: "Bande-annonce" },

      // Dinosport
      p1: {
        title: "Dinosport",
        desc: "Local party game où chaque joueur incarne un petit dinosaure participant à une version déjantée du handball. L’objectif est de dévorer des oiseaux pour pondre des œufs, puis de les lancer dans le but adverse afin de marquer des points. À la fin du temps imparti, l’équipe ayant accumulé le plus de points remporte la victoire. Projet réalisé avec 4 autres personnes.",
        role_label: "Rôle",
        role: "Design des mécaniques offensive et défensives, Design du système de pointage, Balancement des variables, Design sonore, Composition musicale, QA.",
        tags: ["Unity", "Design de jeu", "Design sonore", "Balancement", "QA"],
        links: { play: "", code: "", trailer: "" }
      },

      // Bolt n Punch
      p2: {
        title: "Bolt n Punch",
        desc: "Un beat’em up explosif et survolté, qui regorge de combats intenses, d’ennemis redoutables et d’attaques spectaculaires. Projet réalisé en collaboration avec les étudiants de l'UQAT.",
        role_label: "Rôle",
        role: "Composition musicale, Intégration de l'audio (Wwise).",
        tags: ["Unity", "Design sonore", "Wwise"],
        links: {
          play: "https://store.steampowered.com/app/2779390/BoltNPunch/",
          code: "",
          trailer: "https://www.youtube.com/watch?v=sN-5z7u4f18"
        }
      },

      // Polterg's Heist
      p3: {
        title: "Polterg's Heist",
        desc: "Un charmant puzzle-platformer 2D dans lequel le joueur incarne un petit fantôme malicieux, capable de posséder certains objets pour résoudre des énigmes et progresser. Sa mission est de retrouver trois objets précieux disséminés dans le décor, tout en évitant de se faire repérer par les humains qui hantent les lieux, ou plutôt qui y vivent encore. Projet réalisé avec 4 autres personnes dans le cadre du DESS en design de jeu.",
        role_label: "Rôle",
        role: "Design des mécaniques et système de jeu, Design des assets visuels, Design des puzzles, Programmation du système de shaders et du curseur de la souris, Balancement des variables, Repérage de bugs.",
        tags: ["Unity", "Design de jeu", "Design visuel", "Design de niveaux", "Balancement", "QA", "Programmation"],
        links: { play: "", code: "", trailer: "" }
      },

      // Projet non annoncé
      p4: {
        title: "Projet non annoncé (en cours)",
        desc: "Un roguelike 2D de science-fiction où chaque partie est une aventure unique à travers des environnements générés de manière procédurale.",
        role_label: "Rôle",
        role: "Design des mécaniques et système de jeu, Composition musicale et intégration de l'audio (Wwise).",
        tags: ["Design de jeu", "Design sonore", "Composition musicale"],
        links: { play: "", code: "", trailer: "" }
      }
    }
  },

  en: {
    title: "My Portfolio",
    nav: { about: "About Me", cv: "Resume", games: "Portfolio" },
    about: {
      title: "About Me",
      text: "I am a video game designer driven by a deep passion for creation and the arts in all their forms. My journey is guided by constant curiosity, I love learning, exploring new ideas, and finding creative solutions to complex problems. For me, every project is an opportunity to merge technical skills with imagination, turning a simple concept into a unique interactive experience. What motivates me above all is bringing worlds to life that can captivate, move, and inspire players. My ultimate goal is to create experiences that leave a lasting impression on those who live them. Versatile and curious, I play a wide variety of games and stay constantly up to date with industry trends and news, which fuels my creative process and deepens my understanding of player expectations."
    },
    cv: {
      title: "My Resume",
      text: "Here is my professional background, key skills, and experience.",
      download: "Download Resume",
      file: "cv-en.pdf",
      fallback_prefix: "If the PDF does not display, you can ",
      fallback_link: "download it here"
    },
    games: {
      title: "Portfolio",
      text: "A selection of projects I’ve worked on."
    },
    projects: {
      actions: { play: "Play", code: "Code", trailer: "Trailer" },

      // Dinosport
      p1: {
        title: "Dinosport",
        desc: "A local party game where each player is a tiny dinosaur in a wild handball inspired competition. The goal is to devour birds to lay eggs, then throw those eggs into the opponent’s goal to score points. When time runs out, the team with the highest score wins. Developed with a team of five.",
        role_label: "Role",
        role: "Designed offensive and defensive mechanics, designed the scoring system, balanced gameplay variables, sound design, music composition, QA.",
        tags: ["Unity", "Game Design", "Sound Design", "Balancing", "QA"],
        links: { play: "", code: "", trailer: "" }
      },

      // Bolt n Punch
      p2: {
        title: "Bolt n Punch",
        desc: "An explosive and high energy beat ’em up packed with intense combat, tough enemies, and spectacular attacks. Project created in collaboration with students from UQAT.",
        role_label: "Role",
        role: "Music composition, audio integration with Wwise.",
        tags: ["Unity", "Sound Design", "Wwise"],
        links: {
          play: "https://store.steampowered.com/app/2779390/BoltNPunch/",
          code: "",
          trailer: "https://www.youtube.com/watch?v=sN-5z7u4f18"
        }
      },

      // Polterg's Heist
      p3: {
        title: "Polterg's Heist",
        desc: "A charming 2D puzzle platformer where the player is a mischievous little ghost who can possess certain objects to solve puzzles and progress. The mission is to find three precious items hidden in the environment while avoiding detection by the humans who still live there. Developed with a team of five as part of the graduate diploma in game design.",
        role_label: "Role",
        role: "Designed core mechanics and systems, visual asset design, puzzle design, implemented the shader system and mouse cursor system, gameplay balancing, bug finding.",
        tags: ["Unity", "Game Design", "Visual Design", "Level Design", "Balancing", "QA", "Programming"],
        links: { play: "", code: "", trailer: "" }
      },

      // Unannounced
      p4: {
        title: "Unannounced project (in progress)",
        desc: "A sci fi 2D roguelike where each run is a unique adventure through procedurally generated environments.",
        role_label: "Role",
        role: "Designed core mechanics and systems, music composition and audio integration with Wwise.",
        tags: ["Game Design", "Sound Design", "Music Composition"],
        links: { play: "", code: "", trailer: "" }
      }
    }
  }
};

// Helpers
function badge(text) {
  const span = document.createElement("span");
  span.className = "bg-gray-200 px-2 py-1 rounded";
  span.textContent = text;
  return span;
}
function setText(id, text) {
  const el = document.getElementById(id);
  if (el && typeof text === "string") el.textContent = text;
}
function setButton(id, label, href) {
  const el = document.getElementById(id);
  if (!el) return;
  if (href && href.trim() !== "") {
    el.textContent = label;
    el.href = href;
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
}

// Applique tous les textes
function setLanguage(lang) {
  const t = translations[lang] || translations.fr;

  // Titre onglet
  document.title = t.title;

  // Navigation
  setText("nav-about", t.nav.about);
  setText("nav-cv", t.nav.cv);
  setText("nav-games", t.nav.games);

  // À propos
  setText("about-title", t.about.title);
  setText("about-text", t.about.text);

  // CV (textes)
  setText("cv-title", t.cv.title);
  setText("cv-text", t.cv.text);
  setText("cv-download", t.cv.download);

  // CV (fichier à charger selon la langue)
  const cvIframe = document.getElementById("cv-iframe");
  const cvDownload = document.getElementById("cv-download");
  if (cvIframe && t.cv.file) cvIframe.src = t.cv.file;
  if (cvDownload && t.cv.file) cvDownload.href = t.cv.file;

  // Texte de repli CV avec lien correct
  const cvFallback = document.getElementById("cv-fallback");
  if (cvFallback) {
    cvFallback.innerHTML = `
      ${t.cv.fallback_prefix}
      <a href="${t.cv.file}" target="_blank" class="text-blue-600 underline">
        ${t.cv.fallback_link}
      </a>.
    `;
  }

  // Portfolio (titres + intro)
  setText("games-title", t.games.title);
  setText("games-text", t.games.text);

  // Portfolio (projets)
  renderProjects(t.projects);
}

// Rendu des projets à partir des traductions
function renderProjects(p) {
  // Titres et descriptions
  setText("proj1-title", p.p1.title);
  setText("proj1-desc", p.p1.desc);
  setText("proj1-role-label", p.p1.role_label);
  setText("proj1-role", p.p1.role);

  setText("proj2-title", p.p2.title);
  setText("proj2-desc", p.p2.desc);
  setText("proj2-role-label", p.p2.role_label);
  setText("proj2-role", p.p2.role);

  setText("proj3-title", p.p3.title);
  setText("proj3-desc", p.p3.desc);
  setText("proj3-role-label", p.p3.role_label);
  setText("proj3-role", p.p3.role);

  setText("proj4-title", p.p4.title);
  setText("proj4-desc", p.p4.desc);
  setText("proj4-role-label", p.p4.role_label);
  setText("proj4-role", p.p4.role);

  // Tags (badges)
  fillTags("proj1-tags", p.p1.tags);
  fillTags("proj2-tags", p.p2.tags);
  fillTags("proj3-tags", p.p3.tags);
  fillTags("proj4-tags", p.p4.tags);

  // Boutons (affichés si un lien est fourni)
  setButton("proj1-play", p.actions.play, p.p1.links.play);
  setButton("proj1-code", p.actions.code, p.p1.links.code);
  setButton("proj1-trailer", p.actions.trailer, p.p1.links.trailer);

  setButton("proj2-play", p.actions.play, p.p2.links.play);
  setButton("proj2-code", p.actions.code, p.p2.links.code);
  setButton("proj2-trailer", p.actions.trailer, p.p2.links.trailer);

  setButton("proj3-play", p.actions.play, p.p3.links.play);
  setButton("proj3-code", p.actions.code, p.p3.links.code);
  setButton("proj3-trailer", p.actions.trailer, p.p3.links.trailer);

  setButton("proj4-play", p.actions.play, p.p4.links.play);
  setButton("proj4-code", p.actions.code, p.p4.links.code);
  setButton("proj4-trailer", p.actions.trailer, p.p4.links.trailer);
}

function fillTags(containerId, tagsArr) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = "";
  (tagsArr || []).forEach(t => box.appendChild(badge(t)));
}

// Init + persistance langue
document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("lang-switcher");
  const savedLang = localStorage.getItem("lang") || "fr";
  if (switcher) {
    switcher.value = savedLang;
    switcher.addEventListener("change", (e) => {
      const lang = e.target.value;
      localStorage.setItem("lang", lang);
      setLanguage(lang);
    });
  }
  setLanguage(savedLang);
});
