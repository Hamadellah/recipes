export function getBadgeColor(calories){
    if(calories<400){
        return 'badge-green';
    }else if (calories >= 400 && calories <=800){
        return 'badge-orange';
    }else{
        return 'badge-red';
    }
}


export function calculateTotalCalories(favoriteRecipes) {
    return favoriteRecipes.reduce((total, recipe) => {
       
        const calories = recipe.caloriesPerServing || 0; 
        return total + calories;
    }, 0);
}