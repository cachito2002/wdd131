import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random()*num);
}

function randomEntry(list) {
    const listlength = list.length;
    const randomNumber = random(listlength);
    return list[randomNumber]
}




function tagsTemplate(tags) {
    // loop through the tags list and transform the strings to HTML
    let html = '<ul class="tags">';
    
    for (let i = 0; i < tags.length; i++) {
        html += `<li class="tags">${tags[i]}</li>`;
    }
    
    html += '</ul>';
	return html;
}

function ratingTemplate(rating) {
    // begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
	html += `</span>`
	// return the html string
	return html
}

function filter(query) {
    const lowerCaseQuery = query.toLowerCase();

    const filtered = recipes.filter(recipe => {
        
        return (
            recipe.name.toLowerCase().includes(lowerCaseQuery) ||
            recipe.description.toLowerCase().includes(lowerCaseQuery) ||
            recipe.tags.join('').toLowerCase().includes(lowerCaseQuery) ||
            (recipe.ingredients && recipe.ingredients.some(ingredient = ingredient.toLowerCase().includes(lowerCaseQuery)))
        );
    });

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name.toLowerCase()));
    return sorted;

}

function searchHandler(e) {

    e.preventDefault();

    const searchInput = document.querySelector('.search-container input');
    const query = searchInput.value;

    if (query) {
    const filteredRecipes = filter(query);

    renderRecipes(filteredRecipes);
    }
}

function setupSearchListener() {
    const searchButton = document.getElementById('js-search-button');
    const searchInput = document.querySelector('.search-container input');
    
    searchButton.addEventListener('click', searchHandler);

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            searchHandler(event);
        }
    });
}

function recipeTemplate(recipe) {
    return `
    <section>
            <div class="recipe">
                <img src="${recipe.image}" alt="${recipe.name}" />
               <div class="labels"> 
                   ${tagsTemplate(recipe.tags)}
                    <h2>${recipe.name}</h2>
                    <p>${recipe.description}</p>
                    ${ratingTemplate(recipe.rating)}
                </div>   
            </div>
        </section>
        `;
};
function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const recipeContainer = document.getElementById('js-recipe-container');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipeHTML = recipeList.map(recipeTemplate).join('');
	// Set the HTML strings as the innerHTML of our output element.
    recipeContainer.innerHTML = recipeHTML;
}

function init() {
    setupSearchListener();
  // get a random recipe
  const recipe = randomEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
document.addEventListener('DOMContentLoaded', function() {
    init();

});

