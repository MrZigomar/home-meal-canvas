import spaghettisNerano from "@/assets/recipes/spaghettis-nerano.jpg";
import bowlCrevettes from "@/assets/recipes/bowl-crevettes-teriyaki.jpg";
import tatinTomates from "@/assets/recipes/tatin-tomates-cerises.jpg";
import croqueMonsieur from "@/assets/recipes/croque-monsieur.jpg";
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
import pastaPatate from "@/assets/recipes/pasta-patate.jpg"
import cannelloniRicotta from "@/assets/recipes/cannelloni-ricotta.jpg"
import polentaSaucisses from "@/assets/recipes/polenta-saucisse.jpg"
import auberginesParmigiana from "@/assets/recipes/parmigiana-aubergine.jpg"
import quicheLorraine from "@/assets/recipes/quiche-lorraine.jpg"
import galetteAsperges from "@/assets/recipes/galette-asperges.jpg"

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
    name: "Gaspacho et Roulés Genovesi",
    categories: ["Végétarien", "Viande"],
    seasons: ["Été"],
    portions: "4",
    image: gaspachoRoules,
    color: "bg-primary",
  },
  {
    name: "Saucisses aux Lentilles",
    categories: ["Viande"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: saucissesLentilles,
    color: "bg-accent",
  },
  {
    name: "Chakchouka Feta & Pois Chiches",
    categories: ["Végétarien", "Viande"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: chakchouka,
    color: "bg-primary",
  },
  {
    name: "Aubergines Farcies",
    categories: ["Viande", "Végétarien"],
    seasons: ["Été"],
    portions: "4",
    image: auberginesFarcies,
    color: "bg-accent",
  },
  {
    name: "Pasta alla Carbonara",
    categories: ["Viande"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: carbonara,
    color: "bg-primary",
  },
  {
    name: "Quiche aux Poireaux, Chèvre et Lardons",
    categories: ["Quiche / Tarte", "Végétarien", "Viande"],
    seasons: ["Hiver"],
    portions: "4",
    image: quichePoireaux,
    color: "bg-accent",
  },
  {
    name: "Dahl Coco Épinards",
    categories: ["Végan", "Végétarien"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: dahlCoco,
    color: "bg-primary",
  },
  {
    name: "Hachis Parmentier",
    categories: ["Viande"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: hachisParmentier,
    color: "bg-accent",
  },
  {
    name: "Quiche au Saumon et aux Épinards",
    categories: ["Poisson", "Quiche / Tarte"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: quicheSaumon,
    color: "bg-primary",
  },
  {
    name: "Gaspacho de Petits Pois à la Menthe",
    categories: ["Végétarien", "Végan"],
    seasons: ["Printemps", "Été"],
    portions: "4",
    image: gaspachoPoivre,
    color: "bg-accent",
  },
  {
    name: "Pasta e Patate",
    categories: ["Viande", "Végétarien"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: pastaPatate,
    color: "bg-primary",
  },
  {
    name: "Cannelloni Ricotta et Épinards",
    categories: ["Végétarien"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: cannelloniRicotta,
    color: "bg-accent",
  },
  {
    name: "Polenta à la Sauce Tomate et Saucisses",
    categories: ["Viande"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: polentaSaucisses,
    color: "bg-primary",
  },
  {
    name: "Aubergines alla Parmigiana",
    categories: ["Végétarien"],
    seasons: ["Été"],
    portions: "4",
    image: auberginesParmigiana,
    color: "bg-accent",
  },
  {
    name: "Quiche Lorraine",
    categories: ["Quiche / Tarte", "Viande"],
    seasons: ["Printemps", "Été", "Automne", "Hiver"],
    portions: "4",
    image: quicheLorraine,
    color: "bg-primary",
  },
  {
    name: "Galette aux Asperges et à la Ricotta",
    categories: ["Quiche / Tarte", "Végétarien"],
    seasons: ["Printemps"],
    portions: "4",
    image: galetteAsperges,
    color: "bg-accent",
  },
];
