// Récupère les avis Google Places et les écrit dans public/reviews.json
// Appelé une fois par jour par la GitHub Action .github/workflows/update-reviews.yml
// Nécessite la variable d'environnement GOOGLE_PLACES_API_KEY (jamais commitée)

import fs from "fs";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = "ChIJ1-nnRsCQlU8R20suJP8O9V4";

if (!API_KEY) {
  console.error("Variable d'environnement GOOGLE_PLACES_API_KEY manquante");
  process.exit(1);
}

const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=fr`;

const res = await fetch(url, {
  headers: {
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": "reviews,rating,userRatingCount",
  },
});

if (!res.ok) {
  const body = await res.text();
  console.error(`Erreur API Google Places: HTTP ${res.status}`);
  console.error(body);
  process.exit(1);
}

const data = await res.json();

const output = {
  fetchedAt: new Date().toISOString(),
  rating: data.rating ?? null,
  userRatingCount: data.userRatingCount ?? null,
  reviews: data.reviews ?? [],
};

fs.mkdirSync("public", { recursive: true });
fs.writeFileSync("public/reviews.json", JSON.stringify(output, null, 2));

console.log(`OK — ${output.reviews.length} avis enregistrés dans public/reviews.json`);
