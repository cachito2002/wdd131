import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random()*num);
}

function randomEntry(list) {
    const listlength = list.length;
    const randomNumber = random(listlength);
    return list[randomNumber]
}

console.log(randomEntry(recipes));

function recipeTemplate(recipe) {
    return `
    <section>
            <div class="recipe">
                <img src="images/apple-crisp.jpg" alt="picture of food">
                    <div class="labels">
                        <button>desert</button>
                        <h2>${recipe.name}</h2>
                        <p>This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.</p>
                        
                        <span
                            class="rating"
                            role="img"
                            aria-label="Rating: 4 out of 5 stars"
                        >
                            <span aria-hidden="true" class="icon-star">⭐</span>
                            <span aria-hidden="true" class="icon-star">⭐</span>
                            <span aria-hidden="true" class="icon-star">⭐</span>
                            <span aria-hidden="true" class="icon-star-empty">⭐</span>
                            <span aria-hidden="true" class="icon-star-empty">☆</span>
                        </span>
                    </div>   
            </div>
        </section>`







}