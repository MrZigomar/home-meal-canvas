/**
 * =============================================
 * FICHIER DE DONNÉES DES RECETTES
 * =============================================
 * 
 * Pour modifier les recettes affichées sur le site,
 * éditez simplement ce fichier :
 * 
 * - name : nom de la recette
 * - category : catégorie (ex: "Plat principal", "Végétarien", "Entrée")
 * - time : temps de préparation
 * - portions : nombre de personnes
 * - image : importez l'image en haut du fichier puis référencez-la ici
 * - color : couleur de l'accent ("bg-primary" = vert, "bg-accent" = bordeaux)
 * 
 * Pour ajouter une recette :
 * 1. Ajoutez l'image dans src/assets/recipes/
 * 2. Importez-la en haut de ce fichier
 * 3. Ajoutez un objet dans le tableau recipes
 * =============================================
 */

import pouletRoti from "@/assets/recipes/poulet-roti.jpg";
import curryLentilles from "@/assets/recipes/curry-lentilles.jpg";
import gratinCourgettes from "@/assets/recipes/gratin-courgettes.jpg";
import boeufMijote from "@/assets/recipes/boeuf-mijote.jpg";
import saladeQuinoa from "@/assets/recipes/salade-quinoa.jpg";
import soupeButternut from "@/assets/recipes/soupe-butternut.jpg";

export interface Recipe {
  name: string;
  category: string;
  time: string;
  portions: string;
  image: string;
  color: string;
}

export const recipes: Recipe[] = [
  {
    name: "Poulet rôti aux herbes & légumes de saison",
    category: "Plat principal",
    time: "45 min",
    portions: "4",
    image: pouletRoti,
    color: "bg-primary",
  },
  {
    name: "Curry de lentilles corail & lait de coco",
    category: "Végétarien",
    time: "35 min",
    portions: "4",
    image: curryLentilles,
    color: "bg-accent",
  },
  {
    name: "Gratin de courgettes au chèvre frais",
    category: "Végétarien",
    time: "40 min",
    portions: "4",
    image: gratinCourgettes,
    color: "bg-primary",
  },
  {
    name: "Bœuf mijoté aux carottes & pommes de terre",
    category: "Plat principal",
    time: "1h30",
    portions: "6",
    image: boeufMijote,
    color: "bg-accent",
  },
  {
    name: "Salade de quinoa, avocat & saumon fumé",
    category: "Entrée",
    time: "20 min",
    portions: "4",
    image: saladeQuinoa,
    color: "bg-primary",
  },
  {
    name: "Soupe veloutée de butternut & noisettes",
    category: "Entrée",
    time: "30 min",
    portions: "4",
    image: soupeButternut,
    color: "bg-accent",
  },
];
