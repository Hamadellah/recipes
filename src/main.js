import { getAllRecipes } from "./api/recipeProvider.js";
import { getBadgeColor, calculateTotalCalories } from './services/calorieService.js';
import { showLoader, hideLoader }  from "./ui/loader.js";
import { renderRecipes } from './ui/render.js';

async function init() {
    try {
        showLoader();
        const recipes = await getAllRecipes();
        renderRecipes(recipes); 
        hideLoader();
    } catch (error) {
        console.error("probleme in init: ", error);
    } finally {
        
    }
   
}   
init();