const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");
const title = document.getElementById("title");
const body = document.body;

playlist.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const src = e.target.getAttribute("data-src");
    const songTitle = e.target.textContent;
    title.textContent = songTitle;
    audio.src = src;
    audio.play().catch(err => console.log("Play xato:", err));
  }
});

audio.addEventListener("timeupdate", () => {
  const hue = Math.floor((audio.currentTime * 20) % 360);
  body.style.background = `radial-gradient(circle, hsl(${hue}, 80%, 40%), #000)`;
});
