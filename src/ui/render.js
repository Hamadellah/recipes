import { getBadgeColor } from '../services/calorieService.js';
 

export function renderRecipes(recipes) {
    const grid = document.getElementById('recipe-grid');
    grid.innerHTML = "";

    recipes.forEach(recipe => {
        const badgeClass = getBadgeColor(recipe.caloriesPerServing);

        const cardHTML = `
        
            <article class="recipe-card" data-id="${recipe.id}">
                <div class="card-image-container">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <button class="btn-favorite-icon">🤍</button>
                    <span class="calorie-tag ${badgeClass}">⚡ ${recipe.caloriesPerServing} kcal</span>
                </div>
                <div class="card-content">
                    <h3>${recipe.name}</h3>
                    <div class="card-footer">
                        <span class="rating">⭐ ${recipe.rating} <small>(${recipe.reviewCount || 0})</small></span>
                    </div>
                </div>
            </article>
        `;
        grid.innerHTML += cardHTML;
    });
}