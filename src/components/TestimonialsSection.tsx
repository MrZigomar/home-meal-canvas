import { useEffect, useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const API_KEY = "AIzaSyCun_7lFqFg00AWXQnh329vPHk-0elNw2o";
const PLACE_ID = "ChIJ1-nnRsCQlU8R20suJP8O9V4";
const INITIAL_COUNT = 6;

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

type PlaceData = {
  reviews?: GoogleReview[];
  rating?: number;
  userRatingCount?: number;
};

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [globalRating, setGlobalRating] = useState<number | null>(null);
  const [ratingCount, setRatingCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=fr`,
      {
        headers: {
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<PlaceData>;
      })
      .then((data) => {
        setReviews(data.reviews ?? []);
        setGlobalRating(data.rating ?? null);
        setRatingCount(data.userRatingCount ?? null);
      })
      .catch((err) => {
        console.error("Erreur Google Places:", err);
        setError("Impossible de charger les avis pour le moment.");
      })
      .finally(() => setLoading(false));
  }, []);

  const displayed = showAll ? reviews : reviews.slice(0, INITIAL_COUNT);
  const hasMore = reviews.length > INITIAL_COUNT && !showAll;

  return (
    <section id="temoignages" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">
            Témoignages
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Ce que disent mes clients
          </h2>
        </div>

        {globalRating !== null && (
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-3">
              <span className="font-display text-5xl font-semibold text-foreground">
                {globalRating.toFixed(1)}
              </span>
              <div className="flex flex-col">
                <div className="flex gap-0.5" aria-label={`Note ${globalRating} sur 5`}>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const fill = Math.max(0, Math.min(1, globalRating - i));
                    return (
                      <div key={i} className="relative w-5 h-5">
                        <Star className="absolute inset-0 w-5 h-5 text-muted-foreground/30" />
                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{ width: `${fill * 100}%` }}
                        >
                          <Star className="w-5 h-5 fill-accent text-accent" />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {ratingCount !== null && (
                  <span className="font-body text-xs text-muted-foreground mt-1">
                    {ratingCount} avis Google
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((review, idx) => {
            const text = review.text?.text ?? review.originalText?.text ?? "";
            const author = review.authorAttribution?.displayName ?? "Client Google";
            const photo = review.authorAttribution?.photoUri;
            return (
              <article
                key={review.name ?? idx}
                className="bg-background border border-border rounded-lg p-6 flex flex-col shadow-sm hover:shadow-lg transition-shadow"
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
                <p className="font-body text-sm text-foreground/80 leading-relaxed">
                  {text}
                </p>
              </article>
            );
          })}
        </div>

        {hasMore && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="font-body gap-2"
            >
              Voir plus <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        )}

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
