
import { getBadgeColor } from "../services/calorieService.js";

export function renderRecipes(recipes) {
  const grid = document.getElementById("recipe-grid");
  grid.innerHTML = "";
const grid1 = document.getElementById("recipe-grid1");
grid1.innerHTML = "";
  recipes.forEach((recipe) => {
    const badgeClass = getBadgeColor(recipe.caloriesPerServing); 

    
    const cardHTML = `
            <article class="recipe-card" data-id="${recipe.id}">
                <div class="card-image-container">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <span class="calorie-tag ${badgeClass}">⚡ ${recipe.caloriesPerServing} kcal</span>
                </div>
                <div class="card-content">
                    <h3>${recipe.name}</h3>
                    <button class="btn-see" data-id="${recipe.id}">details</button>
                </div>
            </article>
        `;
    grid.innerHTML += cardHTML;
  });
}

export function renderRecipeDetail(recipe) {
  const grid = document.getElementById("recipe-grid");
  grid.innerHTML = "";
  const grid1 = document.getElementById("recipe-grid1");
  grid1.innerHTML = "";
  const detailHTML = `
      <article class="recipe-card1" ">
        <div class="recipe-detail-view">
            <button id="btn-back" class="btn-back">⬅️ Back</button>
            <div class="detail-header">
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
            </div>
            
            <div class="detail-info">
                <div class="section">
                    <h3>Ingredients (${recipe.ingredients.length})</h3>
                    <ul>
                        ${recipe.ingredients.map((ing) => `<li> ${ing}</li>`).join("")}
                    </ul>
                </div>

                <div class="section">
                    <h3>Instructions</h3>
                    <ol>
                        ${recipe.instructions.map((step) => `<li>${step}</li>`).join("")}
                    </ol>
                </div>
            </div>
        </div>
          </article>
    `;
  grid1.innerHTML = detailHTML;
}
