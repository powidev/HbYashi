/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Yashii",
  photo: "./img/gatito.jpg",       // Place your photo in the img/ folder
  music: "./music/mikrokosmos.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hii",
      subtitle: "¡Espero te guste...!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Es tu cumpleañooss!! y queria desearte un... :D",
    },
    {
      type: "chatbox",
      message:
        "¡¡Feliz cumpleañooss!! Te deseo un año maravilloso por delante, lleno de alegría, amor y felicidad infinita.!",
      buttonText: "Enviar",
    },
    {
      type: "ideas",
      lines: [
        "Eyy, espera... eso no es todo",
        "Aún queda más...",
        "Me di cuenta de que quería hacer algo <strong>especial</strong>.",
        "Porque...",
        "Eres una gran amiga y te aprecio mucho <span>😊</span>"
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "Cuanto más elogies y celebres tu vida, más cosas habrá en ella para celebrar.",
      author: "Oprah Winfrey",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Feliz cumpleañooss!",
      wishText: "¡Que las buenas vibras y la felicidad te acompañen siempre! ¡Feliz cumple, Yashii!",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Que la pases super en tu dia, Yashii🎂🥳✨",
      replayText: "O haz clic si quieres volver a verlo.",
    },
  ],
};
