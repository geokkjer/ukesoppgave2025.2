import type { Model } from "./types";

export const initialState: Model = {
  app: {
    currentPage: "products",
  },
  products: [
    {
      id: 1,
      name: "Trådløse Hodetelefoner",
      price: 99.99,
      description:
        "Høykvalitets trådløse hodetelefoner med støydemping og 30 timer batteritid.",
      image: "🎧",
      category: "Elektronikk",
    },
    {
      id: 2,
      name: "Smartklokke",
      price: 199.99,
      description:
        "Funksjonsrik smartklokke med treningssporing, pulsmåler og GPS.",
      image: "⌚",
      category: "Elektronikk",
    },
    {
      id: 3,
      name: "Kaffetrakter",
      price: 79.99,
      description:
        "Programmerbar kaffetrakter med termokanne og automatisk bryggtimer.",
      image: "☕",
      category: "Hjem",
    },
    {
      id: 4,
      name: "Ryggsekk",
      price: 49.99,
      description:
        "Slitesterke laptop-ryggsekk med flere rom og vannavstøtende materiale.",
      image: "🎒",
      category: "Livsstil",
    },
    {
      id: 5,
      name: "Skrivebordslampe",
      price: 39.99,
      description:
        "LED skrivebordslampe med justerbar lysstyrke og USB-ladeport.",
      image: "💡",
      category: "Hjem",
    },
    {
      id: 6,
      name: "Trådløs Mus",
      price: 29.99,
      description:
        "Ergonomisk trådløs mus med presis sporing og lang batteritid.",
      image: "🖱️",
      category: "Elektronikk",
    },
    {
      id: 7,
      name: "Bluetooth-høyttaler",
      price: 59.99,
      description: "Kompakt høyttaler med kraftig lyd og vanntett design.",
      image: "🔊",
      category: "Elektronikk",
    },
    {
      id: 8,
      name: "Powerbank",
      price: 24.99,
      description: "10.000 mAh powerbank med hurtiglading.",
      image: "🔋",
      category: "Elektronikk",
    },
    {
      id: 9,
      name: "Mekanisk Tastatur",
      price: 89.99,
      description:
        "RGB-belysning og taktile brytere for bedre skriveopplevelse.",
      image: "⌨️",
      category: "Elektronikk",
    },
    {
      id: 10,
      name: "Vannflaske i stål",
      price: 119.99,
      description: "Holder drikken kald eller varm i opptil 12 timer.",
      image: "🥤",
      category: "Livsstil",
    },
    {
      id: 11,
      name: "Treningsmatte",
      price: 29.99,
      description: "Skli-sikker yogamatte med god demping.",
      image: "🧘",
      category: "Livsstil",
    },
    {
      id: 12,
      name: "Kokkekniv",
      price: 734,
      description: "Skarp og balansert kniv i rustfritt stål.",
      image: "🔪",
      category: "Hjem",
    },
    {
      id: 13,
      name: "Ladekabel USB‑C",
      price: 59,
      description: "Robust kabel med hurtigladestøtte.",
      image: "🔌",
      category: "Elektronikk",
    },
    {
      id: 14,
      name: "Nettbrett",
      price: 5299,
      description: '10" skjerm, 64 GB lagring og lang batteritid.',
      image: "📱",
      category: "Elektronikk",
    },
    {
      id: 15,
      name: "Digitalkamera",
      price: 1399,
      description: "Kompakt kamera med 4K-video og optisk zoom.",
      image: "📷",
      category: "Elektronikk",
    },
    {
      id: 16,
      name: "Notatbok",
      price: 70,
      description: "Hardcover notatbok med 200 sider.",
      image: "📓",
      category: "Livsstil",
    },
  ],
  cart: {
    items: [],
    total: 0
  },
};

