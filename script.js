const body = document.body;
const videoWrap = document.getElementById("videoWrap");
const bgVideo = document.getElementById("bgVideo");

// Arranque inmediato y en bucle (por si el autoplay del navegador lo bloquea)
function startVideo() {
  const p = bgVideo.play();
  if (p && p.catch) p.catch(() => {});
}
startVideo();
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) startVideo();
});

// El video se encoge a logo al scrollear
const hero = document.getElementById("hero");
const observer = new IntersectionObserver(
  ([entry]) => {
    const scrolled = !entry.isIntersecting;
    body.classList.toggle("scrolled", scrolled);
    if (scrolled) bgVideo.pause();
    else startVideo();
  },
  { rootMargin: "-45% 0px 0px 0px" }
);
observer.observe(hero);

// Herramientas del stack con sus logos (desde simple-icons)
const tools = [
  { name: "JavaScript", slug: "javascript", color: "f7df1e" },
  { name: "TypeScript", slug: "typescript", color: "3178c6" },
  { name: "React", slug: "react", color: "61dafb" },
  { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
  { name: "Node.js", slug: "nodedotjs", color: "5fa04e" },
  { name: "Python", slug: "python", color: "3776ab" },
  { name: "HTML5", slug: "html5", color: "e34f26" },
  { name: "CSS3", slug: "css", color: "1572b6" },
  { name: "Tailwind", slug: "tailwindcss", color: "38bdf8" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169e1" },
  { name: "Git", slug: "git", color: "f05032" },
  { name: "Docker", slug: "docker", color: "2496ed" }
];

const toolsEl = document.getElementById("tools");
toolsEl.innerHTML = tools
  .map(
    (t) => `
    <div class="tool" title="${t.name}">
      <img src="https://cdn.simpleicons.org/${t.slug}/${t.color}" alt="${t.name}" loading="lazy" />
      <span>${t.name}</span>
    </div>`
  )
  .join("");
