const meals= document.getElementById('meals');
getRandomMeal();
async function getRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php") ;
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    console.log(randomMeal);

   addMeal(randomMeal, true);
}   
async function getMealById(id){
    const meal =await fetch("http://www.themealdb.com/api/json/v1/1/lookup.php?i="+id);
}
async function getMealsBySearch(term){
    const meals =await fetch("http://www.themealdb.com/api/json/v1/1/search.php?s="+term);
}

addMeal(mealData, random=false){
    const meal=document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML=`
    <div class="meal-header">          
    ${random?' <span class="span random">Random Recipe</span>' :''}
        <img src="${mealData.strMealThumb}" alt="${mealData.Meal}">
    </div>
        <div class="meal-body">
        <h4>${mealData.Meal}</h4>
        <button class="fav-btn active">
            <i class="fa fa-heart"></i>
        </button>
    </div>

    `;
    meals.appendChild(meal);

}