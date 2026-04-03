import spaghettisNerano from "@/assets/recipes/spaghettis-nerano.jpg";
import bowlCrevettes from "@/assets/recipes/bowl-crevettes-teriyaki.jpg";
import tatinTomates from "@/assets/recipes/tatin-tomates-cerises.jpg";
import croqueMonsieur from "@/assets/recipes/croque-monsieur.jpg";
import gnocchiBrocolis from "@/assets/recipes/gnocchi-brocolis-jambon.jpg";
import gaspachoRoules from "@/assets/recipes/gaspacho-roules-genovesi.jpg";
import saucissesLentilles from "@/assets/recipes/saucisses-lentilles.jpg";
import chakchouka from "@/assets/recipes/chakchouka-feta-pois-chiches.jpg";
import auberginesFarcies from "@/assets/recipes/aubergines-farcies.jpg";
import carbonara from "@/assets/recipes/pasta-carbonara.jpg";
import quichePoireaux from "@/assets/recipes/quiche-poireaux-chevre-lardons.jpg";
import dahlCoco from "@/assets/recipes/dahl-coco-epinards.jpg";
import hachisParmentier from "@/assets/recipes/hachis-parmentier.jpg";
import quicheSaumon from "@/assets/recipes/quiche-saumon-epinards.jpg";
import gaspachoPoivre from "@/assets/recipes/gaspacho-petits-pois-menthe.jpg";

export type Season = "Printemps" | "Été" | "Automne" | "Hiver";
export type Category = "Quiche / Tarte" | "Végan" | "Végétarien" | "Poisson" | "Viande";

export interface Recipe {
  name: string;
  categories: Category[];
  seasons: Season[];
  portions: string;
  image: string;
  color: string;
}

export const allSeasons: Season[] = ["Printemps", "Été", "Automne", "Hiver"];
export const allCategories: Category[] = ["Quiche / Tarte", "Végan", "Végétarien", "Poisson", "Viande"];

export const recipes: Recipe[] = [
  {
    name: "Spaghettis alla Nerano",
    categories: ["Végétarien"],
    seasons: ["Été"],
    portions: "4",
    image: spaghettisNerano,
    color: "bg-primary",
  },
  {
    name: "Bowl Crevettes Teriyaki",
    categories: ["Poisson"],
    seasons: ["Été"],
    portions: "4",
    image: bowlCrevettes,
    color: "bg-accent",
  },
  {
    name: "Tatin de Tomates Cerises",
    categories: ["Végétarien", "Quiche / Tarte"],
    seasons: ["Été"],
    portions: "4",
    image: tatinTomates,
    color: "bg-primary",
  },
  {
    name: "Croque-Monsieur",
    categories: ["Viande", "Végétarien"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: croqueMonsieur,
    color: "bg-accent",
  },
  {
    name: "Gnocchi sauce Brocolis & Jambon",
    categories: ["Viande", "Végétarien"],
    seasons: ["Été", "Automne"],
    portions: "4",
    image: gnocchiBrocolis,
    color: "bg-primary",
  },
  {
    name: "Gaspacho et Roulés Genovesi",
    categories: ["Végétarien", "Viande"],
    seasons: ["Été"],
    portions: "4",
    image: gaspachoRoules,
    color: "bg-accent",
  },
  {
    name: "Saucisses aux Lentilles",
    categories: ["Viande"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: saucissesLentilles,
    color: "bg-primary",
  },
  {
    name: "Chakchouka Feta & Pois Chiches",
    categories: ["Viande", "Végétarien"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: chakchouka,
    color: "bg-accent",
  },
  {
    name: "Aubergines Farcies",
    categories: ["Viande", "Végétarien"],
    seasons: ["Été"],
    portions: "4",
    image: auberginesFarcies,
    color: "bg-primary",
  },
  {
    name: "Pasta alla Carbonara",
    categories: ["Viande"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: carbonara,
    color: "bg-accent",
  },
  {
    name: "Quiche aux Poireaux, Chèvre et Lardons",
    categories: ["Quiche / Tarte", "Végétarien", "Viande"],
    seasons: ["Hiver"],
    portions: "4",
    image: quichePoireaux,
    color: "bg-primary",
  },
  {
    name: "Dahl Coco Épinards",
    categories: ["Végan", "Végétarien"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: dahlCoco,
    color: "bg-accent",
  },
  {
    name: "Hachis Parmentier",
    categories: ["Viande"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: hachisParmentier,
    color: "bg-primary",
  },
  {
    name: "Quiche au Saumon et aux Épinards",
    categories: ["Poisson", "Quiche / Tarte"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: quicheSaumon,
    color: "bg-accent",
  },
  {
    name: "Gaspacho de Petits Pois à la Menthe",
    categories: ["Végétarien", "Végan"],
    seasons: ["Printemps", "Été"],
    portions: "4",
    image: gaspachoPoivre,
    color: "bg-primary",
  },
];