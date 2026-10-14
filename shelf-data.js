/* =========================================================
   YOUR SHELF. Edit this file to change what shows up on the
   "Get to Know Me" page. Everything below is SAMPLE content.

   Each item can have:
     title   (required)
     by      author / director / artist (optional)
     take    your personal note, shown when the cover is flipped
     link    a URL to learn more (optional)

   And ONE way of getting cover art (all optional):
     cover   your own image, e.g. "images/shelf/my-book.jpg"
             or any full image URL.
     isbn    (books) pulls the cover automatically from the free
             Open Library API, no account needed. Use the 10 or
             13-digit ISBN with no dashes.
     autoArt (music) set to true and the album cover is fetched
             automatically from Apple's free iTunes Search API,
             using the title + artist.

   No cover? A colored title card is shown instead, which still
   looks good.

   Movies: no key-free poster API exists, so use cover: "images/..."
   with a poster you have. (If you ever get a free TMDB API key, I can
   wire it in.)
   ========================================================= */

const SHELVES = [
  {
    id: "growth",
    label: "📈 Growth reads",
    intro: "Books for personal & professional development.",
    items: [
      {
        title: "The Art of Gathering: How we Meet and Why It Matters",
        by: "Priya Parker",
        isbn: "978-1594634932",
        take: "Whether it's for a tense meeting at work, or party planning with family, I have found this book invaluable to how I conduct gatherings.",
        link: "https://www.priyaparker.com/the-art-of-gathering"
      },
      {
        title: "Unreasonable Hospitality: The Remarkable Power of Giving People More Than They Expect",
        by: "Will Guidara",
        isbn: "0593418573",
        take: "This book inspires me to lead better even while I am still growing. I am enamored with the culture and values of hospitality, and seek to bring them into my personal and professional life",
         link: "https://www.unreasonablehospitality.com/books"
      },
      {
        title: "Burnout: The Secret to Unlocking the Stress Cycle",
        by: "Emily Nagoski,  Amelia Nagoski",
        isbn: "978-1984818324",
        take: "This book saved my life, and I recommend it to anyone who is working hard and needs help staying afloat",
        link: "https://www.burnoutbook.net/"
      }
    ]
  },
  {
    id: "fun",
    label: "🏖️ Just for fun",
    intro: "Books I'm reading for the joy of it.",
    items: [
      {
        title: "Fun Book One",
        by: "Author Name",
        isbn: "",
        take: "SAMPLE: Why you love it, in a sentence or two."
      },
      {
        title: "Fun Book Two",
        by: "Author Name",
        take: "SAMPLE: Add as many as you like."
      }
    ]
  },
  {
    id: "movies",
    label: "🎬 Movies I like",
    intro: "Movies I'll happily watch again.",
    items: [
      {
        title: "Favorite Movie",
        by: "Director · Year",
        cover: "",   // e.g. "images/shelf/favorite-movie.jpg"
        take: "SAMPLE: What makes it a favorite?"
      },
      {
        title: "Another Favorite",
        by: "Director · Year",
        take: "SAMPLE: Sports movie? Feel-good classic? Tell us."
      }
    ]
  },
  {
    id: "music",
    label: "🎤 Music I like",
    intro: "On repeat in the car, the shower, and the stage.",
    items: [
      {
        title: "Rumours",
        by: "Fleetwood Mac",
        autoArt: true,
        take: "SAMPLE: Album art above was fetched automatically. Swap in your own picks."
      },
      {
        title: "Your Favorite Album",
        by: "Artist Name",
        autoArt: true,
        take: "SAMPLE: Add your own, and sing-along songs count!"
      }
    ]
  }
];
