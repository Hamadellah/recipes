const API = 'https://dummyjson.com/recipes';
export async function getAllRecipes (){
    try{
        const response = await fetch(API);
        if(!response.ok)throw new Error('Erreur réseau');
        const data = await response.json();
        return data.recipes;
    }catch (error){
        console.error("Erreur lors du fetch :", error);
        return [];
        
    }
}