import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const API_KEY = "AIzaSyCun_7lFqFg00AWXQnh329vPHk-0elNw2o";
const PLACE_ID = "ChIJ1-nnRsD-KUgRW0suJP_lVT4";

type GoogleReview = {
  name?: string;
  rating: number;
  text?: { text: string };
  originalText?: { text: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
};

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=fr`,
      {
        headers: {
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "reviews",
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setReviews(data.reviews ?? []);
      })
      .catch((err) => {
        console.error("Erreur Google Places:", err);
        setError("Impossible de charger les avis pour le moment.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="temoignages" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">
            Témoignages
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Ce que disent mes clients
          </h2>
        </div>

        {loading && (
          <p className="text-center font-body text-muted-foreground">
            Chargement des avis…
          </p>
        )}

        {error && (
          <p className="text-center font-body text-destructive">{error}</p>
        )}

        {!loading && !error && reviews.length === 0 && (
          <p className="text-center font-body text-muted-foreground">
            Aucun avis pour le moment.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => {
            const text = review.text?.text ?? review.originalText?.text ?? "";
            const author = review.authorAttribution?.displayName ?? "Client Google";
            const photo = review.authorAttribution?.photoUri;
            return (
              <article
                key={review.name ?? idx}
                className="bg-background border border-border rounded-lg p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {photo && (
                    <img
                      src={photo}
                      alt={author}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1">
                    <p className="font-body font-semibold text-foreground text-sm">
                      {author}
                    </p>
                    {review.relativePublishTimeDescription && (
                      <p className="font-body text-xs text-muted-foreground">
                        {review.relativePublishTimeDescription}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3" aria-label={`Note ${review.rating} sur 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(review.rating)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <p className="font-body text-sm text-foreground/80 leading-relaxed line-clamp-6">
                  {text}
                </p>
              </article>
            );
          })}
        </div>

        {!loading && !error && reviews.length > 0 && (
          <p className="text-center mt-10 font-body text-xs text-muted-foreground">
            Avis publiés sur Google
          </p>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
