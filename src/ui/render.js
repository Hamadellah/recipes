// src/ui/render.js
import { getBadgeColor } from "../services/calorieService.js";

export function renderRecipes(recipes) {
  const grid = document.getElementById("recipe-grid");
  grid.innerHTML = "";

  recipes.forEach((recipe) => {
    const badgeClass = getBadgeColor(recipe.caloriesPerServing); //

    // زِدنا class "btn-see" و data-id باش نعرفو آينا وصفة تكليركات
    const cardHTML = `
            <article class="recipe-card" data-id="${recipe.id}">
                <div class="card-image-container">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <span class="calorie-tag ${badgeClass}">⚡ ${recipe.caloriesPerServing} kcal</span>
                </div>
                <div class="card-content">
                    <h3>${recipe.name}</h3>
                    <div class="card-footer">
                        <span class="rating">⭐ ${recipe.rating}</span>
                    </div>
                    <button class="btn-see" data-id="${recipe.id}">See More</button>
                </div>
            </article>
        `;
    grid.innerHTML += cardHTML;
  });
}

export function renderRecipeDetail(recipe) {
  const grid = document.getElementById("recipe-grid");
  grid.innerHTML = ""; // كنخويو الـ grid باش نبينو غير هاد الوصفة

  const detailHTML = `
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
                        ${recipe.ingredients.map((ing) => `<li>✅ ${ing}</li>`).join("")}
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
    `;
  grid.innerHTML = detailHTML;
}
