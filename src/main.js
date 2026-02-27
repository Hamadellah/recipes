import { getAllRecipes } from "./api/recipeProvider.js";
import { showLoader, hideLoader } from "./ui/loader.js";
import { renderRecipes, renderRecipeDetail } from "./ui/render.js";

async function init() {
  try {
    showLoader();
    const recipes = await getAllRecipes();
    renderRecipes(recipes);
    setupFilters(recipes);
  } catch (error) {
    console.error("probleme in init: ", error);
  } finally {
    hideLoader();
  }
}
function setupFilters(recipes) {
  const searchBar = document.getElementById("search-bar");
  const chips = document.querySelectorAll(".chip");

  searchBar.addEventListener("input", (e) => {
    const text = e.target.value.toLowerCase();
    const filtered = recipes.filter((r) => r.name.toLowerCase().includes(text));
    renderRecipes(filtered);
  });
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelector(".chip.active").classList.remove("active");
      chip.classList.add("active");
      const category = chip.textContent;
      if (category === "All") {
        renderRecipes(recipes);
      } else {
        const filtered = recipes.filter(
          (r) => r.mealType.includes(category),
        );
        renderRecipes(filtered);
      }
    });
  });
  const grid1 = document.getElementById("recipe-grid");

  grid1.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-see")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      const recipe = recipes.find((r) => r.id === id);
      renderRecipeDetail(recipe);
    }
  });
  const grid2 = document.getElementById("recipe-grid1");

  grid2.addEventListener("click", (e) => {
    if (e.target.id === "btn-back") {
        renderRecipes(recipes);
    }
  });
}
init();
